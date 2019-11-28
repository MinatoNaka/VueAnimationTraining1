<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use Faker\Generator as Faker;

$factory->define(\App\Book::class, function (Faker $faker) {
    return [
        'title' => $faker->words(3, true),
        'author' => $faker->name,
        'price' => $faker->numberBetween(1, 100000),
    ];
});
