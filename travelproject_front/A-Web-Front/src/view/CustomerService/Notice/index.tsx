import React from 'react';
import { Box, Typography, Pagination } from '@mui/material';

export default function CustomerServiceNotice() {
  return (
    <Box>
      <Typography>공지사항</Typography>
      <Box borderTop='1px solid #000000'>
        <Box display='flex' borderBottom='1px solid #E0E0E0'>
          <Box textAlign='center' flex='1'>번호</Box>
          <Box textAlign='center' flex='4'>제목</Box>
          <Box textAlign='center' flex='1'>날짜</Box>
        </Box>
        <Box display='flex'>
          <Box textAlign='center' flex='1'>1</Box>
          <Box textAlign='center' flex='4'>공지사항 제목입니다.</Box>
          <Box textAlign='center' flex='1'>2023.04.23</Box>
        </Box>
        <Pagination count={10} />
      </Box>
    </Box>
  )
}
