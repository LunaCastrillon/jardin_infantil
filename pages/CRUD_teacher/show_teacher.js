import { createDocument } from "../../utils/crear_documento.js";
import { editDocument } from "../../utils/editar_documento.js";
import { removeDocument } from "../../utils/eliminar_documento.js";
import { listDocuments } from "../../utils/listar_documentos.js";
import { auth } from "./../../index.js";

const $btnEdit = document.querySelector("#btn_edit");
const $btnRemove = document.querySelector("#btn_eliminar");

createDocument("form_teacher.html");
listDocuments("Profesores", "Nombre profesor", "nombre");
editDocument("Profesores", "form_teacher.html");
removeDocument("Profesores");

$btnRemove.addEventListener("click", (e) => {
  e.preventDefault();

  const uid = window.localStorage.getItem("uid");

  if (uid) {
    auth
      .deleteUser(uid)
      .then(() => {
        console.log("Usuario eliminado correctamente.");
        window.localStorage.removeItem("uid");
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error al eliminar el usuario:", error);
      });
  } else {
    console.log("No se encontró UID de usuario en el almacenamiento local.");
  }
});
