let count = 0;

function counting(){
    count++;
    document.querySelector("h1").innerHTML = count;
}

document.addEventListener("DOMContentLoaded", ()=>{
    document.querySelector("#count").addEventListener("click",  counting)

    setInterval(counting, 1000);
})