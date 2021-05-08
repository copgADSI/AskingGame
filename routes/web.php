<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\QuestionsController;
use Illuminate\Support\Facades\Route;

Route::get('categories', [CategoryController::class,'list'])->name('categories.list');
Route::get('/questions', [QuestionsController::class,'list'])->name('questions.index');
Route::get('/', function () { 
    return view('welcome');
})->name('welcome');
