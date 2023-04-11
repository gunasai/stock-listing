import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import CircularProgress from '@mui/material/CircularProgress';
import fetchStockHistory from '../services/fetchStockHistory';
import { StockChart } from '../components/StockChart';

const formatData = (data) => {
  return data.t.map((el, index) => {
    return {
      x: el * 1000, // convert to milliseconds
      y: data.c[index],
    };
  });
};

export const StockDetailPage = () => {
  const { symbol } = useParams();
  const { data, error, isError, isLoading } = useQuery(['candle', symbol], fetchStockHistory);
  const [errorMessage, setErrorMessage] = useState('');

  if (isLoading) {
    return <CircularProgress />;
  }

  if (isError) {
    setErrorMessage(error.message);
  }

  const result = data;

  const chartData = {
    day: formatData(result[0].data),
    week: formatData(result[1].data),
    year: formatData(result[2].data),
  };

  return (
    <div>
      {errorMessage && (
        <Alert severity='error'>
          <AlertTitle>Error</AlertTitle>
          {errorMessage}
        </Alert>
      )}
      <h1>Stock Details {symbol}</h1>
      {chartData && (
        <div>
          <StockChart chartData={chartData} symbol={symbol} />
        </div>
      )}
    </div>
  );
};
