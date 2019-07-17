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
                    <tr v-for="(post,index) in posts.data" :key="post.id">
                      <td>{{ index +1 }}</td>
                      <td>
                        <div class="user-block">
                          <img class="img-circle img-bordered-sm" :src="post.cover_pic" alt="user image">
                          <span class="username">
                            {{ post.title }} 
                             
                          </span>
                          <!-- <span class="description">Shared publicly - 7:30 PM today</span> -->
                        </div>
                      </td>
                      <td>{{ post.user.name }}</td>
                      <td>{{ post.created_at | huDate}}</td>
                      <td><span class="badge" :class="post.publish_status == 'drafted' ? ' bg-info' : ' bg-success'">{{ post.publish_status | upText }}</span></td>
                      
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
            <div class="col-md-12">
              <pagination :size="small" :align="align" :data="posts" @pagination-change-page="getResults">
                <span slot="prev-nav">Previous</span>  
                <span slot="next-nav">Next</span>
              </pagination>
            </div>
            <!-- /.card -->
          </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
          return {
            posts : {},
            small:'small',
            align:'center'
          }
        },
        mounted() {
            console.log('am mounted') ; 
        },
        created(){
          let self = this ; 
          // i want to send get request to fetch posts first  
          axios.get('api/posts')
               .then(function(res){
                  self.$Progress.start();
                  self.posts = res.data ; 
                  self.$Progress.finish();
               })
               .catch(function(err){
                  
               })
        },
        methods:{
          getResults(page = 1){
            let self = this ; 
            axios.get('api/posts?page=' + page)
                  .then(function(res){
                      self.$Progress.start();
                      self.posts = res.data ; 
                      self.$Progress.finish();
                  })
                  .catch(function(err){
                    console.log(err) ; 
                  })
          }
        }
    }
</script>
