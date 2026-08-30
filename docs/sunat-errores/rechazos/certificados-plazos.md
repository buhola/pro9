---
sidebar_position: 5
title: Certificado, plazos y grupos de homologación
description: Códigos SUNAT 2325–2399 (rechazo).
slug: /sunat-errores/certificados-plazos

---

# Certificado, plazos y grupos de homologación

:::danger[Rechazo]
SUNAT **rechaza** el comprobante. Hay que corregir el XML o los datos y volver a emitirlo (con otra numeración si el número ya quedó informado).
:::

Certificado digital vencido o revocado, fechas fuera de plazo, duplicados y reglas de los grupos de homologación.

**Rango:** `2325` – `2399` · **75** códigos.

| Código | Descripción |
| --- | --- |
| `2325` | El certificado usado no es el comunicado a SUNAT |
| `2326` | El certificado usado se encuentra de baja |
| `2327` | El certificado usado no se encuentra vigente |
| `2328` | El certificado usado se encuentra revocado |
| `2329` | La fecha de emision se encuentra fuera del limite permitido |
| `2330` | La fecha de generación de la comunicación debe ser igual a la fecha consignada en el nombre del archivo |
| `2331` | Número de RUC del nombre del archivo no coincide con el consignado en el contenido del archivo XML |
| `2332` | Número de Serie del nombre del archivo no coincide con el consignado en el contenido del archivo XML |
| `2333` | Número de documento en el nombre del archivo no coincide con el consignado en el contenido del XML |
| `2334` | El documento electrónico ingresado ha sido alterado |
| `2335` | El documento electrónico ingresado ha sido alterado |
| `2336` | Ocurrió un error en el proceso de validación de la firma digital |
| `2337` | La moneda debe ser la misma en todo el documento |
| `2338` | La moneda debe ser la misma en todo el documento |
| `2339` | El dato ingresado en PayableAmount no cumple con el formato establecido |
| `2340` | El valor ingresado en AdditionalMonetaryTotal/cbc:ID es incorrecto |
| `2341` | AdditionalMonetaryTotal/cbc:ID debe tener valor |
| `2342` | Fecha de emision de la factura no coincide con la informada en la comunicacion |
| `2343` | cac:TaxTotal/cac:TaxSubtotal/cbc:TaxAmount - El dato ingresado no cumple con el estandar |
| `2344` | El XML no contiene el tag cac:TaxTotal/cac:TaxSubtotal/cbc:TaxAmount |
| `2345` | La serie no corresponde al tipo de comprobante |
| `2346` | La fecha de generación del resumen debe ser igual a la fecha consignada en el nombre del archivo |
| `2347` | Los rangos informados en el archivo XML se encuentran duplicados o superpuestos |
| `2348` | Los documentos informados en el archivo XML se encuentran duplicados |
| `2349` | Debe consignar solo un elemento sac:AdditionalMonetaryTotal con cbc:ID igual a 1001 |
| `2350` | Debe consignar solo un elemento sac:AdditionalMonetaryTotal con cbc:ID igual a 1002 |
| `2351` | Debe consignar solo un elemento sac:AdditionalMonetaryTotal con cbc:ID igual a 1003 |
| `2352` | Debe consignar solo un elemento cac:TaxTotal a nivel global para IGV (cbc:ID igual a 1000) |
| `2353` | Debe consignar solo un elemento cac:TaxTotal a nivel global para ISC (cbc:ID igual a 2000) |
| `2354` | Debe consignar solo un elemento cac:TaxTotal a nivel global para Otros (cbc:ID igual a 9999) |
| `2355` | Debe consignar solo un elemento cac:TaxTotal a nivel de item por codigo de tributo |
| `2356` | Debe consignar solo un elemento cac:TaxTotal a nivel de item para ISC (cbc:ID igual a 2000) |
| `2357` | No debe existir un elemento sac:BillingPayment a nivel de item con el mismo valor de cbc:InstructionID |
| `2358` | Debe consignar solo un elemento sac:BillingPayment a nivel de item con cbc:InstructionID igual a 02 |
| `2359` | Debe consignar solo un elemento sac:BillingPayment a nivel de item con cbc:InstructionID igual a 03 |
| `2360` | Debe consignar solo un elemento sac:BillingPayment a nivel de item con cbc:InstructionID igual a 04 |
| `2361` | Debe consignar solo un elemento cac:TaxTotal a nivel de item para Otros (cbc:ID igual a 9999) |
| `2362` | Debe consignar solo un tag cac:AccountingSupplierParty/cbc:AdditionalAccountID |
| `2363` | Debe consignar solo un tag cac:AccountingCustomerParty/cbc:AdditionalAccountID |
| `2364` | El comprobante contiene un tipo y número de Guía de Remisión repetido |
| `2365` | El comprobante contiene un tipo y número de Documento Relacionado repetido |
| `2366` | El codigo en el tag sac:AdditionalProperty/cbc:ID debe tener 4 posiciones |
| `2367` | El dato ingresado en PriceAmount del Precio de venta unitario por item no cumple con el formato establecido |
| `2368` | El dato ingresado en TaxSubtotal/cbc:TaxAmount del item no cumple con el formato establecido |
| `2369` | El dato ingresado en PriceAmount del Valor de venta unitario por item no cumple con el formato establecido |
| `2370` | El dato ingresado en LineExtensionAmount del item no cumple con el formato establecido |
| `2371` | El XML no contiene el tag cbc:TaxExemptionReasonCode de Afectacion al IGV |
| `2372` | El tag en el item cac:TaxTotal/cbc:TaxAmount debe tener el mismo valor que cac:TaxTotal/cac:TaxSubtotal/cbc:TaxAmount |
| `2373` | Si existe monto de ISC en el ITEM debe especificar el sistema de calculo |
| `2374` | La factura a dar de baja tiene una fecha de recepcion fuera del plazo permitido |
| `2375` | Fecha de emision del comprobante no coincide con la fecha de emision consignada en la comunicación |
| `2376` | La boleta de venta a dar de baja fue informada en un resumen con fecha de recepcion fuera del plazo permitido |
| `2377` | El Name o TaxTypeCode debe corresponder al codigo de tributo del item |
| `2378` | El Name o TaxTypeCode debe corresponder con el Id para el ISC |
| `2379` | La numeracion de boleta de venta a dar de baja fue generada en una fecha fuera del plazo permitido |
| `2380` | El documento tiene observaciones |
| `2381` | Comprobante no cumple con el Grupo 1: No todos los items corresponden a operaciones gravadas a IGV |
| `2382` | Comprobante no cumple con el Grupo 2: No todos los items corresponden a operaciones inafectas o exoneradas al IGV |
| `2383` | Comprobante no cumple con el Grupo 3: Falta leyenda con codigo 1002 |
| `2384` | Comprobante no cumple con el Grupo 3: Existe item con operación onerosa |
| `2385` | Comprobante no cumple con el Grupo 4: Debe exitir Total descuentos mayor a cero |
| `2386` | Comprobante no cumple con el Grupo 5: Todos los items deben tener operaciones afectas a ISC |
| `2387` | Comprobante no cumple con el Grupo 6: El monto de percepcion no existe o es cero |
| `2388` | Comprobante no cumple con el Grupo 6: Todos los items deben tener código de Afectación al IGV igual a 10 |
| `2389` | Comprobante no cumple con el Grupo 7: El codigo de moneda no es diferente a PEN |
| `2390` | Comprobante no cumple con el Grupo 8: No todos los items corresponden a operaciones gravadas a IGV |
| `2391` | Comprobante no cumple con el Grupo 9: No todos los items corresponden a operaciones inafectas o exoneradas al IGV |
| `2392` | Comprobante no cumple con el Grupo 10: Falta leyenda con codigo 1002 |
| `2393` | Comprobante no cumple con el Grupo 10: Existe item con operación onerosa |
| `2394` | Comprobante no cumple con el Grupo 11: Debe existir Total descuentos mayor a cero |
| `2395` | Comprobante no cumple con el Grupo 12: El codigo de moneda no es diferente a PEN |
| `2396` | Si el monto total es mayor a S/. 700.00 debe consignar tipo y numero de documento del adquiriente |
| `2397` | El tipo de documento del adquiriente no puede ser Numero de RUC |
| `2398` | El documento a dar de baja se encuentra rechazado |
| `2399` | El tipo de documento modificado por la Nota de credito debe ser boleta electronica |
