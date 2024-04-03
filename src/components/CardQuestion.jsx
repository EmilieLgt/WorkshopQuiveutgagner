 import { useState } from 'react'

function CardQuestion ({question, passageQuestion, questions, questionIndex,next , active, setActive, onAnswerClick}) {
    

const defaultColor = "#6D0FF2";
const trueColor= "rgb(0, 255, 0)";
const fauxColor= "rgb(120, 10, 8)";
const bonnereponse = question.bonnereponse


/* 1. Je veux que quand l'utilisateur clique sur l'une des quatres réponses, 
cela m'affiche les 3 mauvaises réponses en rouge et la bonne réponse en vert. 
2. Je veux stocker les bonnes réponses de l'utilisateur  
Ajouter 

const clicksurBonneReponse = () => {bonnereponse ? style={backgroundColor:trueColor} : style={backgroundColor:fauxColor}}*/

console.log(questions[1].correctAnswer)

return (

<>
<figure><h2>{question.intitulé}</h2>
 <h4>Choisissez une réponse : </h4>

<div className='boutonsReponses'>
<button style={{backgroundColor: active  === true &&  question.a===question.correctAnswer ? trueColor : defaultColor}} onClick={() =>{setActive(!active)}}>{question.a} </button>
<button style={{backgroundColor: active  === true &&  question.b===question.correctAnswer ? trueColor : defaultColor}} onClick={() =>{setActive(!active)}}>{question.b}</button>
<button style={{backgroundColor: active  === true &&  question.c===question.correctAnswer ? trueColor : defaultColor}} onClick={() =>{setActive(!active)}}>{question.c}</button>
<button style={{backgroundColor: active  === true &&  question.d===question.correctAnswer ? trueColor : defaultColor}} onClick={() =>{setActive(!active)}}>{question.d}</button> 
</div>

</figure>


</>
        

    )
}

export default CardQuestion