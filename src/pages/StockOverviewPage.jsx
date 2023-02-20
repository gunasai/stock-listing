import AutoComplete from '../components/AutoComplete';
import StockListing from '../components/StockListing';

export const StockOverviewPage = () => {
  return (
    <div>
      <h1>Stock Overview</h1>
      <AutoComplete />
      <StockListing />
    </div>
  );
};
