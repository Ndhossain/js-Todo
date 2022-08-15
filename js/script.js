function addItem() {
    if (document.getElementById('taskName').value === '' || document.getElementById('taskName').value === '' || document.getElementById('taskTime').value === '') {
        document.getElementById('errorMessage').innerText = `Please add your input properly`
        return ;
    }
    document.getElementById('errorMessage').innerText = ``
    document.getElementById('taskContainer').innerHTML += `
        <div class="p-5 bg-white/30 rounded-xl tasks">
            <p class="text-lg">
            <span class="font-medium">Task Name: </span>${document.getElementById('taskName').value}
            </p>
            <p class="text-lg">
            <span class="font-medium">Compeletion Date: </span>${document.getElementById('taskDate').value}
            </p>
            <p class="text-lg">
            <span class="font-medium">Compeletion Time: </span>${document.getElementById('taskTime').value}
            </p>
            <button class="px-4 py-2 rounded bg-slate-900 mt-3 deleteButton">Done</button>
        </div>
    `;
}

document.getElementById('taskContainer').addEventListener('click', function (e) {
    
    e.target.innerText === document.getElementsByClassName('deleteButton')[0].innerText ? e.target.parentNode.parentNode.removeChild(e.target.parentNode) : null
})