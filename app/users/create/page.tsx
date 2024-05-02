"use client"
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Link from 'next/link'
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import TextField from "@mui/material/TextField";
import Divider from '@mui/material/Divider';
// multi select start
import Checkbox from '@mui/material/Checkbox';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;
const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Pulp Fiction', year: 1994 },
  {
    title: 'The Lord of the Rings: The Return of the King',
    year: 2003,
  },
  { title: 'The Good, the Bad and the Ugly', year: 1966 },
  { title: 'Fight Club', year: 1999 },
  {
    title: 'The Lord of the Rings: The Fellowship of the Ring',
    year: 2001,
  },
  {
    title: 'Star Wars: Episode V - The Empire Strikes Back',
    year: 1980,
  },
  { title: 'Forrest Gump', year: 1994 },
  { title: 'Inception', year: 2010 },
  {
    title: 'The Lord of the Rings: The Two Towers',
    year: 2002,
  },
  { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { title: 'Goodfellas', year: 1990 },
  { title: 'The Matrix', year: 1999 },
  { title: 'Seven Samurai', year: 1954 },
  {
    title: 'Star Wars: Episode IV - A New Hope',
    year: 1977,
  },
  { title: 'City of God', year: 2002 },
  { title: 'Se7en', year: 1995 },
  { title: 'The Silence of the Lambs', year: 1991 },
  { title: "It's a Wonderful Life", year: 1946 },
  { title: 'Life Is Beautiful', year: 1997 },
  { title: 'The Usual Suspects', year: 1995 },
  { title: 'Léon: The Professional', year: 1994 },
  { title: 'Spirited Away', year: 2001 },
  { title: 'Saving Private Ryan', year: 1998 },
  { title: 'Once Upon a Time in the West', year: 1968 },
  { title: 'American History X', year: 1998 },
  { title: 'Interstellar', year: 2014 },
];
// multi select end
const FormGrid = styled(Grid)(() => ({
  display: 'flex',
  flexDirection: 'column',
}));

const createUser = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [selectedOptions, setSelectedOptions] = useState<any[]>([]);

  const handleInputChange = (event: React.ChangeEvent<{}>, newInputValue: string) => {
    setInputValue(newInputValue);
  };

  const handleChange = (event: React.SyntheticEvent, newValue: any[]) => {
    setSelectedOptions(newValue);
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
          {/* start multi select */}
          <Autocomplete 
            sx={{mt:3, mb:3}}
            multiple
            size="medium"
            id="checkboxes-tags-demo"
            options={top100Films}
            inputValue={inputValue}
            onInputChange={handleInputChange}
            value={selectedOptions}
            onChange={handleChange}
            disableCloseOnSelect
            getOptionLabel={(option) => option.title}
            renderOption={(props, option, { selected }) => (
              <li {...props}>
                <Checkbox
                  icon={icon}
                  checkedIcon={checkedIcon}
                  style={{ marginRight: 8 }}
                  checked={selected}
                />
                {option.title}
              </li>
            )}
            style={{ width: '100%' }}
            renderInput={(params) => (
              <TextField {...params} placeholder={selectedOptions.length ?"": "ジョブ"} sx={{
                fontSize: '20px', fontWeight: '400', fontFamily: "Noto Sans JP" 
              }}/>
            )}
          />
          {/* end multi select */}

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