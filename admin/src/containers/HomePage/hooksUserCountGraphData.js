import {useEffect, useState} from 'react';
import {request} from 'strapi-helper-plugin';

const useFetchUserCountGraphData = () => {
  const [state, setUserCountGraphData] = useState({
    userCountGraphData: [0, 0, 0, 0]
  });

  useEffect(() => {
    const abortController = new AbortController();
    const { signal } = abortController;

    const getData = async () => {
      try {

        const response = await request(
          strapi.backendURL + '/users-permissions/users/usersdata',
          {
            method: 'GET',
            headers: {
              'Access-Control-Allow-Origin': '*',
            },
            signal,
          },
          false,
          false,
          { noAuth: true }
        );

        setUserCountGraphData({ userCountGraphData: response });

      }catch (error) {

      }
    };

    getData();

    return () => {
      abortController.abort();
    };
  }, []);

  return state;
};

export default useFetchUserCountGraphData;
