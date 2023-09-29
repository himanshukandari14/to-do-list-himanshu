const inputBox=document.getElementById("inputbox");
const addbtn= document.getElementById("add");
const listContainer=document.getElementById("listcontainer");
const cross= document.getElementsByClassName("crossbtn");


addbtn.addEventListener("click",()=>{
    if (inputBox.value=="") {
        alert("Please Type Something : )")
    }
    else{
        const newTask=document.createElement('li');
        newTask.innerHTML=inputBox.value;
        listContainer.appendChild(newTask);
        inputBox.value="";
       
        listContainer.style.display="flex"
        const span= document.createElement("span");
        span.className+="crossbtn"
        span.innerHTML="\u00d7";
        newTask.appendChild(span);
          // calling saving function so that we can save data
        
        
        span.addEventListener('click',()=>{
            listContainer.removeChild(newTask);
         
           
        })
        // linethrough code
        newTask.addEventListener('click',()=>{
                         console.log(`clicked ${newTask}`);
                         newTask.style.textDecoration="line-through";
                         newTask.style.color="green"
                         
        })
        
    }
    
})

// function to store data on browser

// function saveData(){
//     localStorage.setItem("tasks",listContainer.innerHTML); //we will call this every time we make a task
// }
// // FUNCTION to show list 
// function showTasks() {
//     listContainer.innerHTML=localStorage.getItem("tasks");
// }

// showTasks();