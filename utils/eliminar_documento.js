import db from "../index.js";

export const removeDocument = (collection) => {
  const $btn_eliminar = document.querySelector("#btn_eliminar");

  $btn_eliminar.addEventListener("click", (e) => {
    e.preventDefault();

    let confirmed = confirm("¿Estás seguro de eliminar?");

    if (!confirmed) {
      return;
    }

    let $valuedit = document.querySelector(".active").getAttribute("[data-id]");
    // $valuedit = $valuedit.slice(countSlice);

    console.log($valuedit);

    if (document.title === "Listado profesores") {
      db.collection("Profesores")
        .doc($valuedit)
        .get()
        .then((doc) => {
          window.localStorage.setItem("uid", doc.data().uid);
          console.log(doc.data().uid);

          db.collection(collection)
            .doc($valuedit)
            .delete()
            .then(() => {
<<<<<<< HEAD
              console.log("Documento eliminado correctamente");
              confirm("eliminado correctamente");
=======
              alert("Documento eliminado correctamente");
>>>>>>> 3cccf7997ac8e7400d13f9f5785bd7de7d96a296
              window.location.reload();
            })
            .catch((error) => {
              alert("Error al obtener los documentos: " + error);
            });
        })
        .catch((error) => {
          alert("Error al obtener los documentos: " + error);
        });

      return;
    } else {
      db.collection(collection)
        .doc($valuedit)
        .delete()
        .then(() => {
          alert("Documento eliminado correctamente");
          window.location.reload();
        })
        .catch((error) => {
          alert("Error al obtener los documentos: " + error);
        });
    }
  });
};
