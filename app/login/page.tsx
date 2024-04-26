"use client"
import { ChangeEvent, MouseEvent, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import CardContent from '@mui/material/CardContent'
import OutlinedInput from '@mui/material/OutlinedInput'
import { styled } from '@mui/material/styles'
import MuiCard, { CardProps } from '@mui/material/Card'
import InputAdornment from '@mui/material/InputAdornment'
import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid';
import EyeOutline from 'mdi-material-ui/EyeOutline'
import EyeOffOutline from 'mdi-material-ui/EyeOffOutline'



interface State {
  password: string
  showPassword: boolean
}

const Card = styled(MuiCard)<CardProps>(({ theme }) => ({
  [theme.breakpoints.up('sm')]: { width: '28rem' }
}))


const FormGrid = styled(Grid)(() => ({
  display: 'flex',
  flexDirection: 'column',
}));

const LoginPage = () => {
  const [values, setValues] = useState<State>({
    password: '',
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

  return (
    <Box className='content-center'>
      <Card sx={{ zIndex: 1 }}>
        <CardContent sx={{ padding: theme => `${theme.spacing(3, 5, 5)} !important` }}>
          <Box sx={{ mb: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Typography
              sx={{
                fontSize: '96px !important',
                fontWeight: '900 !important',
                color: "#68A7B9",
                lineHieght: "57.81px",
                fontFamily: "Odor Mean Chey"
              }}
            >
              C3P
            </Typography>
          </Box>
          <form noValidate autoComplete='off' onSubmit={e => e.preventDefault()}>
            <FormGrid item xs={12} md={6}>
              <FormLabel htmlFor="username" 
                sx={{
                  fontSize: '15px !important',
                  fontWeight: '400 !important',
                  color: "#7B7979",
                  lineHieght: "6.81px",
                  fontFamily: "Noto Sans"
                }}
              >
                ユーザーネーム
              </FormLabel>
              <OutlinedInput
                id="username"
                name="username"
                type="text"
                required
              />
            </FormGrid>
            <FormGrid item xs={12} md={6} mt={2}>
              <FormLabel htmlFor="username"
                sx={{
                  fontSize: '15px !important',
                  fontWeight: '400 !important',
                  color: "#7B7979",
                  lineHieght: "6.81px",
                  fontFamily: "Noto Sans"
                }}
              >
                パスワード
              </FormLabel>
              <OutlinedInput
                value={values.password}
                onChange={handleChange('password')}
                type={values.showPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position='end'>
                    <IconButton
                      edge='end'
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      aria-label='toggle password visibility'
                    >
                      {values.showPassword ? <EyeOutline /> : <EyeOffOutline />}
                    </IconButton>
                  </InputAdornment>
                }
              />
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
                radius: "2px",
                backgroundColor: "#68A7B9" 
              }}
              onClick={() => router.push('/login')}
            >
              サインイン
            </Button>
            <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center'}}>
              <Typography variant='body2' sx={{
                fontSize: '0.875rem',
                textDecoration: 'none',
                color: "#68A7B9"
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
