
document.addEventListener("DOMContentLoaded", ()=>{

    document.querySelector("#submittask").disabled = true;

    document.querySelector("#task").onkeyup = ()=>{
        if(document.querySelector("#task").value.length > 0){
            document.querySelector("#submittask").disabled = false;
        }
        else{
            document.querySelector("#submittask").disabled = true;
        }
    }

    document.querySelector("form").onsubmit = () => {
        const task = document.querySelector("#task");
        const li = document.createElement("li");
        li.innerHTML = task.value;
        document.querySelector("#displayoutput").append(li);

        task.value = "";

        return false;
    }
})
