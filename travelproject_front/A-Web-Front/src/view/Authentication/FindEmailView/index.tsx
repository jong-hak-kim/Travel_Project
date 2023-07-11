import React from 'react'
import { Box, Button, Card, FormControl, Input, InputAdornment, Typography } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';

export default function FindEmailView() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Typography variant='h4' sx={{ fontWeight: 700, mb: '5vh' }}>이메일 찾기</Typography>
        <Card sx={{ p: 5, width: '40vw', maxWidth: '400px' }}>
            <FormControl fullWidth sx={{ mt: 1, mb: 1 }} variant="standard">
                <Input 
                    sx={{ p: 1 }}
                    type='text' 
                    fullWidth
                    placeholder='이름'
                    startAdornment={<InputAdornment position="start"><PersonIcon sx={{ mr: 1 }} titleAccess='이름' /></InputAdornment>}
                />
            </FormControl>
            <FormControl fullWidth sx={{ mt: 1, mb: 1 }} variant="standard">
                <Input 
                    sx={{ p: 1 }}
                    type='text' 
                    fullWidth 
                    placeholder='휴대전화번호'
                    startAdornment={<InputAdornment position="start"><PhoneAndroidIcon sx={{ mr: 1 }} titleAccess='이메일' /></InputAdornment>}
                />
            </FormControl>
            <Box sx={{ mt: 5 }}>
                <Button fullWidth size='large' variant="contained" color="success" >확인</Button>
            </Box>
            <Box sx={{ pt: '2.5vw', pb: '1.5vw', textAlign: 'center' }}>
                <Typography variant='body1' sx={{ mb: '1vh', fontWeight: 700 }}>이름과 전화번호 데이터 일치</Typography>
                <Typography variant='body2'>이메일 : lllll@lllll.com 입니다.</Typography>
            </Box>
            <Box sx={{ pt: '2.5vw', pb: '1.5vw', textAlign: 'center' }}>
                <Typography variant='body1' sx={{ mb: '1vh', fontWeight: 700 }}>이름과 전화번호 데이터 불일치</Typography>
                <Typography variant='body2'>일치하는 계정 정보가 없습니다.</Typography>
            </Box>
        </Card>
    </Box>
  )
}
