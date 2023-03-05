import { useState } from 'react';
import TextField from '@mui/material/TextField';
import { useQuery } from '@tanstack/react-query';
import fetchSymbol from '../services/fetchSymbol';

export default function AutoComplete() {
  const [queryText, setQueryText] = useState('');
  const { data, error, isError, isLoading } = useQuery(['symbol', queryText], fetchSymbol, {
    enabled: queryText.length > 0,
  });
  const [errorMessge, setErrorMessage] = useState('');

  if (isError) {
    setErrorMessage(error.message);
  }

  const handleSearch = (e) => {
    setQueryText(e.target.value);
  };

  const options = data?.result || [];

  return (
    <TextField
      id='example'
      label='Search for stock'
      variant='outlined'
      InputLabelProps={{ shrink: false }}
    />
  );
}
