import { useState, useContext } from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import CircularProgress from '@mui/material/CircularProgress';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import Results from './Results';
import TableHeader from './TableHeader';
import { WatchListContext } from '../context/WatchListContext';

export default function StockListing() {
  const { results, error, isError, isLoading } = useContext(WatchListContext);
  const [errorMessage, setErrorMessage] = useState('');

  if (isLoading) {
    return <CircularProgress />;
  }

  if (isError) {
    setErrorMessage(error.message);
  }

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
