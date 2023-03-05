import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const TableHeader = () => {
  return (
    <TableHead>
      <TableRow>
        <TableCell>Name</TableCell>
        <TableCell>Last</TableCell>
        <TableCell>Change</TableCell>
        <TableCell>Change %</TableCell>
        <TableCell>High</TableCell>
        <TableCell>Low</TableCell>
        <TableCell>Open</TableCell>
        <TableCell>Pclose</TableCell>
      </TableRow>
    </TableHead>
  );
};

export default TableHeader;
