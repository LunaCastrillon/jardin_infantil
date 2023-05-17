import db from "../../index.js";

export const editDocument = (collection, field, countSlice, href) => {
  const $btn_editar = document.querySelector("#btn_editar");

  $btn_editar.addEventListener("click", (e) => {
    e.preventDefault();
    let $valuedit = document.querySelector(".active").textContent;
    $valuedit = $valuedit.slice(countSlice);

    const history = window.history;

    console.log($valuedit);

    db.collection(collection)
      .where(field, "==", $valuedit)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          window.localStorage.setItem("id", doc.id);
          window.location.href = href;
        });
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
        alert("Error getting documents: ", error);
      });
  });
};
