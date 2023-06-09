import db from "../../index.js";

export const listDocuments = (collection, fieldHtml, field) => {
  const $listContainer = document.querySelector("#list-tab");

  db.collection(collection)
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        $listContainer.innerHTML += `
      <a class="list-group-item list-group-item-action" data-bs-toggle="list" href="#" role="tab" [data-id]="${
        doc.id
      }"> ${fieldHtml}: ${doc.data()[field]}</a>
      `;
      });
    });
};
