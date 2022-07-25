import classNames from 'classnames/bind';
import routesMap from 'layouts/routesMap';
import React from 'react';
import { Alert, Button } from 'react-bootstrap';
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
        <Alert color="danger">Trang không tồn tại hoặc bạn không có quyền truy cập !</Alert>
        <div style={{ height: 50 }} />
        <Button onClick={handleGoHome}>Trang chủ</Button>
      </div>
    </div>
  );
};

export default Page404;
