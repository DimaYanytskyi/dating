import {useEffect, useState} from 'react';
import {request} from 'strapi-helper-plugin';

const useFetchIncomeCount = () => {
  const [state, setIncomeCount] = useState({
    incomeCount: 0
  });

  useEffect(() => {
    const abortController = new AbortController();
    const { signal } = abortController;

    const getData = async () => {
      try {

        const response = await request(
          strapi.backendURL + '/incomes/count',
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

        setIncomeCount({ incomeCount: response });

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

export default useFetchIncomeCount;
