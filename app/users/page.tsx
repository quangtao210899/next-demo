"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Table from '@mui/material/Table';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { pink } from '@mui/material/colors';
// search input
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: '#D9D9D9',
  borderColor: '#D9D9D9',
  borderWidth: "1px",
  borderStyle: 'solid',
  '&:hover, :active': {
    borderColor: 'rgba(0, 0, 0, 0.87)',
  },
  marginRight: 0,
  marginLeft: 0,
  width: '50%',
  [theme.breakpoints.up('sm')]: {
    width: '50%',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      // width: '20ch',
    },
  },
}));


interface Data {
  id: number,
  name: string,
  jobs: Array<string>,
  created_at: string,
}

function createData(
  id: number,
  name: string,
  jobs: Array<string>,
  created_at: string,
): Data {
  return {
    id,
    name,
    jobs,
    created_at,
  };
}

const rows = [
  createData(1, 'User 1', ["ジョブ 1", "ジョブ 2", "ジョブ 3", "ジョブ 4"], '0000.00.00 00:00'),
  createData(2, 'User 2', ["ジョブ 1", "ジョブ 2", "ジョブ 3", "ジョブ 4"], '0000.00.00 00:00'),
  createData(3, 'User 3', ["ジョブ 1", "ジョブ 2", "ジョブ 3", "ジョブ 4"], '0000.00.00 00:00'),
  createData(4, 'User 4', ["ジョブ 1", "ジョブ 2", "ジョブ 3", "ジョブ 4"], '0000.00.00 00:00'),
  createData(5, 'User 5', ["ジョブ 1", "ジョブ 2", "ジョブ 3", "ジョブ 4"], '0000.00.00 00:00'),
  createData(6, 'User 6', ["ジョブ 1", "ジョブ 2", "ジョブ 3", "ジョブ 4"], '0000.00.00 00:00'),
  createData(7, 'User 7', ["ジョブ 1", "ジョブ 2", "ジョブ 3", "ジョブ 4"], '0000.00.00 00:00'),
  createData(8, 'User 8', ["ジョブ 1", "ジョブ 2", "ジョブ 3", "ジョブ 4"], '0000.00.00 00:00'),
  createData(9, 'User 8', ["ジョブ 1", "ジョブ 2", "ジョブ 3", "ジョブ 4"], '0000.00.00 00:00'),
  createData(10, 'User 10', ["ジョブ 1", "ジョブ 2", "ジョブ 3", "ジョブ 4"], '0000.00.00 00:00'),
  createData(11, 'User 11', ["ジョブ 1", "ジョブ 2", "ジョブ 3", "ジョブ 4"], '0000.00.00 00:00'),
  createData(12, 'User 12', ["ジョブ 1", "ジョブ 2", "ジョブ 3", "ジョブ 4"], '0000.00.00 00:00'),
  createData(13, 'User 13', ["ジョブ 1", "ジョブ 2", "ジョブ 3", "ジョブ 4"], '0000.00.00 00:00'),
];

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

