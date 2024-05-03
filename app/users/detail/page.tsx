"use client"
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Link from 'next/link'
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import TextField from "@mui/material/TextField";
import Divider from '@mui/material/Divider';

const detailUser = () => {
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
        <Stack direction="row" spacing={2}>
          <Button variant="contained" sx={{ backgroundColor: "#7B7979", width: "110px", '&:hover': { backgroundColor: "#6E6C6C" } }} 
            LinkComponent={Link} href="/users">
            <Typography
              sx={{
                fontSize: '16px !important',
                fontWeight: '700 !important',
                color: "#FFFFFF",
                fontFamily: "Noto Sans JP",
              }}
            >
              戻る
            </Typography>
          </Button>
          <Button variant="contained" sx={{ backgroundColor: "#68A7B9", width: "110px", '&:hover': { backgroundColor: "#5b8e9f" } }}
            LinkComponent={Link} href="/users/edit">
            <Typography
              sx={{
                fontSize: '16px !important',
                fontWeight: '700 !important',
                color: "#FFFFFF",
                fontFamily: "Noto Sans JP",
              }}
            >
              編集
            </Typography>
          </Button>
        </Stack>
      </Grid>
      <Grid>

      </Grid>
    </Box>
  )
}

export default detailUser