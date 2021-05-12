<?php

use Illuminate\Support\Facades\Route;


Route::get('/', 'webController@home')->name('home');
Route::get('/cusro', 'webController@course')->name('course');
Route::get('/blog', 'webController@blog')->name('blog');
Route::get('/blog/{uri}', 'webController@article')->name('article');
Route::get('/contato', 'webController@contact')->name('contact');
