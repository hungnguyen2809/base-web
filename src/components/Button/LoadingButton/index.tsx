import React from 'react';
import { Button, ButtonProps, Spinner } from 'react-bootstrap';

interface LoadingButtonProps extends ButtonProps {
  loading?: boolean;
}

const LoadingButton: React.FC<LoadingButtonProps> = (props) => {
  return (
    <Button {...props}>
      {props.loading && <Spinner animation="border" size="sm" style={{ marginRight: 5, marginBottom: -1 }} />}
      {props.children}
    </Button>
  );
};

export default LoadingButton;
