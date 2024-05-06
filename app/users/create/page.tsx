"use client"
import { ChangeEvent, useState } from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Link from 'next/link'
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import TextField from "@mui/material/TextField";
import Divider from '@mui/material/Divider';
import ErrorTypography from "../../component/ErrorTypography"
import { z } from 'zod';
import { useRouter } from 'next/navigation';
// multi select start
import Checkbox from '@mui/material/Checkbox';
import Chip from '@mui/material/Chip';
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
  // start validate
  interface State {
    username: string,
    email: string,
    fullname: string,
    department: string
  }

  const UserFormSchema = z.object({
    username: z.string().min(1, 'ユーザー名は必須です'),
    email: z.string().min(1, 'メールアドレスは必須です'),
    fullname: z.string().min(1, '姓名は必須です'),
    department: z.string().min(1, '所属は必須です'),
  });
  const [errors, setErrors] = useState<{ [key: string]: string | null }>({});
  const [values, setValues] = useState<State>({
    username: '',
    email: '',
    fullname: '',
    department: ''
  })
  const router = useRouter()
  const handleChange = (prop: keyof State) => (event: ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [prop]: event.target.value })
  }
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await UserFormSchema.parseAsync({ ...values });
      console.log('Formis valid');
      setErrors({});
      router.push('/portal');
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: { [key: string]: string | null } = {};
        error.errors.forEach((err) => {
          fieldErrors[err.path[0]] = err.message;
        });
        setErrors(fieldErrors);
      }
    }
  };
  // end validate

  const [inputValue, setInputValue] = useState<string>('');
  const [selectedOptions, setSelectedOptions] = useState<any[]>([]);

  const handleInputChange = (event: React.ChangeEvent<{}>, newInputValue: string) => {
    setInputValue(newInputValue);
  };

  const handleChangeSelect = (event: React.SyntheticEvent, newValue: any[]) => {
    setSelectedOptions(newValue);
  };
  return (
    <Box sx={{ width: '100%' }}>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="baseline"
        sx={{ mt: 2, mb: 1 }}
      >
        <Typography
          sx={{ fontSize: '24px' }}
          fontWeight="medium"
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
              inputProps={{ style: { fontSize: '20px' } }}
              value={values.username}
              onChange={handleChange('username')}
              error={!!errors.username}
              sx= {{backgroundColor: "#FFF", ml:2}}
            />
            <ErrorTypography text={errors.username} />
          </FormGrid>
          <FormGrid item xs={12} md={6}>
            <TextField
              id="outlined-basic-2"
              variant="outlined"
              margin="dense"
              size="small"
              placeholder="メールアドレス"
              inputProps={{ style: { fontSize: '20px' } }}
              value={values.email}
              onChange={handleChange('email')}
              error={!!errors.email}
              sx= {{backgroundColor: "#FFF", ml:2}}
            />
            <ErrorTypography text={errors.email} />
          </FormGrid>
          <FormGrid item xs={12} md={6}>
            <TextField
              id="outlined-basic-3"
              variant="outlined"
              margin="dense"
              size="small"
              placeholder="姓名"
              inputProps={{ style: { fontSize: '20px' } }}
              value={values.fullname}
              onChange={handleChange('fullname')}
              error={!!errors.fullname}
              sx= {{backgroundColor: "#FFF", ml:2}}
            />
            <ErrorTypography text={errors.fullname} />
          </FormGrid>
          <FormGrid item xs={12} md={6}>
            <TextField
              id="outlined-basic-4"
              variant="outlined"
              margin="dense"
              size="small"
              placeholder="所属"
              inputProps={{ style: { fontSize: '20px' } }}
              value={values.department}
              onChange={handleChange('department')}
              error={!!errors.department}
              sx= {{backgroundColor: "#FFF", ml:2}}
            />
            <ErrorTypography text={errors.department} />
          </FormGrid>
          {/* start multi select */}
          <Autocomplete
            multiple
            size="small"
            id="checkboxes-tags-demo"
            options={top100Films}
            inputValue={inputValue}
            onInputChange={handleInputChange}
            value={selectedOptions}
            onChange={handleChangeSelect}
            disableCloseOnSelect
            getOptionLabel={(option) => option.title}
            // defaultValue = {[top100Films[0]]}
            renderOption={(props, option, { selected }) => (
              <li {...props}>
                <Checkbox
                  icon={icon}
                  checkedIcon={checkedIcon}
                  style={{ marginRight: 8 }}
                  checked={selected}
                  sx={{ color: '#68A7B9', }}
                />
                <Typography
                  sx={{ color: "#797979", }}
                >
                  {option.title}
                </Typography>
              </li>
            )}
            renderTags={(value: readonly any[], getTagProps) =>
              value.map((option: any, index: number) => (
                <Chip label={option.title} {...getTagProps({ index })}
                  sx={{
                    fontSize: '12px',
                    fontWeight: '700',
                    color: "#FFFFFF",
                    backgroundColor: "#68A7B9BF",
                    margin: "0px 2px !important",
                    maxHeight: "25px"
                  }}
                />
              ))
            }
            renderInput={(params) => (
              <TextField {...params} placeholder={selectedOptions.length ? "" : "ジョブ"} sx={{ fontSize: '20px' }} />
            )}
            sx={{ mt: 1, mb: 3, backgroundColor: "#FFF", ml:2 }}
          />
          {/* end multi select */}

          <Divider sx={{ mt: 5, borderColor: "#68A7B9", borderWidth: '1px', mb: 5,ml:2 }} />
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
            <Button variant="contained" color="secondary" sx={{ mr: 2, width: "130px" }} LinkComponent={Link} href="/users">
              <Typography
                sx={{ color: "#FFFFFF", }}
                fontWeight="medium"
              >
                キャンセル
              </Typography>
            </Button>
            <Button variant="contained" sx={{ width: "130px" }} onClick={handleSubmit}>
              <Typography
                sx={{ color: "#FFFFFF" }}
                fontWeight="medium"
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