import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableRow, { tableRowClasses } from '@mui/material/TableRow';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import Box from '@mui/material/Box';

const StyledTableRow = styled(TableRow)(() => ({
  [`&.${tableRowClasses.hover}`]: {
    cursor: 'pointer',
  },
}));

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
  const navigate = useNavigate();
  const setIcon = (value) => {
    return value > 0 ? (
      <ArrowUpwardIcon fontSize='small' color='success' />
    ) : (
      <ArrowDownwardIcon fontSize='small' color='error' />
    );
  };

  const handleStockSelect = (symbol) => {
    navigate(`detail/${symbol}`);
  };

  return (
    <TableBody>
      {results.map((stock) => {
        return (
          <StyledTableRow
            key={stock.symbol}
            onClick={() => handleStockSelect(stock.symbol)}
            hover={true}
          >
            <TableCell component='th' scope='row'>
              <strong>{stock.symbol}</strong>
            </TableCell>
            <TableCell>{stock.data.c}</TableCell>
            {stock.data.d > 0 ? (
              <SuccessTableCell>
                <Box>
                  {stock.data.d} {setIcon(stock.data.d)}
                </Box>
              </SuccessTableCell>
            ) : (
              <ErrorTableCell>
                <Box>
                  {stock.data.d} {setIcon(stock.data.d)}
                </Box>
              </ErrorTableCell>
            )}
            {stock.data.dp > 0 ? (
              <SuccessTableCell>
                <Box>
                  {stock.data.dp} {setIcon(stock.data.dp)}
                </Box>
              </SuccessTableCell>
            ) : (
              <ErrorTableCell>
                <Box>
                  {stock.data.dp} {setIcon(stock.data.dp)}
                </Box>
              </ErrorTableCell>
            )}

            <TableCell>{stock.data.h}</TableCell>
            <TableCell>{stock.data.l}</TableCell>
            <TableCell>{stock.data.o}</TableCell>
            <TableCell>{stock.data.pc}</TableCell>
          </StyledTableRow>
        );
      })}
    </TableBody>
  );
};

export default Results;
