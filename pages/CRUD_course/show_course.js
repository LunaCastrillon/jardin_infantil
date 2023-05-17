import { removeDocument } from "../../utils/eliminar_documento.js";
import { editDocument } from "../../utils/editar_documento.js";
import { listDocuments } from "../../utils/listar_documentos.js";
import { createDocument } from "../../utils/crear_documento.js";

//crear curso

createDocument("form_course.html");

//lista de cursos

listDocuments("Cursos", "nombre_curso");

// Editar curso

editDocument("Cursos", "nombre_curso", 14, "form_course.html");

// Eliminar curso

removeDocument("Cursos", "nombre_curso", 14);
