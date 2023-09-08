var con=document.querySelector('.container');
var heart=document.getElementById("heart");

con.addEventListener("dblclick",()=>{
    heart.style.transform='translate(-50%,-50%) scale(1)';
    heart.style.opacity=0.8;
    setTimeout(()=>{
        heart.style.opacity=0;
    },1000)
    setTimeout(function(){
        heart.style.transform='translate(-50%,-50%) scale(0)';
     
    },2000)
})