import type {ReactNode} from 'react';
import DocIcon from '@site/src/components/DocIcon';

export default function TypeCards(): ReactNode {
  return (
    <div className="typeGrid">
      <div className="typeCard typeCard--servicio">
        <span>
          <DocIcon name="cloud-off" /> Error de servicio
        </span>
        <strong>0100–0499</strong>
        <p>No se procesó el envío. Hay que reenviar.</p>
      </div>
      <div className="typeCard typeCard--rechazo">
        <span>
          <DocIcon name="x" /> Rechazo
        </span>
        <strong>1000–3999</strong>
        <p>El comprobante no se acepta. Hay que corregir y volver a emitir.</p>
      </div>
      <div className="typeCard typeCard--observacion">
        <span>
          <DocIcon name="alert" /> Observación
        </span>
        <strong>4000–4338</strong>
        <p>El comprobante sí se acepta, con un aviso para corregir.</p>
      </div>
    </div>
  );
}
