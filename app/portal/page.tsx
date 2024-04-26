'use client'
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

const Card = styled(MuiCard)<CardProps>(({ theme }) => ({
  [theme.breakpoints.up('sm')]: { width: '28rem' }
}))
const portal = () => {
  return (
    <Box className='content-center'>
      <Box sx={{mt: 5, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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
      <Card sx={{ zIndex: 1 }}>
        {/* <CardContent sx={{ padding: theme => `${theme.spacing(3, 5, 5)} !important` }}>
        </CardContent> */}
      </Card>
    </Box>
  )
}

export default portal