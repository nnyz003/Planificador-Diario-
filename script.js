const listaTareas = document.getElementById("listaTareas");
const input = document.getElementById("tareaInput");

// Cargar tareas guardadas
let tareas = JSON.parse(localStorage.getItem("tareas")) || [];
tareas.forEach(t => crearElemento(t.texto, t.completada));

// Agregar tarea nueva
function agregarTarea() {
  const texto = input.value.trim();
  if (texto) {
    crearElemento(texto, false);
    tareas.push({ texto, completada: false });
    guardar();
    input.value = "";
  }
}

// Crear tarea visual
function crearElemento(texto, completada) {
  const li = document.createElement("li");
  li.textContent = texto;
  if (completada) li.classList.add("completada");

  li.addEventListener("click", () => {
    li.classList.toggle("completada");
    const index = Array.from(listaTareas.children).indexOf(li);
    tareas[index].completada = !tareas[index].completada;
    guardar();
  });

  listaTareas.appendChild(li);
}

// Guardar en localStorage
function guardar() {
  localStorage.setItem("tareas", JSON.stringify(tareas));
}

// Modo oscuro
document.getElementById("toggle-mode").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  document.body.classList.toggle("light-mode");
});
