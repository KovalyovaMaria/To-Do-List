let taskNameInput = document.querySelector("#task-name-input");
let addTaskBtn = document.querySelector("#add-task-btn");
let startMessage = document.querySelector("#start-message");
let taskList = document.querySelector(".task-list");
let tasks = [];


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
            btn.addEventListener("click",() => {
                div.remove();
            });
            btn.innerHTML = "";

            div.append(input);
            div.append(p);
            div.append(btn);

            return div;
        }

        function changeTaskState(e){
            if(e.target.nodeName !== "input" &&  e.target.type !== "checkbox" ){
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
                if(!startMessage.hidden)startMessage.hidden = true;

                let newTask = createTask(taskNameInput.value);
                taskList.append(newTask);
                taskNameInput.value = "";

            }else {
                alert("Ваше поле пусте. Введіть завдання");
            }
        }

    function filterTasks() {
    const activeTasks = tasks.filter(element => element.completed === false);
    const completedTasks =  tasks.filter(element => element.completed = true);
    tasks = [activeTasks ,completedTasks ];
}

filterTasks();