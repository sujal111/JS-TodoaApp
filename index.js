console.log("Welcome to my Todo App")

let todoDataSection=document.getElementById("todo-data");

function addTodo(){
let rowDiv=document.createElement("div");
let todoItem=document.createElement("div");
let todoItem=document.createElement("div");
let todoNumber=document.createElement("div");
let todoDetail=document.createElement("div");
let todoItem=document.createElement("div");
let todoStatus=document.createElement("div");
let todoActions=document.createElement("div");
let deleteButton=document.createElement("button");
let finishedButton=document.createElement("button");
let hr=document.createElement("hr")


//adding classes
rowDiv.classList.add("row")
todoItem.classList.add("todo-item", "d-flex", "flex-row", "justify-content-between", "align-items-center");
todoItem.classList.add("todo-no")
todoItem.classList.add("todo-detail" ,"text-muted")
todoItem.classList.add("todo-status", "text-muted")
todoItem.classList.add("todo-actions")
todoItem.classList.add("btn"," btn-danger")
todoItem.classList.add("btn" ,"btn-success")
todoItem.classList.add()
todoItem.classList.add()
todoItem.classList.add()


todoNumber.textContent="1";
todoDetail.textContent=todoData;
todoStatus.textContent="In Progress";
deleteButton.textContent="Delete";
finishedButton.textContent="Finished";



todoActions.appendChild(deleteButton);
todoActions.appendChild(finishedButton);


todoItem.append(todoNumber);
todoItem.append(todoDetail);
todoItem.append(todoStatus);
todoItem.append(todoActions);

rowDiv.appendChild(todoItem);
rowDiv.appendChild(hr);



}



// let getTodosButton=document.getElementById("get-todos");

// getTodosButton.addEventListener("click",()=>{
//     console.log("clicked")
// })

// getTodosButton.onclick=()=>{
//     console.log("clicked");
// }

//One more way to handle events thing is using HTML elements onclick and pass function in html

