import db from "../../index.js";

const form = document.querySelector("#register_student_form");
const $btn_submit = document.querySelector("[type='submit']");

//rellenar inputs

const $inputNombre = document.querySelector("#nombre");
const $inputApellido = document.querySelector("#apellido");
const $inputEdad = document.querySelector("#edad");
const $inputAcudiente = document.querySelector("#acudiente");
const $inputCurso = document.querySelector("#curso");

const id = window.localStorage.getItem("id");

if (id) {
  $btn_submit.textContent = "Editar";

  db.collection("Estudiantes")
    .doc(id)
    .get()
    .then((doc) => {
      $inputNombre.value = doc.data().nombre;
      $inputApellido.value = doc.data().apellido;
      $inputEdad.value = doc.data().edad;
      $inputAcudiente.value = doc.data().acudiente;
      $inputCurso.value = doc.data().curso;
    });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (id) {
    const docRef = db.collection("Estudiantes").doc(id);

    docRef
      .update({
        nombre: $inputNombre.value,
        apellido: $inputApellido.value,
        edad: $inputEdad.value,
        acudiente: $inputAcudiente.value,
        curso: $inputCurso.value,
      })
      .then(() => {
        console.log("Datos actualizados correctamente");
        window.localStorage.removeItem("id");
        window.location.href = "show_student.html";
      })
      .catch((error) => {
        console.error("Error al actualizar los datos:", error);
      });

    return;
  }

  let data = new FormData(form);

  db.collection("Estudiantes")
    .add({
      nombre: data.get("nombre"),
      apellido: data.get("apellido"),
      edad: data.get("edad"),
      acudiente: data.get("acudiente"),
      curso: data.get("curso"),
      asistencia: [],
      notas: "",
    })
    .then(() => {
      console.log("Datos agregados correctamente");
      window.location.href = "show_student.html";
    })
    .catch((error) => {
      console.error("Error al agregar los datos:", error);
    });
});
