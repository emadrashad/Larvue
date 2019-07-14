<template>
    <div class="container">
        <section class="content-header">
            <div class="row mb-2">
              <div class="col-sm-6">
                <h3>Users Component</h3>
              </div> 
              <div class="col-sm-6">
                <div class="float-sm-right">
                    <button class="btn btn-sm btn-primary" @click="resetForm" data-toggle="modal" data-target="#addNewUser"><i class="fas fa-user-plus"></i> Create new user</button>
                </div>
              </div>
            </div>    
        </section>
        
        <div class="row">
          <div class="col-12">
            <div class="card">
              <div class="card-header">
                <h4 class="card-title">Listing Users</h4>

                <div class="card-tools">
                  <div class="input-group input-group-sm" style="width: 150px;">
                    <input type="text" name="table_search" class="form-control float-right" placeholder="Search">

                    <div class="input-group-append">
                      <button type="submit" class="btn btn-default"><i class="fas fa-search"></i></button>
                    </div>
                  </div>
                </div>
              </div>
              <!-- /.card-header -->
              <div class="card-body table-responsive p-0">
                <table class="table table-hover">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>User</th>
                      <th>Date Registered</th>
                      <th>Type</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(user,index) in users.data" :key="user.id">
                      <td>{{ index +1 }}</td>
                      <td>{{ user.name }}</td>
                      <td>{{ user.created_at | huDate}}</td>
                      <td>{{ user.type | upText }}</td>
                      
                      <td>
                        <a href='#' @click="editUser(user)">
                          <i class="fas fa-edit green"></i> 
                        </a>
                        <a href='#' @click="deleteUser(user.id)">
                          <i class="fas fa-trash red"></i>
                        </a>
                      </td>
                    </tr>
                    
                  </tbody>
                </table>
              </div>
              <!-- /.card-body -->
            </div>
            <!-- /.card -->
          </div>
        </div>

        <!-- Modal -->
        <div class="modal fade" id="addNewUser" tabindex="-1" role="dialog" aria-labelledby="addNewUserLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="addNewUserLabel">Add New User</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>

                <form @submit.prevent="createUser" >
                  <div class="modal-body">

                 
                    <div class="form-group">
                      <label>Name</label>
                      <input v-model="form.name" type="text" name="name"
                        class="form-control" :class="{ 'is-invalid': form.errors.has('name') }">
                      <has-error :form="form" field="name"></has-error>
                    </div>

                    <div class="form-group">
                      <label>Email</label>
                      <input v-model="form.email" type="text" name="email"
                        class="form-control" :class="{ 'is-invalid': form.errors.has('email') }">
                      <has-error :form="form" field="email"></has-error>
                    </div>

                    <div class="form-group">
                      <label>Password</label>
                      <input v-model="form.password" type="password" name="password"
                        class="form-control" :class="{ 'is-invalid': form.errors.has('password') }">
                      <has-error :form="form" field="password"></has-error>
                    </div>

                    <div class="form-group">
                      <label>User Type</label>
                      <select name="form.type" v-model="form.type" :class="{ 'is-invalid': form.errors.has('type') }" class="form-control">
                          <option value="" disabled="">Select User Type</option>
                          <option value="admin">Admin</option>
                          <option value="user">Standard User</option>
                          <option value="author">Author</option>
                      </select>
                      <has-error :form="form" field="type"></has-error>
                    </div>

                    <div class="form-group">
                      <label>Bio</label>
                      <textarea name="bio"  cols="30" rows="5" v-model="form.bio" class="form-control" :class=" { 'is-invalid': form.errors.has('bio') }"></textarea>
                      <has-error :form="form" field="bio"></has-error>
                      
                    </div>
                    <!-- 
                    <div class="form-group">
                      <label>Photo</label>
                      <input type="file" class="form-control" name="photo" v-model="form.photo">
                      <has-error :form="form" field="photo"></has-error>
                    </div> -->

                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-danger btn-sm" data-dismiss="modal">Close</button>
                    <button type="submit"  class="btn btn-success btn-sm">Create</button>
                  </div>
                </form>
            </div>
          </div>
        </div>

    </div>
</template>

<script>
    export default {
        data(){
            return {
                users:{},
                form : new Form({
                  
                    name:'',
                    email:'',
                    password:'',
                    type:'',
                    bio:'',
                    photo:'',
                })
            }
        },
        methods:{
            createUser(){
                 
                let self = this ; 
                self.$Progress.start(); 
                
                this.form.post('api/users').then(function(response){

                    $('#addNewUser').modal('hide');
                    Toast.fire({
                        type:'success' , 
                        title:'User has been created successfully' 
                    }); 
                    
                    self.$Progress.finish();
                   // we will create custom event to fetch new created user 
                   // self.loadUsers();
                   Fire.$emit('AfterUserCreation');
                   Fire.$on('ResetTheForm' , function(){
                     self.form.reset(); 
                   })
                    
                }).catch(function(){
                  self.$Progress.finish(); 
                });
                 
             
                              
            },
            editUser(user){
               this.form.reset();
               $('#addNewUser').modal('show') ;
               this.form.fill(user);
            },
            deleteUser(userid){
              Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
              }).then((result) => {
                if(result.value){
                   axios.delete('api/users/'+userid ).then(function(res){
                      Swal.fire(
                        'Deleted!',
                        'User has been deleted.',
                        'success'
                      );
                      // custom event to update the user listing 
                      Fire.$emit('AfterUserDeletion') ; 
                    }).catch(function(){
                      Swal.fire(
                            'Erro!',
                            'Deletion Process Error',
                            'warning'
                          )
                    })
                }
                
              });
            },
            loadUsers(){
               this.$Progress.start();
               // inside axios we can not reach the context , so we need to hack it
               let self = this ; 
               axios.get('api/users').then(function(response){
                    let data = response.data;  
                    self.users = data;
                    self.$Progress.finish();
               });
            },
            resetForm(){
              this.form.reset(); 
              // emit rest event form 
              Fire.$emit('ResetTheForm') ; 
            }
        },
        created() {
            let self = this ; 
            this.loadUsers();
            Fire.$on('AfterUserCreation' , function(){
              self.loadUsers(); 
            }); 
            Fire.$on('AfterUserDeletion', function(){
              self.loadUsers(); 
            });
        }
    }
</script>
