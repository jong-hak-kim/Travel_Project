import { Box, Card, IconButton, Typography } from '@mui/material'
import { ArrowDropUp, ArrowDropDown } from '@mui/icons-material';
import React from 'react'

function Item() {
    return (
        <Card sx={{ m: 1 }}>
            <Box display='flex' justifyContent='center' alignItems='center'>
                <Box height='100px' width='20vw' component='img' src='https://www.royalpalace.go.kr/images/sub/gbg.jpg' />
                <Typography component='h4' textAlign='center' flex='2'>경복궁</Typography>
                <Box mr='20px' display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
                    <IconButton>
                        <ArrowDropUp />
                    </IconButton>
                    <IconButton>
                        <ArrowDropDown />
                    </IconButton>
                </Box>
            </Box>
        </Card>
        
    )
}

export default function CourseDetailListItem() {
  return (
    <Card sx={{ mt: '25px', p: '10px' }}>
        <Box display='flex' p='5px 15px'>
            <Typography variant='h5'>여행지 목록</Typography>
            <Box bgcolor='#999999' ml='15px' p='2.5px 20px'>1 일차</Box>
        </Box>
        <Box height='300px' overflow='auto'>
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
        </Box>
    </Card>
  )
}
