import { createDocument } from "../../utils/crear_documento.js";
import { editDocument } from "../../utils/editar_documento.js";
import { removeDocument } from "../../utils/eliminar_documento.js";
import { listDocuments } from "./../../utils/listar_documentos.js";

createDocument("form_dimension.html");

listDocuments("Dimensiones", "nombre dimension", "nombre_dimension");

editDocument("Dimensiones", "form_dimension.html");

removeDocument("Dimensiones");
