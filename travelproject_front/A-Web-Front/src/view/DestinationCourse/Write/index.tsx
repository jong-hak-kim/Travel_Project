import { Search, CalendarMonth } from '@mui/icons-material'
import { Box, FormControl, Grid, IconButton, Input, InputAdornment, InputLabel, MenuItem, Select, Typography } from '@mui/material'
import React from 'react'
import CourseDestinationItem from 'src/component/CourseDestinationItem'
import CourseDetailListItem from 'src/component/CourseDetailListItem'

export default function DestinationCourseWrite() {
  return (
    <Box m='50px 10vw'>
        <Grid container spacing={2}>
            <Grid item md={12} xl={6}>
                <Box height='800px'>
                    <Box display='flex' mb='20px'>
                        <Box m='0 1.5vw'>
                            <FormControl sx={{ width: '10vw' }}>
                                <InputLabel id="demo-simple-select-label">지역</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    label="지역"
                                >
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                        <Box flex='1'>
                            <FormControl fullWidth variant="standard">
                                <InputLabel htmlFor="standard-adornment-password">검색</InputLabel>
                                <Input
                                    id="standard-adornment-password"
                                    type='text'
                                    endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton>
                                            <Search />
                                        </IconButton>
                                    </InputAdornment>
                                    }
                                />
                            </FormControl>
                        </Box>
                    </Box>
                    <Box>
                        <Box display='flex'>
                            <Box flex='2' display='flex'>
                                <FormControl sx={{ m: 1 }} fullWidth variant="standard">
                                    <Input
                                        endAdornment={<InputAdornment position="end">박</InputAdornment>}
                                    />
                                </FormControl>
                                <FormControl sx={{ m: 1 }} fullWidth variant="standard">
                                    <Input
                                        endAdornment={<InputAdornment position="end">일</InputAdornment>}
                                    />
                                </FormControl>
                                <Box></Box>
                            </Box>
                            <Box flex='3'>
                                <FormControl sx={{ m: 1 }} fullWidth variant="standard">
                                    <Input
                                        placeholder='일정 제목'
                                        type='text'
                                        endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton>
                                                <CalendarMonth />
                                            </IconButton>
                                        </InputAdornment>
                                        }
                                    />
                                </FormControl>
                            </Box>
                        </Box>
                        <Box height='600px' overflow='auto'>
                            <CourseDestinationItem />
                            <CourseDestinationItem />
                            <CourseDestinationItem />
                            <CourseDestinationItem />
                            <CourseDestinationItem />
                            <CourseDestinationItem />
                            <CourseDestinationItem />
                            <CourseDestinationItem />
                        </Box>
                    </Box>
                </Box>
            </Grid>
            <Grid item md={12} xl={6}>
                <Box>
                    <Box height='700px' overflow='auto' m='0 1.5vw 50px'>
                        <CourseDetailListItem />
                        <CourseDetailListItem />
                        <CourseDetailListItem />
                    </Box>
                    <Box display='flex' m='0 1.5vw' alignItems='center'>
                        <Typography flex='1' variant='h5' padding='5px' textAlign='center' border='1px solid #000000'>예상 경비</Typography>
                        <Typography flex='4' variant='h5' padding='5px 15px' border='1px solid #000000' borderLeft='0px'>00,000 원</Typography>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    </Box>
  )
}
