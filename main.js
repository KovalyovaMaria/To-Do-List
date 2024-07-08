let taskNameInput = document.querySelector("#task-name-input");
let addTaskBtn = document.querySelector("#add-task-btn");
let startMessage = document.querySelector("#start-message");
let taskList = document.querySelector(".task-list");
let filterOption = document.querySelector(".filter-todo");
let tasks = [];

filterOption.addEventListener("change", filterTodo);
addTaskBtn.addEventListener("click", addTaskHandler);
taskList.addEventListener("click", changeTaskState);

function createTask(text) {
    let div = document.createElement("div");
    div.classList.add("task");
    let input = document.createElement("input");
    input.type = "checkbox";
    let p = document.createElement("p");
    p.innerText = text;
    let btn = document.createElement("button");
    btn.addEventListener("click", () => {
        let value = confirm("Ви впевнені, що хочете видалити завдання?");
        {
            if (value) {
                alert("Завдання видаленно");
                div.remove();
                tasks.splice(tasks.indexOf(div), 1);
                updateCount();
            } else {
                alert("Завдання не видаленно");
            }
        }
    });
    btn.innerHTML = "";
    updateCount();
    div.append(input);
    div.append(p);
    div.append(btn);
    return div;

}
function updateCount() {
    let allCount = document.querySelector('.all-count');
    let count = tasks.length;
    allCount.textContent = `Всього завдань: ${[count]}`;
}
function changeTaskState(e) {
    if (e.target.nodeName !== "input" && e.target.type !== "checkbox") {
        return;
    }
    if (e.target.checked) {
        e.target.parentElement.classList.add("completed");
    } else {
        e.target.parentElement.classList.remove("completed");
    }
}
function addTaskHandler() {
    if (taskNameInput.value) {
        if (!startMessage.hidden) startMessage.hidden = true;
        tasks.push(createTask(taskNameInput.value, tasks.length + 1));
        let newTask = createTask(taskNameInput.value);
        taskList.append(newTask);
        taskNameInput.value = "";
    } else {
        alert("Введіть завдання");
    }
}
function filterTodo(e) {
    let todos = Array.from(document.querySelectorAll(".task-list .task"));
    todos.forEach(function (task) {
        console.log(task);
        switch (e.target.value) {
            case "all":
                task.style.display = "";
                break;
            case "completed":
                if (task.classList.contains("completed")) {
                    task.style.display = "";
                } else {
                    task.style.display = "none";
                }break;
            case "uncompleted":
                if (task.classList.contains("completed")) {
                    task.style.display = "none";
                } else {
                    task.style.display = "";
                }break;
        }
    });
}