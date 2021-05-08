<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\QuestionsController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::get('/showCategory', [CategoryController::class, 'show']);
Route::post('/createCategory', [CategoryController::class, 'store']);
Route::get('/questions',[QuestionsController::class,'index']);
Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
