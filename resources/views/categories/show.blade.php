@extends('layout.plantilla')
@section('titulo', 'Bienvenido a listado de categorias')
@section('contenido')
    <div class="container">
        <label for=""> {{ $response }} </label>
        @foreach ($response as $category)
         
        @endforeach
        <script src="{{ asset('js/consumirCategorias.js') }}"></script>
    </div>
@endsection
