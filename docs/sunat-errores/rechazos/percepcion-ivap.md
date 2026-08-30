---
sidebar_position: 10
title: Percepción, IVAP y receptor
description: Códigos SUNAT 2800–2899 (rechazo).
slug: /sunat-errores/percepcion-ivap

---

# Percepción, IVAP y receptor

:::danger[Rechazo]
SUNAT **rechaza** el comprobante. Hay que corregir el XML o los datos y volver a emitirlo (con otra numeración si el número ya quedó informado).
:::

Agente de percepción, IVAP, documento de identidad del receptor y catálogos asociados.

**Rango:** `2800` – `2899` · **84** códigos.

| Código | Descripción |
| --- | --- |
| `2800` | El dato ingresado en el tipo de documento de identidad del receptor no esta permitido. |
| `2801` | El DNI ingresado no cumple con el estandar. |
| `2802` | El dato ingresado como numero de documento de identidad del receptor no cumple con el formato establecido |
| `2803` | ID - No cumple con el formato UUID |
| `2804` | La fecha de recepcion del comprobante por OSE, no debe de ser mayor a la fecha de recepcion de SUNAT |
| `2805` | El XML no contiene el tag IssueTime |
| `2806` | IssueTime - El dato ingresado no cumple con el patrón hh:mm:ss.sssss |
| `2807` | El XML no contiene el tag ResponseDate |
| `2808` | ResponseDate - El dato ingresado no cumple con el patrón YYYY-MM-DD |
| `2809` | La fecha de recepcion del comprobante por OSE, no debe de ser mayor a la fecha de comprobacion del OSE |
| `2810` | La fecha de comprobacion del comprobante en OSE no puede ser mayor a la fecha de recepcion en SUNAT |
| `2811` | El XML no contiene el tag ResponseTime |
| `2812` | ResponseTime - El dato ingresado no cumple con el patrón hh:mm:ss.sssss |
| `2813` | El XML no contiene el tag o no existe información del Número de documento de identificación del que envía el CPE (emisor o PSE) |
| `2814` | El valor ingresado como Número de documento de identificación del que envía el CPE (emisor o PSE) es incorrecto |
| `2816` | El XML no contiene el atributo schemeID o no existe información del Tipo de documento de identidad del que envía el CPE (emisor o PSE) |
| `2817` | El valor ingresado como Tipo de documento de identidad del que envía el CPE (emisor o PSE) es incorrecto |
| `2818` | El XML no contiene el atributo schemeAgencyName o no existe información del Tipo de documento de identidad del que envía el CPE (emisor o PSE) |
| `2819` | El valor ingresado en el atributo schemeAgencyName del Tipo de documento de identidad del que envía el CPE (emisor o PSE) es incorrecto |
| `2820` | El XML no contiene el atributo schemeURI o no existe información del Tipo de documento de identidad del que envía el CPE (emisor o PSE) |
| `2821` | El valor ingresado en el atributo schemeURI del Tipo de documento de identidad del que envía el CPE (emisor o PSE) es incorrecto |
| `2822` | El XML no contiene el tag o no existe información del Número de documento de identificación del OSE |
| `2823` | El valor ingresado como Número de documento de identificación del OSE es incorrecto |
| `2824` | El certificado digital con el que se firma el CDR OSE no corresponde con el RUC del OSE informado |
| `2825` | El Número de documento de identificación del OSE informado no esta registrado en el padron. |
| `2826` | El XML no contiene el atributo schemeID o no existe información del Tipo de documento de identidad del OSE |
| `2827` | El valor ingresado como Tipo de documento de identidad del OSE es incorrecto |
| `2828` | El XML no contiene el atributo schemeAgencyName o no existe información del Tipo de documento de identidad del OSE |
| `2829` | El valor ingresado en el atributo schemeAgencyName del Tipo de documento de identidad del OSE es incorrecto |
| `2830` | El XML no contiene el atributo schemeURI o no existe información del Tipo de documento de identidad del OSE |
| `2831` | El valor ingresado en el atributo schemeURI del Tipo de documento de identidad del OSE es incorrecto |
| `2832` | El XML no contiene el tag o no existe información del Código de Respuesta |
| `2833` | El valor ingresado como Código de Respuesta es incorrecto |
| `2834` | El XML no contiene el atributo listAgencyName o no existe información del Código de Respuesta |
| `2835` | El valor ingresado en el atributo listAgencyName del Código de Respuesta es incorrecto |
| `2836` | El XML no contiene el tag o no existe información de la Descripción de la Respuesta |
| `2837` | El valor ingresado como Descripción de la Respuesta es incorrecto |
| `2838` | El valor ingresado como Código de observación es incorrecto |
| `2839` | El XML no contiene el atributo listURI o no existe información del Código de observación |
| `2840` | El valor ingresado en el atributo listURI del Código de observación es incorrecto |
| `2841` | El XML no contiene el tag o no existe información de la Descripción de la observación |
| `2842` | El valor ingresado como Descripción de la observación es incorrecto |
| `2843` | Se ha encontrado mas de una Descripción de la observación, tag cac:Response/cac:Status/cbc:StatusReason |
| `2844` | No se encontro el tag cbc:StatusReasonCode cuando ingresó la Descripción de la observación |
| `2845` | El XML contiene mas de un elemento cac:DocumentReference |
| `2846` | El XML no contiene informacion en el tag cac:DocumentReference/cbc:ID |
| `2848` | El valor ingresado como Serie y número del comprobante no corresponde con el del comprobante |
| `2849` | El XML no contiene el tag o no existe información de la Fecha de emisión del comprobante |
| `2851` | El valor ingresado como Fecha de emisión del comprobante no corresponde con el del comprobante |
| `2852` | El XML no contiene el tag o no existe información de la Hora de emisión del comprobante |
| `2853` | El valor ingresado como Hora de emisión del comprobante no cumple con el patrón hh:mm:ss.sssss |
| `2854` | El valor ingresado como Hora de emisión del comprobante no corresponde con el del comprobante |
| `2855` | El XML no contiene el tag o no existe información del Tipo de comprobante |
| `2856` | El valor ingresado como Tipo de comprobante es incorrecto |
| `2857` | El valor ingresado como Tipo de comprobante no corresponde con el del comprobante |
| `2858` | El XML no contiene el tag o no existe información del Hash del comprobante |
| `2859` | El valor ingresado como Hash del comprobante es incorrecto |
| `2860` | El valor ingresado como Hash del comprobante no corresponde con el del comprobante |
| `2861` | El XML no contiene el tag o no existe información del Número de documento de identificación del emisor |
| `2862` | El valor ingresado como Número de documento de identificación del emisor es incorrecto |
| `2863` | El valor ingresado como Número de documento de identificación del emisor no corresponde con el del comprobante |
| `2864` | El XML no contiene el atributo o no existe información del Tipo de documento de identidad del emisor |
| `2865` | El valor ingresado como Tipo de documento de identidad del emisor es incorrecto |
| `2866` | El valor ingresado como Tipo de documento de identidad del emisor no corresponde con el del comprobante |
| `2867` | El XML no contiene el tag o no existe información del Número de documento de identificación del receptor |
| `2868` | El valor ingresado como Número de documento de identificación del receptor es incorrecto |
| `2869` | El valor ingresado como Número de documento de identificación del receptor no corresponde con el del comprobante |
| `2870` | El XML no contiene el atributo o no existe información del Tipo de documento de identidad del receptor |
| `2871` | El valor ingresado como Tipo de documento de identidad del receptor es incorrecto |
| `2872` | El valor ingresado como Tipo de documento de identidad del receptor no corresponde con el del comprobante |
| `2873` | El PSE informado no se encuentra vinculado con el emisor del comprobante en la fecha de comprobación |
| `2874` | El Número de documento de identificación del OSE informado no se encuentra vinculado al emisor del comprobante en la fecha de comprobación |
| `2875` | ID - El dato ingresado no cumple con el formato R#-fecha-correlativo |
| `2876` | La fecha de recepción del comprobante por OSE debe ser mayor a la fecha de emisión del comprobante enviado |
| `2880` | Es obligatorio ingresar el peso bruto total de la guía |
| `2881` | Es obligatorio indicar la unidad de medida del Peso Total de la guía |
| `2883` | Es obligatorio indicar la unidad de medida del ítem |
| `2891` | La tasa de percepción no existe en el catálogo |
| `2892` | El valor del tag no cumple con el formato establecido |
| `2893` | El valor no cumple con el formato establecido o es menor o igual a cero (0) |
| `2894` | El valor del tag no cumple con el formato establecido |
| `2895` | El valor no cumple con el formato establecido o es menor o igual a cero (0) |
| `2896` | El código ingresado como estado del ítem no existe en el catálogo |
| `2897` | El valor no cumple con el formato establecido o es menor o igual a cero (0) |
