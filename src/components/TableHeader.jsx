import { Thead, Tr, Th } from '@chakra-ui/react';

const TableHeader = () => {
  return (
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
  );
};

export default TableHeader;
