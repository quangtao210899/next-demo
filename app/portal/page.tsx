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
import AccountCircle from '@mui/icons-material/AccountCircle';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HeadsetMicOutlinedIcon from '@mui/icons-material/HeadsetMicOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import PermPhoneMsgOutlinedIcon from '@mui/icons-material/PermPhoneMsgOutlined';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const portal = () => {
  return (
    <Box className='content-center'>
      {/* C3P */}
      <Box sx={{ mt: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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
      {/* Text random */}
      <Box sx={{ mt: 0, mb: 5, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Typography
          sx={{
            fontSize: '36px !important',
            fontWeight: '700 !important',
            color: "#5C5C5C",
            lineHieght: "14.06px",
            fontFamily: "Roboto"
          }}
        >
          企業名
        </Typography>
      </Box>

      <Grid container justifyContent="space-between" spacing={{ xs: 8, md: 12 }} columns={{ xs: 4, sm: 8, md: 12 }} style={{ padding: '0 100px' }}>
        <Grid item xs={2} sm={4} md={4}>
          <Item>
            <Box>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-haspopup="true"
                sx={{ padding: '8px', '& .MuiSvgIcon-root': { fontSize: '105px', color: '#68A7B9' } }}
                color="inherit">
                <HeadsetMicOutlinedIcon />
              </IconButton>
              <Typography
                sx={{
                  fontSize: '27px !important',
                  fontWeight: '700 !important',
                  color: "#606060",
                  lineHieght: "10.55px",
                  fontFamily: "Roboto",
                  overflowWrap: "break-word"
                }}
              >
                オペレーター <br/>UI
              </Typography>
            </Box>
          </Item>
        </Grid>
        <Grid item xs={2} sm={4} md={4}>
          <Item>
            <Box>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-haspopup="true"
                sx={{ padding: '8px', '& .MuiSvgIcon-root': { fontSize: '105px', color: '#68A7B9' } }}
                color="inherit">
                <AccountCircleIcon />
              </IconButton>
              <Typography
                sx={{
                  fontSize: '27px !important',
                  fontWeight: '700 !important',
                  color: "#606060",
                  lineHieght: "10.55px",
                  fontFamily: "Roboto",
                  overflowWrap: "break-word"
                }}
              >
                ユーザー設定
              </Typography>
            </Box>

          </Item>
        </Grid>
        <Grid item xs={2} sm={4} md={4}>
          <Item>
            <Box>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-haspopup="true"
                sx={{ padding: '8px', '& .MuiSvgIcon-root': { fontSize: '105px', color: '#68A7B9' } }}
                color="inherit">
                <GroupsOutlinedIcon />
              </IconButton>
              <Typography
                sx={{
                  fontSize: '27px !important',
                  fontWeight: '700 !important',
                  color: "#606060",
                  lineHieght: "10.55px",
                  fontFamily: "Roboto",
                  overflowWrap: "break-word"
                }}
              >
                対象設定
              </Typography>
            </Box>
          </Item>
        </Grid>
        <Grid item xs={2} sm={4} md={4}>
          <Item>
            <Box>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-haspopup="true"
                sx={{ padding: '8px', '& .MuiSvgIcon-root': { fontSize: '105px', color: '#68A7B9' } }}
                color="inherit">
                <DescriptionOutlinedIcon />
              </IconButton>
              <Typography
                sx={{
                  fontSize: '27px !important',
                  fontWeight: '700 !important',
                  color: "#606060",
                  lineHieght: "10.55px",
                  fontFamily: "Roboto",
                  overflowWrap: "break-word"
                }}
              >
                イニシャルト <br/> ーク設定
              </Typography>
            </Box>
          </Item>
        </Grid>
        <Grid item xs={2} sm={4} md={4}>
          <Item>
            <Box>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-haspopup="true"
                sx={{ padding: '8px', '& .MuiSvgIcon-root': { fontSize: '105px', color: '#68A7B9' } }}
                color="inherit">
                <CheckBoxOutlinedIcon />
              </IconButton>
              <Typography
                sx={{
                  fontSize: '27px !important',
                  fontWeight: '700 !important',
                  color: "#606060",
                  lineHieght: "10.55px",
                  fontFamily: "Roboto",
                  overflowWrap: "break-word"
                }}
              >
                スマートチェッ<br/>クリスト設定
              </Typography>
            </Box>
          </Item>
        </Grid>
        <Grid item xs={2} sm={4} md={4}>
          <Item>
            <Box>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-haspopup="true"
                sx={{ padding: '8px', '& .MuiSvgIcon-root': { fontSize: '105px', color: '#68A7B9' } }}
                color="inherit">
                <PermPhoneMsgOutlinedIcon />
              </IconButton>
              <Typography
                sx={{
                  fontSize: '27px !important',
                  fontWeight: '700 !important',
                  color: "#606060",
                  lineHieght: "10.55px",
                  fontFamily: "Roboto",
                  overflowWrap: "break-word"
                }}
              >
                ジョブ設定
              </Typography>
            </Box>
          </Item>
        </Grid>
      </Grid>
    </Box>
  )
}

export default portal