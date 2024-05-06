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
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Link from 'next/link'
import { useTheme } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
// search input
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';

interface Data {
  id: number,
  name: string,
  attribute: Array<string>,
}

function createData(
  id: number,
  name: string,
  attribute: Array<string>,
): Data {
  return {
    id,
    name,
    attribute,
  };
}

const rows = [
  createData(1, '対象名', ["性別", "年代", "地域", "時間帯", "家族構成", "職業"]),
  createData(2, '対象名', ["性別", "年代", "地域", "時間帯", "家族構成", "職業"]),
  createData(3, '対象名', ["性別", "年代", "地域", "時間帯", "家族構成", "職業"]),
  createData(4, '対象名', ["性別", "年代", "地域", "時間帯", "家族構成", "職業"]),
  createData(5, '対象名', ["性別", "年代", "地域", "時間帯", "家族構成", "職業"]),
  createData(6, '対象名', ["性別", "年代", "地域", "時間帯", "家族構成", "職業"]),
  createData(7, '対象名', ["性別", "年代", "地域", "時間帯", "家族構成", "職業"]),
  createData(8, '対象名', ["性別", "年代", "地域", "時間帯", "家族構成", "職業"]),
  createData(9, '対象名', ["性別", "年代", "地域", "時間帯", "家族構成", "職業"]),
  createData(10, '対象名', ["性別", "年代", "地域", "時間帯", "家族構成", "職業"]),
  createData(11, '対象名', ["性別", "年代", "地域", "時間帯", "家族構成", "職業"]),
  createData(12, '対象名', ["性別", "年代", "地域", "時間帯", "家族構成", "職業"]),
  createData(13, '対象名', ["性別", "年代", "地域", "時間帯", "家族構成", "職業"]),
  createData(14, '対象名', ["性別", "年代", "地域", "時間帯", "家族構成", "職業"]),
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
    label: '対象名',
  },
  {
    id: 'attribute',
    numeric: false,
    disablePadding: false,
    label: '属性',
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
              '&.MuiCheckbox-indeterminate': {
                color: 'white',
              }
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sx={{ color: '#FFFFFF', fontSize: '16px', fontWeight: '700'}}
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
  const [openModal, setOpenModal] = React.useState(false);
  const handleClickOpenModal = () => {
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };
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
  const theme = useTheme();

  // select job
  const [job, setJob] = React.useState('');
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
            fontSize: '24px',
          }}
          fontWeight="medium"
        >
          対象設定一覧
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button variant="contained" sx={{ width: "110px" }}
            LinkComponent={Link} href="/targets/create">
            <Typography
              sx={{
                color: "#FFFFFF",
              }}
              fontWeight="medium"
            >
              新規追加
            </Typography>
          </Button>
          <Button variant="contained" sx={{ width: "110px" }} color="secondary" disabled={selected.length ? false : true} onClick={handleClickOpenModal}>
            <Typography
              sx={{
                color: "#FFFFFF",
              }}
              fontWeight="medium"
            >
              削除
            </Typography>
          </Button>
        </Stack>
      </Grid>
      <Stack
        // container
        direction="row"
        justifyContent="space-between"
        alignItems="flex-start"
        sx={{
          mb: 2,
          mt:1
        }}
      >
        <TextField
          value={job}
          onChange={(e) => setJob(e.target.value)}
          select
          label="ジョブを選択"
          size="small"
          sx={{
            width: "45%",
            [theme.breakpoints.up('sm')]: {
              width: '40%',
            },
          }}
        >
        <MenuItem value="">
          <Typography sx={{ color: "#797979", fontSize: "15px" }}>
            <em>---ジョブを選択---</em>
          </Typography>
        </MenuItem>
        <MenuItem value={10}>
          <Typography sx={{ color: "#797979", fontSize: "15px" }}>
            Job 1
          </Typography>
        </MenuItem>
        <MenuItem value={20}>
          <Typography sx={{ color: "#797979", fontSize: "15px" }}>
            Job 2
          </Typography>
        </MenuItem>
        <MenuItem value={30}>
          <Typography sx={{ color: "#797979", fontSize: "15px" }}>
            Job 3
          </Typography>
        </MenuItem>
      </TextField>
      <TextField id="input-with-icon-textfield"
        sx={{
          width: "45%",
          [theme.breakpoints.up('sm')]: {
            width: '40%',
          },
          backgroundColor: '#D9D9D9',
          borderRadius: "4px",
          "& fieldset": { border: 'none' },
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ color: '#68A7B9' }} />
            </InputAdornment>
          ),
        }}
        size="small"
      />
      </Stack>
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
                    sx={{ cursor: 'pointer' }}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        color="primary"
                        checked={isItemSelected}
                        inputProps={{
                          'aria-labelledby': labelId,
                        }}
                        sx={{ color: '#68A7B9', paddingTop: "16px", paddingBottom: "16px" }}
                      />
                    </TableCell>
                    <TableCell
                      component="th"
                      id={labelId}
                      scope="row"
                      padding="none"
                    >
                      <Typography sx={{ color: "#797979", }} >
                        {row.name}
                      </Typography>
                    </TableCell>
                    <TableCell align="left" sx={{ padding: '0px' }}>
                      <Stack direction="row" spacing={1}>
                        {row.attribute.map((attribute_data, attribute_key) => {
                          return (
                            <Chip key={attribute_key} label={attribute_data} color="primary"
                              sx={{ fontSize: "12px", backgroundColor: "#B1E0ED", color: "#797979" }}
                            />

                          )
                        })}
                      </Stack>
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
          sx={{
            "& .MuiTablePagination-displayedRows": {
              color: "#6D6D6D"
            }
          }}
        />
      </Paper>
      <Dialog
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth='sm'
        fullWidth={true}
        sx={{
          '& .MuiDialog-paper': {
            top: '-20%'
          },
        }}
      >
        <DialogTitle id="alert-dialog-title"
          sx={{
            fontSize: '24px',
            fontWeight: '700',
            fontFamily: "Inter",
            mb: 4,
            mt: 3
          }}
        >
          {"選択した項目を削除"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description"
            sx={{
              fontSize: '16px',
              color: "#797979",
              fontFamily: "Inter",
              textAlign: "center",
            }}
          >
            本当に削除しますか
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ justifyContent: 'center', margin: 0, mb: 3 }}>
          <Button variant="contained" sx={{ width: "130px" }} onClick={handleCloseModal}>
            <Typography
              sx={{
                color: "#FFFFFF",
              }}
              fontWeight="medium"
            >
              キャンセル
            </Typography>
          </Button>
          <Button variant="contained" sx={{ width: "130px" }} color="secondary" onClick={handleCloseModal}>
            <Typography
              sx={{
                color: "#FFFFFF",
              }}
              fontWeight="medium"
            >
              削除する
            </Typography>
          </Button>
        </DialogActions>
      </Dialog>
    </Box >
  );
}