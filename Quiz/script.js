const quizData=[
    {
        question :' Quantos anos Ineldo tem?',
        a:'18',
        b:'27',
        c:'120',
        d:'36',

        correct:'c'
        

    },
    {
        question :'Qual e o melhor pais do mundo?',
        a:'Cabo Verde',
        b:'Brasil',
        c:'Singapura',
        d:'Tululu',

        correct:'a'
        

    },
    {
        question :'Quem foi o primeiro presidente de burkina faso?',
        a:'Sankara',
        b:'Trump',
        c:'Xi jin Ping',
        d:'I don`t know',

        correct:'d'
        
    },{
        question :'O que significa HTML?',
        a:'Jason Object Notation',
        b:'Hypertext Markup Language',
        c:'Application Programming Interface',
        d:'Cascading Style Sheet',

        correct:'b'
        

    },{
        question :' Quandos foi lancado JS?',
        a:'2018',
        b:'1995',
        c:'2020',
        d:'nenhum',

        correct:'b'
        

    }
]
const quiz= document.getElementById("quiz");

const answerEls= document.querySelectorAll('.answer');



const questionEl= document.getElementById('question')
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuestion =0;
let score= 0;

loadQuiz();
function loadQuiz() {
    deselectAnswer(); //must be called after so that it works
    const currentQuizData= quizData[currentQuestion];
    questionEl.innerText = currentQuizData.question;

    a_text.innerText= currentQuizData.a;
    b_text.innerText= currentQuizData.b;
    c_text.innerText= currentQuizData.c;
    d_text.innerText= currentQuizData.d;

}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEls)=>{
        if(answerEls.checked){
            answer = answerEls.id; 

        }
    });
    return answer;

}

function deselectAnswer(){
    answerEls.forEach((answerEls)=>{
        answerEls.checked = false;
    }); 
}

submitBtn.addEventListener('click',()=>{
   

    const answer = getSelected();

    console.log(answer);

    if(answer){
        if(answer=== quizData[currentQuestion].correct){
            score++;
        }
        currentQuestion++;
        if(currentQuestion < quizData.length ){
          loadQuiz();
         }else{
            quiz.innerHTML =
               `<h2>You answered correctly at  ${score}/
               ${quizData.length} questions.</h2>
               <button onclick="location.reload()">
               Refrescar</button>`;
           }
    }
  

})