---
sidebar_position: 1
title: Estructura del XML (1000–1999)
description: Códigos SUNAT 1000–1999 (rechazo).
slug: /sunat-errores/estructura-xml

---

# Estructura del XML (1000–1999)

:::danger[Rechazo]
SUNAT **rechaza** el comprobante. Hay que corregir el XML o los datos y volver a emitirlo (con otra numeración si el número ya quedó informado).
:::

El XML no cumple el formato UBL: falta un tag, la serie no calza con el nombre del archivo, o hay datos de guía/anticipo incompletos. El comprobante **queda rechazado**.

**Rango:** `1000` – `1999` · **80** códigos.

| Código | Descripción |
| --- | --- |
| `1001` | ID - El dato SERIE-CORRELATIVO no cumple con el formato de acuerdo al tipo de comprobante |
| `1002` | El XML no contiene informacion en el tag ID |
| `1003` | InvoiceTypeCode - El valor del tipo de documento es invalido o no coincide con el nombre del archivo |
| `1004` | El XML no contiene el tag o no existe informacion de InvoiceTypeCode |
| `1005` | CustomerAssignedAccountID - El dato ingresado no cumple con el estandar |
| `1006` | El XML no contiene el tag o no existe informacion de CustomerAssignedAccountID del emisor del documento |
| `1007` | El dato ingresado no cumple con el estandar |
| `1008` | El XML no contiene el tag o no existe informacion en tipo de documento del emisor. |
| `1009` | IssueDate - El dato ingresado no cumple con el patron YYYY-MM-DD |
| `1010` | El XML no contiene el tag IssueDate |
| `1011` | IssueDate- El dato ingresado no es valido |
| `1012` | ID - El dato ingresado no cumple con el patron SERIE-CORRELATIVO |
| `1013` | El XML no contiene informacion en el tag ID |
| `1014` | CustomerAssignedAccountID - El dato ingresado no cumple con el estandar |
| `1015` | El XML no contiene el tag o no existe informacion de CustomerAssignedAccountID del emisor del documento |
| `1016` | AdditionalAccountID - El dato ingresado no cumple con el estandar |
| `1017` | El XML no contiene el tag AdditionalAccountID del emisor del documento |
| `1018` | IssueDate - El dato ingresado no cumple con el patron YYYY-MM-DD |
| `1019` | El XML no contiene el tag IssueDate |
| `1020` | IssueDate- El dato ingresado no es valido |
| `1021` | Error en la validacion de la nota de credito |
| `1022` | La serie o numero del documento modificado por la Nota Electrónica no cumple con el formato establecido |
| `1023` | No se ha especificado el tipo de documento modificado por la Nota electronica |
| `1024` | CustomerAssignedAccountID - El dato ingresado no cumple con el estandar |
| `1025` | El XML no contiene el tag o no existe informacion de CustomerAssignedAccountID del emisor del documento |
| `1026` | AdditionalAccountID - El dato ingresado no cumple con el estandar |
| `1027` | El XML no contiene el tag AdditionalAccountID del emisor del documento |
| `1028` | IssueDate - El dato ingresado no cumple con el patron YYYY-MM-DD |
| `1029` | El XML no contiene el tag IssueDate |
| `1030` | IssueDate- El dato ingresado no es valido |
| `1031` | Error en la validacion de la nota de debito |
| `1032` | El comprobante ya esta informado y se encuentra con estado anulado o rechazado |
| `1033` | El comprobante fue registrado previamente con otros datos |
| `1034` | Número de RUC del nombre del archivo no coincide con el consignado en el contenido del archivo XML |
| `1035` | Numero de Serie del nombre del archivo no coincide con el consignado en el contenido del archivo XML |
| `1036` | Número de documento en el nombre del archivo no coincide con el consignado en el contenido del XML |
| `1037` | El XML no contiene el tag o no existe informacion de RegistrationName del emisor del documento |
| `1038` | RegistrationName - El nombre o razon social del emisor no cumple con el estandar |
| `1039` | Solo se pueden recibir notas electronicas que modifican facturas |
| `1040` | El tipo de documento modificado por la nota electronica no es valido |
| `1041` | cac:PrepaidPayment/cbc:ID - El tag no contiene el atributo @SchemaID. que indica el tipo de documento que realiza el anticipo |
| `1042` | cac:PrepaidPayment/cbc:InstructionID – El tag no contiene el atributo @SchemaID. Que indica el tipo de documento del emisor del documento del anticipo. |
| `1043` | cac:OriginatorDocumentReference/cbc:ID - El tag no contiene el atributo @SchemaID. Que indica el tipo de documento del originador del documento electrónico. |
| `1044` | cac:PrepaidPayment/cbc:InstructionID – El dato ingresado no cumple con el estándar. |
| `1045` | cac:OriginatorDocumentReference/cbc:ID – El dato ingresado no cumple con el estándar. |
| `1046` | cbc:Amount - El dato ingresado no cumple con el estándar. |
| `1047` | cbc:Quantity - El dato ingresado no cumple con el estándar. |
| `1048` | El XML no contiene el tag o no existe información de PrepaidAmount para un documento con anticipo. |
| `1049` | ID - Serie y Número del archivo no coincide con el consignado en el contenido del XML. |
| `1050` | El XML no contiene informacion en el tag DespatchAdviceTypeCode. |
| `1051` | DespatchAdviceTypeCode - El valor del tipo de guía es inválido. |
| `1052` | DespatchAdviceTypeCode - No coincide con el consignado en el contenido del XML. |
| `1053` | cac:OrderReference - El XML no contiene informacion en serie y numero dado de baja (cbc:ID). |
| `1054` | cac:OrderReference - El valor en numero de documento no cumple con un formato valido (SERIE-NUMERO). |
| `1055` | cac:OrderReference - Numero de serie del documento no cumple con un formato valido (EG01 ó TXXX). |
| `1056` | cac:OrderReference - El XML no contiene informacion en el código de tipo de documento (cbc:OrderTypeCode). |
| `1057` | cac:AdditionalDocumentReference - El XML no contiene el tag o no existe información en el numero de documento adicional (cbc:ID). |
| `1058` | cac:AdditionalDocumentReference - El XML no contiene el tag o no existe información en el tipo de documento adicional (cbc:DocumentTypeCode). |
| `1059` | El XML no contiene firma digital. |
| `1060` | cac:Shipment - El XML no contiene el tag o no existe informacion del numero de RUC del Remitente (cac:). |
| `1061` | El numero de RUC del Remitente no existe. |
| `1062` | El XML no contiene el atributo o no existe informacion del motivo de traslado. |
| `1063` | El valor ingresado como motivo de traslado no es valido. |
| `1064` | El XML no contiene el atributo o no existe informacion en el tag cac:DespatchLine de bienes a transportar. |
| `1065` | El XML no contiene el atributo o no existe informacion en modalidad de transporte. |
| `1066` | El XML no contiene el atributo o no existe informacion de datos del transportista. |
| `1067` | El XML no contiene el atributo o no existe información de vehiculos. |
| `1068` | El XML no contiene el atributo o no existe información de conductores. |
| `1069` | El XML no contiene el atributo o no existe información de la fecha de inicio de traslado o fecha de entrega del bien al transportista. |
| `1070` | El valor ingresado como fecha de inicio o fecha de entrega al transportista no cumple con el estandar (YYYY-MM-DD). |
| `1071` | El valor ingresado como fecha de inicio o fecha de entrega al transportista no es valido. |
| `1072` | Starttime - El dato ingresado no cumple con el patron HH:mm:ss.SZ. |
| `1073` | StartTime - El dato ingresado no es valido. |
| `1074` | cac:Shipment - El XML no contiene o no existe información en punto de llegada (cac:DeliveryAddress). |
| `1075` | cac:Shipment - El XML no contiene o no existe información en punto de partida (cac:OriginAddress). |
| `1076` | El XML no contiene el atributo o no existe información de sustento de traslado de mercaderias para el tipo de operación. |
| `1077` | El XML contiene el tag de sustento de traslado de mercaderias que no corresponde al tipo de operación. |
| `1078` | El emisor no se encuentra autorizado a emitir en el SEE-Desde los sistemas del contribuyente |
| `1079` | Solo puede enviar el comprobante en un resumen diario |
| `1080` | No puede enviar 'Recibos de servicios publicos' y sus notas asociadas por SEE-Desde los sistemas del contribuyente |
