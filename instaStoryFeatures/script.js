    var arr=[
        { dp:"https://c.wallhere.com/photos/c8/54/brunette_portrait_display_face_women_model_women_indoors_bokeh_depth_of_field-1732097.jpg!d",story:"https://th.bing.com/th/id/OIP.M3vycx9A1DC4Esj12I5LsQHaMR?w=182&h=301&c=7&r=0&o=5&dpr=1.3&pid=1.7"},
        {dp:"https://th.bing.com/th/id/OIP.4p3mRldmeilT7YrFXCYVwQHaKB?w=182&h=247&c=7&r=0&o=5&dpr=1.3&pid=1.7",story:"https://th.bing.com/th/id/OIP.M1W0sFvB4ObIDrOP1vAB_gHaLK?w=182&h=274&c=7&r=0&o=5&dpr=1.3&pid=1.7"},
        {dp:"https://th.bing.com/th/id/OIP.5NoHlkwmZ3_XJKSiWxs8JAHaI1?w=182&h=218&c=7&r=0&o=5&dpr=1.3&pid=1.7",story:"https://th.bing.com/th/id/OIP.Leib_ShmWhVHX3bQZbJ_rQHaLG?w=182&h=273&c=7&r=0&o=5&dpr=1.3&pid=1.7"},
        {dp:"https://th.bing.com/th/id/OIP.48C1fjm5A4taM6KNeVPyTQHaKI?w=182&h=249&c=7&r=0&o=5&dpr=1.3&pid=1.7",story:"https://th.bing.com/th/id/OIP.wytXR3ieSbUjM23BFVjrtgHaJN?w=182&h=226&c=7&r=0&o=5&dpr=1.3&pid=1.7"}
    ]

    var clutter="";
arr.forEach((elem,idx)=>{
    clutter+=`   <div class="story">
    <img id="${idx}" src="${elem.dp}" alt="">
</div>`
})    
var storiyaa=document.querySelector(".storiyaa");
storiyaa.innerHTML=clutter;


storiyaa.addEventListener("click",(dets)=>{
    setTimeout(() => {
        document.querySelector(".fullscreen").style.display="none";
    }, 2000);
  document.querySelector(".fullscreen").style.display="block";
document.querySelector(".fullscreen").style.backgroundImage=`url(${arr[dets.target.id].story})`
});

