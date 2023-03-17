import finnHub from './finnHub';

const fetchStocks = async ({ queryKey }) => {
  const symbols = queryKey[1];
  let data = [];
  let promises = [];

  symbols.map((symbol) => {
    promises.push(
      finnHub.get('/quote', {
        params: {
          symbol,
        },
      }),
    );
  });

  const responses = await Promise.all(promises);

  responses.map((res, index) => {
    data.push({ data: res.data, symbol: symbols[index] });
  });

  return data;
};

export default fetchStocks;
