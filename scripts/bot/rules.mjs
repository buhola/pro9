/**
 * Reglas de clasificación y traducción de commits a lenguaje de usuario final
 */

export const MODULE_MAP = [
  // Ventas y canales
  {
    key: 'ventas/pos.md',
    title: 'POS y Venta Rápida',
    match: ['pos', 'venta rápida', 'ventarapida', 'caja rápida', 'teclado', 'focus ring', 'propinas', 'cajero', 'restaurante'],
    fileMatch: [/views\/tenant\/pos\//, /modules\/Pos\//]
  },
  {
    key: 'ventas/tienda-virtual.md',
    title: 'Tienda Virtual',
    match: ['tienda virtual', 'ecommerce', 'e-commerce', 'carrito', 'checkout', 'cupones', 'banner', 'frecuentemente'],
    fileMatch: [/views\/tenant\/ecommerce\//, /modules\/Ecommerce\//]
  },
  {
    key: 'ventas/vendeya-mozo.md',
    title: 'Vendeya y Mozo',
    match: ['vendeya', 'mozo', 'mesas', 'comandas', 'buhoprinter'],
    fileMatch: [/vendeya/i, /mozo/i]
  },
  {
    key: 'ventas/pagos.md',
    title: 'Pagos en línea',
    match: ['pagos', 'pasarelas', 'culqi', 'yape', 'plin', 'izipay', 'mercado pago', 'links de pago', 'link de pago', 'billeteras'],
    fileMatch: [/payment/i, /gateways/i]
  },
  {
    key: 'ventas/marketplace.md',
    title: 'Marketplace',
    match: ['marketplace', 'market'],
    fileMatch: [/marketplace/i]
  },

  // Operaciones
  {
    key: 'operaciones/productos-inventario.md',
    title: 'Productos e inventario',
    match: ['inventory', 'inventario', 'stock', 'kardex', 'almacén', 'almacen', 'traslado', 'traslados', 'productos', 'producto', 'atributos', 'variantes', 'variaciones', 'código de barras', 'items', 'item'],
    fileMatch: [/views\/tenant\/items\//, /modules\/Inventory\//, /modules\/Item\//]
  },
  {
    key: 'operaciones/guias.md',
    title: 'Guías de remisión',
    match: ['guías', 'guias', 'guía', 'guia', 'dispatch', 'transportista', 'conductor', 'placas', 'vehiculo'],
    fileMatch: [/views\/tenant\/dispatches\//, /modules\/Order\//]
  },
  {
    key: 'operaciones/plantillas.md',
    title: 'Plantillas y tickets',
    match: ['plantilla', 'plantillas', 'pdf', 'ticket', 'tickets', 'modern-2027', '80mm', '58mm', 'formato de impresión', 'template'],
    fileMatch: [/templates\/pdf\//, /views\/tenant\/templates\//]
  },
  {
    key: 'operaciones/comprobantes.md',
    title: 'Comprobantes',
    match: ['comprobante', 'comprobantes', 'factura', 'facturas', 'boleta', 'boletas', 'nota de crédito', 'nota de debito', 'anulacion', 'resumen', 'series', 'igv', 'detracción', 'retención', 'cpe', 'validation', 'quotation', 'cotiza', 'cotización', 'sale-note', 'nota de venta'],
    fileMatch: [/views\/tenant\/documents\//, /views\/tenant\/quotations\//, /views\/tenant\/sale_notes\//]
  },

  // Comunicación
  {
    key: 'comunicacion/whatsapp.md',
    title: 'WhatsApp',
    match: ['whatsapp', 'chatbuho', 'evolution', 'waha', 'waya'],
    fileMatch: [/whatsapp/i, /chatbuho/i]
  },
  {
    key: 'comunicacion/notificaciones.md',
    title: 'Notificaciones',
    match: ['notificaciones', 'notificación', 'alertas', 'campanita'],
    fileMatch: [/notification/i]
  },

  // Gestión e interfaz
  {
    key: 'gestion/administracion.md',
    title: 'Administración y planes',
    match: ['admin', 'administracion', 'administración', 'tenant', 'tenants', 'plan', 'planes', 'giros', 'mi cuenta', 'account', 'usuarios', 'roles', 'pin', 'empresa', 'company'],
    fileMatch: [/views\/tenant\/users\//, /views\/tenant\/companies\//, /views\/system\//]
  },
  {
    key: 'gestion/api.md',
    title: 'API e integraciones',
    match: ['api', 'apidocs', 'endpoint', 'endpoints', 'móvil', 'mobile', 'api resource'],
    fileMatch: [/app\/Http\/Controllers\/Tenant\/Api\//]
  },
  {
    key: 'gestion/clientes.md',
    title: 'Clientes y direcciones',
    match: ['cliente', 'clientes', 'customers', 'person', 'persons', 'direcciones', 'mapa', 'no domiciliado', 'carnet de extranjería', 'ruc', 'dni'],
    fileMatch: [/views\/tenant\/persons\//, /views\/tenant\/customers\//]
  },
  {
    key: 'gestion/compras.md',
    title: 'Compras y proveedores',
    match: ['compras', 'purchases', 'oc', 'orden de compra', 'proveedor', 'proveedores', 'crédito proveedor'],
    fileMatch: [/views\/tenant\/purchases\//, /modules\/Purchase\//]
  },
  {
    key: 'gestion/dashboard-reportes.md',
    title: 'Dashboard y reportes',
    match: ['dashboard', 'widgets', 'kpi', 'reporte', 'reportes', 'descargas', 'excel', 'arqueo'],
    fileMatch: [/views\/tenant\/dashboard\//, /modules\/Report\//]
  },
  {
    key: 'gestion/finanzas.md',
    title: 'Finanzas y caja',
    match: ['finanzas', 'finances', 'gastos', 'ingresos', 'cuentas por cobrar', 'cuentas por pagar', 'caja chica', 'libro único'],
    fileMatch: [/modules\/Finance\//, /views\/tenant\/finances\//]
  },
  {
    key: 'gestion/interfaz.md',
    title: 'Interfaz y experiencia',
    match: ['ui', 'interfaz', 'tema', 'dark mode', 'modo exterior', 'drawers', 'paneles laterales', 'botones', 'menú', 'sidebar', 'buscador'],
    fileMatch: [/resources\/js\/components\//, /layouts\//]
  },
  {
    key: 'gestion/otros-modulos.md',
    title: 'Otros módulos',
    match: ['hotel', 'farmacia', 'servicios extra', 'suscripciones', 'grifos'],
    fileMatch: [/modules\/Hotel\//, /modules\/Pharmacy\//, /modules\/ExtraService\//]
  }
];

export const SCOPE_MAP = {
  'account': 'gestion/administracion.md',
  'admin': 'gestion/administracion.md',
  'panel admin': 'gestion/administracion.md',
  'users': 'gestion/administracion.md',
  'user': 'gestion/administracion.md',
  'company': 'gestion/administracion.md',
  'tenant': 'gestion/administracion.md',
  'admin-reseller': 'gestion/administracion.md',

  'purchases': 'gestion/compras.md',
  'compras': 'gestion/compras.md',
  'oc': 'gestion/compras.md',
  'purchase-quotations': 'gestion/compras.md',

  'inventory': 'operaciones/productos-inventario.md',
  'inventario': 'operaciones/productos-inventario.md',
  'stock': 'operaciones/productos-inventario.md',
  'kardex': 'operaciones/productos-inventario.md',
  'items': 'operaciones/productos-inventario.md',
  'item': 'operaciones/productos-inventario.md',
  'productos': 'operaciones/productos-inventario.md',
  'producto': 'operaciones/productos-inventario.md',
  'traslados': 'operaciones/productos-inventario.md',
  'product-variables': 'operaciones/productos-inventario.md',

  'guias': 'operaciones/guias.md',
  'guías': 'operaciones/guias.md',
  'dispatch': 'operaciones/guias.md',
  'g.r': 'operaciones/guias.md',

  'pdf': 'operaciones/plantillas.md',
  'template': 'operaciones/plantillas.md',
  'plantillas': 'operaciones/plantillas.md',
  'tickets': 'operaciones/plantillas.md',
  'ticket': 'operaciones/plantillas.md',

  'pos': 'ventas/pos.md',
  'venta rapida': 'ventas/pos.md',
  'venta rápida': 'ventas/pos.md',

  'tienda virtual': 'ventas/tienda-virtual.md',
  'ecommerce': 'ventas/tienda-virtual.md',
  'tienda': 'ventas/tienda-virtual.md',

  'vendeya': 'ventas/vendeya-mozo.md',
  'mozo': 'ventas/vendeya-mozo.md',

  'pagos': 'ventas/pagos.md',
  'pasarelas': 'ventas/pagos.md',
  'culqi': 'ventas/pagos.md',
  'yape': 'ventas/pagos.md',
  'plin': 'ventas/pagos.md',
  'izipay': 'ventas/pagos.md',

  'marketplace': 'ventas/marketplace.md',

  'whatsapp': 'comunicacion/whatsapp.md',
  'notificaciones': 'comunicacion/notificaciones.md',

  'reportes': 'gestion/dashboard-reportes.md',
  'reporte': 'gestion/dashboard-reportes.md',
  'dashboard': 'gestion/dashboard-reportes.md',

  'finances': 'gestion/finanzas.md',
  'finanzas': 'gestion/finanzas.md',
  'gastos': 'gestion/finanzas.md',
  'settings': 'gestion/finanzas.md',

  'customers': 'gestion/clientes.md',
  'clientes': 'gestion/clientes.md',
  'cliente': 'gestion/clientes.md',
  'person': 'gestion/clientes.md',
  'persons': 'gestion/clientes.md',

  'api': 'gestion/api.md',
  'mobile': 'gestion/api.md',

  'invoice': 'operaciones/comprobantes.md',
  'comprobante': 'operaciones/comprobantes.md',
  'comprobantes': 'operaciones/comprobantes.md',
  'quotation': 'operaciones/comprobantes.md',
  'cotiza': 'operaciones/comprobantes.md',
  'cotización': 'operaciones/comprobantes.md',
  'sale-note': 'operaciones/comprobantes.md',
  'nota de venta': 'operaciones/comprobantes.md',
  'validation': 'operaciones/comprobantes.md',
  'retention': 'operaciones/comprobantes.md',
  'establishment': 'operaciones/comprobantes.md',
  'series': 'operaciones/comprobantes.md',
  'note': 'operaciones/comprobantes.md',
};

export function classifyModule(commitTitle, sourceFiles = []) {
  const titleLower = commitTitle.toLowerCase();

  // 1. Prioridad: Scope explícito en el commit: feat(scope): ...
  const scopeMatch = titleLower.match(/^\w+\(([^)]+)\):/);
  if (scopeMatch) {
    const scope = scopeMatch[1].trim();
    if (SCOPE_MAP[scope]) {
      return SCOPE_MAP[scope];
    }
    // Probar si el scope contiene alguna palabra clave
    for (const [key, dest] of Object.entries(SCOPE_MAP)) {
      if (scope.includes(key)) {
        return dest;
      }
    }
  }

  // 2. Coincidencia por palabras clave directas en el título
  for (const [key, dest] of Object.entries(SCOPE_MAP)) {
    if (titleLower.includes(key)) {
      return dest;
    }
  }

  // 3. Coincidencia por archivos modificados
  for (const mod of MODULE_MAP) {
    if (mod.fileMatch && sourceFiles.length > 0) {
      for (const file of sourceFiles) {
        if (mod.fileMatch.some((re) => re.test(file))) {
          return mod.key;
        }
      }
    }
  }

  // 4. Coincidencia por lista de palabras de módulo
  for (const mod of MODULE_MAP) {
    for (const kw of mod.match) {
      if (titleLower.includes(kw)) {
        return mod.key;
      }
    }
  }

  // Fallback razonable
  if (titleLower.includes('fix') || titleLower.includes('bug')) {
    return 'operaciones/comprobantes.md';
  }
  return 'gestion/interfaz.md';
}

export const VALID_SLUGS = {
  'ventas/pos.md': '/novedades/pos',
  'ventas/tienda-virtual.md': '/novedades/tienda-virtual',
  'ventas/vendeya-mozo.md': '/novedades/vendeya-mozo',
  'ventas/pagos.md': '/novedades/pagos',
  'ventas/marketplace.md': '/novedades/marketplace',
  'operaciones/productos-inventario.md': '/novedades/productos-inventario',
  'operaciones/guias.md': '/novedades/guias',
  'operaciones/plantillas.md': '/novedades/plantillas',
  'operaciones/comprobantes.md': '/novedades/comprobantes',
  'comunicacion/notificaciones.md': '/novedades/notificaciones',
  'comunicacion/whatsapp.md': '/novedades/whatsapp',
  'gestion/administracion.md': '/novedades/administracion',
  'gestion/api.md': '/novedades/api',
  'gestion/clientes.md': '/novedades/clientes',
  'gestion/compras.md': '/novedades/compras',
  'gestion/dashboard-reportes.md': '/novedades/dashboard-reportes',
  'gestion/finanzas.md': '/novedades/finanzas',
  'gestion/interfaz.md': '/novedades/interfaz',
  'gestion/otros-modulos.md': '/novedades/otros-modulos',
};

export function normalizeModuleKey(key = '') {
  const clean = key.trim();
  if (VALID_SLUGS[clean]) return clean;

  const lower = clean.toLowerCase();
  for (const validKey of Object.keys(VALID_SLUGS)) {
    if (lower.includes(validKey.replace('.md', '')) || validKey.includes(lower)) {
      return validKey;
    }
  }

  if (lower.includes('pos')) return 'ventas/pos.md';
  if (lower.includes('tienda') || lower.includes('ecommerce')) return 'ventas/tienda-virtual.md';
  if (lower.includes('vendeya') || lower.includes('mozo') || lower.includes('restaurante')) return 'ventas/vendeya-mozo.md';
  if (lower.includes('pago') || lower.includes('yape') || lower.includes('culqi')) return 'ventas/pagos.md';
  if (lower.includes('kardex') || lower.includes('stock') || lower.includes('producto') || lower.includes('item')) return 'operaciones/productos-inventario.md';
  if (lower.includes('guia') || lower.includes('despacho') || lower.includes('dispatch')) return 'operaciones/guias.md';
  if (lower.includes('ticket') || lower.includes('plantilla') || lower.includes('pdf')) return 'operaciones/plantillas.md';
  if (lower.includes('comprobante') || lower.includes('factura') || lower.includes('boleta') || lower.includes('cpe')) return 'operaciones/comprobantes.md';
  if (lower.includes('whatsapp') || lower.includes('waya')) return 'comunicacion/whatsapp.md';
  if (lower.includes('notificac')) return 'comunicacion/notificaciones.md';
  if (lower.includes('admin') || lower.includes('cuenta') || lower.includes('user')) return 'gestion/administracion.md';
  if (lower.includes('api')) return 'gestion/api.md';
  if (lower.includes('cliente') || lower.includes('person')) return 'gestion/clientes.md';
  if (lower.includes('compra') || lower.includes('proveedor')) return 'gestion/compras.md';
  if (lower.includes('dashboard') || lower.includes('reporte') || lower.includes('kpi')) return 'gestion/dashboard-reportes.md';
  if (lower.includes('finanz') || lower.includes('gasto') || lower.includes('caja')) return 'gestion/finanzas.md';

  return 'gestion/interfaz.md';
}

/**
 * Convierte un título técnico en una descripción amigable para usuarios finales
 */
export function humanizeCommit(title) {
  let clean = title.trim();

  // Extraer scope si existe: feat(scope): desc
  const m = clean.match(/^(feat|fix|perf|refactor|style|build|chore)(\(([^)]+)\))?:\s*(.*)$/i);
  let scope = '';
  let action = clean;

  if (m) {
    scope = (m[3] || '').trim();
    action = (m[4] || '').trim();
  }

  // Limpiar tecnicismos
  action = action
    .replace(/\bse agrego\b/gi, 'se incorpora')
    .replace(/\bse agrega\b/gi, 'se incorpora')
    .replace(/\binput\b/gi, 'campo')
    .replace(/\bel-input\b/gi, 'campo de búsqueda')
    .replace(/\bdebounce\b/gi, 'búsqueda instantánea al escribir')
    .replace(/\bdrawers?\b/gi, 'paneles laterales')
    .replace(/\baccessor\b/gi, 'cálculo')
    .replace(/\btrait\b/gi, 'función interna')
    .replace(/\bcpe\b/gi, 'comprobante electrónico')
    .replace(/\boc\b/gi, 'orden de compra')
    .replace(/\bnv\b/gi, 'nota de venta')
    .replace(/\bui\b/gi, 'pantalla')
    .replace(/\bmodal\b/gi, 'ventana emergente');

  // Capitalizar primera letra de acción
  action = action.charAt(0).toUpperCase() + action.slice(1);

  // Formato con viñeta y negrita de scope o tema
  let highlight = '';
  if (scope) {
    const scopeUpper = scope.charAt(0).toUpperCase() + scope.slice(1);
    highlight = `**${scopeUpper}**: `;
  }

  const userDescription = `${highlight}${action}`;

  // Resumen corto para cronología (3-7 palabras)
  let shortDelivery = action.replace(/^(se incorpora|se añade|se corrige|permite)\s+/i, '');
  shortDelivery = shortDelivery.charAt(0).toUpperCase() + shortDelivery.slice(1);
  if (shortDelivery.length > 75) {
    const cut = shortDelivery.slice(0, 72);
    const lastSpace = cut.lastIndexOf(' ');
    shortDelivery = (lastSpace > 40 ? cut.slice(0, lastSpace) : cut).trim() + '...';
  }

  // Detectar si es un cambio mayor (para destacados)
  const isMajor = /^(feat\((account|tienda|pos|inventory|guías|whatsapp|marketplace|finances|settings|reportes)\)|feat:.*modulo)/i.test(title);

  return {
    userDescription,
    shortDelivery,
    isMajor,
  };
}
