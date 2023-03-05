import TextField from '@mui/material/TextField';

export default function AutoComplete() {
  return (
    <TextField
      id='example'
      label='Search for stock'
      variant='outlined'
      InputLabelProps={{ shrink: false }}
    />
  );
}
