document.addEventListener("DOMContentLoaded", function(){

    const count = 0;

    document.querySelector("#submitbutton").disabled = true;

    document.querySelector("#task").onkeyup = () => {
        if(document.querySelector("#task").value.length > 0){
            document.querySelector("#submitbutton").disabled = false;
        }
        else{
            document.querySelector("#submitbutton").disabled = true;
        }
    };
    
    document.querySelector("#taskform").onsubmit = function(){
        const task = document.querySelector("#task");
        const li = document.createElement("li");
        li.innerHTML = task.value;
        document.querySelector("#displaytask").append(li);
        task.value = "";
        return false;
    }

    document.querySelector("#undotask").addEventListener("click", ()=>{
        const temp = document.querySelector("#displaytask");
        temp.removeChild(temp.lastChild);
    })


});