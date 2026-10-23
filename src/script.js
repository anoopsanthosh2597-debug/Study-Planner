// Storage for study planner items
let tasks = [];

// Handle Task / Assignment / Exam Form Submission
document.getElementById('taskForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const title = document.getElementById('taskTitle').value;
    const subject = document.getElementById('taskSubject').value;
    const type = document.getElementById('taskType').value;
    const dueDate = document.getElementById('taskDueDate').value;

    if (!title || !subject || !dueDate) return;

    const newTask = {
        id: Date.now(),
        title,
        subject,
        type,
        dueDate,
        completed: false
    };

    tasks.push(newTask);
    renderTasks();

    // Reset Form
    document.getElementById('taskForm').reset();
});

// Render Tasks to Screen
function renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    if (tasks.length === 0) {
        taskList.innerHTML = '<p class="empty-msg">No study tasks added yet. Add one above!</p>';
        return;
    }

    tasks.forEach(task => {
        const item = document.createElement('div');
        item.className = `task-card ${task.completed ? 'completed' : ''}`;
        
        item.innerHTML = `
            <div class="task-info">
                <h4>${task.title} <span class="badge ${task.type}">${task.type.toUpperCase()}</span></h4>
                <p><strong>Subject:</strong> ${task.subject} | <strong>Due:</strong> ${task.dueDate}</p>
            </div>
            <div class="task-actions">
                <button onclick="toggleComplete(${task.id})">${task.completed ? 'Undo' : 'Complete'}</button>
                <button class="delete-btn" onclick="deleteTask(${task.id})">Delete</button>
            </div>
        `;

        taskList.appendChild(item);
    });
}

// Toggle Task Completion Status
function toggleComplete(id) {
    tasks = tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t);
    renderTasks();
}

// Delete Task
function deleteTask(id) {
    tasks = tasks.filter(t => t.id !== id);
    renderTasks();
}