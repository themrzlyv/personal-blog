import { QueryClient, QueryCache } from 'react-query';

const queryCache = new QueryCache({
  onError: (error) => {
    // console.log(error);
  },
  onSuccess: (data) => {
    // console.log(data);
  }
});

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
  queryCache
});

export default queryClient;
