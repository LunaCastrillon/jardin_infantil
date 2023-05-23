import db from "../../index.js";

const $nombre = document.querySelector("#nombre");
const $tbody = document.querySelector("#tbody");

let id = window.localStorage.getItem("id_student");

// if (!id) window.location.href = "show_student.html";

db.collection("Dimensiones")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((docDimension) => {
      $tbody.innerHTML += `
                <tr>
                    <th scope="row">${docDimension.data().nombre_dimension}</th>
                    <td><div class="form-floating">
                    <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea" data-id="${
                      docDimension.id
                    }" data-name="${
        docDimension.data().nombre_dimension
      }"></textarea>
                    <label for="floatingTextarea">Ingrese la descripción para el estudiante...</label>
                  </div></td>
                    <td><button class="btn btn-success" id="${
                      docDimension.data().nombre_dimension
                    }" [data-id]="${docDimension.id}">Guardar</button></td>
                </tr>
            `;
    });
  });

db.collection("Estudiantes")
  .doc(id)
  .get()
  .then((doc) => {
    $nombre.innerHTML = doc.data().nombre;

    document.querySelectorAll("textarea").forEach((textarea) => {
      let dimension = textarea.getAttribute("data-name");
      textarea.value = doc.data().notas[dimension] || "";
    });
  });

document.addEventListener("click", (e) => {
  if (e.target.matches(".btn-success")) {
    let dimension = e.target.id;
    let dimensionId = e.target.getAttribute("[data-id]");
    let descripcion = document.querySelector(
      `[data-id="${dimensionId}"]`
    ).value;

    console.log(dimension, descripcion);

    db.collection("Estudiantes")
      .doc(id)
      .update({
        [`notas.${dimension}`]: descripcion,
      })
      .then(() => {
        console.log("Nota guardada");
      })
      .catch((error) => {
        console.error("Error al guardar la nota: ", error);
      });
  }
});
