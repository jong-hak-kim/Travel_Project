import { Box, Button, Divider, IconButton, Typography } from '@mui/material'
import { Favorite } from '@mui/icons-material'
import React from 'react'
import CourseDetailItem from 'src/component/CourseDetailItem'

export default function DestinationCourseDetail() {
  return (
    <Box m='50px 10vw'>
        <Box pb='10px' display='flex' justifyContent='space-between' alignItems='center' borderBottom='1px solid #777777'>
            <Box display='flex' alignItems='center'>
                <Typography variant='h2' fontWeight='500'>상세 일정 보기</Typography>
            </Box>
            <Box display='flex' alignItems='end'>
                <Button variant="contained" sx={{ height: '50px', width: '120px', m: '5px' }}>수정</Button>
                <Button variant="contained" sx={{ height: '50px', width: '120px', m: '5px' }}>삭제</Button>
                <Button variant="contained" sx={{ height: '50px', width: '120px', m: '5px' }}>목록</Button>
                <Button variant="contained" sx={{ height: '50px', width: '120px', m: '5px' }}>결제</Button>
                <Box display='flex' alignItems='center' mr='5px'>
                    <IconButton>
                        <Favorite />
                    </IconButton>
                    <Typography>10</Typography>
                </Box>
            </Box>
        </Box>
        <Box mt='25px'>
            <Box display='flex' borderTop='1px solid #777777' borderBottom='1px solid #777777'>
                <Box flex='1' borderLeft='1px solid #777777' borderRight='1px solid #777777' height='40px' display='flex' alignItems='center' justifyContent='center'>
                    <Typography>제목</Typography>
                </Box>
                <Box flex='4' borderRight='1px solid #777777' height='40px' display='flex' alignItems='center' justifyContent='center'></Box>
                <Box flex='1' borderRight='1px solid #777777' height='40px' display='flex' alignItems='center' justifyContent='center'>
                    <Typography>여행 일정</Typography>
                </Box>
                <Box flex='4' borderRight='1px solid #777777' height='40px' display='flex' alignItems='center' justifyContent='center'></Box>
            </Box>
            <Box display='flex' borderBottom='1px solid #777777'>
                <Box flex='1' borderLeft='1px solid #777777' borderRight='1px solid #777777' height='40px' display='flex' alignItems='center' justifyContent='center'>
                    <Typography>예상 경로</Typography>
                </Box>
                <Box flex='9' borderRight='1px solid #777777' height='40px'></Box>
            </Box>
            <Box display='flex'>
                <Box flex='7' height='40px'></Box>
                <Box flex='1' borderBottom='1px solid #777777' borderLeft='1px solid #777777' borderRight='1px solid #777777' height='40px' display='flex' alignItems='center' justifyContent='center'>
                    <Typography>예상 경비</Typography>
                </Box>
                <Box flex='2' borderBottom='1px solid #777777' borderRight='1px solid #777777' height='40px'></Box>
            </Box>
        </Box>
        <Box marginTop='25px'>
            <Box display='flex' sx={{ backgroundColor: '#cccccc', borderRadius: '5px' }}>
                <Box height='60px' flex='1' display='flex' justifyContent='center' alignItems='center'>
                    <Typography>순번</Typography>
                </Box>
                <Box height='60px' flex='4' display='flex' justifyContent='center' alignItems='center'>
                    <Typography>예상 경로</Typography>
                </Box>
                <Box height='60px' flex='4' display='flex' justifyContent='center' alignItems='center'>
                    <Typography>예상 경로</Typography>
                </Box>
            </Box>
            <Box>
                <CourseDetailItem />
                <CourseDetailItem />
                <CourseDetailItem />
                <CourseDetailItem />
            </Box>
        </Box>
    </Box>
  )
}
