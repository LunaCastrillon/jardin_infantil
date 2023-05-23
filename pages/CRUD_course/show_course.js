import { removeDocument } from "../../utils/eliminar_documento.js";
import { editDocument } from "../../utils/editar_documento.js";
import { listDocuments } from "../../utils/listar_documentos.js";
import { createDocument } from "../../utils/crear_documento.js";

//crear curso

createDocument("form_course.html");

//lista de cursos

listDocuments("Cursos", "nombre curso", "nombre_curso");

// Editar curso

editDocument("Cursos", "form_course.html");

// Eliminar curso

removeDocument("Cursos");
