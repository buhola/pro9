---
sidebar_position: 1
title: Productos e inventario
slug: /novedades/productos-inventario

---

# 📦 Productos e Inventario

### Productos
- **Variantes por atributos**: se generan automáticamente, con imagen propia por variación y etiquetas de color.
- **Importación por Excel** de atributos y de variaciones.
- Nuevas pestañas **Atributos** y **Avanzado** en el formulario de producto.
- Opción de **ocultar productos** de los buscadores.
- Los **vendedores pueden crear productos de forma masiva** y exportarlos, si tienen el permiso.
- **Historial de ventas** que ahora registra también las ventas en paquetes.
- Editor de código de barras con opción de espaciado.
- Plantilla de actualización de precios por almacén: ahora muestra el nombre del almacén en lugar del ID.
- Mensajes de advertencia claros al importar productos.
- Los campos numéricos se seleccionan con un solo clic.
- Se corrigió que se pudiera crear un producto después de un error.
- El símbolo de moneda respeta el formulario, también en precio de compra.
- Línea de producto vinculada a la lógica del giro *farmacia*.
- Se admiten decimales en el factor de unidades creadas manualmente.

### Inventario y Kardex
- **Cantidades decimales** en ingresos y salidas de stock.
- **Importación robusta de stock real**.
- **Kardex valorizado**: muestra el stock inicial, respeta el orden de movimientos en el Excel SUNAT e incluye las notas de venta.
- **Reporte de kardex por lotes** disponible en la bandeja de descargas (Excel y PDF).
- Optimización general del kardex y de las consultas de stock (más rápido en catálogos grandes).
- Comando para regularizar filas de stock por almacén.
- Las anulaciones ya no generan movimientos de kardex duplicados.
- Se respeta la presentación de los productos vendidos.
- Se corrigió la verificación de kardex en transferencias.

- **Módulo Productos**: se especificó la clave de caché para optimizar el almacenamiento de la configuración de listado, mejorando el rendimiento general al trabajar con productos.
- **Módulo Productos**: ahora puedes duplicar productos y registrarlos en la misma sucursal, ahorrando tiempo en la creación de nuevos ítems.
- **Módulo Productos**: se corrigió un problema donde las series devueltas aparecían como disponibles en el historial, asegurando que la información refleje con precisión el estado del inventario.
- **Módulo Item**: se añadió la opción de precarga de relaciones de variaciones, lo que acelera el acceso a información relevante al gestionar ítems en el sistema.
- **Módulo Items**: se añadieron validaciones extras para la subida de archivos y se optimizó la carga de datos, mejorando la experiencia del usuario al gestionar ítems.
- **Módulo Productos**: se ha ajustado la configuración de afectación de productos, facilitando una gestión más efectiva y precisa.
- Revert "fix(reporte): en ventas de productos ahora permite traer las nota de venta al filtrar solo por fecha"
- **Módulo Búsqueda de Productos**: ahora puedes buscar productos de manera más eficiente por nombre, código y código de barras, facilitando la localización de artículos en el sistema.
- **Módulo Productos**: se ha implementado un sistema de regeneración y actualización del filtro de texto en los ítems, mejorando la precisión en las búsquedas de los mismos.
---
