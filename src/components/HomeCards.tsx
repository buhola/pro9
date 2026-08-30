import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import DocIcon from '@site/src/components/DocIcon';

export default function HomeCards(): ReactNode {
  return (
    <div className="homeGrid">
      <Link className="homeCard" to="/novedades">
        <span className="homeCardKicker">
          <DocIcon name="sparkles" /> 546 cambios
        </span>
        <h2>Novedades</h2>
        <p>
          Tienda virtual, marketplace, variantes, pagos, tickets, WhatsApp,
          dashboard y el resto de módulos.
        </p>
      </Link>
      <Link className="homeCard" to="/sunat-errores/">
        <span className="homeCardKicker">
          <DocIcon name="invoice" /> 1577 códigos
        </span>
        <h2>Errores SUNAT</h2>
        <p>
          Servicio, rechazo y observación, separados por categoría. Válido para
          SUNAT y OSE.
        </p>
      </Link>
    </div>
  );
}
