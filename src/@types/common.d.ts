/* eslint-disable @typescript-eslint/no-explicit-any */

interface BaseResponse<T = any> {
  data: T;
  message: string;
  error: boolean;
  status: number;
}
