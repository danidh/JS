var todos = [];
window.setTimeout(function() {
    
    var actionInput = prompt("What would you like to do?");
    while(actionInput !== "quit") {
    
        if(actionInput === "list") {
            listTodos();
        }
        else if(actionInput === "new") {
           makeTodo(); 
        }
        else if(actionInput === "delete") {
            removeTodo();
        }

        actionInput = prompt("What would you like to do?");
    }
    console.log("You quit the app");

}, 500);

function listTodos() {
    console.log("***************");
    //Print all todos in todos array on seperate lines
    todos.forEach(function(todo, i) {
        console.log(i + ": " + todo);
    });
    console.log("***************");
}

function makeTodo() {
    //Ask user to input new todo
    var newTodo = prompt("Enter a new Todo");
    //add new Todo to Todos array
    todos.push(newTodo);
    console.log("New Todo added");
}

function removeTodo() {
    //ask for index of todo
    var index = prompt("Enter the index of the Todo you wish to remove");
    //delete todo at specified index
    todos.splice(index, 1);
    console.log("Removed Todo at index " + index);
}