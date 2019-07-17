<?php

use Faker\Generator as Faker;
use App\Post ; 
use App\User ;

$factory->define(App\Post::class, function (Faker $faker) {
    return [
        'user_id'       =>      function () {
            return App\User::inRandomOrder()->first()->id;
        },
        'title'          =>     $faker->sentence(6),
        'content'        =>     $faker->realText(500),
        'created_at'     =>     $faker->date(),
        'publish_status' =>     'drafted',
        'cover_pic'      =>     $faker->imageUrl()
        
        
    ];
});
