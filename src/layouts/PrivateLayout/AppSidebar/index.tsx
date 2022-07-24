import { CNavGroup, CNavItem, CNavTitle, CSidebar, CSidebarBrand, CSidebarNav } from '@coreui/react';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import useWindowDimensions from 'hooks/useWindowDimensions';
import { NavItem } from 'layouts/helper';
import React, { useEffect } from 'react';
import { FaHouseUser } from 'react-icons/fa';
import { actionToggleSidebar } from 'redux/appConfig/actions';
import { selectAppSidebarShow } from 'redux/appConfig/selectors';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import AppSidebarNav from '../AppSidebarNav';

const _nav: NavItem[] = [
  {
    component: CNavTitle,
    name: 'Theme',
  },
  {
    component: CNavItem,
    name: 'Colors',
    to: '/theme/colors',
    icon: <FaHouseUser size={20} style={{ margin: '-3px 8px 0 0' }} />,
    badge: {
      text: 'AB',
      color:'warning'
    }
  },
  {
    component: CNavItem,
    name: 'Typography',
    to: '/theme/typography',
    icon: <FaHouseUser size={20} style={{ margin: '-3px 8px 0 0' }} />,
  },
  {
    component: CNavTitle,
    name: 'Components',
  },
  {
    component: CNavGroup,
    name: 'Base',
    to: '/base',
    items: [
      {
        component: CNavItem,
        name: 'Accordion',
        to: '/base/accordion',
        icon: <FaHouseUser size={20} style={{ margin: '-3px 8px 0 0' }} />,
      },
      {
        component: CNavItem,
        name: 'Breadcrumb',
        to: '/base/breadcrumbs',
        icon: <FaHouseUser size={20} style={{ margin: '-3px 8px 0 0' }} />,
      },
      {
        component: CNavItem,
        name: 'Cards',
        to: '/base/cards',
        icon: <FaHouseUser size={20} style={{ margin: '-3px 8px 0 0' }} />,
      },
      {
        component: CNavItem,
        name: 'Carousel',
        to: '/base/carousels',
        icon: <FaHouseUser size={20} style={{ margin: '-3px 8px 0 0' }} />,
      },
      {
        component: CNavItem,
        name: 'Collapse',
        to: '/base/collapses',
        icon: <FaHouseUser size={20} style={{ margin: '-3px 8px 0 0' }} />,
      },
      {
        component: CNavItem,
        name: 'List group',
        to: '/base/list-groups',
        icon: <FaHouseUser size={20} style={{ margin: '-3px 8px 0 0' }} />,
      },
      {
        component: CNavItem,
        name: 'Navs & Tabs',
        to: '/base/navs',
        icon: <FaHouseUser size={20} style={{ margin: '-3px 8px 0 0' }} />,
      },
      {
        component: CNavItem,
        name: 'Pagination',
        to: '/base/paginations',
        icon: <FaHouseUser size={20} style={{ margin: '-3px 8px 0 0' }} />,
      },
      {
        component: CNavItem,
        name: 'Placeholders',
        to: '/base/placeholders',
        icon: <FaHouseUser size={20} style={{ margin: '-3px 8px 0 0' }} />,
      },
      {
        component: CNavItem,
        name: 'Popovers',
        to: '/base/popovers',
        icon: <FaHouseUser size={20} style={{ margin: '-3px 8px 0 0' }} />,
      },
      {
        component: CNavItem,
        name: 'Progress',
        to: '/base/progress',
      },
      {
        component: CNavItem,
        name: 'Spinners',
        to: '/base/spinners',
        icon: <FaHouseUser size={20} style={{ margin: '-3px 8px 0 0' }} />,
      },
      {
        component: CNavItem,
        name: 'Tables',
        to: '/base/tables',
        icon: <FaHouseUser size={20} style={{ margin: '-3px 8px 0 0' }} />,
      },
      {
        component: CNavItem,
        name: 'Tooltips',
        to: '/base/tooltips',
        icon: <FaHouseUser size={20} style={{ margin: '-3px 8px 0 0' }} />,
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Buttons',
    to: '/buttons',
    items: [
      {
        component: CNavItem,
        name: 'Buttons',
        to: '/buttons/buttons',
        icon: <FaHouseUser size={20} style={{ margin: '-3px 8px 0 0' }} />,
      },
      {
        component: CNavItem,
        name: 'Buttons groups',
        to: '/buttons/button-groups',
        icon: <FaHouseUser size={20} style={{ margin: '-3px 8px 0 0' }} />,
      },
      {
        component: CNavItem,
        name: 'Dropdowns',
        to: '/buttons/dropdowns',
        icon: <FaHouseUser size={20} style={{ margin: '-3px 8px 0 0' }} />,
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Forms',
    items: [
      {
        component: CNavItem,
        name: 'Form Control',
        to: '/forms/form-control',
        icon: <FaHouseUser size={20} style={{ margin: '-3px 8px 0 0' }} />,
      },
      {
        component: CNavItem,
        name: 'Select',
        to: '/forms/select',
        icon: <FaHouseUser size={20} style={{ margin: '-3px 8px 0 0' }} />,
      },
      {
        component: CNavItem,
        name: 'Checks & Radios',
        to: '/forms/checks-radios',
        icon: <FaHouseUser size={20} style={{ margin: '-3px 8px 0 0' }} />,
      },
      {
        component: CNavItem,
        name: 'Range',
        to: '/forms/range',
        icon: <FaHouseUser size={20} style={{ margin: '-3px 8px 0 0' }} />,
      },
      {
        component: CNavItem,
        name: 'Input Group',
        to: '/forms/input-group',
        icon: <FaHouseUser size={20} style={{ margin: '-3px 8px 0 0' }} />,
      },
      {
        component: CNavItem,
        name: 'Floating Labels',
        to: '/forms/floating-labels',
        icon: <FaHouseUser size={20} style={{ margin: '-3px 8px 0 0' }} />,
      },
      {
        component: CNavItem,
        name: 'Layout',
        to: '/forms/layout',
        icon: <FaHouseUser size={20} style={{ margin: '-3px 8px 0 0' }} />,
      },
      {
        component: CNavItem,
        name: 'Validation',
        to: '/forms/validation',
        icon: <FaHouseUser size={20} style={{ margin: '-3px 8px 0 0' }} />,
      },
    ],
  },
  {
    component: CNavItem,
    name: 'Charts',
    to: '/charts',
    icon: <FaHouseUser size={20} style={{ margin: '-3px 8px 0 0' }} />,
  },
  {
    component: CNavGroup,
    name: 'Icons',
    items: [
      {
        component: CNavItem,
        name: 'CoreUI Free',
        to: '/icons/coreui-icons',
        icon: <FaHouseUser size={20} style={{ margin: '-3px 8px 0 0' }} />,
        badge: {
          color: 'success',
          text: 'NEW',
        },
      },
      {
        component: CNavItem,
        name: 'CoreUI Flags',
        to: '/icons/flags',
        icon: <FaHouseUser size={20} style={{ margin: '-3px 8px 0 0' }} />,
      },
      {
        component: CNavItem,
        name: 'CoreUI Brands',
        to: '/icons/brands',
        icon: <FaHouseUser size={20} style={{ margin: '-3px 8px 0 0' }} />,
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Notifications',
    items: [
      {
        component: CNavItem,
        name: 'Alerts',
        to: '/notifications/alerts',
        icon: <FaHouseUser size={20} style={{ margin: '-3px 8px 0 0' }} />,
      },
      {
        component: CNavItem,
        name: 'Badges',
        to: '/notifications/badges',
        icon: <FaHouseUser size={20} style={{ margin: '-3px 8px 0 0' }} />,
      },
      {
        component: CNavItem,
        name: 'Modal',
        to: '/notifications/modals',
        icon: <FaHouseUser size={20} style={{ margin: '-3px 8px 0 0' }} />,
      },
      {
        component: CNavItem,
        name: 'Toasts',
        to: '/notifications/toasts',
        icon: <FaHouseUser size={20} style={{ margin: '-3px 8px 0 0' }} />,
      },
    ],
  },
  {
    component: CNavItem,
    name: 'Widgets',
    to: '/widgets',
    icon: <FaHouseUser size={20} style={{ margin: '-3px 8px 0 0' }} />,

    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    component: CNavTitle,
    name: 'Extras',
  },
  {
    component: CNavGroup,
    name: 'Pages',

    items: [
      {
        component: CNavItem,
        name: 'Login',
        to: '/login',
        icon: <FaHouseUser size={20} style={{ margin: '-3px 8px 0 0' }} />,
      },
      {
        component: CNavItem,
        name: 'Register',
        to: '/register',
        icon: <FaHouseUser size={20} style={{ margin: '-3px 8px 0 0' }} />,
      },
      {
        component: CNavItem,
        name: 'Error 404',
        to: '/404',
        icon: <FaHouseUser size={20} style={{ margin: '-3px 8px 0 0' }} />,
      },
      {
        component: CNavItem,
        name: 'Error 500',
        to: '/500',
        icon: <FaHouseUser size={20} style={{ margin: '-3px 8px 0 0' }} />,
      },
    ],
  },
];

const AppSidebar: React.FC = () => {
  const dispatch = useAppDispatch();
  const showSidebar = useAppSelector(selectAppSidebarShow);

  const { width: WIDTH_SCREEN } = useWindowDimensions();

  useEffect(() => {
    if (!showSidebar && WIDTH_SCREEN > 770) {
      dispatch(actionToggleSidebar(true));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, WIDTH_SCREEN]);

  const handleVisibleChange = (visible: boolean) => {
    dispatch(actionToggleSidebar(visible));
  };

  return (
    <CSidebar
      position="fixed"
      visible={showSidebar}
      // unfoldable={false}
      onVisibleChange={handleVisibleChange}
    >
      <CSidebarBrand className="d-none d-md-flex">
        <strong>Base Web</strong>
      </CSidebarBrand>
      <CSidebarNav>
        <SimpleBar>
          <AppSidebarNav items={_nav} />
        </SimpleBar>
      </CSidebarNav>
    </CSidebar>
  );
};

export default AppSidebar;
