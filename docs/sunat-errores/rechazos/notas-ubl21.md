---
sidebar_position: 14
title: Notas y operación en UBL 2.1
description: Códigos SUNAT 3200–3999 (rechazo).
slug: /sunat-errores/notas-ubl21

---

# Notas y operación en UBL 2.1

:::danger[Rechazo]
SUNAT **rechaza** el comprobante. Hay que corregir el XML o los datos y volver a emitirlo (con otra numeración si el número ya quedó informado).
:::

Tipo de operación, tipo de nota, moneda de la nota y tributos globales en el esquema UBL 2.1.

**Rango:** `3200` – `3999` · **41** códigos.

| Código | Descripción |
| --- | --- |
| `3200` | El tipo de estructura GS1 no tiene un valor permitido |
| `3201` | El código de producto GS1 no cumple el estandar |
| `3202` | El numero de RUC del receptor no existe. |
| `3203` | El tipo de nota es un dato único |
| `3204` | El XML no contiene el tag de BVME transporte ferroviario: Pasajero - Número de documento de identidad |
| `3205` | Debe consignar el tipo de operación |
| `3206` | El dato ingresado como tipo de operación no corresponde a un valor esperado (catálogo nro. 51) |
| `3207` | Comprobante físico no se encuentra autorizado como comprobante de contingencia |
| `3208` | La moneda del monto de la detracción debe ser PEN |
| `3209` | El tipo de moneda de la nota debe ser el mismo que el declarado en el documento que modifica |
| `3210` | Solo debe consignar sistema de calculo si el tributo es ISC |
| `3211` | Falta identificador del pago del Monto de anticipo para relacionarlo con el comprobante que se realizo el anticipo |
| `3212` | El comprobante contiene un identificador de pago repetido en los montos anticipados |
| `3213` | El comprobante contiene un pago anticipado pero no se ha consignado el documento que se realizo el anticipo |
| `3214` | No existe información del Monto Anticipado para el comprobante que se realizo el anticipo |
| `3215` | El comprobante contiene un identificador de pago repetido en los comprobantes que se realizo el anticipo |
| `3216` | Falta identificador del pago del comprobante para relacionarlo con el monto de anticipo |
| `3217` | Debe consignar Numero de RUC del emisor del comprobante de anticipo |
| `3218` | El comprobante que se realizo el anticipo no existe |
| `3219` | El comprobante que se realizo el anticipo no se encuentra autorizado |
| `3220` | Si consigna montos de anticipo debe informar el Total de Anticipos |
| `3221` | El dato ingresado como codigo de tributo global es invalido para tipo de nota |
| `3222` | No existe información a nivel global de un tributo informado en la línea |
| `3223` | La combinación de tributos no es permitida |
| `3224` | Si existe 'Valor referencial unitario en operac. no onerosas' con monto mayor a cero, la operacion debe ser gratuita (codigo de tributo 9996) |
| `3225` | La base imponible a nivel de línea difiere de la información consignada en el comprobante |
| `3226` | El resultado del monto del cargo o descuento global es incorrecto en base a la información consignada |
| `3227` | La sumatoria del Total del valor de venta más los impuestos no concuerda con la base imponible |
| `3228` | El Comprobante de Pago no está autorizado en los Sistemas de la SUNAT. |
| `3229` | El monto para el redondeo del Importe Total excede el valor permitido |
| `3230` | Tipo de nota debe ser 'Ajustes afectos al IVAP' |
| `3231` | Debe consignar solo un elemento a nivel global para Percepciones (cbc:ID igual a 2001) |
| `3232` | Sólo los contribuyentes que hayan emitido los siguientes documentos: Guías, factura, boleta y sus respectivas notas, hasta el 30/09/2018 están autorizados a utilizar esta versión UBL |
| `3233` | Para cargo Percepción, debe ingresar monto base y debe ser mayor a 0.00 |
| `3234` | El código de precio '02' es sólo para operaciones gratuitas |
| `3235` | No está autorizado a enviar comprobantes bajo el formato UBL 2.0 |
| `3236` | El valor ingresado en el campo cac:TaxSubtotal/cbc:BaseUnitMeasure no corresponde al valor esperado |
| `3237` | Debe consignar el campo cac:TaxSubtotal/cbc:BaseUnitMeasure a nivel de ítem |
| `3238` | El valor ingresado en el campo cac:TaxSubtotal/cbc:PerUnitAmount del ítem no corresponde al valor esperado |
| `3239` | El código de local anexo consignado no se encuentra declarado en el RUC |
| `3240` | El impuesto ICBPER no aplica para el NRUS |
