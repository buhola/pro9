---
sidebar_position: 13
title: Tributos y tipos de operación
description: Códigos SUNAT 3100–3199 (rechazo).
slug: /sunat-errores/tributos-operaciones

---

# Tributos y tipos de operación

:::danger[Rechazo]
SUNAT **rechaza** el comprobante. Hay que corregir el XML o los datos y volver a emitirlo (con otra numeración si el número ya quedó informado).
:::

FISE, detracción, percepción, códigos de bien/servicio y coherencia con el tipo de operación (catálogo 51).

**Rango:** `3100` – `3199` · **100** códigos.

| Código | Descripción |
| --- | --- |
| `3100` | El dato ingresado como codigo de tributo por linea es invalido para tipo de operación. |
| `3101` | El factor de afectación de IGV por linea debe ser igual a 0.00 para Exoneradas, Inafectas, Exportación, Gratuitas de exoneradas o Gratuitas de inafectas. |
| `3102` | El dato ingresado como factor de afectacion por linea no cumple con el formato establecido. |
| `3103` | El producto del factor y monto base de la afectación del IGV/IVAP no corresponde al monto de afectacion de linea. |
| `3104` | El factor de afectación de ISC por linea debe ser diferente a 0.00. |
| `3105` | El XML debe contener al menos un tributo por linea de afectacion por IGV (Gravada, Exonerada, Inafecta, Exportación) |
| `3106` | El XML contiene mas de un tributo por linea (Gravado, Exonerado, Inafecto, Exportación) |
| `3107` | El dato ingresado como codigo de tributo global es invalido para tipo de operación. |
| `3108` | El producto del factor y monto base de la afectación del ISC no corresponde al monto de afectacion de linea. |
| `3109` | El producto del factor y monto base de la afectación de otros tributos no corresponde al monto de afectacion de linea. |
| `3110` | El monto de afectacion de IGV por linea debe ser igual a 0.00 para Exoneradas, Inafectas, Exportación, Gratuitas de exoneradas o Gratuitas de inafectas. |
| `3111` | El monto de afectación de IGV por linea debe ser diferente a 0.00. |
| `3112` | La sumatoria de los IGV de operaciones gratuitas de la línea (codigo tributo 9996) no corresponden al total |
| `3113` | El xml contiene información FISE que no corresponde al tipo de operación. |
| `3114` | El dato ingresado como indicador de cargo/descuento no corresponde al valor esperado. |
| `3115` | El dato ingresado como unidad de medida de cantidad de especie vendidas no corresponde al valor esperado. |
| `3116` | El XML no contiene el tag o no existe información del ubigeo de punto de origen en Detracciones - Servicio de transporte de carga. |
| `3117` | El XML no contiene el tag o no existe información de la dirección del punto de origen en Detracciones - Servicio de transporte de carga. |
| `3118` | El XML no contiene el tag o no existe información del ubigeo de punto de destino en Detracciones - Servicio de transporte de carga. |
| `3119` | El XML no contiene el tag o no existe información de la dirección del punto de destino en Detracciones - Servicio de transporte de carga. |
| `3120` | El XML no contiene el tag o no existe información del Detalle del viaje en Detracciones - Servicio de transporte de carga. |
| `3121` | El XML no contiene el tag o no existe información del tipo de valor referencial en Detracciones - Servicios de transporte de carga. |
| `3122` | El XML no contiene el tag o no existe información del monto del valor referencial en Detracciones - Servicios de transporte de carga. |
| `3123` | El dato ingresado como monto valor referencial en Detracciones - Servicios de transporte de carga no cumple con el formato establecido. |
| `3124` | Detracciones - Servicio de transporte de carga, debe tener un (y solo uno) Valor Referencial del Servicio de Transporte. |
| `3125` | Detracciones - Servicio de transporte de carga, debe tener un (y solo uno) Valor Referencial sobre la carga efectiva. |
| `3126` | Detracciones - Servicio de transporte de carga, debe tener un (y solo uno) Valor Referencial sobre la carga util nominal. |
| `3127` | El XML no contiene el tag o no existe información del Codigo de BBSS de detracción para el tipo de operación. |
| `3128` | El XML contiene información de codigo de bien y servicio de detracción que no corresponde al tipo de operación. |
| `3129` | El dato ingresado como codigo de BBSS de detracción no corresponde al valor esperado. |
| `3130` | El XML no contiene el tag de nombre de embarcación en Detracciones para recursos hidrobiologicos. |
| `3131` | El XML no contiene el tag de tipo de especie vendidas en Detracciones para recursos hidrobiologicos. |
| `3132` | El XML no contiene el tag de lugar de descarga en Detracciones para recursos hidrobiologicos. |
| `3133` | El XML no contiene el tag de cantidad de especies vendidas en Detracciones para recursos hidrobiologicos. |
| `3134` | El XML no contiene el tag de fecha de descarga en Detracciones para recursos hidrobiologicos. |
| `3135` | El XML no contiene tag de la cantidad del concepto por linea. |
| `3136` | El XML no contiene el tag de numero de documentos del huesped. |
| `3137` | El XML no contiene el tag de tipo de documentos del huesped. |
| `3138` | El XML no contiene el tag de codigo de pais de emision del documento de identidad |
| `3139` | El XML no contiene el tag de apellidos y nombres del huesped. |
| `3140` | El XML no contiene el tag de codigo del pais de residencia. |
| `3141` | El XML no contiene el tag de fecha de ingreso del pais. |
| `3142` | El XML no contiene el tag de fecha de ingreso al establecimiento. |
| `3143` | El XML no contiene el tag de fecha de salida del establecimiento. |
| `3144` | El XML no contiene el tag de fecha de consumo. |
| `3145` | El XML no contiene el tag de numero de dias de permanencia. |
| `3146` | El XML no contiene el tag de Proveedores Estado: Número de Expediente |
| `3147` | El XML no contiene el tag de Proveedores Estado: Código de Unidad Ejecutora |
| `3148` | El XML no contiene el tag de Proveedores Estado: N° de Proceso de Selección |
| `3149` | El XML no contiene el tag de Proveedores Estado: N° de Contrato |
| `3150` | El XML no contiene el tag de Créditos Hipotecarios: Tipo de préstamo |
| `3151` | El XML no contiene el tag de Créditos Hipotecarios: Partida Registral |
| `3152` | El XML no contiene el tag de Créditos Hipotecarios: Número de contrato |
| `3153` | El XML no contiene el tag de Créditos Hipotecarios: Fecha de otorgamiento del crédito |
| `3154` | El XML no contiene el tag de Créditos Hipotecarios: Dirección del predio - Código de ubigeo |
| `3155` | El XML no contiene el tag de Créditos Hipotecarios: Dirección del predio - Dirección completa |
| `3156` | El XML no contiene el tag de BVME transporte ferroviario: Agente de Viajes: Numero de Ruc |
| `3157` | El XML no contiene el tag de BVME transporte ferroviario: Agente de Viajes: Tipo de documento |
| `3158` | El dato ingresado como Agente de Viajes-Tipo de documento no corresponde al valor esperado. |
| `3159` | El XML no contiene el tag de BVME transporte ferroviario: Pasajero - Apellidos y Nombres |
| `3160` | El XML no contiene el tag de BVME transporte ferroviario: Pasajero - Tipo de documento de identidad |
| `3161` | El XML no contiene el tag de BVME transporte ferroviario: Servicio transporte: Ciudad o lugar de origen - Código de ubigeo |
| `3162` | El XML no contiene el tag de BVME transporte ferroviario: Servicio transporte: Ciudad o lugar de origen - Dirección detallada |
| `3163` | El XML no contiene el tag de BVME transporte ferroviario: Servicio transporte: Ciudad o lugar de destino - Código de ubigeo |
| `3164` | El XML no contiene el tag de BVME transporte ferroviario: Servicio transporte: Ciudad o lugar de destino - Dirección detallada |
| `3165` | El XML no contiene el tag de BVME transporte ferroviario: Servicio transporte:Número de asiento |
| `3166` | El XML no contiene el tag de BVME transporte ferroviario: Servicio transporte: Hora programada de inicio de viaje |
| `3167` | El XML no contiene el tag de BVME transporte ferroviario: Servicio transporte: Fecha programada de inicio de viaje |
| `3168` | El XML no contiene el tag de Carta Porte Aéreo: Lugar de origen - Código de ubigeo |
| `3169` | El XML no contiene el tag de Carta Porte Aéreo: Lugar de origen - Dirección detallada |
| `3170` | El XML no contiene el tag de Carta Porte Aéreo: Lugar de destino - Código de ubigeo |
| `3171` | El XML no contiene el tag de Carta Porte Aéreo: Lugar de destino - Dirección detallada |
| `3172` | El XML no contiene tag de la Hora del concepto por linea. |
| `3173` | El XML no contiene el tag de BVME transporte ferroviario: Servicio transporte: Forma de Pago |
| `3174` | El dato ingreso como Forma de Pago o Medio de Pago no corresponde al valor esperado (catalogo nro 59) |
| `3175` | El XML no contiene el tag de BVME transporte ferroviario: Servicio de transporte: Número de autorización de la transacción |
| `3176` | El XML no contiene el tag de Regalía Petrolera: Decreto Supremo de aprobación del contrato |
| `3177` | El XML no contiene el tag de Regalía Petrolera: Area de contrato (Lote) |
| `3178` | El XML no contiene el tag de Regalía Petrolera: Periodo de pago - Fecha de inicio |
| `3179` | El XML no contiene el tag de Regalía Petrolera: Periodo de pago - Fecha de fin |
| `3180` | El XML no contiene el tag de Regalía Petrolera: Fecha de Pago |
| `3181` | El dato ingresado como Codigo de producto SUNAT no corresponde al valor esperado para tipo de operación. |
| `3182` | El XML no contiene el tag de Transportre Terreste - Número de asiento |
| `3183` | El XML no contiene el tag de Transporte Terrestre - Información de manifiesto de pasajeros |
| `3184` | El XML no contiene el tag de Transporte Terrestre - Número de documento de identidad del pasajero |
| `3185` | El XML no contiene el tag de Transporte Terrestre - Tipo de documento de identidad del pasajero |
| `3186` | El XML no contiene el tag de Transporte Terrestre - Nombres y apellidos del pasajero |
| `3187` | El XML no contiene el tag de Transporte Terrestre - Ciudad o lugar de destino - Dirección detallada |
| `3188` | El XML no contiene el tag de Transporte Terrestre - Ciudad o lugar de origen - Ubigeo |
| `3189` | El XML no contiene el tag de Transporte Terrestre - Ciudad o lugar de origen - Dirección detallada |
| `3190` | El XML no contiene el tag de Transporte Terrestre - Fecha de inicio programado |
| `3191` | El XML no contiene el tag de Transporte Terrestre - Hora de inicio programado |
| `3192` | El XML no contiene el tag de Total de anticipos |
| `3193` | El dato ingresado Total anticipos no corresponde para el tipo de operación |
| `3194` | Para los ajustes de operaciones de exportación solo es permitido registrar un documento que modifica. |
| `3195` | El xml no contiene el tag de impuesto por linea (TaxtTotal). |
| `3196` | La sumatoria de impuestos globales no corresponde al monto total de impuestos. |
| `3197` | El XML no contiene el tag de Transporte Terrestre - Ciudad o lugar de destino - Ubigeo |
| `3198` | La fecha de cierre no puede ser inferior a la fecha de inicio del cómputo del ciclo de facturación |
| `3199` | Si utiliza el estandar GS1 debe especificar el tipo de estructura GTIN |
