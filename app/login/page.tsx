"use client"
import { ChangeEvent, MouseEvent, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import CardContent from '@mui/material/CardContent'
import TextField from "@mui/material/TextField";
import { styled } from '@mui/material/styles'
import MuiCard, { CardProps } from '@mui/material/Card'
import InputAdornment from '@mui/material/InputAdornment'
import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid';
import EyeOutline from 'mdi-material-ui/EyeOutline'
import EyeOffOutline from 'mdi-material-ui/EyeOffOutline'
import { z } from 'zod';
import ErrorTypography from "../component/ErrorTypography"

interface State {
  password: string
  username: string
  showPassword: boolean
}

const Card = styled(MuiCard)<CardProps>(({ theme }) => ({
  [theme.breakpoints.up('sm')]: { width: '28rem' }
}))


const FormGrid = styled(Grid)(() => ({
  display: 'flex',
  flexDirection: 'column',
}));

const LoginFormSchema = z.object({
  username: z.string().min(1, 'ユーザー名が間違っています'),
  password: z.string().min(1, 'パスワードが間違っています'),
});

const LoginPage = () => {
  const [errors, setErrors] = useState<{ [key: string]: string | null }>({ username: null, password: null });
  const [values, setValues] = useState<State>({
    password: '',
    username: '',
    showPassword: false
  })

  const router = useRouter()

  const handleChange = (prop: keyof State) => (event: ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword })
  }

  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await LoginFormSchema.parseAsync({ username: values.username, password: values.password });
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

  return (
    <Box className='content-center'>
      <Card sx={{ zIndex: 1 }}>
        <CardContent sx={{ padding: theme => `${theme.spacing(3, 5, 5)}` }}>
          <Box sx={{ mb: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Typography
              sx={{
                fontSize: '96px',
                fontFamily: "Odor Mean Chey"
              }}
              fontWeight="bold"
            >
              C3P
            </Typography>
          </Box>
          <form autoComplete='off'>
            <FormGrid item xs={12} md={6}>
              <FormLabel htmlFor="username"
                sx={{
                  fontSize: '15px',
                  color: "#7B7979",
                  fontFamily: "Noto Sans"
                }}
              >
                ユーザーネーム
              </FormLabel>
              <TextField
                id="outlined-basic"
                variant="outlined"
                margin="dense"
                size="small"
                value={values.username}
                onChange={handleChange('username')}
                error={!!errors.username}
              />
              <ErrorTypography text={errors.username} color="#EC0000"/>
            </FormGrid>
            <FormGrid item xs={12} md={6}>
              <FormLabel htmlFor="username"
                sx={{
                  fontSize: '15px',
                  color: "#7B7979",
                  fontFamily: "Noto Sans"
                }}
              >
                パスワード
              </FormLabel>
              <TextField
                value={values.password}
                onChange={handleChange('password')}
                type={values.showPassword ? 'text' : 'password'}
                error={!!errors.password}
                size="small"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {values.showPassword ? <EyeOutline /> : <EyeOffOutline />}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
                required
              />
              <ErrorTypography text={errors.password} color="#EC0000"/>
            </FormGrid>
            <Box
              sx={{ mb: 3, display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'space-between' }}
            >
            </Box>
            <Button
              fullWidth
              size='large'
              variant='contained'
              sx={{
                marginBottom: 2,
                radius: "2px"
              }}
              onClick={handleSubmit}
            >
              サインイン
            </Button>
            <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Typography variant='body2' sx={{
                fontSize: '0.875rem',
                textDecoration: 'none',
              }}>
                <Link passHref href='/pages/register'>
                  パスワードをお忘れの場合はこちら
                </Link>
              </Typography>
            </Box>
          </form>
        </CardContent>
      </Card>
    </Box>
  )
}
export default LoginPage
