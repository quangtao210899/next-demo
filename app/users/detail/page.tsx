"use client"
import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Link from 'next/link'
import Typography from '@mui/material/Typography';

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
          mb: 2,
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
                fontSize: '16px',
                fontWeight: '700',
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
                fontSize: '16px',
                fontWeight: '700',
                color: "#FFFFFF",
                fontFamily: "Noto Sans JP",
              }}
            >
              編集
            </Typography>
          </Button>
        </Stack>
      </Grid>
      <Grid container direction="row" justifyContent="space-around" alignItems="stretch" spacing={{ xs: 1, sm: 3, md: 4 }} columns={{ xs: 12, sm: 12, md: 12 }}>
        <Grid item xs={12} sm={3} md={3}>
          <Typography
            sx={{
              fontSize: '20px',
              fontWeight: '400',
              color: "#68A7B9",
              fontFamily: "Noto Sans JP",
            }}
          >
            ユーザー名
          </Typography>
        </Grid>
        <Grid item xs={12} sm={9} md={9}>
          <Typography
            sx={{
              fontSize: '20px',
              fontWeight: '400',
              color: "#646464",
              fontFamily: "Noto Sans JP",
            }}
          >
            User
          </Typography>
        </Grid>


        <Grid item xs={12} sm={3} md={3}>
          <Typography
            sx={{
              fontSize: '20px',
              fontWeight: '400',
              color: "#68A7B9",
              fontFamily: "Noto Sans JP",
            }}
          >
            メールアドレス
          </Typography>
        </Grid>
        <Grid item xs={12} sm={9} md={9}>
          <Typography
            sx={{
              fontSize: '20px',
              fontWeight: '400',
              color: "#646464",
              fontFamily: "Noto Sans JP",
            }}
          >
            user@mail.adress
          </Typography>
        </Grid>


        <Grid item xs={12} sm={3} md={3}>
          <Typography
            sx={{
              fontSize: '20px',
              fontWeight: '400',
              color: "#68A7B9",
              fontFamily: "Noto Sans JP",
            }}
          >
            姓名
          </Typography>
        </Grid>
        <Grid item xs={12} sm={9} md={9}>
          <Typography
            sx={{
              fontSize: '20px',
              fontWeight: '400',
              color: "#646464",
              fontFamily: "Noto Sans JP",
            }}
          >
            ユーザー user ユーザー
          </Typography>
        </Grid>


        <Grid item xs={12} sm={3} md={3}>
          <Typography
            sx={{
              fontSize: '20px',
              fontWeight: '400',
              color: "#68A7B9",
              fontFamily: "Noto Sans JP",
            }}
          >
            所属
          </Typography>
        </Grid>
        <Grid item xs={12} sm={9} md={9}>
          <Typography
            sx={{
              fontSize: '20px',
              fontWeight: '400',
              color: "#646464",
              fontFamily: "Noto Sans JP",
            }}
          >
            部署
          </Typography>
        </Grid>


        <Grid item xs={12} sm={3} md={3}>
          <Typography
            sx={{
              fontSize: '20px',
              fontWeight: '400',
              color: "#68A7B9",
              fontFamily: "Noto Sans JP",
            }}
          >
            ジョブ
          </Typography>
        </Grid>
        <Grid item xs={12} sm={9} md={9}>
          <Typography
            sx={{
              fontSize: '20px',
              fontWeight: '400',
              color: "#646464",
              fontFamily: "Noto Sans JP",
            }}
          >
            ジョブ1, ジョブ2, ジョブ3, ジョブ4
          </Typography>
        </Grid>

      </Grid>
    </Box>
  )
}

export default detailUser