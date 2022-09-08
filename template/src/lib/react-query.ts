import {QueryClient} from '@tanstack/react-query';

/**
 * @description `queryClient` is an instance of QueryClient we should
 * only use a single one.
 */
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // Will retry failed requests 3 times before displaying an error.
      retry: 3,
    },
  },
});
