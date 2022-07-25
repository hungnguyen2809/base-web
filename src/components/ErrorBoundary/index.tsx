/* eslint-disable @typescript-eslint/no-explicit-any */

import classNames from 'classnames/bind';
import Loading from 'components/Loading';
import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import styles from './ErrorBoundary.module.scss';

const cx = classNames.bind(styles);

type ErrorBoundaryProps = {
  children?: React.ReactNode;
  pending?: boolean;
};

type ErrorBoundaryState = {
  hasError: boolean;
};

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: any): Partial<ErrorBoundaryState> {
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any): void {
    this.setState({ hasError: true });
  }

  handleReloadPage(): void {
    window?.location?.reload?.();
  }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return (
        <div className={cx('wrap__ErrorBoundary')}>
          <div style={{ height: '10%' }} />
          <div className="text-center">
            <h3>Vui lòng tải lại trang !</h3>
            <Button color="primary" onClick={this.handleReloadPage}>
              Tải lại
            </Button>
          </div>
        </div>
      );
    }

    if (this.props.pending) {
      return <Loading />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
