import React, {type ReactNode} from 'react';
import DocSidebarItemCategory from '@theme-original/DocSidebarItem/Category';
import type {Props} from '@theme/DocSidebarItem/Category';
import {withIconLabel} from '@site/src/components/DocIcon';

export default function DocSidebarItemCategoryWrapper(props: Props): ReactNode {
  const icon = props.item.customProps?.icon;
  const iconName = typeof icon === 'string' ? icon : undefined;
  return (
    <DocSidebarItemCategory
      {...props}
      item={{
        ...props.item,
        label: withIconLabel(props.item.label, iconName) as unknown as string,
      }}
    />
  );
}
