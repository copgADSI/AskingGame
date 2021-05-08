//Elementos requeridos

const start_btn = document.querySelector('.start_btn button')
const info_box = document.querySelector('.info_box')
const exit_btn = document.querySelector('.buttons .quit')
const continue_btn = document.querySelector('.buttons .restart')
const quiz_box = document.querySelector('.quiz_box')
const btn_next = document.querySelector('.next_btn')
const total_que = document.querySelector('.total_que')
let que_text = document.querySelector('.que_text')
const option_list = document.querySelector('.option_list')
const timer_text = document.querySelector('.timer_text')
const result_box = document.querySelector('.result_box')
const restart_quiz = document.querySelector('.buttons .replay')
let timerCount = document.querySelector('.timer .timer_sec')
let timerLine = document.querySelector('.time_line') //FIN DE LOS ELEMENTOS
let que_count = 0
let que_numb = 1
let counter
let time_value = 30
let counterLine
let userScore = 0
let options = ''

const URLactual = window.location; //url actual
const str = URLactual.toString().trim(); //Volvemos la URL a cadena de tipo string y quitamos los campos vacíos
const res = str.split("="); //Separamos la url 
const id = res[1] //Optenemos el id necesario para la categoría que está después del = 


const showQuestions = async(index) => {

        //
        const url = await fetch(`http://127.0.0.1:8000/api/questions?questionsCategory=${id}`)
        const res = await url.json();

        options = Object.values(res)

        option_list.innerHTML = ''

        // Esta va a ser la pregunta para el usuario
        let answerTitle = `<span> ${que_numb }.${options[0][index].questions}</span> `

        que_text.innerHTML = answerTitle

        const listado = options[0][index].options // ejem Hyper Programmimg Processor, Hyper Product Preprocessor,Hypertext Preprocessor,Home Processor Pro


        const str = listado
        let optionsList = str.split(',')
        optionsList.forEach(options => {

            option_tag = `<div class="option">
                       <span>${options}</span>
       
                     </div>`
            option_list.innerHTML += option_tag
        });
        //Para seleccionar todas las clases .option
        const option = option_list.querySelectorAll('.option')
        option.forEach(optionsSelected => {
            //Setiamos un atributo, en este caso el evento click y le pasamos el valor a una función
            optionsSelected.setAttribute('onclick', 'optionSelected(this)')
        })


    }
    //Evento click del botón para mostrar instrucciones del Juego
start_btn.onclick = () => {
    info_box.classList.add('activeInfo') //Creamos nueva clase y la mostramos
}

exit_btn.onclick = () => { //Evento click para cerrar el juego
    info_box.classList.add('activeInfo') //Removemos la clase 
}



//Click para iniciar el Quiz/Juego
continue_btn.onclick = () => {
    info_box.classList.remove('activeInfo') //ocultar info box
    quiz_box.classList.add('activeQuiz') //mostrar quiz box
        //renderizamos la sig. pregunta con respuestas
    showQuestions(question = 0);
    totalQue(1)
    startTimer(time_value)

    startTimeLine(0)



}


//Evento click para continuar con la sig pregunta
btn_next.onclick = () => {

    if (que_count < options[0].length - 1) {

        que_numb++ //contador para la sig pregunta
        que_count++ // contador para num de pregunta
        showQuestions(que_count)
        totalQue(que_numb)
        clearInterval(counter) //Limpiamos el temprizador

        clearInterval(counterLine)
        startTimer(time_value)

        startTimeLine(0)
        btn_next.style.display = 'none' //ocultamos boton next
    } else {
        clearInterval(counter) //Limpiamos el temprizador
        clearInterval(counterLine)
        showResults()
    }
}


