<?php

/** @var \Laravel\Lumen\Routing\Router $router */

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/', function () use ($router) {
    return $router->app->version();
});

$router->group(['prefix'=> 'api/'], function() use($router)
{
    $router->post('products/add', 'ProductController@createProduct');

    $router->get('products', 'ProductController@getAll');

    $router->get('products/view/{id}', 'ProductController@getOneProduct');

    $router->put('products/edit/{id}', 'ProductController@updateProduct');

    $router->delete('products/delete/{id}', 'ProductController@deleteProduct');
});
