import {
  CAvatar,
  CContainer,
  CDropdown,
  CDropdownDivider,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CHeader,
  CHeaderNav,
  CHeaderToggler,
  CNavItem,
} from '@coreui/react';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import React from 'react';
import { FcPrivacy } from 'react-icons/fc';
import { HiOutlineBell, HiOutlineMenu, HiOutlineUser } from 'react-icons/hi';
import { actionToggleSidebar } from 'redux/appConfig/actions';
import { selectAppSidebarShow } from 'redux/appConfig/selectors';

const AppHeader: React.FC = () => {
  const dispatch = useAppDispatch();
  const showSidebar = useAppSelector(selectAppSidebarShow);

  const handleVisibleChange = () => {
    dispatch(actionToggleSidebar(!showSidebar));
  };

  const renderAbount = () => {
    return (
      <CDropdown variant="nav-item">
        <CDropdownToggle className="py-0" caret={false}>
          <CAvatar color="warning" status="success" textColor="white">
            NH
          </CAvatar>
        </CDropdownToggle>
        <CDropdownMenu className="pt-0" placement="bottom-end">
          <CDropdownHeader className="bg-light fw-semibold py-2">Tài khoản</CDropdownHeader>

          <CDropdownItem>
            <HiOutlineUser size={20} style={{ marginTop: -5 }} />
            Nguyễn Văn Hùng
          </CDropdownItem>

          <CDropdownDivider />
          <CDropdownItem href="#">
            <FcPrivacy size={20} style={{ marginTop: -5 }} />
            Đăng xuất
          </CDropdownItem>
        </CDropdownMenu>
      </CDropdown>
    );
  };

  return (
    <CHeader position="sticky" className="mb-4">
      <CContainer fluid>
        <CHeaderToggler className="ps-1">
          <HiOutlineMenu size={25} onClick={handleVisibleChange} />
        </CHeaderToggler>

        <CHeaderNav className="ms-3 align-items-center">
          <CNavItem className="me-2">
            <HiOutlineBell size={20} className="pointer" />
          </CNavItem>
          {renderAbount()}
        </CHeaderNav>
      </CContainer>
    </CHeader>
  );
};

export default AppHeader;
