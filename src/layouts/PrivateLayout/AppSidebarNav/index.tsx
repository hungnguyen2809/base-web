import { CBadge } from '@coreui/react';
import { BageItem, NavItem } from 'layouts/helper';
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

type SidebarNavProps = {
  items: NavItem[];
};

const AppSidebarNav: React.FC<SidebarNavProps> = ({ items }) => {
  const location = useLocation();

  const navLink = (name?: string, icon?: React.ReactNode, badge?: BageItem) => {
    return (
      <>
        {icon && icon}
        {name && name}
        {badge && (
          <CBadge color={badge.color} className="ms-auto">
            {badge.text}
          </CBadge>
        )}
      </>
    );
  };

  const navItem = (item: NavItem, index: number) => {
    const { component, name, badge, icon, ...rest } = item;
    const Component = component;
    return (
      <Component
        key={index}
        {...(rest.to &&
          !rest.items && {
            component: NavLink,
          })}
        {...rest}
      >
        {navLink(name, icon, badge)}
      </Component>
    );
  };

  const navGroup = (item: NavItem, index: number) => {
    const { component, name, icon, to, badge, ...rest } = item;
    const Component = component;
    return (
      <Component
        idx={String(index)}
        key={index}
        toggler={navLink(name, icon, badge)}
        visible={location.pathname.startsWith(to as string)}
        {...rest}
      >
        {item.items?.map((item, index) => (item.items ? navGroup(item, index) : navItem(item, index)))}
      </Component>
    );
  };

  return (
    <React.Fragment>
      {items && items.map((item, index) => (item.items ? navGroup(item, index) : navItem(item, index)))}
    </React.Fragment>
  );
};

export default AppSidebarNav;
