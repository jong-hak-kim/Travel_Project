import { Box, FormControl, InputLabel, Input, InputAdornment, IconButton, Select, MenuItem, Pagination } from '@mui/material'
import { Search } from '@mui/icons-material';
import React from 'react'
import CourseListItem from 'src/component/CourseListItem';

export default function DestinationCourseMain() {
  return (
    <Box m='50px 10vw'>
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
            <CourseListItem />
            <CourseListItem />
            <CourseListItem />
        </Box>
        <Box display='flex' justifyContent='center' pt='20px'>
            <Pagination count={10} />
        </Box>
    </Box>
  )
}
