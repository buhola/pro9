---
sidebar_position: 2
title: "Facturas: emisor, ítems e impuestos"
description: Códigos SUNAT 2000–2099 (rechazo).
slug: /sunat-errores/facturas

---

# Facturas: emisor, ítems e impuestos

:::danger[Rechazo]
SUNAT **rechaza** el comprobante. Hay que corregir el XML o los datos y volver a emitirlo (con otra numeración si el número ya quedó informado).
:::

Validaciones de factura: RUC del emisor/receptor, cantidades, IGV/ISC, totales, moneda, UBL y firma digital.

**Rango:** `2000` – `2099` · **90** códigos.

| Código | Descripción |
| --- | --- |
| `2010` | El contribuyente no esta activo |
| `2011` | El contribuyente no esta habido |
| `2012` | El contribuyente no está autorizado a emitir comprobantes electrónicos |
| `2013` | El contribuyente no cumple con tipo de empresa o tributos requeridos |
| `2014` | El XML no contiene el tag o no existe informacion del número de documento de identidad del receptor del documento |
| `2015` | El XML no contiene el tag o no existe informacion del tipo de documento de identidad del receptor del documento |
| `2016` | El dato ingresado en el tipo de documento de identidad del receptor no cumple con el estandar o no esta permitido. |
| `2017` | El numero de documento de identidad del receptor debe ser RUC |
| `2018` | El dato ingresado no cumple con el estandar |
| `2019` | El XML no contiene el tag o no existe informacion de nombre o razon social del emisor del documento |
| `2020` | El nombre o razon social del emisor no cumple con el estandar |
| `2021` | El XML no contiene el tag o no existe informacion de RegistrationName del receptor del documento |
| `2022` | RegistrationName - El dato ingresado no cumple con el estandar |
| `2023` | El Numero de orden del item no cumple con el formato establecido |
| `2024` | El XML no contiene el tag InvoicedQuantity en el detalle de los Items o es cero (0) |
| `2025` | InvoicedQuantity El dato ingresado no cumple con el estandar |
| `2026` | El XML no contiene el tag cac:Item/cbc:Description en el detalle de los Items |
| `2027` | El XML no contiene el tag o no existe informacion de cac:Item/cbc:Description del item |
| `2028` | Debe existir el tag cac:AlternativeConditionPrice |
| `2029` | PriceTypeCode El dato ingresado no cumple con el estandar |
| `2030` | El XML no contiene el tag cbc:PriceTypeCode |
| `2031` | El dato ingresado en total valor de venta no cumple con el estandar |
| `2032` | El XML no contiene el tag LineExtensionAmount en el detalle de los Items |
| `2033` | El dato ingresado en TaxAmount de la linea no cumple con el formato establecido |
| `2034` | TaxAmount es obligatorio |
| `2035` | cac:TaxCategory/cac:TaxScheme/cbc:ID El dato ingresado no cumple con el estandar |
| `2036` | El codigo del tributo es invalido |
| `2037` | El XML no contiene el tag cac:TaxCategory/cac:TaxScheme/cbc:ID del Item |
| `2038` | cac:TaxScheme/cbc:Name del item - No existe el tag o el dato ingresado no cumple con el estandar |
| `2039` | El XML no contiene el tag cac:TaxCategory/cac:TaxScheme/cbc:Name del Item |
| `2040` | El tipo de afectacion del IGV es incorrecto |
| `2041` | El sistema de calculo del ISC es incorrecto |
| `2042` | Debe indicar el IGV. Es un campo obligatorio |
| `2043` | El dato ingresado en PayableAmount no cumple con el formato establecido |
| `2044` | PayableAmount es obligatorio |
| `2045` | El valor ingresado en AdditionalMonetaryTotal/cbc:ID es incorrecto |
| `2046` | AdditionalMonetaryTotal/cbc:ID debe tener valor |
| `2047` | Es obligatorio al menos un AdditionalMonetaryTotal con codigo 1001, 1002, 1003 o 3001 |
| `2048` | El dato ingresado en TaxAmount no cumple con el formato establecido |
| `2049` | TaxAmount es obligatorio |
| `2050` | TaxScheme ID - No existe el tag o el dato ingresado no cumple con el estandar |
| `2051` | El codigo del tributo es invalido |
| `2052` | El XML no contiene el tag código de tributo internacional de impuestos globales |
| `2053` | TaxScheme Name - No existe el tag o el dato ingresado no cumple con el estandar |
| `2054` | El XML no contiene el tag TaxScheme Name de impuestos globales |
| `2055` | TaxScheme TaxTypeCode - El dato ingresado no cumple con el estandar |
| `2056` | El XML no contiene el tag TaxScheme TaxTypeCode de impuestos globales |
| `2057` | El Name o TaxTypeCode debe corresponder con el Id para el IGV |
| `2058` | El Name o TaxTypeCode debe corresponder con el Id para el ISC |
| `2059` | El dato ingresado en TaxSubtotal/cbc:TaxAmount no cumple con el formato establecido |
| `2060` | TaxSubtotal/cbc:TaxAmount es obligatorio |
| `2061` | El tag global cac:TaxTotal/cbc:TaxAmount debe tener el mismo valor que cac:TaxTotal/cac:Subtotal/cbc:TaxAmount |
| `2062` | El dato ingresado en PayableAmount no cumple con el formato establecido |
| `2063` | El XML no contiene el tag PayableAmount |
| `2064` | El dato ingresado en ChargeTotalAmount no cumple con el formato establecido |
| `2065` | El dato ingresado en el campo Total Descuentos no cumple con el formato establecido |
| `2066` | Debe indicar una descripcion para el tag sac:AdditionalProperty/cbc:Value |
| `2067` | cac:Price/cbc:PriceAmount - El dato ingresado no cumple con el estandar |
| `2068` | El XML no contiene el tag cac:Price/cbc:PriceAmount en el detalle de los Items |
| `2069` | DocumentCurrencyCode - El dato ingresado no cumple con la estructura |
| `2070` | El XML no contiene el tag o no existe informacion de DocumentCurrencyCode |
| `2071` | La moneda debe ser la misma en todo el documento. Salvo las percepciones que sólo son en moneda nacional. |
| `2072` | CustomizationID - La versión del documento no es la correcta |
| `2073` | El XML no existe informacion de CustomizationID |
| `2074` | UBLVersionID - La versión del UBL no es correcta |
| `2075` | El XML no contiene el tag o no existe informacion de UBLVersionID |
| `2076` | cac:Signature/cbc:ID - Falta el identificador de la firma |
| `2077` | El tag cac:Signature/cbc:ID debe contener informacion |
| `2078` | cac:Signature/cac:SignatoryParty/cac:PartyIdentification/cbc:ID - Debe ser igual al RUC del emisor |
| `2079` | El XML no contiene el tag cac:Signature/cac:SignatoryParty/cac:PartyIdentification/cbc:ID |
| `2080` | cac:Signature/cac:SignatoryParty/cac:PartyName/cbc:Name - No cumple con el estandar |
| `2081` | El XML no contiene el tag cac:Signature/cac:SignatoryParty/cac:PartyName/cbc:Name |
| `2082` | cac:Signature/cac:DigitalSignatureAttachment/cac:ExternalReference/cbc:URI - No cumple con el estandar |
| `2083` | El XML no contiene el tag cac:Signature/cac:DigitalSignatureAttachment/cac:ExternalReference/cbc:URI |
| `2084` | ext:UBLExtensions/ext:UBLExtension/ext:ExtensionContent/ds:Signature/@Id - No cumple con el estandar |
| `2085` | El XML no contiene el tag ext:UBLExtensions/ext:UBLExtension/ext:ExtensionContent/ds:Signature/@Id |
| `2086` | ext:UBLExtensions/.../ds:Signature/ds:SignedInfo/ds:CanonicalizationMethod/@Algorithm - No cumple con el estandar |
| `2087` | El XML no contiene el tag ext:UBLExtensions/.../ds:Signature/ds:SignedInfo/ds:CanonicalizationMethod/@Algorithm |
| `2088` | ext:UBLExtensions/.../ds:Signature/ds:SignedInfo/ds:SignatureMethod/@Algorithm - No cumple con el estandar |
| `2089` | El XML no contiene el tag ext:UBLExtensions/.../ds:Signature/ds:SignedInfo/ds:SignatureMethod/@Algorithm |
| `2090` | ext:UBLExtensions/.../ds:Signature/ds:SignedInfo/ds:Reference/@URI - Debe estar vacio para id |
| `2091` | El XML no contiene el tag ext:UBLExtensions/.../ds:Signature/ds:SignedInfo/ds:Reference/@URI |
| `2092` | ext:UBLExtensions/.../ds:Signature/ds:SignedInfo/.../ds:Transform@Algorithm - No cumple con el estandar |
| `2093` | El XML no contiene el tag ext:UBLExtensions/.../ds:Signature/ds:SignedInfo/ds:Reference/ds:Transform@Algorithm |
| `2094` | ext:UBLExtensions/.../ds:Signature/ds:SignedInfo/ds:Reference/ds:DigestMethod/@Algorithm - No cumple con el estandar |
| `2095` | El XML no contiene el tag ext:UBLExtensions/.../ds:Signature/ds:SignedInfo/ds:Reference/ds:DigestMethod/@Algorithm |
| `2096` | ext:UBLExtensions/.../ds:Signature/ds:SignedInfo/ds:Reference/ds:DigestValue - No cumple con el estandar |
| `2097` | El XML no contiene el tag ext:UBLExtensions/.../ds:Signature/ds:SignedInfo/ds:Reference/ds:DigestValue |
| `2098` | ext:UBLExtensions/.../ds:Signature/ds:SignatureValue - No cumple con el estandar |
| `2099` | El XML no contiene el tag ext:UBLExtensions/.../ds:Signature/ds:SignatureValue |
