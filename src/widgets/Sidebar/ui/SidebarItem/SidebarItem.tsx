import { t } from 'i18next';
import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { SidebarItemType } from 'widgets/Sidebar/model/items';
import cls from './SidebarItem.module.scss';

interface SidebarItemProps {
  item?: SidebarItemType;
  collapsed: boolean;
}

const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
  return (
    <AppLink
      to={item.path}
      theme={AppLinkTheme.SECONDARY}
      className={classNames(cls.item, { [cls.collapsed]: collapsed })}
    >
      <item.Icon className={cls.icon} />
      <span className={cls.link}>{t(item.text)}</span>
    </AppLink>
  );
});

export default SidebarItem;
