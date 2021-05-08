<?php

namespace App\Http\Controllers;

use App\Models\Questions;
use Illuminate\Http\Request;

class QuestionsController extends Controller
{
    //Funtion para filtrar categoría
    public function index(Request $request)
    {
        //Validamos el tipo de categoría que quiere el usuario 
        if ($request->input('questionsCategory')) {
            //Filtramos las preguntas  por medio del id categoría
            $questions = Questions::where('category_id', 'like', '%' . $request->questionsCategory . '%')->get();
        } else {
            $questions = Questions::all();
        }
        /* $this->filterCategory($questions); */
        $response = response()->json([
            'questions' => $questions
        ], 201);
        return  $response;
        return \view('questions.index');
    }

    public function list(Request $request)
    {
        return \view('questions.index');
    }
}
