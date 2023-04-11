import finnHub from './finnHub';

const fetchStockHistory = async ({ queryKey }) => {
  const symbol = queryKey[1];
  const date = new Date();
  //   API only accepts seconds
  const currentTime = Math.floor(date.getTime() / 1000);
  let oneDay;
  //   set timeframe to 2 or 3 days before if it's a weekend
  if (date.getDay() === 6) {
    oneDay = currentTime - 2 * 24 * 60 * 60;
  } else if (date.getDay() === 0) {
    oneDay = currentTime - 3 * 24 * 60 * 60;
  } else {
    oneDay = currentTime - 24 * 60 * 60;
  }

  const oneWeek = 7 * 24 * 60 * 60;
  const oneYear = 365 * 24 * 60 * 60;

  const timeFrames = [
    { time: oneDay, resolution: 30 },
    { time: oneWeek, resolution: 60 },
    { time: oneYear, resolution: 'W' },
  ];
  let promises = [];

  timeFrames.map((timeFrame) => {
    promises.push(
      finnHub.get('/stock/candle', {
        params: {
          symbol,
          from: timeFrame.time,
          to: currentTime,
          resolution: timeFrame.resolution,
        },
      }),
    );
  });

  const responses = await Promise.all(promises);

  return responses;
};

export default fetchStockHistory;
