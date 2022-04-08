import {useEffect, useState} from 'react';
import {request} from 'strapi-helper-plugin';

const useFetchApproveCount = () => {
  const [state, setApproveCount] = useState({
    approveCount: 0
  });

  useEffect(() => {
    const abortController = new AbortController();
    const { signal } = abortController;

    const getData = async () => {
      try {

        const response = await request(
          strapi.backendURL + '/approves/count',
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

        setApproveCount({ approveCount: response });

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

export default useFetchApproveCount;
