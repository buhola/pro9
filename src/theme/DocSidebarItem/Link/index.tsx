import React, {type ReactNode} from 'react';
import DocSidebarItemLink from '@theme-original/DocSidebarItem/Link';
import type {Props} from '@theme/DocSidebarItem/Link';
import {withIconLabel} from '@site/src/components/DocIcon';

export default function DocSidebarItemLinkWrapper(props: Props): ReactNode {
  const icon = props.item.customProps?.icon;
  const iconName = typeof icon === 'string' ? icon : undefined;
  return (
    <DocSidebarItemLink
      {...props}
      item={{
        ...props.item,
        label: withIconLabel(props.item.label, iconName) as unknown as string,
      }}
    />
  );
}
