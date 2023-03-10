import { Stack } from '@mui/material';
import AutoComplete from '../components/AutoComplete';
import StockListing from '../components/StockListing';

export const StockOverviewPage = () => {
  return (
    <div>
      <Stack textAlign={'center'} spacing={10}>
        <h1>Stock Overview</h1>
        <AutoComplete />
        <StockListing />
      </Stack>
    </div>
  );
};
