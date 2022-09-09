function getValue(id) {
    return document.getElementById(id).value;
};

function setTask() {
    if (!getValue('taskName') || !getValue('taskDate') || !getValue('taskTime')) {
        document.getElementById('errorMessage').innerText = `Please add your input properly`;
        return ;
    };
    document.getElementById('errorMessage').innerText = ``;
    const previousTask = JSON.parse(localStorage.getItem('Tasks'));
    const task = {
        name: getValue('taskName'),
        date: getValue('taskDate'),
        time: getValue('taskTime'),
        id: previousTask && previousTask.length > 0 ? previousTask[previousTask.length - 1].id + 1 : 1,
    };
    const allTasks = previousTask && previousTask.length ? [...previousTask, task] : [task];
    localStorage.setItem('Tasks', JSON.stringify(allTasks));
    document.getElementById('taskName').value = '';
    document.getElementById('taskDate').value = '';
    document.getElementById('taskTime').value = '';
    showTasksUI();
}

function showTasksUI() {
    document.getElementById('taskContainer').innerHTML = "";
    const allTasks = JSON.parse(localStorage.getItem('Tasks'));
    allTasks?.forEach((task) => {
        const {name, date, time, id} = task;
        const div = document.createElement('div');
        div.innerHTML = `
            <div class="p-5 bg-white/30 rounded-xl tasks">
                <p class="text-lg">
                <span class="font-medium">Task Name: </span>${name}
                </p>
                <p class="text-lg">
                <span class="font-medium">Compeletion Date: </span>${date}
                </p>
                <p class="text-lg">
                <span class="font-medium">Compeletion Time: </span>${time}
                </p>
                <button onclick='removeTask(${id})' class="px-4 py-2 rounded bg-slate-900 mt-3">Done</button>
            </div>
        `;
        document.getElementById('taskContainer').appendChild(div);
    })
};

showTasksUI();

function removeTask(taskId) {
    const allTasks = JSON.parse(localStorage.getItem('Tasks'));
    const removeTask = allTasks.filter(task => task.id !== taskId);
    localStorage.setItem('Tasks', JSON.stringify(removeTask));
    showTasksUI();
}

function removeAllTask() {
    localStorage.removeItem('Tasks');
    showTasksUI();
}
