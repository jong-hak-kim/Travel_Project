import { Box, Card, Typography } from '@mui/material'
import React from 'react'

export default function CourseDetailItem() {
  return (
    <Card sx={{ mt: '5px' }}>
        <Box display='flex' height='300px' alignItems='center'>
            <Box flex='1' display='flex' justifyContent='center'>
                <Typography>1</Typography>
            </Box>
            <Box flex='4' display='flex' justifyContent='center'>
                <Typography>~~~~</Typography>
            </Box>
            <Box flex='4' display='flex' justifyContent='center'>
                <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
                    <Typography>오륙도 (부산 국가지질공원)</Typography>
                    <Box component='img' src={'https://newsimg.sedaily.com/2018/03/23/1RX3BLMOME_1.jpg'} height='150px' ></Box>
                    <Typography>부산 광역시 남구 오륙도로 137</Typography>
                </Box>
            </Box>
        </Box>
    </Card>
  )
}
