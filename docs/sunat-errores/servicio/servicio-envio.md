---
sidebar_position: 1
title: Servicio, autenticación y envío
description: Códigos SUNAT 0100–0499 (error de servicio).
slug: /sunat-errores/servicio-envio

---

# Servicio, autenticación y envío

:::danger[Error de servicio]
Estos códigos impiden el envío. El comprobante **no se valida** todavía. Revisa usuario SOL, ZIP y disponibilidad de SUNAT, y vuelve a enviar.
:::

Fallos al autenticar, armar el ZIP, procesar el lote o grabar el ticket. El comprobante **no llega a validarse**: hay que reenviar cuando el servicio responda.

**Rango:** `0100` – `0499` · **57** códigos.

| Código | Descripción |
| --- | --- |
| `0100` | El sistema no puede responder su solicitud. Intente nuevamente o comuníquese con su Administrador |
| `0101` | El encabezado de seguridad es incorrecto |
| `0102` | Usuario o contraseña incorrectos |
| `0103` | El Usuario ingresado no existe |
| `0104` | La Clave ingresada es incorrecta |
| `0105` | El Usuario no está activo |
| `0106` | El Usuario no es válido |
| `0109` | El sistema no puede responder su solicitud. (El servicio de autenticación no está disponible) |
| `0110` | No se pudo obtener la informacion del tipo de usuario |
| `0111` | No tiene el perfil para enviar comprobantes electronicos |
| `0112` | El usuario debe ser secundario |
| `0113` | El usuario no esta afiliado a Factura Electronica |
| `0125` | No se pudo obtener la constancia |
| `0126` | El ticket no le pertenece al usuario |
| `0127` | El ticket no existe |
| `0130` | El sistema no puede responder su solicitud. (No se pudo obtener el ticket de proceso) |
| `0131` | El sistema no puede responder su solicitud. (No se pudo grabar el archivo en el directorio) |
| `0132` | El sistema no puede responder su solicitud. (No se pudo grabar escribir en el archivo zip) |
| `0133` | El sistema no puede responder su solicitud. (No se pudo grabar la entrada del log) |
| `0134` | El sistema no puede responder su solicitud. (No se pudo grabar en el storage) |
| `0135` | El sistema no puede responder su solicitud. (No se pudo encolar el pedido) |
| `0136` | El sistema no puede responder su solicitud. (No se pudo recibir una respuesta del batch) |
| `0137` | El sistema no puede responder su solicitud. (Se obtuvo una respuesta nula) |
| `0138` | El sistema no puede responder su solicitud. (Error en Base de Datos) |
| `0151` | El nombre del archivo ZIP es incorrecto |
| `0152` | No se puede enviar por este método un archivo de resumen |
| `0153` | No se puede enviar por este método un archivo por lotes |
| `0154` | El RUC del archivo no corresponde al RUC del usuario o el proveedor no esta autorizado a enviar comprobantes del contribuyente |
| `0155` | El archivo ZIP esta vacio |
| `0156` | El archivo ZIP esta corrupto |
| `0157` | El archivo ZIP no contiene comprobantes |
| `0158` | El archivo ZIP contiene demasiados comprobantes para este tipo de envío |
| `0159` | El nombre del archivo XML es incorrecto |
| `0160` | El archivo XML esta vacio |
| `0161` | El nombre del archivo XML no coincide con el nombre del archivo ZIP |
| `0200` | No se pudo procesar su solicitud. (Ocurrio un error en el batch) |
| `0201` | No se pudo procesar su solicitud. (Llego un requerimiento nulo al batch) |
| `0202` | No se pudo procesar su solicitud. (No llego información del archivo ZIP) |
| `0203` | No se pudo procesar su solicitud. (No se encontro archivos en la informacion del archivo ZIP) |
| `0204` | No se pudo procesar su solicitud. (Este tipo de requerimiento solo acepta 1 archivo) |
| `0250` | No se pudo procesar su solicitud. (Ocurrio un error desconocido al hacer unzip) |
| `0251` | No se pudo procesar su solicitud. (No se pudo crear un directorio para el unzip) |
| `0252` | No se pudo procesar su solicitud. (No se encontro archivos dentro del zip) |
| `0253` | No se pudo procesar su solicitud. (No se pudo comprimir la constancia) |
| `0300` | No se encontró la raíz documento xml |
| `0301` | Elemento raiz del xml no esta definido |
| `0302` | Codigo del tipo de comprobante no registrado |
| `0303` | No existe el directorio de schemas |
| `0304` | No existe el archivo de schema |
| `0305` | El sistema no puede procesar el archivo xml |
| `0306` | No se puede leer (parsear) el archivo XML |
| `0307` | No se pudo recuperar la constancia |
| `0400` | No tiene permiso para enviar casos de pruebas |
| `0401` | El caso de prueba no existe |
| `0402` | La numeracion o nombre del documento ya ha sido enviado anteriormente |
| `0403` | El documento afectado por la nota no existe |
| `0404` | El documento afectado por la nota se encuentra rechazado |

## Códigos SOAP / envelope

SUNAT a veces devuelve el error con prefijo SOAP en lugar del número. El significado es el mismo que el código numérico equivalente.

| Código | Descripción |
| --- | --- |
| `env:Server` | Internal Error (from server) |
| `soap:Server` | 0100 |
| `soap-env:Client.0132` | El sistema no puede responder su solicitud. (No se pudo grabar escribir en el archivo zip) |
| `soap-env:Client.0109` | El sistema no puede responder su solicitud. (El servicio de autenticación no está disponible) |
| `soap-env:Client.0402` | La numeracion o nombre del documento ya ha sido enviado anteriormente |
| `soap-env:Client.0200` | No se pudo procesar su solicitud. (Ocurrio un error en el batch) |
