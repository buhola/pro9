import React, {type ReactNode} from 'react';
import NavbarNavLink from '@theme-original/NavbarItem/NavbarNavLink';
import type {Props} from '@theme/NavbarItem/NavbarNavLink';
import {withIconLabel} from '@site/src/components/DocIcon';

const NAV_ICONS: Record<string, string> = {
  Inicio: 'home',
  Novedades: 'sparkles',
  'Errores SUNAT': 'invoice',
};

export default function NavbarNavLinkWrapper(props: Props): ReactNode {
  const icon =
    typeof props.label === 'string' ? NAV_ICONS[props.label] : undefined;
  return <NavbarNavLink {...props} label={withIconLabel(props.label, icon)} />;
}
