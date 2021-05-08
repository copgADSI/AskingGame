@extends('layout.plantilla')
@section('titulo', 'Bienvenido a listado de categorias')
@section('contenido')
    <div class="container">
        <table class="table table-dark">
            <thead>
                <tr>
                    <th scope="col">Category Name</th>
                    <th scope="col">Description</th>

                </tr>
            </thead>
            <tbody>

                <tr>

                    <td id="categoryName">Larry</td>
                    <td id="categoryDescription">the Bird</td>

                </tr>
            </tbody>
        </table>

    </div>

    <script src="{{ asset('js/consumirCategorias.js') }}"></script>
@endsection
