---
sidebar_position: 2
title: Observaciones de guías y traslado (4100–4199)
description: Códigos SUNAT 4100–4199 (observación).
slug: /sunat-errores/observaciones-guias

---

# Observaciones de guías y traslado (4100–4199)

:::warning[Observación]
SUNAT **acepta** el comprobante, pero deja observaciones. Conviene corregir el origen del dato para los siguientes envíos.
:::

Direcciones de cliente/proveedor, factura-guía, transportista, conductor, ubigeo y sustento de traslado.

**Rango:** `4100` – `4199` · **93** códigos.

| Código | Descripción |
| --- | --- |
| `4100` | El ubigeo del cliente no cumple con el formato establecido o no es válido |
| `4101` | La dirección completa y detallada del domicilio fiscal del cliente no cumple con el formato establecido |
| `4102` | La urbanización del domicilio fiscal del cliente no cumple con el formato establecido |
| `4103` | La provincia del domicilio fiscal del cliente no cumple con el formato establecido |
| `4104` | El departamento del domicilio fiscal del cliente no cumple con el formato establecido |
| `4105` | El distrito del domicilio fiscal del cliente no cumple con el formato establecido |
| `4106` | El nombre comercial del proveedor no cumple con el formato establecido |
| `4107` | El ubigeo del proveedor no cumple con el formato establecido o no es válido |
| `4108` | La dirección completa y detallada del domicilio fiscal del proveedor no cumple con el formato establecido |
| `4109` | La urbanización del domicilio fiscal del proveedor no cumple con el formato establecido |
| `4110` | La provincia del domicilio fiscal del proveedor no cumple con el formato establecido |
| `4111` | El departamento del domicilio fiscal del proveedor no cumple con el formato establecido |
| `4112` | El distrito del domicilio fiscal del proveedor no cumple con el formato establecido |
| `4120` | El XML no contiene o no existe informacion en el tag de Información que sustenta el traslado. |
| `4121` | Para el tipo de operación no se consigna el tag SUNATEmbededDespatchAdvice de Información de sustento de traslado. |
| `4122` | Factura con información que sustenta el traslado, debe registrar leyenda 2008. |
| `4123` | sac:SUNATEmbededDespatchAdvice - Para Factura Electrónica Remitente no se consigna datos en documento de referencia(cac:OrderReference). |
| `4124` | cac:Shipment - Para Factura Electrónica Remitente debe indicar sujeto que realiza el traslado de bienes (1: Vendendor o 2: Comprador). |
| `4125` | cac:Shipment - Para Factura Electrónica Remitente debe indicar modalidad de transporte para el sustento de traslado de bienes (cbc:TransportModeCode). |
| `4126` | cac:Shipment - Debe indicar fecha de inicio de traslado para el sustento de traslado de bienes (cac:TransitPeriod/cbc:StartDate). |
| `4127` | cac:Shipment - Para Factura Electrónica Remitente debe indicar el punto de llegada para el sustento de traslado de bienes (cac:DeliveryAddrees). |
| `4128` | cac:Shipment - Para Factura Electrónica Remitente debe indicar el punto de partida para el sustento de traslado de bienes (cac:OriginAddress). |
| `4129` | Para Factura Electrónica Remitente no se consigna indicador de subcontratación (cbc:MarkAttentionIndicator) |
| `4130` | sac:SUNATEmbededDespatchAdvice - Para Factura Electrónica Remitente debe consignar datos en documento de referencia (cac:OrderReference). |
| `4131` | sac:SUNATEmbededDespatchAdvice - Para Factura Electrónica Transportista no se consigna destinatario para el sustento de traslado de bienes (cac:DeliveryCustomerParty). |
| `4132` | cac:Shipment - Para Factura Electrónica Transportista no se consigna sujeto que realiza el traslado (cbc:HandlingCode). |
| `4133` | Para Factura Electrónica Transportista no se consigna peso total de la factura para el sustento de traslado de bienes (cbc:GrossWeightMeasure). |
| `4134` | cac:Shipment - Para Factura Electrónica Transportista no se consigna modalidad de transporte para el sustento de traslado de bienes (cbc:TransportModeCode). |
| `4135` | cac:Shipment - Para Factura Electrónica Transportista no se consigna punto de llegada para el sustento de traslado de bienes (cac:DeliveryAddress). |
| `4136` | cac:Shipment - Para Factura Electrónica Transportista no se consigna punto de partida para el sustento de traslado de bienes (cac:OriginAddress). |
| `4137` | cac:OrderReference - Debe consignar número de documento de referencia que sustenta el traslado (./cbc:ID). |
| `4138` | cac:OrderReference - Debe consignar tipo de documento de referencia que sustenta el traslado (./cbc:OrderTypeCode). |
| `4139` | cac:OrderReference - Tipo de documento de referencia que sustenta el traslado no válido (01 – Factura o 09 – Guía de Remisión). |
| `4140` | cac:OrderReference - Serie-Numero ingresado en documento de referencia que sustenta el traslado no cumple con el formato establecido. |
| `4141` | cac:OrderReference - Debe consignar RUC emisor del documento de referencia que sustenta el traslado (./cac:DocumentReference/cac:IssuerParty/cac:PartyIdentification/cbc:ID). |
| `4142` | cac:OrderReference - RUC emisor del documento de referencia que sustenta el traslado no cumple con el formato establecido. |
| `4143` | cac:OrderReference – RUC Emisor de documento de referencia que sustenta el traslado no existe o se encuentra dado de baja. |
| `4144` | cac:OrderReference – Documento de Referencia ingresado no corresponde a un comprobante electrónico declarado y activo en SUNAT. |
| `4145` | cac:OrderReference – Documento de Referencia ingresado no corresponde comprobante autorizado por SUNAT. |
| `4146` | cac:OrderReference - Nombre o razon social del emisodr de referencia que sustenta el traslado de bienes no cumple con un formato válido. |
| `4147` | Debe consignar numero de documento de identidad del destinatario |
| `4148` | Debe consignar tipo de documento de identidad del destinatario |
| `4149` | Tipo de documento de identidad del destinatario no válido (Catálogo N° 06) |
| `4150` | Numero de documento de identidad del destinatario no cumple con un formato válido |
| `4151` | Debe consignar apellidos y nombres, denominación o razón social del destinatario |
| `4152` | Nombre o razon social del destinatario no cumple con un formato válido |
| `4153` | cbc:HandlingCode - Sujeto que realiza el traslado no es valido. |
| `4154` | cbc:GrossWeightMeasure@unitCode: El valor ingresado en la unidad de medida para el peso bruto total no es correcta (KGM). |
| `4155` | GrossWeightMeasure – El valor ingresado no cumple con el estandar. |
| `4156` | Debe ingresar la totalidad de la información requerida al transportista. |
| `4157` | No existe información en el tag datos de conductores. |
| `4158` | No existe información en el tag datos de vehículos. |
| `4159` | No es necesario consignar los datos del transportista para una operación de Transporte Privado. |
| `4160` | cac:CarrierParty: Debe consignar número de documento de identidad del transportista. |
| `4161` | cac:CarrierParty: Debe consignar tipo de documento de identidad del transportista. |
| `4162` | cac:CarrierParty: Tipo de documento de identidad del transportista debe ser 6-RUC |
| `4163` | cac:CarrierParty: Numero de documento de identidad del transportista no cumple con un formato válido. |
| `4164` | cac:CarrierParty: Debe consignar apellidos y nombres, denominación o razón social del transportista. |
| `4165` | cac:CarrierParty: nombre o razon social del transportista no cumple con un formato válido. |
| `4166` | cac: TransportHandlingUnit: Numero de placa (cbc:ID) no coincide con el numero de placa del vehiculo prinicipal. |
| `4167` | cac:RoadTransport/cbc:LicensePlateID: Numero de placa del vehículo no cumple con el formato válido. |
| `4168` | cac: TransportHandlingUnit: Numero de placa del vehículo principal no existe o no cumple con el formato válido (cbc:ID). |
| `4169` | cac:TransportEquipment: debe consignar al menos un vehiculo secundario. |
| `4170` | cac:TransportEquipment: Numero de placa del vehículo secundario no cumple con el formato válido (cbc:ID). |
| `4171` | cac:DriverPerson: Debe consignar número de documento de identidad del conductor (cbc:ID). |
| `4172` | cac:DriverPerson: Debe consignar tipo de documento de identidad del conductor (cbc:ID/@schemeID). |
| `4173` | cac:DriverPerson: Tipo de documento de identidad del conductor no válido (Catalogo Nro 06). |
| `4174` | cac:DriverPerson: Numero de documento de identidad del conductor no cumple con el formato válido. |
| `4175` | cac:DeliveryAddress: Debe consignar código de ubigeo de punto de llegada (cbc:ID). |
| `4176` | El dato ingresado como código de ubigeo de punto de llegada no corresponde a un valor esperado (catalogo nro 13). |
| `4177` | cac:DeliveryAddress: Debe consignar código de ubigeo válido (Catálogo N° 13). |
| `4178` | cac:DeliveryAddress: Debe consignar Dirección del punto de llegada (cbc:StreetName). |
| `4179` | cac:DeliveryAddress: Dirección completa y detallada del punto de llegada no cumple con el formato válido. |
| `4180` | cac:OriginAddress: Debe consignar código de ubigeo de punto de partida (cbc:ID). |
| `4181` | El dato ingresado como código de ubigeo de punto de partida no corresponde a un valor esperado (catalogo nro 13). |
| `4182` | cac:OriginAddress: Debe consignar código de ubigeo válido (Catálogo N° 13). |
| `4183` | cac:OriginAddress: Debe consignar Dirección detallada del punto de partida (cbc:StreetName). |
| `4184` | cac:OriginAddres: Dirección completa y detallada del punto de partida no cumple con el estandar. |
| `4185` | cac:OrderReference - Serie y numero no se encuentra registrado como baja por cambio de destinatario. |
| `4186` | cbc:Note - El campo observaciones supera la cantidad maxima especificada (250 carácteres). |
| `4187` | cac:OrderReference - El campo Tipo de documento (descripción) supera la cantidad maxima especificada (50 carácteres). |
| `4188` | El XML no contiene el atributo o no existe información del nombre o razon social del tercero relacionado. |
| `4189` | El valor ingresado como tipo de documento del nombre o razon social del tercero relacionado es incorrecto. |
| `4190` | El valor ingresado como descripcion de motivo de traslado no cumple con el estandar. |
| `4191` | Para el motivo de traslado, no se consigna información en el numero de DAM. |
| `4192` | Para el motivo de traslado, no se consigna información del manifiesto de carga. |
| `4193` | El valor ingresado como indicador de transbordo programado no cumple con el estandar. |
| `4194` | El XML no contiene el atributo o no existe información en peso bruto total de la guia. |
| `4195` | Numero de bultos o pallets es una información válida solo para importación. |
| `4196` | La fecha de recepción en SUNAT es mayor a 1 hora(s) respecto a la fecha de comprobación por OSE |
| `4197` | IssueTime - El dato ingresado no cumple con el patrón hh:mm:ss.sssss |
| `4198` | El XML no contiene el tag o no existe información del código de local anexo del emisor |
| `4199` | El código de local anexo consignado no se encuentra declarado en el RUC |
