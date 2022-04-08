import {useEffect, useState} from 'react';
import {request} from 'strapi-helper-plugin';

const useFetchIncomeCountGraphData = () => {
  const [state, setIncomeCountGraphData] = useState({
    incomeCountGraphData: [0, 0, 0, 0]
  });

  useEffect(() => {
    const abortController = new AbortController();
    const { signal } = abortController;

    const getData = async () => {
      try {

        const response = await request(
          strapi.backendURL + '/mobile/incomesdata',
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

        setIncomeCountGraphData({ incomeCountGraphData: response });

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

export default useFetchIncomeCountGraphData;
