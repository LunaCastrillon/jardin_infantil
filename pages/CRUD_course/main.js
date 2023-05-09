import db from '../../index.js'

const $form = document.querySelector('#create_course_form')

$form.addEventListener('submit', (e)=>{
    e.preventDefault()

    const data = new FormData($form)

    db.collection('Cursos').add({

        nombre_curso: data.get('nombre_curso'),
        profesor: data.get('profesor')

    })
})