"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Link from 'next/link'
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import TextField from "@mui/material/TextField";
import Divider from '@mui/material/Divider';
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
              id="outlined-basic-1"
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
              id="outlined-basic-2"
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
              id="outlined-basic-3"
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
              id="outlined-basic-4"
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
          <FormControl sx={{ width: '100%', mt: 3, mb: 3 }}>
            <InputLabel id="demo-multiple-chip-label">
              <Typography sx={{ fontSize: '20px', fontWeight: '400', fontFamily: "Noto Sans JP", color: "rgba(0, 0, 0, 0.38)" }}>
                ジョブ
              </Typography>
            </InputLabel>
            <Select
              multiple
              value={personName}
              onChange={handleChange}
              input={<OutlinedInput id="select-multiple-chip"
                sx={{
                  '&:not(.Mui-disabled):hover::before': {
                    borderColor: '#68A7B9',
                  },
                  '& input:focus ~ .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#68A7B9', // Đặt màu viền khi focus
                  },
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

          <Divider sx={{ mt: 5, borderColor: "#68A7B9", borderWidth: '1px', mb: 5 }} />
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
            <Button variant="contained" sx={{ mr: 2, backgroundColor: "#7B7979", width: "130px", '&:hover': { backgroundColor: "#6E6C6C" } }}
              LinkComponent={Link} href="/users">
              <Typography
                sx={{
                  fontSize: '16px',
                  fontWeight: '700',
                  color: "#FFFFFF",
                  fontFamily: "Noto Sans JP",
                }}
              >
                キャンセル
              </Typography>
            </Button>
            <Button variant="contained" sx={{ backgroundColor: "#68A7B9", width: "130px", '&:hover': { backgroundColor: "#5b8e9f" } }}>
              <Typography
                sx={{
                  fontSize: '16px',
                  fontWeight: '700',
                  color: "#FFFFFF",
                  fontFamily: "Noto Sans JP",
                }}
              >
                新規追加
              </Typography>
            </Button>
          </Box>
        </form>
      </Grid>
    </Box>
  )
}

export default createUser