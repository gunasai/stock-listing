import { useState, useContext } from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import CircularProgress from '@mui/material/CircularProgress';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { useQuery } from '@tanstack/react-query';
import fetchSymbol from '../services/fetchSymbol';
import { WatchListContext } from '../context/WatchListContext';

export default function AutoComplete() {
  const { addStock } = useContext(WatchListContext);
  const [open, setOpen] = useState(false);
  const [queryText, setQueryText] = useState('');
  const { data, error, isError, isLoading } = useQuery(['symbol', queryText], fetchSymbol, {
    enabled: queryText !== '',
  });
  const [errorMessage, setErrorMessage] = useState('');

  if (isError) {
    setErrorMessage(error.message);
  }

  const handleSearch = (e, value, reason) => {
    if (reason === 'input') {
      setQueryText(value);
    }
  };

  const selectStock = (e, value) => {
    setQueryText('');
    addStock(value.symbol);
  };

  const options = data?.result || [];
  const loading = open && isLoading && queryText !== '';

  return (
    <div>
      {errorMessage && (
        <Alert severity='error'>
          <AlertTitle>Error</AlertTitle>
          {errorMessage}
        </Alert>
      )}
      <Autocomplete
        open={open}
        onOpen={() => {
          setOpen(true);
        }}
        onClose={() => {
          setOpen(false);
        }}
        loading={loading}
        onInputChange={(e, value, reason) => handleSearch(e, value, reason)}
        getOptionLabel={(option) =>
          typeof option === 'string' ? option : `${option.displaySymbol} - ${option.description}`
        }
        onChange={(e, value) => selectStock(e, value)}
        filterOptions={(x) => x}
        autoComplete
        includeInputInList
        filterSelectedOptions
        options={options || []}
        noOptionsText='Please enter a stock name'
        renderInput={(params) => (
          <TextField
            {...params}
            label='Search for stocks'
            variant='outlined'
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <>
                  {loading && queryText !== '' ? (
                    <CircularProgress color='inherit' size={20} />
                  ) : null}
                  {params.InputProps.endAdornment}
                </>
              ),
            }}
          />
        )}
        value={queryText}
      />
    </div>
  );
}
