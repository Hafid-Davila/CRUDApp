// Recupera las tareas almacenadas en el almacenamiento local, si no hay, crea un arreglo vacío.
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Función para mostrar las tareas en la página.
function displayTasks() {
    const taskList = document.getElementById('taskList');// Selecciona la lista donde se mostrarán las tareas.
    taskList.innerHTML = ''; // Limpia la lista para evitar duplicados.

  // Recorre cada tarea almacenada y crea elementos HTML para mostrarlas.
    tasks.forEach((task, index) => {
        const li = document.createElement('li');// Crea un elemento <li> para cada tarea.
         
        // Crea un span para mostrar el texto de la tarea.
        const taskText = document.createElement('span');
        taskText.textContent = task;// Asigna el texto de la tarea al elemento span.
        li.appendChild(taskText); // Agrega el elemento span al elemento <li>.
       
        // Crea un botón de 'Editar' para cada tarea.
        const editButton = document.createElement('button');
        editButton.className = 'edit-button'; // Agrega la clase 'edit-button'
        editButton.textContent = 'Editar';// Asigna el texto 'Editar' al botón.
        editButton.onclick = () => editTask(index);// Asigna la función editTask al evento onclick.

        // Crea un botón de 'Borrar' para cada tarea.
        const deleteButton = document.createElement('button');
        deleteButton.className = 'delete-button'; // Agrega la clase 'delete-button'
        deleteButton.textContent = 'Borrar';// Asigna el texto 'Borrar' al botón.
        deleteButton.onclick = () => deleteTask(index);// Asigna la función deleteTask al evento onclick.
        

        li.appendChild(editButton); // Agrega los botones 'Editar' y 'Borrar' al elemento <li>.
        li.appendChild(deleteButton); // Agrega los botones 'Editar' y 'Borrar' al elemento <li>.

        taskList.appendChild(li); // Agrega el elemento <li> a la lista de tareas en la página.
    });
}

// Función para agregar una tarea.
function addTask() {
    const taskInput = document.getElementById('task');// Obtiene el input donde se ingresa la tarea.
    const newTask = taskInput.value;// Obtiene el valor de la nueva tarea ingresada.
    if (newTask) {
        tasks.push(newTask); // Agrega la nueva tarea al arreglo de tareas.
        taskInput.value = '';// Limpia el input después de agregar la tarea.
        localStorage.setItem('tasks', JSON.stringify(tasks));// Actualiza el almacenamiento local con las tareas.
        displayTasks(); // Vuelve a mostrar las tareas actualizadas en la página.
    }
}

// Función para editar una tarea.
function editTask(index) {
    // Abre un cuadro de diálogo para editar la tarea actual, mostrando la tarea actual como valor predeterminado.
    const updatedTask = prompt('Editar tarea', tasks[index]);
    if (updatedTask !== null) {
        tasks[index] = updatedTask;// Actualiza la tarea en la posición dada por el índice.
        localStorage.setItem('tasks', JSON.stringify(tasks));// Actualiza el almacenamiento local con las tareas editadas.
        displayTasks();// Vuelve a mostrar las tareas actualizadas en la página.
    }
}

// Función para borrar una tarea.
function deleteTask(index) {
    // Pregunta al usuario si está seguro de eliminar la tarea.
    if (confirm('¿Estás seguro de que quieres borrar esta tarea?')) {
        tasks.splice(index, 1);// Elimina la tarea del arreglo en la posición dada por el índice.
        localStorage.setItem('tasks', JSON.stringify(tasks));// Actualiza el almacenamiento local sin la tarea eliminada.
        displayTasks(); // Vuelve a mostrar las tareas actualizadas en la página.
    }
}

// Mostrar tareas al cargar la página.
displayTasks();// Invoca la función para mostrar las tareas almacenadas cuando la página carga.
