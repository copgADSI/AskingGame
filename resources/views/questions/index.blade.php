<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
        crossorigin="anonymous" />
    <link rel="stylesheet" href="{{ asset('css/styleCSS.css') }}" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Tangerine">

    <title>Bienvenido Asking Game </title>
</head>

<body>

    <div class="start_btn">
        <button>Iniciar Juego</button>
    </div>

    <div class="info_box">
        <div class="info_title">
            <span>

                Instrucciones para iniciar el juego
            </span>
        </div>
        <div class="info_list">
            <div class="info">-> Tienes 30  segundos para escoger una respuesta.</div>
            <div class="info">-> Si después de los 30 segundos no escogiste una respuesta serán 0 puntos.</div>
            <div class="info"></div>
            <div class="info"></div>
            <div class="info"></div>

        </div>
        <div class="buttons">
            <button class="quit">Cerrar</button>
            <button class="restart">Iniciar</button>
        </div>
    </div>
    <div class="quiz_box">
        <header>
            <div class="title">Fantástica Aplicación de Preguntas</div>
            <div class="timer">
                <div class="timer_text">Tiempo Restante</div>
                <div class="timer_sec">15</div>
            </div>
            <div class="time_line"></div>
        </header>
        <section>
            <div class="que_text">
                <!-- <span>What does HTML start for?</span> -->
            </div>
            <div class="option_list">

            </div>


        </section>
        <footer>
            <div class="total_que">
                <!--  <span> <p>2</p> of <p>5</p>Questions </span> -->
            </div>
            <button class="next_btn">Avanzar</button>
        </footer>

    </div>

    <!--Result Box-->
    <div class="result_box">
        <div class="icon">
            <i class="fas fa-crown"></i>
        </div>
        <div class="complete_text">
            ¡Has completado las preguntas!!</div>
        <div class="score_text">

        </div>
        <div class="buttons">
            <button class="replay">Repetir</button>
            <form action="{{ route('welcome') }}" method="get"> 
                <button class="Quit">Salir</button>
            </form>
        </div>
    </div>
   

    {{-- <script src="questions.js"></script> --}}
    <script src=" {{ asset('js/app.js') }}"></script>
</body>

</html>
