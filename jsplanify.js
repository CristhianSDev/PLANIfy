const tasklist = document.getElementById('taskList');
const taskInput = document.getElementById('taskInput');

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        const li = document.createElement("li");
        li.classList.add("task-item"); // Adicionando a classe

        const maxText = taskText.substring(0, 35);

        li.innerHTML = `
            <span>${maxText}</span>
            <button class="editButton" onClick="editTask(this)">Editar</button>
            <button class="deleteButton" onClick="deleteTask(this)">Remover</button>
        `;
        tasklist.appendChild(li);
        taskInput.value = "";
    };
};

function editTask(button){
    const li = button.parentElement;
    const span = li.querySelector("span");
    const newText = prompt("Editar Tarefa:", span.textContent);
    if (newText !== null && newText.trim() !== "") {
        span.textContent = newText.trim();
    };
};

function deleteTask(button) {
    const li = button.parentElement;
    taskList.removeChild(li);   
}

// inserção de nome de usuario na apresentação do site

function mostrarMensagem() {
    var usuario = document.getElementById("usuario").value;
    var mensagem = "Olá " + usuario + ", o que faremos hoje?"; 
    document.getElementById("mensagem").innerText = mensagem; // Mensagem dentro do h1 }
};