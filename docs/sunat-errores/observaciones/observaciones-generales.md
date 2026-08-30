---
sidebar_position: 1
title: Observaciones generales (4000–4099)
description: Códigos SUNAT 4000–4099 (observación).
slug: /sunat-errores/observaciones-generales

---

# Observaciones generales (4000–4099)

:::warning[Observación]
SUNAT **acepta** el comprobante, pero deja observaciones. Conviene corregir el origen del dato para los siguientes envíos.
:::

El comprobante **sí es aceptado**, pero SUNAT marca observaciones: direcciones, leyendas, redondeo o datos informativos.

**Rango:** `4000` – `4099` · **100** códigos.

| Código | Descripción |
| --- | --- |
| `4000` | El documento ya fue presentado anteriormente. |
| `4001` | El numero de RUC del receptor no existe. |
| `4002` | Para el TaxTypeCode, esta usando un valor que no existe en el catalogo. |
| `4003` | El comprobante fue registrado previamente como rechazado. |
| `4004` | El DocumentTypeCode de las guias debe existir y tener 2 posiciones |
| `4005` | El DocumentTypeCode de las guias debe ser 09 o 31 |
| `4006` | El ID de las guias debe tener informacion de la SERIE-NUMERO de guia. |
| `4007` | El XML no contiene el ID de las guias. |
| `4008` | El DocumentTypeCode de Otros documentos relacionados no cumple con el estandar. |
| `4009` | El DocumentTypeCode de Otros documentos relacionados tiene valores incorrectos. |
| `4010` | El ID de los documentos relacionados no cumplen con el estandar. |
| `4011` | El XML no contiene el tag ID de documentos relacionados. |
| `4012` | El ubigeo indicado en el comprobante no es el mismo que esta registrado para el contribuyente. |
| `4013` | El RUC del receptor no esta activo |
| `4014` | El RUC del receptor no esta habido |
| `4015` | Si el tipo de documento del receptor no es RUC, debe tener operaciones de exportacion |
| `4016` | El total valor venta neta de oper. gravadas IGV debe ser mayor a 0.00 o debe existir oper. gravadas onerosas |
| `4017` | El total valor venta neta de oper. inafectas IGV debe ser mayor a 0.00 o debe existir oper. inafectas onerosas o de export. |
| `4018` | El total valor venta neta de oper. exoneradas IGV debe ser mayor a 0.00 o debe existir oper. exoneradas |
| `4019` | El calculo del IGV no es correcto |
| `4020` | El ISC no esta informado correctamente |
| `4021` | Si se utiliza la leyenda con codigo 2000, el importe de percepcion debe ser mayor a 0.00 |
| `4022` | Si se utiliza la leyenda con código 2001, el total de operaciones exoneradas debe ser mayor a 0.00 |
| `4023` | Si se utiliza la leyenda con código 2002, el total de operaciones exoneradas debe ser mayor a 0.00 |
| `4024` | Si se utiliza la leyenda con código 2003, el total de operaciones exoneradas debe ser mayor a 0.00 |
| `4025` | Si usa la leyenda de Transferencia o Servivicio gratuito, todos los items deben ser no onerosos |
| `4026` | No se puede indicar Guia de remision de remitente y Guia de remision de transportista en el mismo documento |
| `4027` | El importe total no coincide con la sumatoria de los valores de venta mas los tributos mas los cargos |
| `4028` | El monto total de la nota de credito debe ser menor o igual al monto de la factura |
| `4029` | El ubigeo indicado en el comprobante no es el mismo que esta registrado para el contribuyente |
| `4030` | El ubigeo indicado en el comprobante no es el mismo que esta registrado para el contribuyente |
| `4031` | Debe indicar el nombre comercial |
| `4032` | Si el código del motivo de emisión de la Nota de Credito es 03, debe existir la descripción del item |
| `4033` | La fecha de generación de la numeración debe ser menor o igual a la fecha de generación de la comunicación |
| `4034` | El comprobante fue registrado previamente como baja |
| `4035` | El comprobante fue registrado previamente como rechazado |
| `4036` | La fecha de emisión de los rangos debe ser menor o igual a la fecha de generación del resumen |
| `4037` | El calculo del Total de IGV del Item no es correcto |
| `4038` | El resumen contiene menos series por tipo de documento que el envío anterior para la misma fecha de emisión |
| `4039` | No ha consignado información del ubigeo del domicilio fiscal |
| `4040` | Si el importe de percepcion es mayor a 0.00, debe utilizar una leyenda con codigo 2000 |
| `4041` | El codigo de pais debe ser PE |
| `4042` | Para tipo de operación se está usando un valor que no existe en el catálogo. Nro. 17. |
| `4043` | Para el TransportModeCode, se está usando un valor que no existe en el catálogo Nro. 18. |
| `4044` | PrepaidAmount: Monto total anticipado no coincide con la sumatoria de los montos por documento de anticipo. |
| `4045` | No debe consignar los datos del transportista para la modalidad de transporte 02 – Transporte Privado. |
| `4046` | No debe consignar información adicional en la dirección para los locales anexos. |
| `4047` | sac:SUNATTransaction/cbc:ID debe ser igual a 10 o igual a 11 cuando ingrese información para sustentar el traslado. |
| `4048` | cac:AdditionalDocumentReference/cbc:DocumentTypeCode - Contiene un valor no valido para documentos relacionado. |
| `4049` | El numero de DNI del receptor no existe. |
| `4050` | El numero de RUC del proveedor no existe. |
| `4051` | El RUC del proveedor no esta activo. |
| `4052` | El RUC del proveedor no esta habido. |
| `4053` | Proveedor no debe ser igual al remitente o destinatario. |
| `4054` | La guía no debe contener datos del proveedor. |
| `4055` | El XML no contiene el atributo o no existe información en descripcion del motivo de traslado. |
| `4056` | El XML no contiene el tag o no existe información en el tag SplitConsignmentIndicator. |
| `4057` | GrossWeightMeasure – El dato ingresado no cumple con el formato establecido. |
| `4058` | cbc:TotalPackageQuantity - El dato ingresado no cumple con el formato establecido. |
| `4059` | Numero de bultos o pallets - información válida para importación. |
| `4060` | La guía no debe contener datos del transportista. |
| `4061` | El numero de RUC del transportista no existe. |
| `4062` | El RUC del transportista no esta activo. |
| `4063` | El RUC del transportista no esta habido. |
| `4064` | /DespatchAdvice/cac:Shipment/cac:ShipmentStage/cac:TransportMeans/cbc:RegistrationNationalityID - El dato ingresado no cumple con el formato establecido. |
| `4065` | cac:TransportMeans/cbc:TransportMeansTypeCode - El valor ingresado como tipo de unidad de transporte es incorrecta. |
| `4066` | El numero de DNI del conductor no existe. |
| `4067` | El XML no contiene el tag o no existe informacion del ubigeo del punto de llegada. |
| `4068` | Direccion de punto de lllegada - El dato ingresado no cumple con el formato establecido. |
| `4069` | CityName - El dato ingresado no cumple con el formato establecido. |
| `4070` | District - El dato ingresado no cumple con el formato establecido. |
| `4071` | Numero de Contenedor - El dato ingresado no cumple con el formato establecido. |
| `4072` | Numero de contenedor - información válida para importación. |
| `4073` | TransEquipmentTypeCode - El valor ingresado como tipo de contenedor es incorrecta. |
| `4074` | Numero Precinto - El dato ingresado no cumple con el formato establecido. |
| `4075` | El XML no contiene el tag o no existe informacion del ubigeo del punto de partida. |
| `4076` | Direccion de punto de partida - El dato ingresado no cumple con el formato establecido. |
| `4077` | CityName - El dato ingresado no cumple con el formato establecido. |
| `4078` | District - El dato ingresado no cumple con el formato establecido. |
| `4079` | Código de Puerto o Aeropuerto - El dato ingresado no cumple con el formato establecido. |
| `4080` | Tipo de Puerto o Aeropuerto - El dato ingresado no cumple con el formato establecido. |
| `4081` | El XML No contiene El tag o No existe información del Numero de orden del item. |
| `4082` | Número de Orden del Ítem - El orden del ítem no cumple con el formato establecido. |
| `4083` | Cantidad - El dato ingresado no cumple con el formato establecido. |
| `4084` | Descripción del Ítem - El dato ingresado no cumple con el formato establecido. |
| `4085` | Código del Ítem - El dato ingresado no cumple con el formato establecido. |
| `4086` | El emisor y el cliente son Agentes de percepción de combustible en la fecha de emisión. |
| `4087` | El Comprobante de Pago Electrónico no está Registrado en los Sistemas de la SUNAT. |
| `4088` | El Comprobante de Pago no está autorizado en los Sistemas de la SUNAT. |
| `4089` | La operación con este cliente está excluida del sistema de percepción. Es agente de retención. |
| `4090` | La operación con este cliente está excluida del sistema de percepción. Es entidad exceptuada de la percepción. |
| `4091` | La operación con este proveedor está excluida del sistema de retención. Es agente de percepción, agente de retención o buen contribuyente. |
| `4092` | El nombre comercial del emisor no cumple con el formato establecido |
| `4093` | El codigo de ubigeo del domicilio fiscal del emisor no es válido |
| `4094` | La dirección completa y detallada del domicilio fiscal del emisor no cumple con el formato establecido |
| `4095` | La urbanización del domicilio fiscal del emisor no cumple con el formato establecido |
| `4096` | La provincia del domicilio fiscal del emisor no cumple con el formato establecido |
| `4097` | El departamento del domicilio fiscal del emisor no cumple con el formato establecido |
| `4098` | El distrito del domicilio fiscal del emisor no cumple con el formato establecido |
| `4099` | El nombre comercial del cliente no cumple con el formato establecido |
