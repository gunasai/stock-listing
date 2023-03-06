import { useState } from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import CircularProgress from '@mui/material/CircularProgress';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { useQuery } from '@tanstack/react-query';
import fetchSymbol from '../services/fetchSymbol';

export default function AutoComplete() {
  const [open, setOpen] = useState(false);
  const [queryText, setQueryText] = useState('');
  const { data, error, isError, isLoading } = useQuery(['symbol', queryText], fetchSymbol, {
    enabled: queryText !== '',
  });
  const [errorMessage, setErrorMessage] = useState('');

  if (isError) {
    setErrorMessage(error.message);
  }

  const handleSearch = (e) => {
    setQueryText(e.target.value);
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
        onInputChange={handleSearch}
        getOptionLabel={(option) =>
          typeof option === 'string' ? option : `${option.displaySymbol} - ${option.description}`
        }
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
