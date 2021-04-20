document.getElementById("taskButton").addEventListener("click", addTask);
tasks = []

function addTask() {
    let task = {taskInput: taskInput.value};
    console.log(task);
    tasks.push(task);
    taskReveal();
}

function taskReveal() {
    let taskList = document.getElementById("taskList");
    for(let a = 0; a < tasks.length; a++){
            let task = `
        <div class = "task">
                <h70>${taskList[a].task}</h70>
            </div>
        `;
    }
    taskList.innerHTML = task;
}