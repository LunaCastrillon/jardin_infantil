import db from "../../index.js"

const form = document.querySelector('#register_student_form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let data = new FormData(form);

    db.collection('Estudiantes').add({
        nombre: data.get('nombre'),
        apellido: data.get('apellido'),
        edad: data.get('edad'),
        acudiente: data.get('acudiente'),
        curso: data.get('curso'),

    });
})
