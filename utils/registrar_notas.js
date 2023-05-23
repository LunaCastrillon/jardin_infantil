import db from "../index.js";

export const registerNote = () => {
  const $btnNotas = document.querySelector("#btn_notas");

  $btnNotas.addEventListener("click", () => {
    let studentId = document.querySelector(".active").getAttribute("[data-id]");

    console.log(studentId);

    db.collection("Estudiantes")
      .doc(studentId)
      .get()
      .then((doc) => {
        window.localStorage.setItem("id_student", doc.id);
        window.location.href = "../CRUD_notes/show_note.html";
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
        alert("Error getting documents: ", error);
      });
  });
};
