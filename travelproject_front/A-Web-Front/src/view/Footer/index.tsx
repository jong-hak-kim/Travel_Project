import { Box, Divider, Typography } from '@mui/material'
import React from 'react'

export default function Footer() {
  return (
    <>
        <Divider />
        <Box sx={{ textAlign: 'center', pt: '3vh', pb: '3vh', fontSize: '12px' }}>
            <Typography variant='body2'>상호명 : (주)TRAVEL / 대표: 정하은 / 주소: 부산광역시 부산진구 중앙대로 708</Typography>
            <Typography variant='body2'>고객센터 : 1588-1234 / 팩스 : 051-1234-1234 / 이메일 : abcdef@naver.com / 통신파매업신고번호 : 2022-부산진구-1117</Typography>
            <Typography variant='body2'>Copyright © travel.co.kr All Rights Reserved</Typography>
        </Box>
    </>
  )
}