type Order = 'asc' | 'desc';

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key,
): (
  a: { [key in Key]: number | string | Array<string> },
  b: { [key in Key]: number | string | Array<string> },
) => number {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort<T>(array: readonly T[], comparator: (a: T, b: T) => number) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

interface HeadCell {
  disablePadding: boolean;
  id: keyof Data;
  label: string;
  numeric: boolean;
}

const headCells: readonly HeadCell[] = [
  {
    id: 'name',
    numeric: false,
    disablePadding: true,
    label: 'ユーザー名',
  },
  {
    id: 'jobs',
    numeric: false,
    disablePadding: false,
    label: 'ジョブ',
  },
  {
    id: 'created_at',
    numeric: true,
    disablePadding: false,
    label: '登録日時',
  }
];

interface EnhancedTableProps {
  numSelected: number;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  rowCount: number;
}

function EnhancedTableHead(props: EnhancedTableProps) {
  const { onSelectAllClick, numSelected, rowCount } = props;

  return (
    <TableHead sx={{ backgroundColor: "#68A7B9" }}>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select all desserts',
            }}
            sx={{
              color: 'white',
              '&.Mui-checked': {
                color: 'white',
              },
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sx={{ color: '#FFFFFF', fontSize: '16px', fontWeight: '700', lineHeight: '11.58px' }}
            size='small'
          >
            {headCell.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

export default function EnhancedTable() {
  const [order, setOrder] = React.useState<Order>('asc');
  const [orderBy, setOrderBy] = React.useState<keyof Data>('name');
  const [selected, setSelected] = React.useState<readonly number[]>([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event: React.MouseEvent<unknown>, id: number) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected: readonly number[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };


  const isSelected = (id: number) => selected.indexOf(id) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const visibleRows = React.useMemo(
    () =>
      stableSort(rows, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage,
      ),
    [order, orderBy, page, rowsPerPage],
  );

  return (
    <Box sx={{ width: '100%' }}>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="baseline"
        sx={{
          mt: 2,
          mb: 1,
        }}
      >
        <Typography
          sx={{
            fontSize: '24px !important',
            fontWeight: '700 !important',
            color: "#68A7B9",
            fontFamily: "Noto Sans JP",
          }}
        >
          ユーザー一覧
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button variant="contained" sx={{ backgroundColor: "#68A7B9", width: "110px", '&:hover': { backgroundColor: "#5b8e9f" } }}>
            <Typography
              sx={{
                fontSize: '16px !important',
                fontWeight: '700 !important',
                color: "#FFFFFF",
                fontFamily: "Noto Sans JP",
              }}
            >
              新規追加
            </Typography>
          </Button>
          <Button variant="contained" sx={{ backgroundColor: "#7B7979", width: "110px", '&:hover': { backgroundColor: "#6E6C6C" } }}>
            <Typography
              sx={{
                fontSize: '16px !important',
                fontWeight: '700 !important',
                color: "#FFFFFF",
                fontFamily: "Noto Sans JP",
              }}
            >
              削除
            </Typography>
          </Button>
        </Stack>
      </Grid>
      <Box>
        <Search sx={{ mb: 2 }}>
          <SearchIconWrapper>
            <SearchIcon sx={{ color: '#68A7B9' }} />
          </SearchIconWrapper>
          <StyledInputBase
            // placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
          />
        </Search>
      </Box>

      <Paper sx={{ width: '100%', mb: 2 }}>
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={'medium'}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              onSelectAllClick={handleSelectAllClick}
              rowCount={rows.length}
            />
            <TableBody>
              {visibleRows.map((row, index) => {
                const isItemSelected = isSelected(row.id);
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow
                    hover
                    onClick={(event) => handleClick(event, row.id)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.id}
                    selected={isItemSelected}
                    sx={{ cursor: 'pointer'}}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        color="primary"
                        checked={isItemSelected}
                        inputProps={{
                          'aria-labelledby': labelId,
                        }}
                        sx={{ color: "#68A7B9" }}
                      />
                    </TableCell>
                    <TableCell
                      component="th"
                      id={labelId}
                      scope="row"
                      padding="none"
                    >
                      <Typography
                        sx={{
                          fontSize: '16px',
                          fontWeight: '400',
                          color: "#797979",
                          fontFamily: "Noto Sans JP",
                        }}
                      >
                        {row.name}
                      </Typography>
                    </TableCell>
                    <TableCell align="left" sx={{padding:'0px'}}>
                      <Stack direction="row" spacing={1}>
                        {row.jobs.map((job_data, job_key) => {
                          return (
                            <Chip key={job_key} label={job_data} color="primary" sx={{ fontSize: "10px", fontFamily: "Noto Sans JP", fontWeight: "700", backgroundColor: "#68A7B9BF" }} />
                          )
                        })}
                      </Stack>
                    </TableCell>
                    <TableCell align="right">
                      <Typography
                        sx={{
                          fontSize: '16px',
                          fontWeight: '400',
                          color: "#797979",
                          fontFamily: "Noto Sans JP",
                        }}
                      >
                        {row.created_at}
                      </Typography>
                    </TableCell>
                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: 53 * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}