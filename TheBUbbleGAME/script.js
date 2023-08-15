function makebubble(){
    var clutter="";

for(let i=0;i<232;i++)
{
    var rn=Math.floor(Math.random()*10);
    clutter+= `<div class="bubble">${rn}</div>`;
}
document.querySelector("#penal-btm").innerHTML=clutter;
}

var timer=60;
var score=0;
function runTimer(){
   var timerint= setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#runTime").textContent=timer;
        }  
        else{
            clearInterval(timerint);
            document.querySelector("#penal-btm").innerHTML=`<h1> Game Over! <br> Your Score is ${score}</h1> `;
        }
    },1000)
}
var randomNum=0;
function newHit(){
   randomNum= Math.floor(Math.random()*10);
    document.querySelector("#getHit").textContent=randomNum;
         
}

function increaseScore(){
      score+=10;
      document.querySelector("#newScore").textContent=score;

}
document.querySelector("#penal-btm").addEventListener("click",function(dets){
      var clickednum=  Number(dets.target.textContent);
      if(clickednum===randomNum){
        increaseScore();
        makebubble();
        newHit();
      }


})


makebubble();
runTimer();
newHit();