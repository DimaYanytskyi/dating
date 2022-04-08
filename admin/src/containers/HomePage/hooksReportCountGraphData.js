import {useEffect, useState} from 'react';
import {request} from 'strapi-helper-plugin';

const useFetchReportCountGraphData = () => {
  const [state, setReportCountGraphData] = useState({
    reportCountGraphData: [0, 0, 0, 0]
  });

  useEffect(() => {
    const abortController = new AbortController();
    const { signal } = abortController;

    const getData = async () => {
      try {

        const response = await request(
          strapi.backendURL + '/mobile/reportsdata',
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

        setReportCountGraphData({ reportCountGraphData: response });

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

export default useFetchReportCountGraphData;