//Iconos DE CORRRECTO A INCORRECTO
const tickIcon = ` <div class="icon tick"> <i class="fas fa-check"></i> </div>`
const crossIco = ` <div class="icon cross"> <i class="fas fa-times"></i> </div>`
const optionSelected = (answer) => {
        clearInterval(counterLine)
        clearInterval(counter) //Se detiene el intervalo cuando se haya escogido una respuesta
        const userAns = answer.textContent.trim() //Capturamos el resultado en una const 
        const correctAns = options[0][que_count].answer
        let allOptions = option_list.children.length

        if (userAns === correctAns) {
            userScore += 1

            answer.classList.add('correct')
            answer.innerHTML += tickIcon
        } else {
            answer.classList.add('incorrect')
            answer.innerHTML += crossIco
            if (options[0][que_count].answer === correctAns) {
                //Mostramos la opción correcta
                for (let i = 0; i < allOptions; i++) {

                    if (option_list.children[i].textContent.toString().trim() === correctAns) {
                        option_list.children[i].setAttribute('class', 'option correct')
                        option_list.children[i].innerHTML += tickIcon

                    }


                }
            }
        }

        //disabled a todas las opciones una vez escogina una opcion
        for (let i = 0; i < allOptions; i++) {

            option_list.children[i].classList.add('disabled')
        }
        btn_next.style.display = 'block'

    }
    //Pregunta actual
const totalQue = (index) => {

        /*  console.log(options);
    options.forEach(count => {

        console.log(count.length);
    });
 */

        // total_que.innerHTML = ` <span> <p>${index}</p> of <p> ${options.length} </p>Questions </span>`

    }
    //Iniciar de nuevo con las preguntas
restart_quiz.onclick = () => {
    window.location.reload()
}




const showResults = () => {
    info_box.classList.remove('activeInfo') //ocultar info box
    quiz_box.classList.remove('activeQuiz') //ocultar quiz box
    result_box.classList.add('activeResult') //Mostrar resultado
    if (userScore <= 2) {
        result_box.children[2].innerHTML += `<span>Lo sentimos, tu puntaje fue de: &#128546;</span> ` //puntaje usuario.children[0].children[0].textContent = userScore ;

    } else if (userScore >= 3 && userScore <= 6) {
        result_box.children[2].innerHTML += `<span>Puedes mejorar, tu puntaje fue de: &#128528</span> ` //puntaje usuario.children[0].children[0].textContent = userScore ;

    } else {
        result_box.children[2].innerHTML += `<span>Estupendo!! Tu puntaje fue de: &#128526; </span> ` //puntaje usuario.children[0].children[0].textContent = userScore ;
    }


}

const startTimer = (time) => {
    counter = setInterval(() => {
        timerCount.textContent = time
        time--

        if (time < 0) {
            clearInterval(counter)
            timerCount.textContent = 0

            let correctAns = options[0][que_count].answer //respuesta correcta
            let allOptions = option_list.children.length //Todas las opciones

            //Recorremos y asignamos una respuesta correcta y 3 incorrectas 
            for (let i = 0; i < allOptions; i++) {
                if (option_list.children[i].textContent.toString().trim() === correctAns) {
                    option_list.children[i].classList.add('correct')
                    option_list.children[i].innerHTML += tickIcon

                } else {
                    option_list.children[i].classList.add('incorrect')
                    option_list.children[i].innerHTML += crossIco
                }


            }

            //disabled a todas las opciones una vez terminado el temporisador
            for (let i = 0; i < allOptions; i++) {

                option_list.children[i].classList.add('disabled')
            }
            btn_next.style.display = 'block'
            timer_text.textContent = 'Tiempo Fuera'
        }
    }, 800);
}

const startTimeLine = (time) => {



    counterLine = setInterval(() => {
        time++
        timerLine.style.width = time + 'px'
        if (time < 180) {

            timerLine.style.background = '#23903c'


        }
        if (time > 180 && time <= 360) {
            timerLine.style.background = '#d3ae0b'

        }
        if (time > 360) {
            timerLine.style.background = '#f30d05'
        }
        if (time > 540) {
            clearInterval(counterLine)


        }
    }, 45);




}




/*
 programmed by Cristian Parada Gualteros  05/03/2021
*/