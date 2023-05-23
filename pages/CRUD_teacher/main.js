import db from "../../index.js";
import { auth } from "../../index.js";
// import { app } from "../../index.js";

const $form = document.querySelector("#register_teacher_form");
const $alert = document.querySelector("[role='alert']");
$alert.classList.toggle("d-none");

$form.addEventListener("submit", (e) => {
  e.preventDefault();

  const data = new FormData($form);

  console.log(data.get("email"));

  if (data.get("password") !== data.get("confirm_password")) {
    $alert.classList.toggle("d-none");

    return;
  }

  auth
    .createUserWithEmailAndPassword(data.get("email"), data.get("password"))
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
      console.log(user);

      db.collection("Profesores")
        .add({
          nombre: data.get("nombre"),
          curso: data.get("curso"),
          email: data.get("email"),
          // password: data.get("password"),
          uid: user.uid,
        })
        .then((docRef) => {
          console.log("Document written with ID: ", docRef.id);
          window.location.href = "show_teacher.html";
        })
        .catch((error) => {
          console.error("Error adding document: ", error);
        });

      // window.location.href = "show_teacher.html";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
      console.log(errorCode, errorMessage);
    });
});
