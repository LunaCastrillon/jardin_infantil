import db from "../../index.js";

const $form = document.querySelector("#create_course_form");
const $btn_submit = document.querySelector("[type='submit']");

console.log($btn_submit);

//rellenar inputs

const $inputNombre = document.querySelector("#nombre_curso");
const $inputCantidad = document.querySelector("#cantidad_estudiantes");

const id = window.localStorage.getItem("id");

// Rellenar inputs si es editar

if (id) {
  $btn_submit.innerHTML = "Editar";

  db.collection("Cursos")
    .doc(id)
    .get()
    .then((doc) => {
      $inputNombre.value = doc.data().nombre_curso;
      $inputCantidad.value = doc.data().cantidad_estudiantes;
    });
}

// Crear o editar curso

$form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Editar curso

  if (id) {
    db.collection("Cursos")
      .doc(id)
      .update({
        nombre_curso: $inputNombre.value,
        cantidad_estudiantes: +$inputCantidad.value,
      })
      .then(() => {
        window.localStorage.removeItem("id");
        window.location.href = "show_course.html";
      });
    return;
  }

  // Crear curso

  const data = new FormData($form);

  db.collection("Cursos")
    .add({
      nombre_curso: data.get("nombre_curso"),
      Cantidad_estudiantes: +data.get("cantidad_estudiantes"),
    })
    .then(() => {
      window.location.href = "show_course.html";
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
});
