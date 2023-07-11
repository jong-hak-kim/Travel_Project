import { Box, Button, Grid, Typography, Paper, Divider } from '@mui/material'
import TopCard from 'src/component/TopCard'
import RecommendationCard from 'src/component/RecommendationCard'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navigation from 'src/view/Navigation'
import Footer from '../Footer'

export default function MainView() {

  return (
    <Box>
        <Box sx={{ mb: '4vh' }}>
            <Box component='img' sx={{ width: '100%', height: '500px', backgroundColor: 'blue' }}></Box>
        </Box>
        <Box sx={{ mr: '10vw', ml: '10vw' }}>
            <Box sx={{ mb: '5vh' }}>
                <Typography sx={{ fontSize: '24px', fontWeight: 700, mb: '1vh' }}>이번주 TOP 3</Typography>
                <Grid container spacing={3}>
                    <Grid item xs={4}>
                        <TopCard />
                    </Grid>
                    <Grid item xs={4}>
                        <TopCard />
                    </Grid>
                    <Grid item xs={4}>
                        <TopCard />
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ mb: '5vh' }}>
                <Typography sx={{ fontSize: '24px', fontWeight: 700, mb: '1vh' }}>여행지 추천</Typography>
                <Grid container spacing={3}>
                    <Grid item xs={4}>
                        <RecommendationCard />
                    </Grid>
                    <Grid item xs={4}>
                        <RecommendationCard />
                    </Grid>
                    <Grid item xs={4}>
                        <RecommendationCard />
                    </Grid>
                </Grid>
            </Box>
        </Box>
    </Box>
  )
}
