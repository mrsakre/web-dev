var clock=document.getElementById("clock");


setInterval(()=>{
    let a=new Date();
var h=a.getHours();
var m=a.getMinutes();
var s=a.getSeconds();
var d =a.getDate();
var j=a.getMonth();
var y=a.getFullYear();

    clock.innerHTML=` ${d}/${j + 1}/${y} <br> ${h}:${m}:${s}`;

},1000)

