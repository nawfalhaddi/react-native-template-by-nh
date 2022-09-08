import axiosInstance from '@lib/axios';
import {useMutation, UseMutationOptions} from '@tanstack/react-query';

type Input = {
  title: string;
  body: string;
  userId: number;
};
type Output = {
  id: number;
  title: string;
  body: string;
  userId: number;
};
type OutputError = ErrorConstructor;

export type CreateOrderInputType = Input;

export const useCreatePost = (
  options: UseMutationOptions<Output, OutputError, Input> = {},
) => {
  return useMutation<Output, OutputError, Input>(
    (params: Input) =>
      axiosInstance
        .post<Output>('posts', {
          method: 'POST',
          body: JSON.stringify(params),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        })
        .then(response => {
          return response?.data;
        })
        .catch(error => {
          throw new Error(error?.message);
        }),
    options,
  );
};
