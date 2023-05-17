import db from "../../index.js";

import { listDocuments } from "../../utils/listar_documentos.js";
import { editDocument } from "../../utils/editar_documento.js";
import { removeDocument } from "../../utils/eliminar_documento.js";

listDocuments("Estudiantes", "nombre");

editDocument("Estudiantes", "nombre", 9, "form_student.html");

removeDocument("Estudiantes", "nombre", 9);

const $btnNotas = document.querySelector("#btn_notas");

$btnNotas.addEventListener("click", () => {
  let valuedit = document.querySelector(".active").textContent;
  valuedit = valuedit.slice(9);

  console.log(valuedit);

  db.collection("Estudiantes")
    .where("nombre", "==", valuedit)
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        window.localStorage.setItem("id", doc.id);
      });
      window.location.href = "../CRUD_notes/show_note.html";
    });
});
