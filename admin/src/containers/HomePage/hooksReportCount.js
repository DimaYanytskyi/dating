import {useEffect, useState} from 'react';
import {request} from 'strapi-helper-plugin';

const useFetchReportCount = () => {
  const [state, setReportCount] = useState({
    reportCount: 0
  });

  useEffect(() => {
    const abortController = new AbortController();
    const { signal } = abortController;

    const getData = async () => {
      try {

        const response = await request(
          strapi.backendURL + '/reports/count',
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

        setReportCount({ reportCount: response });

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

export default useFetchReportCount;
