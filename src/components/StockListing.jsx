import { useState } from 'react';
import {
  Spinner,
  Alert,
  AlertIcon,
  AlertDescription,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import fetchStocks from '../services/fetchStocks';

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
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Last</Th>
              <Th>Change</Th>
              <Th>Change %</Th>
              <Th>High</Th>
              <Th>Low</Th>
              <Th>Open</Th>
              <Th>Pclose</Th>
            </Tr>
          </Thead>
          <Tbody>
            {results.map((stock) => (
              <Tr key='MSFT'>
                <Th>MSFT</Th>
                <Td>{stock.c}</Td>
                <Td>{stock.d}</Td>
                <Td>{stock.dp}</Td>
                <Td>{stock.h}</Td>
                <Td>{stock.l}</Td>
                <Td>{stock.o}</Td>
                <Td>{stock.pc}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
}
