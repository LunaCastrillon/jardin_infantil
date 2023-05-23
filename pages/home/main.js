import db from "../../index.js";
import { registerNote } from "../../utils/registrar_notas.js";

const $spanNombre = document.querySelector("#profesor");
const $spanCurso = document.querySelector("#curso");

let $btns = null;

const user = JSON.parse(window.localStorage.getItem("user"));

console.log(user);

db.collection("Profesores")
  .where("uid", "==", user.uid)
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      $spanNombre.textContent = doc.data().nombre;
      $spanCurso.textContent = doc.data().curso;

      const $listContainer = document.querySelector("#list-tab");

      db.collection("Estudiantes")
        .where("curso", "==", $spanCurso.textContent)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());
            $listContainer.innerHTML += `
            <a class="list-group-item list-group-item-action" data-bs-toggle="list" href="#" role="tab" [data-id]="${
              doc.id
            }"> Nombre estudiante: ${doc.data().nombre} ${
              doc.data().apellido
            }</a>
            <div class="btn-group" role="group" aria-label="Basic radio toggle button group-${
              doc.id
            }">
              <input type="radio" class="btn-check" name="btnradio-${
                doc.id
              }" id="btnradio1-${doc.id}" autocomplete="off" />
              <label class="btn btn-outline-primary" data-student="${
                doc.id
              }" for="btnradio1-${doc.id}">Asistio</label>
    
              <input type="radio" class="btn-check" name="btnradio-${
                doc.id
              }" id="btnradio2-${doc.id}" autocomplete="off" />
              <label class="btn btn-outline-primary" data-student="${
                doc.id
              }" for="btnradio2-${doc.id}">No Asistio</label>
    
              <input type="radio" class="btn-check" name="btnradio-${
                doc.id
              }" id="btnradio3-${doc.id}" autocomplete="off" />
              <label class="btn btn-outline-primary" data-student="${
                doc.id
              }" for="btnradio3-${doc.id}">Excusado</label>
            </div>
            </br>
          `;
          });
        });
    });
  })
  .catch((error) => {
    console.log("Error getting documents: ", error);
  });

registerNote();

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-outline-primary")) {
    console.log(e.target.textContent);
    console.log(e.target.getAttribute("data-student"));

    const student = e.target.getAttribute("data-student");
    // const asistencia = e.target.textContent + " " + new Date().toLocaleString();

    db.collection("Estudiantes")
      .doc(student)
      .get()
      .then((doc) => {
        if (doc.exists) {
          console.log("Document data:", doc.data());
          const asistencia = doc.data().asistencia || []; // Asegurarse de obtener un array existente o crear uno nuevo si no existe
          const registroAsistencia =
            e.target.textContent + " " + new Date().toLocaleString();

          if (asistencia.includes(registroAsistencia)) {
            console.log("Ya está en la lista");
          } else {
            asistencia.push(registroAsistencia);

            db.collection("Estudiantes")
              .doc(student)
              .update({
                asistencia: asistencia,
              })
              .then(() => {
                console.log("Document successfully updated!");
              })
              .catch((error) => {
                console.error("Error updating document: ", error);
              });
          }
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }
});
