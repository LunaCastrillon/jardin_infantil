import { editDocument } from "../../utils/editar_documento";
import { removeDocument } from "../../utils/eliminar_documento";
import { listDocuments } from "../../utils/listar_documentos";

const template = `

        `;

listDocuments("Dimensiones", "nombre", template);

editDocument("Dimensiones", "nombre", 9, "form_dimension.html");

removeDocument("Dimensiones", "nombre", 9);
