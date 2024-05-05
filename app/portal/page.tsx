'use client'
import { Grid, Typography, Box, IconButton, styled, Paper, Link } from '@mui/material';
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
            fontSize: '64px',
            fontFamily: "Odor Mean Chey"
          }}
          fontWeight="bold"
        >
          C3P
        </Typography>
      </Box>
      {/* Text random */}
      <Box sx={{ mt: 0, mb: 5, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Typography
          sx={{
            fontSize: '24px',
            color: "#5C5C5C",
            fontFamily: "Roboto"
          }}
          fontWeight="medium"
        >
          企業名
        </Typography>
      </Box>

      <Grid container direction="row" justifyContent="space-around" alignItems="stretch" spacing={{ xs: 3, sm: 6, md: 9 }} columns={{ xs: 2, sm: 8, md: 12 }} sx={{ mb: 2 }}>
        <Grid item xs={2} sm={4} md={4}>
          <Link href="/users" sx={{ textDecoration: 'none' }}>
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
                    fontSize: '18px',
                    color: "#606060",
                    fontFamily: "Roboto",
                    overflowWrap: "break-word"
                  }}
                  fontWeight="medium"
                >
                  オペレーター <br />UI
                </Typography>
              </Box>
            </Item>
          </Link>
        </Grid>
        <Grid item xs={2} sm={4} md={4}>
          <Link href="/users" sx={{ textDecoration: 'none' }}>
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
                    fontSize: '18px',
                    color: "#606060",
                    fontFamily: "Roboto",
                    overflowWrap: "break-word"
                  }}
                  fontWeight="medium"
                >
                  ユーザー設定 <br />&nbsp;
                </Typography>
              </Box>
            </Item>
          </Link>
        </Grid>
        <Grid item xs={2} sm={4} md={4}>
          <Link href="/targets" sx={{ textDecoration: 'none' }}>
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
                    fontSize: '18px',
                    color: "#606060",
                    fontFamily: "Roboto",
                    overflowWrap: "break-word"
                  }}
                  fontWeight="medium"
                >
                  対象設定<br />&nbsp;
                </Typography>
              </Box>
            </Item>
          </Link>
        </Grid>
        <Grid item xs={2} sm={4} md={4}>
          <Link href="/users" sx={{ textDecoration: 'none' }}>
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
                    fontSize: '18px',
                    color: "#606060",
                    fontFamily: "Roboto",
                    overflowWrap: "break-word"
                  }}
                  fontWeight="medium"
                >
                  イニシャルト <br /> ーク設定
                </Typography>
              </Box>
            </Item>
          </Link>
        </Grid>
        <Grid item xs={2} sm={4} md={4}>
          <Link href="/users" sx={{ textDecoration: 'none' }}>
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
                    fontSize: '18px',
                    color: "#606060",
                    fontFamily: "Roboto",
                    overflowWrap: "break-word"
                  }}
                  fontWeight="medium"
                >
                  スマートチェッ<br />クリスト設定
                </Typography>
              </Box>
            </Item>
          </Link>
        </Grid>
        <Grid item xs={2} sm={4} md={4}>
          <Link href="/users" sx={{ textDecoration: 'none' }}>
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
                    fontSize: '18px',
                    color: "#606060",
                    fontFamily: "Roboto",
                    overflowWrap: "break-word"
                  }}
                  fontWeight="medium"
                >
                  ジョブ設定<br />&nbsp;
                </Typography>
              </Box>
            </Item>
          </Link>
        </Grid>
      </Grid>
    </Box>
  )
}

export default portal