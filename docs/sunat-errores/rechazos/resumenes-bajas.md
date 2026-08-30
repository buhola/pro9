---
sidebar_position: 4
title: Resúmenes diarios y comunicaciones de baja
description: Códigos SUNAT 2210–2324 (rechazo).
slug: /sunat-errores/resumenes-bajas

---

# Resúmenes diarios y comunicaciones de baja

:::danger[Rechazo]
SUNAT **rechaza** el comprobante. Hay que corregir el XML o los datos y volver a emitirlo (con otra numeración si el número ya quedó informado).
:::

Resumen de boletas (`RC-fecha-correlativo`) y comunicación de baja (`RA-fecha-correlativo`): rangos, duplicados y fechas.

**Rango:** `2210` – `2324` · **115** códigos.

| Código | Descripción |
| --- | --- |
| `2210` | El dato ingresado no cumple con el formato RC-fecha-correlativo |
| `2211` | El XML no contiene el tag ID |
| `2212` | UBLVersionID - La versión del UBL del resumen de boletas no es correcta |
| `2213` | El XML no contiene el tag UBLVersionID |
| `2214` | CustomizationID - La versión del resumen de boletas no es correcta |
| `2215` | El XML no contiene el tag CustomizationID |
| `2216` | CustomerAssignedAccountID - El dato ingresado no cumple con el estandar |
| `2217` | El XML no contiene el tag CustomerAssignedAccountID del emisor del documento |
| `2218` | AdditionalAccountID - El dato ingresado no cumple con el estandar |
| `2219` | El XML no contiene el tag AdditionalAccountID del emisor del documento |
| `2220` | El ID debe coincidir con el nombre del archivo |
| `2221` | El RUC debe coincidir con el RUC del nombre del archivo |
| `2222` | El contribuyente no está autorizado a emitir comprobantes electronicos |
| `2223` | El archivo ya fue presentado anteriormente |
| `2224` | Numero de RUC SOL no coincide con RUC emisor |
| `2225` | Numero de RUC del emisor no existe |
| `2226` | El contribuyente no esta activo |
| `2227` | El contribuyente no cumple con tipo de empresa o tributos requeridos |
| `2228` | RegistrationName - El dato ingresado no cumple con el estandar |
| `2229` | El XML no contiene el tag RegistrationName del emisor del documento |
| `2230` | IssueDate - El dato ingresado no cumple con el patron YYYY-MM-DD |
| `2231` | El XML no contiene el tag IssueDate |
| `2232` | IssueDate- El dato ingresado no es valido |
| `2233` | ReferenceDate - El dato ingresado no cumple con el patron YYYY-MM-DD |
| `2234` | El XML no contiene el tag ReferenceDate |
| `2235` | ReferenceDate- El dato ingresado no es valido |
| `2236` | La fecha del IssueDate no debe ser mayor a la fecha de recepción |
| `2237` | La fecha del ReferenceDate no debe ser mayor al Today |
| `2238` | LineID - El dato ingresado no cumple con el estandar |
| `2239` | LineID - El dato ingresado debe ser correlativo mayor a cero |
| `2240` | El XML no contiene el tag LineID de SummaryDocumentsLine |
| `2241` | DocumentTypeCode - El valor del tipo de documento es invalido |
| `2242` | El XML no contiene el tag DocumentTypeCode |
| `2243` | El dato ingresado no cumple con el patron SERIE |
| `2244` | El XML no contiene el tag DocumentSerialID |
| `2245` | El dato ingresado en StartDocumentNumberID debe ser numerico |
| `2246` | El XML no contiene el tag StartDocumentNumberID |
| `2247` | El dato ingresado en sac:EndDocumentNumberID debe ser numerico |
| `2248` | El XML no contiene el tag sac:EndDocumentNumberID |
| `2249` | Los rangos deben ser mayores a cero |
| `2250` | En el rango de comprobantes, el EndDocumentNumberID debe ser mayor o igual al StartInvoiceNumberID |
| `2251` | El dato ingresado en TotalAmount debe ser numerico mayor o igual a cero |
| `2252` | El XML no contiene el tag TotalAmount |
| `2253` | El dato ingresado en TotalAmount debe ser numerico mayor a cero |
| `2254` | PaidAmount - El dato ingresado no cumple con el estandar |
| `2255` | El XML no contiene el tag PaidAmount |
| `2256` | InstructionID - El dato ingresado no cumple con el estandar |
| `2257` | El XML no contiene el tag InstructionID |
| `2258` | Debe indicar Referencia de Importes asociados a las boletas de venta |
| `2259` | Debe indicar 3 Referencias de Importes asociados a las boletas de venta |
| `2260` | PaidAmount - El dato ingresado debe ser mayor o igual a 0.00 |
| `2261` | cbc:Amount - El dato ingresado no cumple con el estandar |
| `2262` | El XML no contiene el tag cbc:Amount |
| `2263` | ChargeIndicator - El dato ingresado no cumple con el estandar |
| `2264` | El XML no contiene el tag ChargeIndicator |
| `2265` | Debe indicar Información acerca del Importe Total de Otros Cargos |
| `2266` | Debe indicar cargos mayores o iguales a cero |
| `2267` | TaxScheme ID - El dato ingresado no cumple con el estandar |
| `2268` | El codigo del tributo es invalido |
| `2269` | El XML no contiene el tag TaxScheme ID de Información acerca del importe total de un tipo particular de impuesto |
| `2270` | TaxScheme Name - El dato ingresado no cumple con el estandar |
| `2271` | El XML no contiene el tag TaxScheme Name de impuesto |
| `2272` | TaxScheme TaxTypeCode - El dato ingresado no cumple con el estandar |
| `2273` | TaxAmount - El dato ingresado no cumple con el estandar |
| `2274` | El XML no contiene el tag TaxAmount |
| `2275` | Si el codigo de tributo es 2000, el nombre del tributo debe ser ISC |
| `2276` | Si el codigo de tributo es 1000, el nombre del tributo debe ser IGV |
| `2277` | No se ha consignado ninguna informacion del importe total de tributos |
| `2278` | Debe indicar Información acerca del importe total de IGV/IVAP |
| `2279` | Debe indicar Items de consolidado de documentos |
| `2280` | Existen problemas con la informacion del resumen de comprobantes |
| `2281` | Error en la validacion de los rangos de los comprobantes |
| `2282` | Existe documento ya informado anteriormente |
| `2283` | El dato ingresado no cumple con el formato RA-fecha-correlativo |
| `2284` | El tag ID esta vacío |
| `2285` | El ID debe coincidir con el nombre del archivo |
| `2286` | El RUC debe coincidir con el RUC del nombre del archivo |
| `2287` | AdditionalAccountID - El dato ingresado no cumple con el estandar |
| `2288` | El XML no contiene el tag AdditionalAccountID del emisor del documento |
| `2289` | CustomerAssignedAccountID - El dato ingresado no cumple con el estandar |
| `2290` | El XML no contiene el tag CustomerAssignedAccountID del emisor del documento |
| `2291` | El contribuyente no esta autorizado a emitir comprobantes electronicos |
| `2292` | Numero de RUC SOL no coincide con RUC emisor |
| `2293` | Numero de RUC del emisor no existe |
| `2294` | El contribuyente no esta activo |
| `2295` | El contribuyente no cumple con tipo de empresa o tributos requeridos |
| `2296` | RegistrationName - El dato ingresado no cumple con el estandar |
| `2297` | El XML no contiene el tag RegistrationName del emisor del documento |
| `2298` | IssueDate - El dato ingresado no cumple con el patron YYYY-MM-DD |
| `2299` | El XML no contiene el tag IssueDate |
| `2300` | IssueDate - El dato ingresado no es valido |
| `2301` | La fecha del IssueDate no debe ser mayor a la fecha de recepción |
| `2302` | ReferenceDate - El dato ingresado no cumple con el patron YYYY-MM-DD |
| `2303` | El XML no contiene el tag ReferenceDate |
| `2304` | ReferenceDate - El dato ingresado no es valido |
| `2305` | LineID - El dato ingresado no cumple con el estandar |
| `2306` | LineID - El dato ingresado debe ser correlativo mayor a cero |
| `2307` | El tag LineID de VoidedDocumentsLine esta vacío |
| `2308` | DocumentTypeCode - El valor del tipo de documento es invalido |
| `2309` | El tag DocumentTypeCode es vacío |
| `2310` | El dato ingresado no cumple con el patron SERIE |
| `2311` | El tag DocumentSerialID es vacío |
| `2312` | El dato ingresado en DocumentNumberID debe ser numerico y como maximo de 8 digitos |
| `2313` | El tag DocumentNumberID esta vacío |
| `2314` | El dato ingresado en VoidReasonDescription debe contener información válida |
| `2315` | El tag VoidReasonDescription esta vacío |
| `2316` | Debe indicar Items en VoidedDocumentsLine |
| `2317` | Error al procesar el resumen de anulados |
| `2318` | CustomizationID - La version del documento no es correcta |
| `2319` | El XML no contiene el tag CustomizationID |
| `2320` | UBLVersionID - La version del UBL no es la correcta |
| `2321` | El XML no contiene el tag UBLVersionID |
| `2322` | Error en la validacion de los rangos |
| `2323` | Existe documento ya informado anteriormente en una comunicacion de baja |
| `2324` | El archivo de comunicacion de baja ya fue presentado anteriormente |
