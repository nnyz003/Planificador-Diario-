const listaTareas = document.getElementById("listaTareas");
const input = document.getElementById("tareaInput");

const sugerencias = [
  "Estudiar geometría vectorial 30 minutos",
  "Practicar portugués (escuchar + repetir)",
  "Ver 1 video educativo sobre sensores biomédicos",
  "Leer 1 capítulo de un libro técnico",
  "Hacer ejercicios de ICFES (lectura crítica)",
  "Pomodoro 1: Matemáticas (25 min)",
  "Revisión del progreso del día",
  "Subir cambios a GitHub",
  "Ver un video corto en inglés sin subtítulos",
  "Tomar agua cada hora",
  "Anotar 1 cosa que agradezco hoy",
  "Organizar mi espacio de estudio",
  "Leer una frase motivadora",
  "Respiración consciente (2 minutos)",
  "Escribir cómo me siento hoy"
];

let tareas = JSON.parse(localStorage.getItem("tareas")) || [];
tareas.forEach(t => crearElemento(t.texto, t.completada));

function agregarTarea() {
  const texto = input.value.trim();
  if (texto) {
    crearElemento(texto, false);
    tareas.push({ texto, completada: false });
    guardar();
    input.value = "";
  }
}

function agregarSugerencia() {
  const random = sugerencias[Math.floor(Math.random() * sugerencias.length)];
  input.value = random;
  agregarTarea();
}

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

function guardar() {
  localStorage.setItem("tareas", JSON.stringify(tareas));
}

document.getElementById("toggle-mode").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  document.body.classList.toggle("light-mode");
});
