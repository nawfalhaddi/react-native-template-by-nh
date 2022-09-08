import ReactQueryKeys from '@constants/reactQueryKeys';
import axiosInstance from '@lib/axios';
import {QueryKey, useQuery, UseQueryOptions} from '@tanstack/react-query';

type Output = Array<{userIde: number; id: number; title: string; body: string}>;
type OutputError = ErrorConstructor;

export const useGetPosts = (
  options: Omit<
    UseQueryOptions<Output, OutputError, Output, QueryKey>,
    'queryKey' | 'queryFn'
  > = {},
) => {
  return useQuery<Output, OutputError>(
    [ReactQueryKeys.Posts],
    () =>
      axiosInstance
        .get<Output>('posts')
        .then(response => {
          return response?.data;
        })
        .catch(error => {
          throw new Error(error?.message);
        }),
    {...options},
  );
};
