document.addEventListener('DOMContentLoaded', function () {
    // University Task
    document.getElementById('universityForm').addEventListener('submit', function (e) {
        e.preventDefault();
        const task = document.getElementById('universityTask').value.trim();
        if (task) {
            addTask('universityTasks', task);
            document.getElementById('universityTask').value = '';
            bootstrap.Modal.getInstance(document.getElementById('universityModal')).hide();
        }
    });

    // Home Task
    document.getElementById('homeForm').addEventListener('submit', function (e) {
        e.preventDefault();
        const task = document.getElementById('homeTask').value.trim();
        if (task) {
            addTask('homeTasks', task);
            document.getElementById('homeTask').value = '';
            bootstrap.Modal.getInstance(document.getElementById('homeModal')).hide();
        }
    });

    // Office Task
    document.getElementById('officeForm').addEventListener('submit', function (e) {
        e.preventDefault();
        const task = document.getElementById('officeTask').value.trim();
        if (task) {
            addTask('officeTasks', task);
            document.getElementById('officeTask').value = '';
            bootstrap.Modal.getInstance(document.getElementById('officeModal')).hide();
        }
    });

    // Delete task functionality
    document.body.addEventListener('click', function (e) {
        if (e.target.classList.contains('delete-task-btn')) {
            e.target.parentElement.remove();
        }
    });

    function addTask(listId, task) {
        const ul = document.getElementById(listId);
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${task}</span>
            <button type="button" class="btn btn-sm btn-danger task-delete-btn delete-task-btn">Delete</button>
        `;
        ul.prepend(li);
    }
});