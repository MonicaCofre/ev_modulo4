// Variables globales 
let input_tarea = document.querySelector('.input')
let btn_agregar = document.querySelector('.boton-agregar')
const container = document.querySelector('.container');

class Item {
  constructor(nuevaTarea) {
    this.crearDiv(nuevaTarea);
  }
  // método
  crearDiv(nuevaTarea) {
    // se crea Div y se añade a container
    console.log('llamando a crearDiv');
    const nuevoDiv = document.createElement('div')
    nuevoDiv.classList.add('item')
    container.appendChild(nuevoDiv)
    // se crea input y se añade a Div
    const inputItem = document.createElement('input')
    inputItem.value = nuevaTarea                    // Tome el parámetro del constructor para asignarle un valor a la variable inputItem.
    inputItem.type = 'text'
    inputItem.disabled = true                       //Establece la Propiedad disabled de la Variable inputItem con el valor true
    inputItem.classList.add('item-input')
    nuevoDiv.appendChild(inputItem);
    // se crea boton editar con iconos 
    const btnEditar = document.createElement('button')
    btnEditar.innerHTML = "<i class='fas fa-lock'></i>";
    btnEditar.classList.add('boton-editar'); // ??
    nuevoDiv.appendChild(btnEditar);
    // se asigna evento a boton editar
    btnEditar.addEventListener("click", function () {
      if (inputItem.disabled === true) {
        inputItem.disabled = false;
        btnEditar.innerHTML = '<i class="fa-solid fa-lock-open"></i>';
      } else {
        inputItem.disabled = true;
        btnEditar.innerHTML = '<i class="fa-solid fa-lock"></i>';
      };
    })
    // se crea boton remover con iconos 
    const btnRemover = document.createElement('button')
    btnRemover.innerHTML = "<i class='fa-solid fa-trash'></i>";
    btnRemover.classList.add('boton-remover')
    nuevoDiv.appendChild(btnRemover);
    // se asigna evento a boton para eliminar
    btnRemover.addEventListener("click", function () {      
      removeTask(nuevaTarea)
      container.removeChild(nuevoDiv)
  })
}
}

// BONUS PRUEBA MODULO 4:
//- Cada vez que cree una nueva tarea, vaya guardándola en localStorage
//- Cuando cargue la página, muestre todas las tareas guardadas en localStorage

function saveTask(task) {
  let tasks = localStorage.getItem('tasks') || '[]'
  tasks = JSON.parse(tasks)
  tasks.push(task) 
  localStorage.setItem('tasks', JSON.stringify(tasks))
}

function removeTask(task) {
  let tasks = localStorage.getItem('tasks') || '[]'
  tasks = JSON.parse(tasks)
  tasks= tasks.filter(t => t !== task)
  localStorage.setItem('tasks', JSON.stringify(tasks))
} {
  let tasks = localStorage.getItem('tasks') || '[]'
  tasks = JSON.parse(tasks)
  for (let task of tasks) {
    new Item(task)
  }
}



// se crea funcion para comprobar si input tiene valor y si es así, se crea un nuevo Item
function chequearInput() {
  let tarea = input_tarea.value.trim()   // 1, Obtener el valor del input
  console.log(tarea)
  if (tarea.length !== 0) {         // verificar que este escrito
    let objetos = new Item(tarea);   // 2. Crear un nuevo item
    saveTask(tarea)
    clean()
  }
  else {
    alert("No se ha ingresado una tarea")
  }
}

function clean() {
  tarea_obj = document.querySelector('.input').value = "";
}


btn_agregar.addEventListener('click', chequearInput)
input_tarea.addEventListener('keyup', function (ev) {
  if (ev.keyCode == 13) {
    chequearInput()
  }

})







