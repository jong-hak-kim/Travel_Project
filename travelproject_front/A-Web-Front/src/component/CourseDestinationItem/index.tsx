import { Box, Button, IconButton, Typography } from '@mui/material'
import React from 'react'

export default function CourseDestinationItem() {
  return (
    <Box display='flex' alignItems='center' border='1px solid #777777' mb='2px'>
        <Box flex='1' borderRight='1px solid #777777'>
            <Box height='105px' sx={{ position: 'relative', backgroundImage: 'url()', backgroundColor: 'red' }}> 
                
            </Box>
        </Box>
        <Box flex='3' borderRight='1px solid #777777'>
            <Box pl='10px' height='30px' display='flex' alignItems='center' borderBottom='1px solid #777777'>
                <Typography>여행지 이름</Typography>
            </Box>
            <Box  height='75px' display='flex' alignItems='center' justifyContent='center'>
                <Typography>여행지 설명</Typography>
            </Box>
        </Box>
        <Box flex='1' display='flex' justifyContent='center' alignItems='center'>
            <Button>선택</Button>
        </Box>
    </Box>
  )
}
