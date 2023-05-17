import db from "../../index.js";
import { auth } from "../../index.js";
// import { app } from "../../index.js";

const $form = document.querySelector("#register_teacher_form");

$form.addEventListener("submit", (e) => {
  e.preventDefault();

  const data = new FormData($form);

  console.log(data.get("email"));

  db.collection("Profesores").add({
    nombre: data.get("nombre"),
    email: data.get("email"),
    curso: data.get("curso"),
  });

  auth.createUserWithEmailAndPassword(data.get("email"), data.get("password"));
});
