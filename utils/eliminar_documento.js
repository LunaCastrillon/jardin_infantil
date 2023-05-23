import db from "../../index.js";

export const removeDocument = (collection, field, countSlice) => {
  const $btn_eliminar = document.querySelector("#btn_eliminar");

  $btn_eliminar.addEventListener("click", (e) => {
    e.preventDefault();

    let confirmed = confirm("¿Estás seguro de eliminar?");

    if (!confirmed) {
      return;
    }

    let $valuedit = document.querySelector(".active").textContent;
    $valuedit = $valuedit.slice(countSlice);

    console.log($valuedit);

    db.collection(collection)
      .where(field, "==", $valuedit)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          console.log(doc.id, " => ", doc.data());
          db.collection(collection)
            .doc(doc.id)
            .delete()
            .then(() => {
              console.log("Documento eliminado correctamente");
              confirm("eliminado correctamente");
              window.location.reload();
            })
            .catch((error) => {
              alert("Error al eliminar el documento: " + error);
            });
        });
      })
      .catch((error) => {
        alert("Error al obtener los documentos: " + error);
      });
  });
};
