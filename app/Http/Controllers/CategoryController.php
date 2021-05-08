<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use App\Models\Questions;

class CategoryController extends Controller
{

    
    public function list()
    {
        return view('categories.list');
    }
    public function store(Request $request)
    {
        //Registro de nueva categoria
        $category = Category::create($request->all());
        return response()->json([
            'Categories' => $category
        ], 200);
    }
    public function show()
    {
        //Mostrar todas las categorias
        $categories = Category::all();
        /*         $arr = [];
        array_push($arr, [
            'categories' => $categories
        ]); */
        $response = response()->json([
            'Categories' => $categories
        ], 200);
        return $response;
    }
}
