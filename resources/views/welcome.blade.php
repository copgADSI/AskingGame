@extends('layout.plantilla')
@section('titulo', 'Bienvenido a principal')
@section('contenido')
    <center>
        
        <div class="container m-5" style="width: 300px">
           
            <a href="{{ route('questions.index', ['questionsCategory' => 1]) }}" class="btn btn-primary m-3">Preguntas 
                de Software <br>  <i class="fas fa-code"></i>    </a>
            <a href=" {{ route('questions.index', ['questionsCategory' => 2]) }}" class="btn btn-primary m-3">Preguntas de
                Cultura
                General <br> <i class="fas fa-globe-americas"></i>
            <a href="{{ route('questions.index', ['questionsCategory' => 3]) }}" class="btn btn-primary m-3">Preguntas de
                Ciencias <br>   <i class="fas fa-flask"></i></a>
            <a href="{{ route('questions.index', ['questionsCategory' => 4]) }}" class="btn btn-primary m-3">Preguntas de
                Historia <br> <i class="fas fa-archway"></i></a>
            <a href="{{ route('questions.index', ['questionsCategory' => 5]) }}" class="btn btn-primary m-3">Preguntas de
                Razonamiento <br> <i class="fas fa-brain"></i></a>
        </div>
    </center>

    <script src="{{ asset('css/buttons.css') }}"></script>
@endsection
