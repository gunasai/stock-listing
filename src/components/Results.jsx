import { Tbody, Th, Tr, Td } from '@chakra-ui/react';
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';

const Results = ({ results }) => {
  const setChangeColor = (value) => {
    return value > 0 ? 'green.400' : 'red.400';
  };

  const setIcon = (value) => {
    return value > 0 ? <ChevronUpIcon color='green.400' /> : <ChevronDownIcon color='red.400' />;
  };

  return (
    <Tbody>
      {results.map((stock) => (
        <Tr key='MSFT'>
          <Th>MSFT</Th>
          <Td>{stock.c}</Td>
          <Td color={setChangeColor(stock.d)}>
            {stock.d} {setIcon(stock.d)}
          </Td>
          <Td color={setChangeColor(stock.dp)}>
            {stock.dp} {setIcon(stock.dp)}
          </Td>
          <Td>{stock.h}</Td>
          <Td>{stock.l}</Td>
          <Td>{stock.o}</Td>
          <Td>{stock.pc}</Td>
        </Tr>
      ))}
    </Tbody>
  );
};

export default Results;
