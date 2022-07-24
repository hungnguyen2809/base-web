import { CButton, CSpinner } from '@coreui/react';
import { CButtonProps } from '@coreui/react/dist/components/button/CButton';
import React from 'react';

interface LoadingButtonProps extends CButtonProps {
  loading?: boolean;
}

const LoadingButton: React.FC<LoadingButtonProps> = (props) => {
  return (
    <CButton {...props}>
      {props.loading && <CSpinner size="sm" style={{ marginRight: 5, marginBottom: -1 }} />}
      {props.children}
    </CButton>
  );
};

export default LoadingButton;
