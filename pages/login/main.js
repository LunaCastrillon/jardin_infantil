import db, { auth } from "../../index.js";

const $form = document.querySelector("#form_login");

$form.addEventListener("submit", (event) => {
  event.preventDefault();

  let data = new FormData($form);

  auth.signInWithEmailAndPassword(data.get("email"), data.get("password"));

  auth.onAuthStateChanged((user) => {
    if (user) {
      window.localStorage.setItem("user", JSON.stringify(user));

      window.location.href = "../home/index.html";
    } else alert("usuario no encontrado");
  });
});
