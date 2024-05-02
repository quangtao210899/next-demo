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
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from "@mui/material/TextField";
// multi select start
import { Theme, useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

function getStyles(name: string, personName: readonly string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

// multi select end


const FormGrid = styled(Grid)(() => ({
  display: 'flex',
  flexDirection: 'column',
}));


const createUser = () => {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };
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
            fontWeight: '700',
            color: "#68A7B9",
            fontFamily: "Noto Sans JP",
          }}
        >
          ユーザー新規追加
        </Typography>
      </Grid>
      {/* form */}
      <Grid>
        <form autoComplete='off'>
          <FormGrid item xs={12} md={6}>
            <TextField
              id="outlined-basic"
              variant="outlined"
              margin="dense"
              size="small"
              placeholder="ユーザー名"
              inputProps={{ style: { fontSize: '20px', fontWeight: '400', fontFamily: "Noto Sans JP" } }}
              sx={{
                '& input:focus ~ .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#68A7B9', // Đặt màu viền khi focus
                },
              }}
            // value={values.username}
            // onChange={handleChange('username')}
            // error={!!errors.username}
            // helperText={errors.username}
            />
          </FormGrid>
          <FormGrid item xs={12} md={6} sx={{ mt: 3 }}>
            <TextField
              id="outlined-basic"
              variant="outlined"
              margin="dense"
              size="small"
              placeholder="メールアドレス"
              inputProps={{ style: { fontSize: '20px', fontWeight: '400', fontFamily: "Noto Sans JP" } }}
              sx={{
                '& input:focus ~ .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#68A7B9', // Đặt màu viền khi focus
                },
              }}
            // value={values.username}
            // onChange={handleChange('username')}
            // error={!!errors.username}
            // helperText={errors.username}
            />
          </FormGrid>
          <FormGrid item xs={12} md={6} sx={{ mt: 3 }}>
            <TextField
              id="outlined-basic"
              variant="outlined"
              margin="dense"
              size="small"
              placeholder="姓名"
              inputProps={{ style: { fontSize: '20px', fontWeight: '400', fontFamily: "Noto Sans JP" } }}
              sx={{
                '& input:focus ~ .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#68A7B9', // Đặt màu viền khi focus
                },
              }}
            // value={values.username}
            // onChange={handleChange('username')}
            // error={!!errors.username}
            // helperText={errors.username}
            />
          </FormGrid>
          <FormGrid item xs={12} md={6} sx={{ mt: 3 }}>
            <TextField
              id="outlined-basic"
              variant="outlined"
              margin="dense"
              size="small"
              placeholder="所属"
              inputProps={{ style: { fontSize: '20px', fontWeight: '400', fontFamily: "Noto Sans JP" } }}
              sx={{
                '& input:focus ~ .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#68A7B9', // Đặt màu viền khi focus
                },
              }}
            // value={values.username}
            // onChange={handleChange('username')}
            // error={!!errors.username}
            // helperText={errors.username}
            />
          </FormGrid>
          <FormControl sx={{ width: '100%', mt: 3 }}>
            <InputLabel id="demo-multiple-chip-label">
              <Typography sx={{ fontSize: '20px', fontWeight: '400', fontFamily: "Noto Sans JP" }}>
                ジョブ
              </Typography>
            </InputLabel>
            <Select
              multiple
              value={personName}
              onChange={handleChange}
              input={<OutlinedInput id="select-multiple-chip" label="Chip" sx={{
                '&.Mui-focused fieldset': {
                  borderColor: 'green', // Thay đổi màu border khi focus
                }
              }} />}
              renderValue={(selected) => (
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                  {selected.map((value) => (
                    <Chip key={value} label={value} color="primary"
                      sx={{ fontSize: "14px", fontFamily: "Noto Sans JP", fontWeight: "700", backgroundColor: "#68A7B9" }} />
                  ))}
                </Box>
              )}
              MenuProps={MenuProps}
            >
              <MenuItem disabled value="">
                <em>ジョブ</em>
              </MenuItem>
              {names.map((name) => (
                <MenuItem
                  key={name}
                  value={name}
                  style={getStyles(name, personName, theme)}
                >
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </form>
      </Grid>
    </Box>
  )
}

export default createUser