import { styled } from '@mui/material/styles';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import Box from '@mui/material/Box';

const SuccessTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.root}`]: {
    color: theme.palette.success.main,
  },
}));

const ErrorTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.root}`]: {
    color: theme.palette.error.main,
  },
}));

const Results = ({ results }) => {
  const setIcon = (value) => {
    return value > 0 ? (
      <ArrowUpwardIcon fontSize='small' color='success' />
    ) : (
      <ArrowDownwardIcon fontSize='small' color='error' />
    );
  };

  return (
    <TableBody>
      {results.map((stock) => (
        <TableRow key='MSFT'>
          <TableCell component='th' scope='row'>
            MSFT
          </TableCell>
          <TableCell>{stock.c}</TableCell>
          {stock.d > 0 ? (
            <SuccessTableCell>
              <Box>
                {stock.d} {setIcon(stock.d)}
              </Box>
            </SuccessTableCell>
          ) : (
            <ErrorTableCell>
              <Box>
                {stock.d} {setIcon(stock.d)}
              </Box>
            </ErrorTableCell>
          )}
          {stock.dp > 0 ? (
            <SuccessTableCell>
              <Box>
                {stock.dp} {setIcon(stock.dp)}
              </Box>
            </SuccessTableCell>
          ) : (
            <ErrorTableCell>
              <Box>
                {stock.dp} {setIcon(stock.dp)}
              </Box>
            </ErrorTableCell>
          )}

          <TableCell>{stock.h}</TableCell>
          <TableCell>{stock.l}</TableCell>
          <TableCell>{stock.o}</TableCell>
          <TableCell>{stock.pc}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
};

export default Results;
