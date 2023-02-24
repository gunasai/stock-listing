import { useState } from 'react';
import {
  Spinner,
  Alert,
  AlertIcon,
  AlertDescription,
  Table,
  TableContainer,
} from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import fetchStocks from '../services/fetchStocks';
import Results from './Results';
import TableHeader from './TableHeader';

export default function StockListing() {
  const { data, error, isError, isLoading } = useQuery(['stocks', 'MSFT'], fetchStocks);
  const [errorMessage, setErrorMessage] = useState('');

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    setErrorMessage(error.message);
  }

  const results = [data];

  return (
    <div>
      {errorMessage && (
        <Alert status='error'>
          <AlertIcon />
          <AlertDescription>{errorMessage}</AlertDescription>
        </Alert>
      )}
      <TableContainer>
        <Table variant='simple' size='lg'>
          <TableHeader />
          <Results results={results} />
        </Table>
      </TableContainer>
    </div>
  );
}
