---
sidebar_position: 3
title: Notas de crédito y débito
description: Códigos SUNAT 2100–2209 (rechazo).
slug: /sunat-errores/notas-credito-debito

---

# Notas de crédito y débito

:::danger[Rechazo]
SUNAT **rechaza** el comprobante. Hay que corregir el XML o los datos y volver a emitirlo (con otra numeración si el número ya quedó informado).
:::

Bajas, notas de crédito y notas de débito: documento afectado inexistente, rechazado o con formato inválido.

**Rango:** `2100` – `2209` · **110** códigos.

| Código | Descripción |
| --- | --- |
| `2100` | ext:UBLExtensions/.../ds:Signature/ds:KeyInfo/ds:X509Data/ds:X509Certificate - No cumple con el estandar |
| `2101` | El XML no contiene el tag ext:UBLExtensions/.../ds:Signature/ds:KeyInfo/ds:X509Data/ds:X509Certificate |
| `2102` | Error al procesar la factura |
| `2103` | La serie ingresada no es válida |
| `2104` | Numero de RUC del emisor no existe |
| `2105` | Comprobante a dar de baja no se encuentra registrado en SUNAT |
| `2106` | Factura a dar de baja ya se encuentra en estado de baja |
| `2107` | Numero de RUC SOL no coincide con RUC emisor |
| `2108` | Presentacion fuera de fecha |
| `2109` | El comprobante fue registrado previamente con otros datos |
| `2110` | UBLVersionID - La versión del UBL no es correcta |
| `2111` | El XML no contiene el tag o no existe informacion de UBLVersionID |
| `2112` | CustomizationID - La version del documento no es correcta |
| `2113` | El XML no contiene el tag o no existe informacion de CustomizationID |
| `2114` | DocumentCurrencyCode - El dato ingresado no cumple con la estructura |
| `2115` | El XML no contiene el tag o no existe informacion de DocumentCurrencyCode |
| `2116` | El tipo de documento modificado por la Nota de credito debe ser factura electronica o ticket |
| `2117` | La serie o numero del documento modificado por la Nota de Credito no cumple con el formato establecido |
| `2118` | Debe indicar las facturas relacionadas a la Nota de Credito |
| `2119` | El documento modificado en la Nota de credito no esta registrada. |
| `2120` | El documento modificado en la Nota de credito se encuentra de baja |
| `2121` | El documento modificado en la Nota de credito esta registrada como rechazada |
| `2122` | El tag cac:LegalMonetaryTotal/cbc:PayableAmount debe tener informacion valida |
| `2123` | RegistrationName - El dato ingresado no cumple con el estandar |
| `2124` | El XML no contiene el tag RegistrationName del emisor del documento |
| `2125` | ReferenceID - El dato ingresado debe indicar SERIE-CORRELATIVO del documento al que se relaciona la Nota |
| `2126` | El XML no contiene informacion en el tag ReferenceID del documento al que se relaciona la nota |
| `2127` | ResponseCode - El dato ingresado no cumple con la estructura |
| `2128` | El XML no contiene el tag o no existe informacion de ResponseCode |
| `2129` | AdditionalAccountID - El dato ingresado en el tipo de documento de identidad del receptor no cumple con el estandar |
| `2130` | El XML no contiene el tag o no existe informacion de AdditionalAccountID del receptor del documento |
| `2131` | CustomerAssignedAccountID - El numero de documento de identidad del receptor debe ser RUC |
| `2132` | El XML no contiene el tag o no existe informacion de CustomerAssignedAccountID del receptor del documento |
| `2133` | RegistrationName - El dato ingresado no cumple con el estandar |
| `2134` | El XML no contiene el tag o no existe informacion de RegistrationName del receptor del documento |
| `2135` | cac:DiscrepancyResponse/cbc:Description - El dato ingresado no cumple con la estructura |
| `2136` | El XML no contiene el tag o no existe informacion de cac:DiscrepancyResponse/cbc:Description |
| `2137` | El Numero de orden del item no cumple con el formato establecido |
| `2138` | CreditedQuantity/@unitCode - El dato ingresado no cumple con el estandar |
| `2139` | CreditedQuantity - El dato ingresado no cumple con el estandar |
| `2140` | El PriceTypeCode debe tener el valor 01 |
| `2141` | cac:TaxCategory/cac:TaxScheme/cbc:ID - El dato ingresado no cumple con el estandar |
| `2142` | El codigo del tributo es invalido |
| `2143` | cac:TaxScheme/cbc:Name del item - No existe el tag o el dato ingresado no cumple con el estandar |
| `2144` | cac:TaxCategory/cac:TaxScheme/cbc:TaxTypeCode El dato ingresado no cumple con el estandar |
| `2145` | El tipo de afectacion del IGV es incorrecto |
| `2146` | El Nombre Internacional debe ser VAT |
| `2147` | El sistema de calculo del ISC es incorrecto |
| `2148` | El Nombre Internacional debe ser EXC |
| `2149` | El dato ingresado en PayableAmount no cumple con el formato establecido |
| `2150` | El valor ingresado en AdditionalMonetaryTotal/cbc:ID es incorrecto |
| `2151` | AdditionalMonetaryTotal/cbc:ID debe tener valor |
| `2152` | Es obligatorio al menos un AdditionalInformation |
| `2153` | Error al procesar la Nota de Credito |
| `2154` | TaxAmount - El dato ingresado en impuestos globales no cumple con el estandar |
| `2155` | El XML no contiene el tag TaxAmount de impuestos globales |
| `2156` | TaxScheme ID - El dato ingresado no cumple con el estandar |
| `2157` | El codigo del tributo es invalido |
| `2158` | El XML no contiene el tag o no existe informacion de TaxScheme ID de impuestos globales |
| `2159` | TaxScheme Name - El dato ingresado no cumple con el estandar |
| `2160` | El XML no contiene el tag o no existe informacion de TaxScheme Name de impuestos globales |
| `2161` | CustomizationID - La version del documento no es correcta |
| `2162` | El XML no contiene el tag o no existe informacion de CustomizationID |
| `2163` | UBLVersionID - La versión del UBL no es correcta |
| `2164` | El XML no contiene el tag o no existe informacion de UBLVersionID |
| `2165` | Error al procesar la Nota de Debito |
| `2166` | RegistrationName - El dato ingresado no cumple con el estandar |
| `2167` | El XML no contiene el tag RegistrationName del emisor del documento |
| `2168` | DocumentCurrencyCode - El dato ingresado no cumple con el formato establecido |
| `2169` | El XML no contiene el tag o no existe informacion de DocumentCurrencyCode |
| `2170` | ReferenceID - El dato ingresado debe indicar SERIE-CORRELATIVO del documento al que se relaciona la Nota |
| `2171` | El XML no contiene informacion en el tag ReferenceID del documento al que se relaciona la nota |
| `2172` | ResponseCode - El dato ingresado no cumple con la estructura |
| `2173` | El XML no contiene el tag o no existe informacion de ResponseCode |
| `2174` | cac:DiscrepancyResponse/cbc:Description - El dato ingresado no cumple con la estructura |
| `2175` | El XML no contiene el tag o no existe informacion de cac:DiscrepancyResponse/cbc:Description |
| `2176` | AdditionalAccountID - El dato ingresado en el tipo de documento de identidad del receptor no cumple con el estandar |
| `2177` | El XML no contiene el tag o no existe informacion de AdditionalAccountID del receptor del documento |
| `2178` | CustomerAssignedAccountID - El numero de documento de identidad del receptor debe ser RUC. |
| `2179` | El XML no contiene el tag o no existe informacion de CustomerAssignedAccountID del receptor del documento |
| `2180` | RegistrationName - El dato ingresado no cumple con el estandar |
| `2181` | El XML no contiene el tag o no existe informacion de RegistrationName del receptor del documento |
| `2182` | TaxScheme ID - El dato ingresado no cumple con el estandar |
| `2183` | El codigo del tributo es invalido |
| `2184` | El XML no contiene el tag o no existe informacion de TaxScheme ID de impuestos globales |
| `2185` | TaxScheme Name - El dato ingresado no cumple con el estandar |
| `2186` | El XML no contiene el tag o no existe informacion de TaxScheme Name de impuestos globales |
| `2187` | El Numero de orden del item no cumple con el formato establecido |
| `2188` | DebitedQuantity/@unitCode El dato ingresado no cumple con el estandar |
| `2189` | DebitedQuantity El dato ingresado no cumple con el estandar |
| `2190` | El XML no contiene el tag Price/cbc:PriceAmount en el detalle de los Items |
| `2191` | El XML no contiene el tag Price/cbc:LineExtensionAmount en el detalle de los Items |
| `2192` | EL PriceTypeCode debe tener el valor 01 |
| `2193` | cac:TaxCategory/cac:TaxScheme/cbc:ID El dato ingresado no cumple con el estandar |
| `2194` | El codigo del tributo es invalido |
| `2195` | cac:TaxScheme/cbc:Name del item - No existe el tag o el dato ingresado no cumple con el estandar |
| `2196` | cac:TaxCategory/cac:TaxScheme/cbc:TaxTypeCode El dato ingresado no cumple con el estandar |
| `2197` | El tipo de afectacion del IGV es incorrecto |
| `2198` | El Nombre Internacional debe ser VAT |
| `2199` | El sistema de calculo del ISC es incorrecto |
| `2200` | El Nombre Internacional debe ser EXC |
| `2201` | El tag cac:RequestedMonetaryTotal/cbc:PayableAmount debe tener informacion valida |
| `2202` | TaxAmount - El dato ingresado en impuestos globales no cumple con el estandar |
| `2203` | El XML no contiene el tag TaxAmount de impuestos globales |
| `2204` | El tipo de documento modificado por la Nota de Debito debe ser factura electronica, ticket o documento autorizado |
| `2205` | La serie o numero del documento modificado por la Nota de Debito no cumple con el formato establecido |
| `2206` | Debe indicar los documentos afectados por la Nota de Debito |
| `2207` | El documento modificado en la Nota de debito se encuentra de baja |
| `2208` | El documento modificado en la Nota de debito esta registrada como rechazada |
| `2209` | El documento modificado en la Nota de debito no esta registrada |
