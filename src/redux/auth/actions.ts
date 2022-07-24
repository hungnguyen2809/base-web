import { createAsyncThunk } from '@reduxjs/toolkit';
import { getMessageError } from 'utils/common';
import { AuthLogin } from './type';

const fakeApi = (data: AuthLogin): Promise<BaseResponse<AuthLogin>> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (data.username === 'hungnv' && data.password === '123456') {
        resolve({ data: data, status: 200, error: false, message: 'sucess' });
      } else {
        reject({ data: [], status: 200, error: true, message: 'Thông tin tài khoản hoặc mật khẩu không chính xác' });
      }
    }, 3000);
  });
};

export const actionAuthLogin = createAsyncThunk('auth/actionAuthLogin', async (data: AuthLogin) => {
  try {
    const response = await fakeApi(data);
    if (response.error) {
      throw new Error(response.message);
    }

    const fakeToken = JSON.stringify(response.data);
    return fakeToken;
  } catch (error) {
    throw new Error(getMessageError(error));
  }
});
