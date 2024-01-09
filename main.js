// main.js

let tareas = [];

function agregarTarea(nombre) {
    if (nombre !== '') {
        tareas.push({ nombre, completada: false });
        actualizarListaTareas();
    }
}

function actualizarListaTareas() {
    const listaTareas = document.getElementById('taskList');
    if (!listaTareas) return;

    listaTareas.innerHTML = '';
    tareas.forEach((tarea, index) => {
        const li = document.createElement('li');
        li.textContent = `${index + 1}. ${tarea.nombre} (${tarea.completada ? 'Completada' : 'Pendiente'})`;
        li.dataset.index = index;
        li.addEventListener('click', () => toggleCompletada(index));
        listaTareas.appendChild(li);
    });
}

function toggleCompletada(index) {
    tareas[index].completada = !tareas[index].completada;
    actualizarListaTareas();
}

document.addEventListener('DOMContentLoaded', () => {
    const inputTarea = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const listaTareas = document.getElementById('taskList');
    
    addTaskBtn.addEventListener('click', () => {
        agregarTarea(inputTarea.value.trim());
        inputTarea.value = '';
    });

    actualizarListaTareas();
});