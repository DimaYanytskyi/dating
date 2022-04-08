import {useEffect, useState} from 'react';
import {request} from 'strapi-helper-plugin';

const useFetchUserCount = () => {
  const [state, setUserCount] = useState({
    userCount: 0
  });

  useEffect(() => {
    const abortController = new AbortController();
    const { signal } = abortController;

    const getData = async () => {
      try {

        const response = await request(
          strapi.backendURL + '/users-permissions/users/count',
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

        setUserCount({ userCount: response });

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

export default useFetchUserCount;
