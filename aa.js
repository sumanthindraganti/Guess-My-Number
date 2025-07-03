const guess=document.querySelector(".guess");
const check=document.querySelector(".check");
let randomNum=Math.trunc(Math.random()*20)+1;
const message=document.querySelector(".message");
const number=document.querySelector(".number");
const highscore=document.querySelector(".highscore");
const again=document.querySelector(".again");
const body=document.querySelector("body");
guess.focus();
console.log(randomNum); 
const score=document.querySelector(".score"); 
let scorecount=20;      
check.addEventListener("click",function(){
    if(guess.value){
    if(+guess.value===randomNum){
    message.textContent=`Won The Game`;
    number.textContent=randomNum;
    number.style.backgroundColor="red";
    highscore.textContent=scorecount;
    body.style.backgroundColor="green";
   
}
else if(guess.value>randomNum){
    if(scorecount>0){
    message.textContent='think low';
    scorecount--;
    score.textContent=scorecount;
    }
}
else if(guess.value<randomNum){
    if(scorecount>0){
    message.textContent=`Think high`;
    scorecount--;
    score.textContent=scorecount;
    }
}
    }

    
});
again.addEventListener("click",function(){
    location.reload();
});



