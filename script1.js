function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();

    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    const li = document.createElement("li");

    const span = document.createElement("span");
    span.innerText = taskText;
    span.onclick = function () {
        toggleTask(span);
    };

    const button = document.createElement("button");
    button.innerText = "X";
    button.onclick = function () {
        deleteTask(button);
    };

    li.appendChild(span);
    li.appendChild(button);

    document.getElementById("taskList").appendChild(li);
    input.value = "";
}

function toggleTask(element) {
    element.classList.toggle("completed");
}

function deleteTask(button) {
    button.parentElement.remove();
}
