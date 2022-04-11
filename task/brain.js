document.addEventListener("DOMContentLoaded", ()=>{
    document.querySelector("#submit").disabled = true;

    document.querySelector("#task").onkeyup = ()=>{
        if(document.querySelector("#task").value.length > 0){
            document.querySelector("#submit").disabled = false;
        }
        else{
            document.querySelector("#submit").disabled = true;
        }
    }

    document.querySelector("#submit").onclick = ()=>{
        const task = document.querySelector("#task");
        const li = document.createElement("li");
        const importance = document.querySelector("#importance").value;

        li.innerHTML = task.value;
        li.style.color = importance;
        document.querySelector("#tasklist").append(li);
        task.value = null;
        document.querySelector("#submit").disabled = true;
        document.querySelector("#importance").value = "Importance";

        return false;
    }

    document.querySelector("#undo").addEventListener("click", function(){
        const templist = document.querySelector("#tasklist");
        if(templist.hasChildNodes()){
            templist.removeChild(templist.lastChild);
        }
    })

    document.querySelector("#clear").addEventListener("click", function(){
        const templist = document.querySelector("#tasklist");
        while(templist.hasChildNodes()){
            templist.removeChild(templist.lastChild);
        }
    })
    
})