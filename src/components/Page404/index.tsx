import { CAlert, CButton } from '@coreui/react';
import classNames from 'classnames/bind';
import routesMap from 'layouts/routesMap';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Page404.module.scss';

const cx = classNames.bind(styles);

const Page404: React.FC = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate(routesMap.HOME, { replace: true });
  };

  return (
    <div className={cx('wrap__page-404')}>
      <div style={{ height: '10%' }} />
      <div className="text-center">
        <CAlert color="danger">Trang không tồn tại hoặc bạn không có quyền truy cập !</CAlert>
        <div style={{ height: 50 }} />
        <CButton onClick={handleGoHome} size="sm">
          Trang chủ
        </CButton>
      </div>
    </div>
  );
};

export default Page404;
