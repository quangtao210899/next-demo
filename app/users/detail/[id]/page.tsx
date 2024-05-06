"use client"
import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Link from 'next/link'
import Typography from '@mui/material/Typography';

const detailUser = ({ params }: { params: { id: number } }) => {
  return (
    <Box sx={{ width: '100%' }}>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="baseline"
        sx={{ mt: 2, mb: 2, }}
      >
        <Typography
          sx={{
            fontSize: '24px',
          }}
          fontWeight="medium"
        >
          ユーザー詳細
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button variant="contained" color="secondary" sx={{ width: "110px" }} LinkComponent={Link} href="/users">
            <Typography
              sx={{
                color: "#FFFFFF",
              }}
              fontWeight="medium"
            >
              戻る
            </Typography>
          </Button>
          <Button variant="contained" sx={{ width: "110px" }} LinkComponent={Link} href="/users/edit">
            <Typography
              sx={{
                color: "#FFFFFF",
              }}
              fontWeight="medium"
            >
              編集
            </Typography>
          </Button>
        </Stack>
      </Grid>
      <Grid container direction="row" justifyContent="space-around" alignItems="stretch"
        spacing={{ xs: 1, sm: 3, md: 4 }} columns={{ xs: 12, sm: 12, md: 12 }}>
        <Grid item xs={12} sm={3} md={3}>
          <Typography sx={{ fontSize: '20px', ml: 2 }}>
            ユーザー名
          </Typography>
        </Grid>
        <Grid item xs={12} sm={9} md={9}>
          <Typography
            sx={{ fontSize: '20px', color: "#646464" }}
          >
            User
          </Typography>
        </Grid>


        <Grid item xs={12} sm={3} md={3}>
          <Typography sx={{ fontSize: '20px', ml: 2 }}>
            メールアドレス
          </Typography>
        </Grid>
        <Grid item xs={12} sm={9} md={9}>
          <Typography
            sx={{ fontSize: '20px', color: "#646464" }}
          >
            user@mail.adress
          </Typography>
        </Grid>


        <Grid item xs={12} sm={3} md={3}>
          <Typography sx={{ fontSize: '20px', ml: 2 }}>
            姓名
          </Typography>
        </Grid>
        <Grid item xs={12} sm={9} md={9}>
          <Typography
            sx={{ fontSize: '20px', color: "#646464" }}
          >
            ユーザー user ユーザー
          </Typography>
        </Grid>


        <Grid item xs={12} sm={3} md={3}>
          <Typography sx={{ fontSize: '20px', ml: 2 }}>
            所属
          </Typography>
        </Grid>
        <Grid item xs={12} sm={9} md={9}>
          <Typography
            sx={{ fontSize: '20px', color: "#646464" }}
          >
            部署
          </Typography>
        </Grid>


        <Grid item xs={12} sm={3} md={3}>
          <Typography sx={{ fontSize: '20px', ml: 2 }}>
            ジョブ
          </Typography>
        </Grid>
        <Grid item xs={12} sm={9} md={9}>
          <Typography
            sx={{ fontSize: '20px', color: "#646464" }}
          >
            ジョブ1, ジョブ2, ジョブ3, ジョブ4
          </Typography>
        </Grid>

      </Grid>
    </Box >
  )
}

export default detailUser