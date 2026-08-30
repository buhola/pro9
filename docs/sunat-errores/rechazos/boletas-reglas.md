---
sidebar_position: 6
title: Boletas, duplicados y reglas generales
description: Códigos SUNAT 2400–2499 (rechazo).
slug: /sunat-errores/boletas-reglas

---

# Boletas, duplicados y reglas generales

:::danger[Rechazo]
SUNAT **rechaza** el comprobante. Hay que corregir el XML o los datos y volver a emitirlo (con otra numeración si el número ya quedó informado).
:::

Boletas electrónicas, documentos duplicados, leyendas, operaciones gratuitas y grupos de facturación (detracción, itinerante, anticipos).

**Rango:** `2400` – `2499` · **40** códigos.

| Código | Descripción |
| --- | --- |
| `2400` | El tipo de documento modificado por la Nota de debito debe ser boleta electronica |
| `2401` | No se puede leer (parsear) el archivo XML |
| `2402` | El caso de prueba no existe |
| `2403` | La numeracion o nombre del documento ya ha sido enviado anteriormente |
| `2404` | Documento afectado por la nota electronica no se encuentra autorizado |
| `2405` | Contribuyente no se encuentra autorizado como emisor de boletas electronicas |
| `2406` | Existe mas de un tag sac:AdditionalMonetaryTotal con el mismo ID |
| `2407` | Existe mas de un tag sac:AdditionalProperty con el mismo ID |
| `2408` | El dato ingresado en PriceAmount del Valor referencial unitario por item no cumple con el formato establecido |
| `2409` | Existe mas de un tag cac:AlternativeConditionPrice con el mismo cbc:PriceTypeCode |
| `2410` | Se ha consignado un valor invalido en el campo cbc:PriceTypeCode |
| `2411` | Ha consignado mas de un elemento cac:AllowanceCharge con el mismo campo cbc:ChargeIndicator |
| `2412` | Se ha consignado mas de un documento afectado por la nota (tag cac:BillingReference) |
| `2413` | Se ha consignado mas de un motivo o sustento de la nota (tag cac:DiscrepancyResponse/cbc:Description) |
| `2414` | No se ha consignado en la nota el tag cac:DiscrepancyResponse |
| `2415` | Se ha consignado en la nota mas de un tag cac:DiscrepancyResponse |
| `2416` | Si existe leyenda Transferencia Gratuita debe consignar Total Valor de Venta de Operaciones Gratuitas |
| `2417` | Debe consignar Valor Referencial unitario por item en operaciones no onerosas |
| `2418` | Si consigna Valor Referencial unitario por item en operaciones no onerosas,la operacion debe ser no onerosa. |
| `2419` | El dato ingresado en AllowanceTotalAmount no cumple con el formato establecido |
| `2420` | Ya transcurrieron mas de 25 dias calendarios para concluir con su proceso de homologacion |
| `2421` | Debe indicar toda la informacion de sustento de translado de bienes. |
| `2422` | El valor unitario debe ser menor al precio unitario. |
| `2423` | Si ha consignado monto ISC a nivel de item, debe consignar un monto a nivel de total. |
| `2424` | RC Debe consignar solo un elemento sac:BillingPayment a nivel de item con cbc:InstructionID igual a 05. |
| `2425` | Si la operacion es gratuita PriceTypeCode =02 y cbc:PriceAmount >  0 el codigo de afectacion de igv debe ser no onerosa es decir diferente de 10,20,30. |
| `2426` | Documentos relacionados duplicados en el comprobante. |
| `2427` | Solo debe de existir un tag AdditionalInformation. |
| `2428` | Comprobante no cumple con grupo de facturas con detracciones. |
| `2429` | Comprobante no cumple con grupo de facturas con comercio exterior. |
| `2430` | Comprobante no cumple con grupo de facturas con tag de factura guia. |
| `2431` | Comprobante no cumple con grupo de facturas con tags no tributarios. |
| `2432` | Comprobante no cumple con grupo de boletas con tags no tributarios. |
| `2433` | Comprobante no cumple con grupo de facturas con tag venta itinerante. |
| `2434` | Comprobante no cumple con grupo de boletas con tag venta itinerante. |
| `2435` | Comprobante no cumple con grupo de boletas con ISC. |
| `2436` | Comprobante no cumple con el grupo de boletas de venta con percepcion: El monto de percepcion no existe o es cero. |
| `2437` | Comprobante no cumple con el grupo de boletas de venta con percepcion: Todos los items deben tener código de Afectación al IGV igual a 10. |
| `2438` | Comprobante no cumple con grupo de facturas con tag venta anticipada I. |
| `2439` | Comprobante no cumple con grupo de facturas con tag venta anticipada II. |
