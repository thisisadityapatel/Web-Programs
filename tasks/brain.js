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

    //removing the last child is asking for undo task

    document.querySelector("#undo").addEventListener("click", ()=>{
        const temp = document.querySelector("#tasklist");
        if(temp.hasChildNodes()){
            temp.removeChild(temp.lastChild);
        }
    })


    if(document.querySelector("#task").value.length == 0){
        document.querySelector("#submit").disabled = true;
    }

    document.querySelector("#taskform").onsubmit = ()=>{
        const task = document.querySelector("#task");
        const li = document.createElement("li");
        li.innerHTML = task.value;

        document.querySelector("#tasklist").append(li);
        task.value = null;
        return false;
    }

    //removing all the childNodes from the list in javascript
    document.querySelector("#clear").addEventListener("click", ()=>{
        const temp = document.querySelector("#tasklist");
        while(temp.hasChildNodes()){
            temp.removeChild(temp.lastChild);
        }
    })

    window.onload = timesRefresh(5000);
})