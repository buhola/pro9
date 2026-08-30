---
sidebar_position: 8
title: Validaciones adicionales de negocio
description: Códigos SUNAT 2600–2699 (rechazo).
slug: /sunat-errores/validaciones-adicionales

---

# Validaciones adicionales de negocio

:::danger[Rechazo]
SUNAT **rechaza** el comprobante. Hay que corregir el XML o los datos y volver a emitirlo (con otra numeración si el número ya quedó informado).
:::

Notas tipo 10, documentos relacionados, identidad de emisor/cliente y campos obligatorios extra.

**Rango:** `2600` – `2699` · **97** códigos.

| Código | Descripción |
| --- | --- |
| `2600` | El comprobante fue enviado fuera del plazo permitido. |
| `2601` | Señor contribuyente a la fecha no se encuentra registrado ó habilitado con la condición de Agente de percepción. |
| `2602` | El régimen percepción enviado no corresponde con su condición de Agente de percepción. |
| `2603` | La tasa de percepción enviada no corresponde con el régimen de percepción. |
| `2604` | El Cliente no puede ser el mismo que el Emisor del comprobante de percepción. |
| `2605` | Número de RUC no existe. |
| `2606` | Documento de identidad del Cliente no existe. |
| `2607` | La moneda del importe de cobro debe ser la misma que la del documento relacionado. |
| `2608` | Los montos de pago, percibidos y montos cobrados consignados para el documento relacionado no son correctos. |
| `2609` | El comprobante electrónico enviado no se encuentra registrado en la SUNAT. |
| `2610` | La fecha de emisión, Importe total del comprobante y la moneda del comprobante electrónico enviado no son los registrados en los Sistemas de SUNAT. |
| `2611` | El comprobante electrónico no ha sido emitido al cliente. |
| `2612` | La fecha de cobro debe estar entre el primer día calendario del mes al cual corresponde la fecha de emisión del comprobante de percepción o desde la fecha de emisión del comprobante relacionado. |
| `2613` | El Nro. de documento con número de cobro ya se encuentra en la Relación de Documentos Relacionados agregados. |
| `2614` | El Nro. de documento con el número de cobro ya se encuentra registrado como pago realizado. |
| `2615` | Importe total percibido debe ser igual a la suma de los importes percibidos por cada documento relacionado. |
| `2616` | Importe total cobrado debe ser igual a la suma de los importe totales cobrados por cada documento relacionado. |
| `2617` | Señor contribuyente a la fecha no se encuentra registrado ó habilitado con la condición de Agente de retención. |
| `2618` | El régimen retención enviado no corresponde con su condición de Agente de retención. |
| `2619` | La tasa de retención enviada no corresponde con el régimen de retención. |
| `2620` | El Proveedor no puede ser el mismo que el Emisor del comprobante de retención. |
| `2621` | Número de RUC del Proveedor no existe. |
| `2622` | La moneda del importe de pago debe ser la misma que la del documento relacionado. |
| `2623` | Los montos de pago, retenidos y montos pagados consignados para el documento relacionado no son correctos. |
| `2624` | El comprobante electrónico no ha sido emitido por el proveedor. |
| `2625` | La fecha de pago debe estar entre el primer día calendario del mes al cual corresponde la fecha de emisión del comprobante de retención o desde la fecha de emisión del comprobante relacionado. |
| `2626` | El Nro. de documento con el número de pago ya se encuentra en la Relación de Documentos Relacionados agregados. |
| `2627` | El Nro. de documento con el número de pago ya se encuentra registrado como pago realizado. |
| `2628` | Importe total retenido debe ser igual a la suma de los importes retenidos por cada documento relacionado. |
| `2629` | Importe total pagado debe ser igual a la suma de los importes pagados por cada documento relacionado. |
| `2630` | La serie o numero del documento(01) modificado por la Nota de Credito no cumple con el formato establecido para tipo codigo Nota Credito 10. |
| `2631` | La serie o numero del documento(12) modificado por la Nota de Credito no cumple con el formato establecido para tipo codigo Nota Credito 10. |
| `2632` | La serie o numero del documento(56) modificado por la Nota de Credito no cumple con el formato establecido para tipo codigo Nota Credito 10. |
| `2633` | La serie o numero del documento(03) modificado por la Nota de Credito no cumple con el formato establecido para tipo codigo Nota Credito 10. |
| `2634` | ReferenceID - El dato ingresado debe indicar serie correcta del documento al que se relaciona la Nota tipo 10. |
| `2635` | Debe existir DocumentTypeCode de Otros documentos relacionados con valor 99 para un tipo codigo Nota Credito 10. |
| `2636` | No existe datos del ID de los documentos relacionados con valor 99 para un tipo codigo Nota Credito 10. |
| `2637` | No existe datos del DocumentType de los documentos relacionados con valor 99 para un tipo codigo Nota Credito 10. |
| `2640` | Operacion gratuita, solo debe consignar un monto referencial |
| `2641` | Operacion gratuita, debe consignar Total valor venta - operaciones gratuitas mayor a cero |
| `2642` | Operaciones de exportacion, deben consignar Tipo Afectacion igual a 40 |
| `2643` | Factura de operacion sujeta IVAP debe consignar Monto de impuestos por item |
| `2644` | Comprobante operacion sujeta IVAP solo debe tener ítems con código de afectación del IGV igual a 17 |
| `2645` | Factura de operacion sujeta a IVAP debe consignar items con codigo de tributo 1000 |
| `2646` | Factura de operacion sujeta a IVAP debe consignar items con nombre de tributo IVAP |
| `2647` | Código tributo UN/ECE debe ser VAT |
| `2648` | Factura de operacion sujeta al IVAP, solo puede consignar informacion para operacion gravadas |
| `2649` | Operación sujeta al IVAP, debe consignar monto en total operaciones gravadas |
| `2650` | Factura de operacion sujeta al IVAP , no debe consignar valor para ISC o debe ser 0 |
| `2651` | Factura de operacion sujeta al IVAP , no debe consignar valor para IGV o debe ser 0 |
| `2652` | Factura de operacion sujeta al IVAP , debe registrar mensaje 2007 |
| `2653` | Servicios prestados No domiciliados. Total IGV debe se mayor a cero |
| `2654` | Servicios prestados No domiciliados. Código tributo a consignar debe ser 1000 |
| `2655` | Servicios prestados No domiciliados. El código de afectación debe ser 40 |
| `2656` | Servicios prestados No domiciliados. Código tributo UN/ECE debe ser VAT |
| `2657` | El Nro. de documento ya fué utilizado en la emision de CPE. |
| `2658` | El Nro. de documento no se ha informado o no se encuentra en estado Revertido |
| `2659` | La fecha de cobro de cada documento relacionado deben ser del mismo Periodo (mm/aaaa), asimismo estas fechas podrán ser menores o iguales a la fecha de emisión del comprobante de percepción |
| `2660` | Los datos del CPE revertido no corresponden a los registrados en la SUNAT |
| `2661` | La fecha de cobro de cada documento relacionado deben ser del mismo Periodo (mm/aaaa), asimismo estas fechas podrán ser menores o iguales a la fecha de emisión del comprobante de retencion |
| `2662` | El Nro. de documento ya fué utilizado en la emision de CRE. |
| `2663` | El documento indicado no existe no puede ser modificado |
| `2664` | El calculo de la base imponible de percepción y el monto de la percepción no coincide con el monto total informado. |
| `2665` | El contribuyente no se encuentra autorizado a emitir Tickets |
| `2666` | Las percepciones son solo válidas para boletas de venta al contado. |
| `2667` | Importe total percibido debe ser igual a la suma de los importes percibidos por cada documento relacionado. |
| `2668` | Importe total cobrado debe ser igual a la suma de los importes cobrados por cada documento relacionado. |
| `2669` | El dato ingresado en TotalInvoiceAmount debe ser numérico mayor a cero |
| `2670` | La razón social no corresponde al ruc informado. |
| `2671` | La fecha de generación de la comunicación/resumen debe ser mayor o igual a la fecha de generación/emisión de los documentos |
| `2672` | La fecha de generación del documento revertido debe ser menor o igual a la fecha actual. |
| `2673` | El dato ingresado no cumple con el formato RR-fecha-correlativo. |
| `2674` | El dato ingresado no cumple con el formato de DocumentSerialID, para DocumentTypeCode con valor 20. |
| `2675` | El dato ingresado no cumple con el formato de DocumentSerialID, para DocumentTypeCode con valor 40. |
| `2676` | El XML no contiene el tag o no existe información del número de RUC del emisor |
| `2677` | El valor ingresado como número de RUC del emisor es incorrecto |
| `2678` | El XML no contiene el atributo o no existe información del tipo de documento del emisor |
| `2679` | El XML no contiene el tag o no existe información del número de documento de identidad del cliente |
| `2680` | El valor ingresado como documento de identidad del cliente es incorrecto |
| `2681` | El XML no contiene el atributo o no existe información del tipo de documento del cliente |
| `2682` | El valor ingresado como tipo de documento del cliente es incorrecto |
| `2683` | El XML no contiene el tag o no existe información del Importe total Percibido |
| `2684` | El XML no contiene el tag o no existe información de la moneda del Importe total Percibido |
| `2685` | El valor de la moneda del Importe total Percibido debe ser PEN |
| `2686` | El XML no contiene el tag o no existe información del Importe total Cobrado |
| `2687` | El dato ingresado en SUNATTotalCashed debe ser numérico mayor a cero |
| `2689` | El XML no contiene el tag o no existe información de la moneda del Importe total Cobrado |
| `2690` | El valor de la moneda del Importe total Cobrado debe ser PEN |
| `2691` | El XML no contiene el tag o no existe información del tipo de documento relacionado |
| `2692` | El tipo de documento relacionado no es válido |
| `2693` | El XML no contiene el tag o no existe información del número de documento relacionado |
| `2694` | El número de documento relacionado no está permitido o no es valido |
| `2695` | El XML no contiene el tag o no existe información del Importe total documento Relacionado |
| `2696` | El dato ingresado en el importe total documento relacionado debe ser numérico mayor a cero |
| `2697` | El XML no contiene el tag o no existe información del número de cobro |
| `2698` | El dato ingresado en el número de cobro no es válido |
| `2699` | El XML no contiene el tag o no existe información del Importe del cobro |
