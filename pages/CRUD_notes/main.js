import db from "../../index.js";

const $nombre = document.querySelector("#nombre");
const $tbody = document.querySelector("#tbody");

let id = window.localStorage.getItem("id");

// if (!id) window.location.href = "show_student.html";

db.collection("Estudiantes")
  .doc(id)
  .get()
  .then((doc) => {
    $nombre.innerHTML = doc.data().nombre;
  });

db.collection("Dimensiones")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      $tbody.innerHTML += `
                <tr>
                    <th scope="row">${doc.data().nombre_dimension}</th>
                    <td><div class="form-floating">
                    <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                    <label for="floatingTextarea">Ingrese la descripción para el estudiante...</label>
                  </div></td>
                    <td><button class="btn btn-success">Guardar</button></td>
                </tr>
            `;
    });
  });
