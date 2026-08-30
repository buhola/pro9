import type {ComponentType, ReactNode} from 'react';
import {
  IconAlertTriangle,
  IconBook,
  IconCalendarEvent,
  IconCloudOff,
  IconFileInvoice,
  IconHome,
  IconMessageCircle,
  IconPackage,
  IconSettings,
  IconShoppingBag,
  IconSparkles,
  IconStar,
  IconXboxX,
} from '@tabler/icons-react';

const ICONS = {
  home: IconHome,
  sparkles: IconSparkles,
  invoice: IconFileInvoice,
  'cloud-off': IconCloudOff,
  x: IconXboxX,
  alert: IconAlertTriangle,
  bag: IconShoppingBag,
  package: IconPackage,
  message: IconMessageCircle,
  settings: IconSettings,
  star: IconStar,
  calendar: IconCalendarEvent,
  book: IconBook,
} satisfies Record<string, ComponentType<{size?: number; stroke?: number; className?: string}>>;

export type IconName = keyof typeof ICONS;

type Props = {
  name?: string;
  size?: number;
};

export default function DocIcon({name, size = 18}: Props): ReactNode {
  if (!name || !(name in ICONS)) {
    return null;
  }
  const Icon = ICONS[name as IconName];
  return <Icon size={size} stroke={1.7} className="docIcon" />;
}

export function withIconLabel(label: ReactNode, icon?: string): ReactNode {
  if (!icon) {
    return label;
  }
  return (
    <span className="iconLabel">
      <DocIcon name={icon} />
      <span>{label}</span>
    </span>
  );
}
