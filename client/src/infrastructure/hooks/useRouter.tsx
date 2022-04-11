import { useMemo } from 'react';
import { useParams, useLocation, useMatch, useNavigate } from 'react-router-dom';
import queryString from 'query-string';

const useRouter = () => {
  const params = useParams();
  const location = useLocation();
  const history = useNavigate();
  const match = useMatch('');

  return useMemo(() => {
    return {
      push: history,
      pathname: location.pathname,
      state: location.state,

      query: {
        ...queryString.parse(location.search),
        ...params,
        page: params.page,
        id: params.id,
      },
      match,
      location,
      history,
    };
  }, [params, match, location, history]);
};

export default useRouter;
