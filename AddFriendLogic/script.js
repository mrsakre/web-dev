const state=document.getElementById("state");
const btn=document.getElementById("btn");

var count=0;

btn.addEventListener("click",()=>{
    if(count==0)
    {
        state.innerHTML="Friends";
        btn.innerHTML="Remove Friend";
        state.style.color="green"
        count=1;
    }
    else
    {

        state.innerHTML="Stranger";
        btn.innerHTML="Add Friend";
        state.style.color="red"

        count=0;

    }
})