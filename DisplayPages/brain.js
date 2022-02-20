function dispage(page){
    document.querySelectorAll("div").forEach(div=>{
        div.style.display = "none";
    })
    document.querySelector(`#${page}`).style.display = "block";
}

document.addEventListener("DOMContentLoaded", ()=>{
    document.querySelectorAll("button").forEach(button => {
        button.addEventListener("click", ()=>{
            dispage(button.dataset.page);
        })
    })
})