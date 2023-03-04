import { useState } from 'react';
import { Typeahead, withAsync } from 'react-bootstrap-typeahead';
import {
  Box,
  Spinner,
  Alert,
  AlertIcon,
  AlertDescription,
  Select,
  Input,
  Card,
  CardBody,
} from '@chakra-ui/react';
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

  const AsyncTypeahead = withAsync(Typeahead);

  const filterBy = () => true;
  return (
    <Box>
      {/* <AsyncTypeahead
        filterBy={filterBy}
        id='symbol-lookup'
        options={options}
        onSearch={handleSearch}
        placeholder='Search for a stock symbol'
        isLoading={isLoading}
        labelKey='description'
        minLength={2}
        delay={1000}
        renderMenuItemChildren={(option) => (
          <>
            <span>
              {option.description} {option.symbol}
            </span>
          </>
        )}
      /> */}
      <Input onChange={handleSearch} value={queryText} />
      {options.length > 0 && (
        <Card>
          <CardBody>
            {isLoading && <Spinner />}
            {options.map((option) => (
              <p key={option.symbol}>{option.description}</p>
            ))}
          </CardBody>
        </Card>
      )}
    </Box>
  );
}
