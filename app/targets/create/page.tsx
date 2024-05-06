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
import MenuItem from '@mui/material/MenuItem';
import DragIndicatorTwoToneIcon from '@mui/icons-material/DragIndicatorTwoTone';
import ClearTwoToneIcon from '@mui/icons-material/ClearTwoTone';
const FormGrid = styled(Grid)(() => ({
  display: 'flex',
  flexDirection: 'column',
}));

const createTarget = () => {
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
          対象設定新規追加
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
              sx={{ backgroundColor: "#FFF", ml: 2 }}
            // value={values.username}
            // onChange={handleChange('username')}
            // error={!!errors.username}
            />
            {/* <ErrorTypography text={errors.username} /> */}
          </FormGrid>
          <Divider sx={{ mt: 4, borderColor: "#68A7B9", borderWidth: '1px', mb: 2, ml: 2 }} />
          <Box sx={{ ml: 2, mb: 1 }}>
            <Typography sx={{ fontSize: '16px' }}>
              対象設定
            </Typography>
          </Box>
          {/* item */}
          <FormGrid item xs={12} md={6} sx={{ ml: 2 }}>
            <DragIndicatorTwoToneIcon sx={{ color: "#68A7B9" }} />
            <ClearTwoToneIcon sx={{ color: "#68A7B9" }} />
            <TextField
              select
              id="outlined-basic-1"
              variant="outlined"
              margin="dense"
              size="small"
              placeholder="ユーザー名"
              inputProps={{ style: { fontSize: '20px' } }}
              value={values.username}
              onChange={handleChange('username')}
              error={!!errors.username}
              sx={{ backgroundColor: "#FFF" }}
            >
              <MenuItem value={10}>
                <Typography sx={{ color: "#797979", fontSize: "15px" }}>
                  Item 1
                </Typography>
              </MenuItem>
              <MenuItem value={20}>
                <Typography sx={{ color: "#797979", fontSize: "15px" }}>
                  Item 2
                </Typography>
              </MenuItem>
              <MenuItem value={30}>
                <Typography sx={{ color: "#797979", fontSize: "15px" }}>
                  Item 3
                </Typography>
              </MenuItem>
            </TextField>
            <ErrorTypography text={errors.username} />
          </FormGrid>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Link href="/portal" style={{ color: "#68A7B9", }}>
              <Typography sx={{ fontSize: '20px' }}>
                パスワード変更
              </Typography>
            </Link>
          </Box>
          <Divider sx={{ mt: 2, borderColor: "#68A7B9", borderWidth: '1px', mb: 5, ml: 2 }} />
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
            <Button variant="contained" color="secondary" sx={{ mr: 2, width: "130px" }} LinkComponent={Link} href="/targets">
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

export default createTarget