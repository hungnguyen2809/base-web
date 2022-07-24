import { CForm, CFormInput } from '@coreui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { unwrapResult } from '@reduxjs/toolkit';
import { useAppDispatch } from 'app/hooks';
import classNames from 'classnames/bind';
import LoadingButton from 'components/Button/LoadingButton';
import MessageError from 'components/MessageError';
import routesMap from 'layouts/routesMap';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { BsFacebook, BsGoogle } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { actionAuthLogin } from 'redux/auth/actions';
import { getMessageError } from 'utils/common';
import { setStorageData, STORAGE_KEY } from 'utils/storage';
import { toastError, toastSuccess } from 'utils/toastify';
import * as yup from 'yup';
import styles from './LoginPage.module.scss';

interface FormLogin {
  username: string;
  password: string;
}

const schema = yup
  .object({
    username: yup.string().required('Vui lòng nhập tài khoản'),
    password: yup.string().required('Vui lòng nhập mật khẩu').min(5, 'Mật khẩu tối thiểu 5 ký tự'),
  })
  .required();

const cx = classNames.bind(styles);

const LoginPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [loading, setLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormLogin>({ resolver: yupResolver(schema) });

  const onSubmit = async (data: FormLogin): Promise<void> => {
    try {
      setLoading(true);
      const response = await dispatch(actionAuthLogin(data));
      setLoading(false);

      const fakeToken = unwrapResult(response);
      setStorageData(STORAGE_KEY.ACCESS_TOKEN, fakeToken);

      toastSuccess('Đăng nhập thành công');
      navigate(routesMap.HOME);
    } catch (error) {
      setLoading(false);
      toastError(getMessageError(error));
    }
  };

  return (
    <div className={cx('wrap__login', 'bg-light')}>
      <div className={cx('login__page-content')}>
        <div className={cx('content-left')}>
          <div className="text-center">
            <h4>BASE WEB</h4>
            <p className="m-0 fst-italic" style={{ fontSize: 13 }}>
              Nhanh, Hiệu quả, Chuyên nghiệp
            </p>
          </div>
          <hr />

          <CForm onSubmit={handleSubmit(onSubmit)} className="mt-5 d-flex flex-column align-items-center">
            <div className="w-75">
              <CFormInput
                {...register('username')}
                placeholder="Tài khoản"
                invalid={Boolean(errors.username?.message)}
              />
              <MessageError text={errors.username?.message} />
            </div>
            <br />
            <div className="w-75">
              <CFormInput
                {...register('password')}
                type="password"
                placeholder="Mật khẩu"
                invalid={Boolean(errors.password?.message)}
              />
              <MessageError text={errors.password?.message} />
            </div>
            <br />
            <LoadingButton loading={loading} size="sm" type="submit">
              Đăng nhập
            </LoadingButton>
          </CForm>

          <p className="text-center mt-3 opacity-75" style={{ fontSize: 13 }}>
            hoặc
          </p>

          <div className="d-flex justify-content-center gap-3">
            <BsFacebook color="blue" size={20} />
            <BsGoogle color="red" size={20} />
          </div>
        </div>

        <div className={cx('content-right')}>
          <img
            src="https://images.unsplash.com/photo-1658572352229-14bbe60b3c5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
            alt="img"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
