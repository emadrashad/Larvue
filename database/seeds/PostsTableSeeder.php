<?php

use Illuminate\Database\Seeder;
use Faker\Generator as Faker; 
use App\User ; 
use App\Post ; 
class PostsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory('App\Post', 40)->create();

    }
}
