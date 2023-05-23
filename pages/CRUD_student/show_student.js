import db from "../../index.js";

import { listDocuments } from "../../utils/listar_documentos.js";
import { editDocument } from "../../utils/editar_documento.js";
import { removeDocument } from "../../utils/eliminar_documento.js";
import { registerNote } from "../../utils/registrar_notas.js";

listDocuments("Estudiantes", "Nombre estudiante", "nombre");

editDocument("Estudiantes", "form_student.html");

removeDocument("Estudiantes");

registerNote();
