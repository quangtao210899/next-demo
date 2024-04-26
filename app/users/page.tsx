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
import Paper from '@mui/material/Paper';
const UserList = () => {
  return (
    <Box className='content-center'>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="baseline"
        sx= {{
          mt: 2
        }}
      >
        <Typography
          sx={{
            fontSize: '32px !important',
            fontWeight: '700 !important',
            color: "#68A7B9",
            fontFamily: "Noto Sans JP",
          }}
        >
          ユーザー一覧
        </Typography>
        <h1>Chào</h1>
      </Grid>
    </Box>
  )
}

export default UserList