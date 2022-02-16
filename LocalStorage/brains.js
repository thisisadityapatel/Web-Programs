if(!localStorage.getItem("count")){
    localStorage.setItem("count", 0);
}

function counting(){
    let count = localStorage.getItem("count");
    count++;
    document.querySelector("h1").innerHTML = count;
    localStorage.setItem("count", count);
}

document.addEventListener("DOMContentLoaded", ()=>{
    document.querySelector("#count").addEventListener("click",  counting)

    setInterval(counting, 1000);
})