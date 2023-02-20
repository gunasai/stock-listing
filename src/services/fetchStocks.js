import finnHub from './finnHub';

const fetchStocks = async ({ queryKey }) => {
  const symbol = queryKey[1];
  const apiResponse = await finnHub.get('/quote', {
    params: {
      symbol,
    },
  });

  return apiResponse.data;
};

export default fetchStocks;
