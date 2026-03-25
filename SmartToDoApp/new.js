var tasks = [];
var filter = "all";

function debounce(func, delay) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        console.log("Waiting for 5 seconds of silence before adding...");
        timeout = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

function processTask() {
    var name = document.getElementById("taskInput").value;
    var priority = document.getElementById("priorityInput").value;
    var date = document.getElementById("dateInput").value;
    if (name == "" || date == "") {
        alert("Enter task and date");
        return;
    }
    var task = {
        id: new Date().getTime(),
        name: name,
        priority: priority,
        date: date,
        completed: false
    };
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    document.getElementById("taskInput").value = "";
    document.getElementById("dateInput").value = "";
    showTasks();
}

var addTask = debounce(processTask, 300);

function showTasks() {
    var html = "";
    for (var i = 0; i < tasks.length; i++) {
        if (filter == "completed" && tasks[i].completed == false) continue;
        if (filter == "pending" && tasks[i].completed == true) continue;
        html += "<div class='card m-2 p-2'>";
        html += "<b>" + tasks[i].name + "</b> | ";
        html += tasks[i].priority + " | ";
        html += tasks[i].date + " ";
        html += "<button class='btn btn-success btn-sm ms-2' onclick='completeTask(" + tasks[i].id + ")'>Done</button>";
        html += "<button class='btn btn-danger btn-sm ms-2' onclick='deleteTask(" + tasks[i].id + ")'>Delete</button>";
        html += "</div>";
    }
    var list = document.getElementById("taskList");
    if (!list) {
        list = document.createElement("div");
        list.id = "taskList";
        document.querySelector(".container").appendChild(list);
    }
    list.innerHTML = html;
    updateCount();
}

function completeTask(id) {
    for (var i = 0; i < tasks.length; i++) {
        if (tasks[i].id == id) {
            tasks[i].completed = !tasks[i].completed;
        }
    }
    localStorage.setItem("tasks", JSON.stringify(tasks));
    showTasks();
}

function deleteTask(id) {
    tasks = tasks.filter(function(t) {
        return t.id != id;
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
    showTasks();
}

function processFilter(type) {
    filter = type;
    showTasks();
}

var setFilter = debounce(processFilter, 300);

function sortPriority() {
    tasks.sort(function(a, b) {
        return a.priority.localeCompare(b.priority);
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
    showTasks();
}

function sortDeadline() {
    tasks.sort(function(a, b) {
        return new Date(a.date) - new Date(b.date);
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
    showTasks();
}

function updateCount() {
    document.getElementById("totalCount").innerText = tasks.length;
    var c = 0;
    for (var i = 0; i < tasks.length; i++) {
        if (tasks[i].completed) c++;
    }
    document.getElementById("completedCount").innerText = c;
    document.getElementById("pendingCount").innerText = tasks.length - c;
}

showTasks();