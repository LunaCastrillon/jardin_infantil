export const createDocument = (href) => {
  const $btn_crear = document.querySelector("#btn_crear");

  $btn_crear.addEventListener("click", (e) => {
    e.preventDefault();

    let id = window.localStorage.getItem("id");

    if (id) {
      window.localStorage.removeItem("id");
    }

    window.location.href = href;
  });
};
