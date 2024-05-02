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

const FormGrid = styled(Grid)(() => ({
  display: 'flex',
  flexDirection: 'column',
}));
const editUser = () => {
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
          ユーザー一覧
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
              inputProps={{style: {fontSize: '20px',fontWeight: '400 !important',fontFamily: "Noto Sans JP"}}}
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
          <FormGrid item xs={12} md={6} sx={{mt: 3}}>
            <TextField
              id="outlined-basic"
              variant="outlined"
              margin="dense"
              size="small"
              placeholder="メールアドレス"
              inputProps={{style: {fontSize: '20px',fontWeight: '400 !important',fontFamily: "Noto Sans JP"}}}
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
          <FormGrid item xs={12} md={6} sx={{mt: 3}}>
            <TextField
              id="outlined-basic"
              variant="outlined"
              margin="dense"
              size="small"
              placeholder="姓名"
              inputProps={{style: {fontSize: '20px',fontWeight: '400 !important',fontFamily: "Noto Sans JP"}}}
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
          <FormGrid item xs={12} md={6} sx={{mt: 3}}>
            <TextField
              id="outlined-basic"
              variant="outlined"
              margin="dense"
              size="small"
              placeholder="所属"
              inputProps={{style: {fontSize: '20px',fontWeight: '400 !important',fontFamily: "Noto Sans JP"}}}
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
        </form>
      </Grid>
    </Box>
  )
}

export default editUser