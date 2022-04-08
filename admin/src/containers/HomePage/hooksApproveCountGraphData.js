import {useEffect, useState} from 'react';
import {request} from 'strapi-helper-plugin';

const useFetchApproveCountGraphData = () => {
  const [state, setApproveCountGraphData] = useState({
    approveCountGraphData: [0, 0, 0, 0]
  });

  useEffect(() => {
    const abortController = new AbortController();
    const { signal } = abortController;

    const getData = async () => {
      try {

        const response = await request(
          strapi.backendURL + '/mobile/approvesdata',
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

        setApproveCountGraphData({ approveCountGraphData: response });

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

export default useFetchApproveCountGraphData;
