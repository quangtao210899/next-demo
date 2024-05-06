"use client"
import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Link from 'next/link'
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { useTheme } from '@mui/material/styles';

const detailTarget = ({ params }: { params: { id: number } }) => {
  const theme = useTheme();
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
          対象設定詳細
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button variant="contained" color="secondary" sx={{ width: "110px" }} LinkComponent={Link} href="/targets">
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
      <Grid container direction="row" justifyContent="space-around" alignItems="stretch" spacing={{ xs: 1, sm: 3, md: 4 }} columns={{ xs: 12, sm: 12, md: 12 }}>
        <Grid item xs={12} sm={3} md={3}>
          <Typography sx={{ fontSize: '20px' }}>
            対象名
          </Typography>
        </Grid>
        <Grid item xs={12} sm={9} md={9}>
          <Typography sx={{ fontSize: '20px', color: "#646464" }}>
            Target
          </Typography>
        </Grid>

        <Grid item xs={12} sm={12} md={12}>
          <Divider sx={{ borderColor: "#68A7B9", borderWidth: '1px' }} />
        </Grid>

        <Grid item xs={12} sm={12} md={12}>
          <Typography sx={{ fontSize: '20px' }}>
            対象属性
          </Typography>
        </Grid>
        {/* sub items */}
        <Grid item xs={12} sm={3} md={3}>
          <Typography sx={{ fontSize: '20px', [theme.breakpoints.up('sm')]: { ml: 5 } }}>
            性別
          </Typography>
        </Grid>
        <Grid item xs={12} sm={9} md={9}>
          <Typography sx={{ fontSize: '20px', color: "#646464" }}>
            男性
          </Typography>
        </Grid>

        <Grid item xs={12} sm={3} md={3}>
          <Typography sx={{ fontSize: '20px', [theme.breakpoints.up('sm')]: { ml: 5 } }}>
            年代
          </Typography>
        </Grid>
        <Grid item xs={12} sm={9} md={9}>
          <Typography sx={{ fontSize: '20px', color: "#646464" }}>
            40代
          </Typography>
        </Grid>

        <Grid item xs={12} sm={3} md={3}>
          <Typography sx={{ fontSize: '20px', [theme.breakpoints.up('sm')]: { ml: 5 } }}>
            地域
          </Typography>
        </Grid>
        <Grid item xs={12} sm={9} md={9}>
          <Typography sx={{ fontSize: '20px', color: "#646464" }}>
            東京都
          </Typography>
        </Grid>

        <Grid item xs={12} sm={3} md={3}>
          <Typography sx={{ fontSize: '20px', [theme.breakpoints.up('sm')]: { ml: 5 } }}>
            時間帯
          </Typography>
        </Grid>
        <Grid item xs={12} sm={9} md={9}>
          <Typography sx={{ fontSize: '20px', color: "#646464" }}>
            男性
          </Typography>
        </Grid>

        <Grid item xs={12} sm={3} md={3}>
          <Typography sx={{ fontSize: '20px', [theme.breakpoints.up('sm')]: { ml: 5 } }}>
            家族構成
          </Typography>
        </Grid>
        <Grid item xs={12} sm={9} md={9}>
          <Typography sx={{ fontSize: '20px', color: "#646464" }}>
            既婚－子ども有
          </Typography>
        </Grid>

        <Grid item xs={12} sm={3} md={3}>
          <Typography sx={{ fontSize: '20px', [theme.breakpoints.up('sm')]: { ml: 5 } }}>
            職業
          </Typography>
        </Grid>
        <Grid item xs={12} sm={9} md={9}>
          <Typography sx={{ fontSize: '20px', color: "#646464" }}>
            エンジニア
          </Typography>
        </Grid>

      </Grid>
    </Box >
  )
}

export default detailTarget