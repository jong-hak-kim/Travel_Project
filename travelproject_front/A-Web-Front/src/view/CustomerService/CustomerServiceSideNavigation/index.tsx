import React from 'react'
import { Box, Button, Divider, Typography } from '@mui/material';

export default function CustomerServiceSideNavigation() {
  return (
    <Box>
      <Typography>고객센터</Typography>
      <Divider />
      <Button>공지사항</Button>
      <Button>문의 게시판</Button>
    </Box>
  )
}
