import finnHub from './finnHub';

const fetchSymbol = async ({ queryKey }) => {
  const symbol = queryKey[1];
  const apiResponse = await finnHub.get('/search', {
    params: {
      q: symbol,
    },
  });

  return apiResponse.data;
};

export default fetchSymbol;
