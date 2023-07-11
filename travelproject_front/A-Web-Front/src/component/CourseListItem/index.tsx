import { Box, IconButton, Typography } from '@mui/material'
import { Favorite } from '@mui/icons-material'
import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function CourseListItem() {
    const navigator = useNavigate();
  return (
    <Box display='flex' alignItems='center' border='1px solid #777777' mb='20px' onClick={() => navigator('/course/detail')}>
        <Box flex='1' borderRight='1px solid #777777'>
            <Box height='150px' sx={{ position: 'relative', backgroundImage: 'url()', backgroundColor: 'red' }}> 
                <IconButton sx={{ position: 'absolute', bottom: 0, right: 0 }}>
                    <Favorite />
                </IconButton>
            </Box>
        </Box>
        <Box flex='3' borderRight='1px solid #777777'>
            <Box pl='20px' height='75px' display='flex' alignItems='center' borderBottom='1px solid #777777'>
                <Typography>제목</Typography>
            </Box>
            <Box  height='75px' display='flex' alignItems='center' justifyContent='center'>
                <Typography>여행지 장소</Typography>
            </Box>
        </Box>
        <Box flex='1'>
            <Box height='75px' display='flex' alignItems='center' justifyContent='center' borderBottom='1px solid #777777'>
                <Typography>예상 경비</Typography>
            </Box>
            <Box height='75px' display='flex' alignItems='center' justifyContent='center'>
                <Typography>200,000원</Typography>
            </Box>
        </Box>
    </Box>
  )
}
