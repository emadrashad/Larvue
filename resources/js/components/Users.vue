<template>
    <div class="container">
        <section class="content-header">
            <div class="row mb-2">
              <div class="col-sm-6">
                <h3>Users Component</h3>
              </div> 
              <div class="col-sm-6">
                <div class="float-sm-right">
                    <button class="btn btn-sm btn-primary" data-toggle="modal" data-target="#addNewUser"><i class="fas fa-user-plus"></i> Create new user</button>
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
                      <th>ID</th>
                      <th>User</th>
                      <th>Date</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>183</td>
                      <td>John Doe</td>
                      <td>11-7-2014</td>
                      <td><span class="tag tag-success">Approved</span></td>
                      <td>
                        <a href='#'>
                          <i class="fas fa-edit green"></i> 
                        </a>
                        <a href='#'>
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

                <form >
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
                    <button type="button" class="btn btn-success btn-sm">Create</button>
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
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
