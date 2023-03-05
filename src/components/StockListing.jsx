import { useState } from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import CircularProgress from '@mui/material/CircularProgress';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import { useQuery } from '@tanstack/react-query';
import fetchStocks from '../services/fetchStocks';
import Results from './Results';
import TableHeader from './TableHeader';

export default function StockListing() {
  const { data, error, isError, isLoading } = useQuery(['stocks', 'MSFT'], fetchStocks);
  const [errorMessage, setErrorMessage] = useState('');

  if (isLoading) {
    return <CircularProgress />;
  }

  if (isError) {
    setErrorMessage(error.message);
  }

  const results = [data];

  return (
    <div>
      {errorMessage && (
        <Alert severity='error'>
          <AlertTitle>Error</AlertTitle>
          {errorMessage}
        </Alert>
      )}
      <TableContainer>
        <Table>
          <TableHeader />
          <Results results={results} />
        </Table>
      </TableContainer>
    </div>
  );
}
