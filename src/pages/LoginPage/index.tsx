import { yupResolver } from '@hookform/resolvers/yup';
import { unwrapResult } from '@reduxjs/toolkit';
import { useAppDispatch } from 'app/hooks';
import LoadingButton from 'components/Button/LoadingButton';
import MessageError from 'components/MessageError';
import routesMap from 'layouts/routesMap';
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { BsFacebook, BsGoogle } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { actionAuthLogin } from 'redux/auth/actions';
import { getMessageError } from 'utils/common';
import { setStorageData, STORAGE_KEY } from 'utils/storage';
import { toastError, toastSuccess } from 'utils/toastify';
import * as yup from 'yup';

interface FormLogin {
  username: string;
  password: string;
}

const schema = yup.object({
  username: yup.string().required('Vui lòng nhập tài khoản'),
  password: yup.string().required('Vui lòng nhập mật khẩu').min(5, 'Mật khẩu tối thiểu 5 ký tự'),
});

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
    <div className="vw-100 vh-100 bg-light d-flex flex-column align-items-center">
      <div style={{ height: '10%' }} />
      <div className="bg-white p-3 rounded-4 shadow-lg h-75 w-75 d-flex gap-3">
        <div className="h-100 pt-3" style={{ flex: 1 }}>
          <div className="text-center">
            <h4>BASE WEB</h4>
            <p className="m-0 fst-italic" style={{ fontSize: 13 }}>
              Nhanh, Hiệu quả, Chuyên nghiệp
            </p>
          </div>
          <hr />

          <Form onSubmit={handleSubmit(onSubmit)} className="mt-5 d-flex flex-column align-items-center">
            <div className="w-75">
              <Form.FloatingLabel controlId="username" label="Tài khoản">
                <Form.Control
                  {...register('username')}
                  placeholder="Tài khoản"
                  isInvalid={Boolean(errors.username?.message)}
                />
              </Form.FloatingLabel>
              <MessageError text={errors.username?.message} />
            </div>
            <br />
            <div className="w-75">
              <Form.FloatingLabel controlId="password" label="Mật khẩu">
                <Form.Control
                  {...register('password')}
                  type="password"
                  placeholder="Mật khẩu"
                  isInvalid={Boolean(errors.password?.message)}
                />
              </Form.FloatingLabel>
              <MessageError text={errors.password?.message} />
            </div>
            <br />
            <LoadingButton loading={loading} type="submit">
              Đăng nhập
            </LoadingButton>
          </Form>

          <p className="text-center mt-3 opacity-75" style={{ fontSize: 13 }}>
            hoặc
          </p>

          <div className="d-flex justify-content-center gap-5">
            <BsFacebook color="blue" size={25} />
            <BsGoogle color="red" size={25} />
          </div>
        </div>

        <div className="h-100 d-none d-md-block" style={{ flex: 1 }}>
          <img
            className="w-100 h-100 rounded-4"
            src="https://images.unsplash.com/photo-1658572352229-14bbe60b3c5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
            alt="img"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
