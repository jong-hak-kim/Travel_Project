import { Box, Button, Grid, Typography, Paper, Divider } from '@mui/material'
import TopCard from 'src/component/TopCard'
import RecommendationCard from 'src/component/RecommendationCard'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navigation from 'src/view/Navigation'
import Footer from '../Footer'
import { url } from 'inspector'

export default function MainView() {

    return (
        <Box>
            <Box sx={{ mb: '4vh' }}>
                <Box component='img' sx={{ width: '100%', height: '500px', backgroundSize: "cover", backgroundImage: `url(http://localhost:4000/file/7a28ab8f-397b-4622-9496-fb2ab6dd66ed.jpg)` }}></Box>
            </Box>
            <Box sx={{ mr: '10vw', ml: '10vw' }}>
                <Box sx={{ mb: '5vh' }}>
                    <Typography sx={{ fontSize: '24px', fontWeight: 700, mb: '1vh' }}>이번주 TOP 3</Typography>
                    <Grid container spacing={3}>
                        <Grid item xs={4}>
                            {TopCard(1)}
                        </Grid>
                        <Grid item xs={4}>
                            {TopCard(2)}
                        </Grid>
                        <Grid item xs={4}>
                            {TopCard(3)}
                        </Grid>
                    </Grid>
                </Box>
                <Box sx={{ mb: '5vh' }}>
                    <Typography sx={{ fontSize: '24px', fontWeight: 700, mb: '1vh' }}>여행지 추천</Typography>
                    <Grid container spacing={3}>
                        <Grid item xs={4}>
                            {RecommendationCard(1)}
                        </Grid>
                        <Grid item xs={4}>
                            {RecommendationCard(2)}
                        </Grid>
                        <Grid item xs={4}>
                            {RecommendationCard(3)}
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Box>
    )
}
