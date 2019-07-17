<template>
    <div class="container">
        <section class="content-header">
            <div class="row mb-2">
              <div class="col-sm-6">
                <h3>Posts Component</h3>
              </div> 
              <div class="col-sm-6">
                <div class="float-sm-right">
                    <button class="btn btn-sm btn-primary"><i class="fas fa-newspaper"></i> New post</button>
                </div>
              </div>
            </div>    
        </section>
        
        <div class="row">
          <div class="col-12">
            <div class="card">
              <div class="card-header">
                <h4 class="card-title">Listing Posts</h4>

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
                      <th>Title</th>
                      <th>Author</th>
                      <th>Date Created</th>
                      <th>Publish Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <!-- <tr v-for="(user,index) in users.data" :key="user.id">
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
                    </tr> -->
                    
                  </tbody>
                </table>
              </div>
              <!-- /.card-body -->
            </div>
            <!-- /.card -->
          </div>
        </div>
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('am mounted') ; 
        }
    }
</script>
