'use client'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import { styled } from '@mui/material/styles'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
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
            fontSize: '64px !important',
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
            fontSize: '24px !important',
            fontWeight: '700 !important',
            color: "#5C5C5C",
            lineHieght: "14.06px",
            fontFamily: "Roboto"
          }}
        >
          企業名
        </Typography>
      </Box>

      <Grid container direction="row" justifyContent="space-around" alignItems="stretch" spacing={{ xs: 4, sm: 8, md: 12 }} columns={{ xs: 2, sm: 8, md: 12 }}>
        <Grid item xs={2} sm={4} md={4}>
          <Item sx={{ boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.25);' }}> 
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
                  fontSize: '18px !important',
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
          <Item sx={{ boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.25);' }}>
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
                  fontSize: '18px !important',
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
          <Item sx={{ boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.25);' }}>
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
                  fontSize: '18px !important',
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
          <Item sx={{ boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.25);' }}> 
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
                  fontSize: '18px !important',
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
          <Item sx={{ boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.25);' }}>
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
                  fontSize: '18px !important',
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
          <Item sx={{ boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.25);' }}>
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
                  fontSize: '18px !important',
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