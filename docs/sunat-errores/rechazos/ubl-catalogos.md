---
sidebar_position: 12
title: UBL 2.1 y catálogos SUNAT
description: Códigos SUNAT 3000–3099 (rechazo).
slug: /sunat-errores/ubl-catalogos

---

# UBL 2.1 y catálogos SUNAT

:::danger[Rechazo]
SUNAT **rechaza** el comprobante. Hay que corregir el XML o los datos y volver a emitirlo (con otra numeración si el número ya quedó informado).
:::

Catálogos, unidades de medida, tributos por línea y campos UBL 2.1 del comprobante.

**Rango:** `3000` – `3099` · **100** códigos.

| Código | Descripción |
| --- | --- |
| `3000` | El monto total del impuestos sobre el valor de venta de operaciones gratuitas/inafectas/exoneradas debe ser igual a 0.00 |
| `3001` | El Código producto de SUNAT no puede ser vacio si es de Exportacion |
| `3002` | El Código producto de SUNAT no es válido |
| `3003` | El XML no contiene el tag o no existe información de total valor de venta globales |
| `3004` | El XML no contiene el tag o no existe información de la categoría de impuesto globales |
| `3005` | El XML no contiene el tag o no existe información del código de tributo en operaciones inafectas/exoneradas |
| `3006` | El dato ingresado en descripcion de leyenda no cumple con el formato establecido. |
| `3007` | El dato ingresado como codigo de tributo global no corresponde al valor esperado. |
| `3008` | La sumatoria del total valor de venta - Otros tributos de pago de línea no corresponden al total |
| `3009` | La sumatoria del total del importe del tributo Otros tributos de línea no corresponden al total |
| `3010` | El XML no contiene el tag o no existe información de total valor de venta en operaciones gravadas |
| `3011` | El dato ingresado en el total valor de venta en operaciones gravadas no cumple con el formato establecido |
| `3012` | El dato ingresado en el importe del tributo en operaciones gravadas no cumple con el formato establecido |
| `3013` | El XML no contiene el tag o no existe información de la categoría de impuesto en operaciones gravadas |
| `3014` | El codigo de leyenda no debe repetirse en el comprobante. |
| `3015` | El XML no contiene el tag o no existe información del código de tributo en operaciones gravadas |
| `3016` | El dato ingresado en base monto por cargo/descuento globales no cumple con el formato establecido |
| `3017` | El XML no contiene el tag o no existe información del nombre de tributo en operaciones gravadas |
| `3018` | El XML no contiene el tag o no existe información del código internacional del tributo en operaciones gravadas |
| `3019` | El dato ingresado en total precio de venta no cumple con el formato establecido |
| `3020` | El dato ingresado en el monto total de impuestos no cumple con el formato establecido |
| `3021` | El dato ingresado en el monto total de impuestos por línea no cumple con el formato establecido |
| `3022` | El importe total de impuestos por línea no coincide con la sumatoria de los impuestos por línea. |
| `3023` | El tipo de documento no se encuentra en el catálogo |
| `3024` | El tag cac:TaxTotal no debe repetirse a nivel de totales |
| `3025` | El dato ingresado en factor de cargo o descuento global no cumple con el formato establecido. |
| `3026` | El tag cac:TaxTotal no debe repetirse a nivel de Item |
| `3027` | El valor del atributo no se encuentra en el catálogo |
| `3028` | El dato ingresado en código de SW de facturación no cumple con el formato establecido. |
| `3029` | El XML no contiene el tag o no existe información del tipo de documento de identidad del emisor |
| `3030` | El XML no contiene el tag o no existe información del código de local anexo del emisor |
| `3031` | El dato ingresado en TaxableAmount de la linea no cumple con el formato establecido |
| `3032` | El XML no contiene el tag o no existe información de la categoría de impuesto de la línea |
| `3033` | El codigo de bien o servicio sujeto a detracción no existe en el listado. |
| `3034` | El xml no contiene el tag o no existe información en el nro de cuenta de detracción |
| `3035` | El xml no contiene el tag o no existe información en el monto de detraccion |
| `3036` | El XML no contiene el tag o no existe información del nombre del tributo |
| `3037` | El dato ingresado en monto de detraccion no cumple con el formato establecido |
| `3038` | La sumatoria de los IGV (operaciones gravadas) de línea no corresponden al total |
| `3039` | La sumatoria del total valor de venta - operaciones gravadas de línea no corresponden al total |
| `3040` | La sumatoria del total valor de venta - Exportaciones de línea no corresponden al total |
| `3041` | La sumatoria del total valor de venta - operaciones inafectas de línea no corresponden al total |
| `3042` | La sumatoria del total valor de venta - operaciones exoneradas de línea no corresponden al total |
| `3043` | El XML no contiene el tag o no existe información de total valor de venta ISC e IVAP |
| `3044` | El dato ingresado en el total valor de venta ISC e IVAP no cumple con el formato establecido |
| `3045` | La sumatoria del total valor de venta - ISC de línea no corresponden al total |
| `3046` | La sumatoria del total valor de venta - IVAP de línea no corresponden al total |
| `3047` | El dato ingresado en el importe del tributo para ISC e IVAP no cumple con el formato establecido |
| `3048` | La sumatoria del total del importe del tributo ISC de línea no corresponden al total |
| `3049` | El importe del IVAP no corresponden al determinado por la información consignada. |
| `3050` | Afectación de IGV no corresponde al código de tributo de la linea. |
| `3051` | Nombre de tributo no corresponde al código de tributo de la linea. |
| `3052` | El factor de cargo/descuento por linea no cumple con el formato establecido. |
| `3053` | El Monto base de cargo/descuento por linea no cumple con el formato establecido. |
| `3054` | El XML no contiene el tag o no existe información de la categoría de impuesto en ISC o IVAP |
| `3055` | Si el código de tributo es 2000, la categoría del tributo debe ser S |
| `3056` | Si el código de tributo es 1016, la categoría del tributo debe ser S |
| `3057` | La sumatoria del total valor de venta - operaciones gratuitas de línea no corresponden al total |
| `3058` | El XML no contiene el tag o no existe información del código de tributo para ISC o IVAP |
| `3059` | el XML no contiene el tag o no existe información de código de tributo. |
| `3060` | El valor del tag código de tributo no corresponde al esperado. |
| `3061` | No se permite importe mayor a cero cuando el codigo de tributo es IVAP y el comprobante esta sujeta a IVAP |
| `3062` | La tasa o porcentaje de detracción no corresponde al valor esperado. |
| `3063` | El XML no contiene el tag de matricula de embarcación en Detracciones para recursos hidrobiologicos. |
| `3064` | El XML no contiene tag o no existe información del valor del concepto por linea. |
| `3065` | El XML no contiene tag de la fecha del concepto por linea. |
| `3066` | El XML contiene un codigo de tributo no valido para Servicios Publicos. |
| `3067` | El código de tributo no debe repetirse a nivel de item |
| `3068` | El código de tributo no debe repetirse a nivel de totales |
| `3069` | El xml contiene una linea con mas de un codigo de tributo repetitivo. |
| `3070` | EL codigo internacional del tributo por linea no corresponde al valor esperado por su Id. |
| `3071` | El dato ingresado como codigo de motivo de cargo/descuento global no es valido (catalogo nro 53) |
| `3072` | El XML no contiene el tag o no existe informacion de codigo de motivo de cargo/descuento global. |
| `3073` | El XML no contiene el tag o no existe informacion de codigo de motivo de cargo/descuento por item. |
| `3074` | El monto del cargo para el para FISE debe ser igual mayor a 0.00 |
| `3075` | La sumatoria de descuentos que afectan a BI por linea no corresponden al total |
| `3076` | La sumatoria de descuentos que no afectan a BI por linea no corresponden al total |
| `3077` | La sumatoria de cargos que afectan a BI por linea no corresponden al total |
| `3078` | La sumatoria de cargos que no afectan a BI por linea no corresponden al total |
| `3079` | La sumatoria de montos bases de los descuentos que afectan a BI por linea no corresponden al total |
| `3080` | La sumatoria de montos bases de los descuentos que no afectan a BI por linea no corresponden al total |
| `3081` | La sumatoria de montos bases de los cargos que afectan a BI por linea no corresponden al total |
| `3082` | La sumatoria de montos bases de los cargos que no afectan a BI por linea no corresponden al total |
| `3083` | El XML no contiene el tag o no existe información del total valor de venta. |
| `3084` | La sumatoria de valor de venta no corresponde a los importes consignados |
| `3085` | El XML no contiene el tag o no existe información del total precio de venta. |
| `3086` | La sumatoria consignados en descuentos globales no corresponden al total. |
| `3087` | La sumatoria consignados en cargos globales no corresponden al total |
| `3088` | El valor ingresado como moneda del comprobante no es valido (catalogo nro 02). |
| `3089` | El XML contiene mas de un tag como elemento de numero de documento del emisor |
| `3090` | El XML contiene mas de un tag como elemento de numero de documento del receptor. |
| `3091` | Si se tipo de operación es Venta Interna - Sujeta al FISE, debe ingresar cargo para FISE |
| `3092` | Para cargo/descuento FISE, debe ingresar monto base y debe ser mayor a 0.00 |
| `3093` | Si el tipo de operación es Operación Sujeta a Percepción, debe ingresar cargo para Percepción |
| `3094` | El comprobante más 'código de operación del ítem' no debe repetirse |
| `3095` | El comprobante no debe ser emitido y editado en el mismo envío |
| `3096` | El comprobante no debe ser editado y anulado en el mismo envío |
| `3097` | El emisor a la fecha no se encuentra registrado ó habilitado en el Registro de exportadores de servicios SUNAT |
| `3098` | El XML no contiene el tag o no existe información del pais de uso, exploración o aprovechamiento |
| `3099` | El dato ingresado como pais de uso, exploracion o aprovechamiento es incorrecto. |
