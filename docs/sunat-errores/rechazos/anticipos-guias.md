---
sidebar_position: 7
title: Anticipos y guías de remisión
description: Códigos SUNAT 2500–2599 (rechazo).
slug: /sunat-errores/anticipos-guias

---

# Anticipos y guías de remisión

:::danger[Rechazo]
SUNAT **rechaza** el comprobante. Hay que corregir el XML o los datos y volver a emitirlo (con otra numeración si el número ya quedó informado).
:::

Documentos de anticipo y guías de remisión electrónica: remitente, destinatario, transportista, vehículo y conductor.

**Rango:** `2500` – `2599` · **84** códigos.

| Código | Descripción |
| --- | --- |
| `2500` | Ingresar descripción y valor venta por ítem para documento de anticipos. |
| `2501` | Valor venta debe ser mayor a cero. |
| `2502` | El importe total para tipo de operación Venta interna-Anticipos debe ser mayor a cero. |
| `2503` | PaidAmount: monto anticipado por documento debe ser mayor a cero. |
| `2504` | Falta referencia de la factura relacionada con anticipo. |
| `2505` | Código de documento de referencia debe ser 02 o 03. |
| `2506` | cac:PrepaidPayment/cbc:ID: Factura o boleta no existe o comunicada de Baja. |
| `2507` | Factura relacionada con anticipo no corresponde como factura de anticipo. |
| `2508` | Ingresar documentos por anticipos. |
| `2509` | Total de anticipos diferente a los montos anticipados por documento. |
| `2510` | Nro nombre del documento no tiene el formato correcto. |
| `2511` | El tipo de documento no es aceptado. |
| `2512` | No existe información de serie o número. |
| `2513` | Dato no cumple con formato de acuerdo al tipo de documento |
| `2514` | No existe información de receptor de documento. |
| `2515` | Dato ingresado no cumple con catalogo 6. |
| `2516` | Debe indicar tipo de documento. |
| `2517` | Dato no cumple con formato establecido. |
| `2518` | Calculo IGV no es correcto. |
| `2519` | El importe total no coincide con la sumatoria de los valores de venta mas los tributos mas los cargos menos los descuentos que no afectan la base imponible |
| `2520` | El tipo documento del emisor que realiza el anticipo debe ser 6 del catalogo de tipo de documento. |
| `2521` | El dato ingresado debe indicar SERIE-CORRELATIVO del documento que se realizo el anticipo. |
| `2522` | No existe información del documento del anticipo. |
| `2523` | GrossWeightMeasure – El dato ingresado no cumple con el formato establecido. |
| `2524` | Debe indicar el documento afectado por la nota |
| `2525` | El dato ingresado en Quantity no cumple con el formato establecido. |
| `2526` | El dato ingresado en Percent no cumple con el formato establecido. |
| `2527` | PrepaidAmount: Monto total anticipado debe ser mayor a cero. |
| `2528` | cac:OriginatorDocumentReference/cbc:ID/@SchemaID – El tipo documento debe ser 6 del catalogo de tipo de documento. |
| `2529` | RUC que emitio documento de anticipo, no existe. |
| `2530` | RUC que solicita la emision de la factura, no existe. |
| `2531` | Codigo del Local Anexo del emisor no existe. |
| `2532` | No existe información de modalidad de transporte. |
| `2533` | Si ha consignado Transporte Privado, debe consignar Licencia de conducir, Placa, N constancia de inscripcion y marca del vehiculo. |
| `2534` | Si ha consignado Transporte Público, debe consignar Datos del transportista. |
| `2535` | La nota de crédito por otros conceptos tributarios debe tener Otros Documentos Relacionados. |
| `2536` | Serie y numero no se encuentra registrado como baja por cambio de destinatario. |
| `2537` | cac:OrderReference/cac:DocumentReference/cbc:DocumentTypeCode - El tipo de documento de serie y número dado de baja es incorrecta. |
| `2538` | El contribuyente no se encuentra autorizado como emisor electronico de Guía o de factura o de boletaFactura GEM. |
| `2539` | El contribuyente no esta activo. |
| `2540` | El contribuyente no esta habido. |
| `2541` | El XML no contiene el tag o no existe informacion del tipo de documento identidad del remitente. |
| `2542` | cac:DespatchSupplierParty/cbc:CustomerAssignedAccountID@schemeID - El valor ingresado como tipo de documento identidad del remitente es incorrecta. |
| `2543` | El XML no contiene el tag o no existe informacion de la dirección completa y detallada en domicilio fiscal. |
| `2544` | El XML no contiene el tag o no existe información de la provincia en domicilio fiscal. |
| `2545` | El XML no contiene el tag o no existe información del departamento en domicilio fiscal. |
| `2546` | El XML no contiene el tag o no existe información del distrito en domicilio fiscal. |
| `2547` | El XML no contiene el tag o no existe información del país en domicilio fiscal. |
| `2548` | El valor del país inválido. |
| `2549` | El XML no contiene el tag o no existe informacion del tipo de documento identidad del destinatario. |
| `2550` | cac:DeliveryCustomerParty/cbc:CustomerAssignedAccountID@schemeID - El dato ingresado de tipo de documento identidad del destinatario no cumple con el estandar. |
| `2551` | El XML no contiene el tag o no existe informacion de CustomerAssignedAccountID del proveedor de servicios. |
| `2552` | El XML no contiene el tag o no existe informacion del tipo de documento identidad del proveedor. |
| `2553` | cac:SellerSupplierParty/cbc:CustomerAssignedAccountID@schemeID - El dato ingresado no es valido. |
| `2554` | Para el motivo de traslado ingresado el Destinatario debe ser igual al remitente. |
| `2555` | Destinatario no debe ser igual al remitente. |
| `2556` | cbc:TransportModeCode - dato ingresado no es valido. |
| `2557` | La fecha del StartDate no debe ser menor al Today. |
| `2558` | El XML no contiene el tag o no existe informacion en Numero de Ruc del transportista. |
| `2559` | /DespatchAdvice/cac:Shipment/cac:ShipmentStage/cac:CarrierParty/cac:PartyIdentification/cbc:ID - El dato ingresado no cumple con el formato establecido. |
| `2560` | Transportista no debe ser igual al remitente o destinatario. |
| `2561` | El XML no contiene el tag o no existe informacion del tipo de documento identidad del transportista. |
| `2562` | /DespatchAdvice/cac:Shipment/cac:ShipmentStage/cac:CarrierParty/cac:PartyIdentification/cbc:ID@schemeID - El dato ingresado no es valido. |
| `2563` | El XML no contiene el tag o no existe informacion de Apellido, Nombre o razon social del transportista. |
| `2564` | Razon social transportista - El dato ingresado no cumple con el formato establecido. |
| `2565` | El XML no contiene el tag o no existe informacion del tipo de unidad de transporte. |
| `2566` | El XML no contiene el tag o no existe informacion del Numero de placa del vehículo. |
| `2567` | Numero de placa del vehículo - El dato ingresado no cumple con el formato establecido. |
| `2568` | El XML no contiene el tag o no existe informacion en el Numero de documento de identidad del conductor. |
| `2569` | Documento identidad del conductor - El dato ingresado no cumple con el formato establecido. |
| `2570` | El XML no contiene el tag o no existe informacion del tipo de documento identidad del conductor. |
| `2571` | cac:DriverPerson/ID@schemeID - El valor ingresado de tipo de documento identidad de conductor es incorrecto. |
| `2572` | El XML no contiene el tag o no existe informacion del Numero de licencia del conductor. |
| `2573` | Numero de licencia del conductor - El dato ingresado no cumple con el formato establecido. |
| `2574` | El XML no contiene el tag o no existe informacion de direccion detallada de punto de llegada. |
| `2575` | El XML no contiene el tag o no existe informacion de CityName. |
| `2576` | El XML no contiene el tag o no existe informacion de District. |
| `2577` | El XML no contiene el tag o no existe informacion de direccion detallada de punto de partida. |
| `2578` | El XML no contiene el tag o no existe informacion de CityName. |
| `2579` | El XML no contiene el tag o no existe informacion de District. |
| `2580` | El XML No contiene el tag o no existe información de la cantidad del item. |
| `2581` | No puede dar de baja 'Recibos de servicios publicos' por SEE-Desde los sistemas del contribuyente |
| `2582` | Solo se debe incluir el tag de Comprobante de referencia cuando se trata de una nota de credito o debito |
| `2583` | Debe consignar tipo de documento que modifica |
