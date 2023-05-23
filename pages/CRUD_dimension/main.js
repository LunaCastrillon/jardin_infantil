import db from "../../index.js";

const $form = document.querySelector("#create_course_form");

const $btn_submit = document.querySelector("[type='submit']");

//rellenar inputs

const $inputNombre = document.querySelector("#nombre_dimension");

const id = window.localStorage.getItem("id");

// Rellenar inputs si es editar

if (id) {
  $btn_submit.textContent = "Editar";

  db.collection("Dimensiones")
    .doc(id)
    .get()
    .then((doc) => {
      $inputNombre.value = doc.data().nombre_dimension;
    });
}

// Crear o editar dimension

$form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Editar dimension

  if (id) {
    db.collection("Dimensiones")
      .doc(id)
      .update({
        nombre_dimension: $inputNombre.value,
      })
      .then(() => {
        window.localStorage.removeItem("id");
        window.location.href = "show_dimension.html";
      });
    return;
  }

  let data = new FormData($form);

  console.log(data.get("nombre_dimension"));

  db.collection("Dimensiones")
    .add({
      nombre_dimension: data.get("nombre_dimension"),
    })
    .then(() => {
      window.location.href = "show_dimension.html";
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
});
