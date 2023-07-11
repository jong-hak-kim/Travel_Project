import { useState } from 'react'
import { Box, Divider, Typography, InputLabel, MenuItem, FormControl, Select, Pagination } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';
import RecommendationItem from 'src/component/RecommendationItem';

export default function RecommendationMainView() {
    const [age, setAge] = useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value);
    };

  return (
    <Box marginTop='5vh' marginRight='10vw' marginLeft='10vw'>
        <Box display='flex' justifyContent='space-between' alignItems='center' padding='2.5vh'>
            <Typography variant='h5' fontWeight='700'>여행지 추천</Typography>
            <FormControl sx={{ minWidth: 200 }} size="small">
                <InputLabel id="demo-simple-select-label">지역</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
        </Box>
        <Divider />
        <Box>
            <RecommendationItem />
            <RecommendationItem />
            <RecommendationItem />
            <RecommendationItem />
            <RecommendationItem />
        </Box>
        <Box display='flex' justifyContent='center' marginTop='5vh' marginBottom='2vh'>
            <Pagination count={10} />
        </Box>
        
    </Box>
  )
}
