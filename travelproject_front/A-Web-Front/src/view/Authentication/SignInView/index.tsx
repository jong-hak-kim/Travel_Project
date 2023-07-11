import React from 'react'
import { Box, Button, Card, FormControl, Input, InputAdornment } from '@mui/material'
import EmailIcon from '@mui/icons-material/Email';
import KeyIcon from '@mui/icons-material/Key';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Link } from 'react-router-dom';

export default function SignInView() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Card sx={{ p: 5, width: '25vw' }}>
            <FormControl fullWidth sx={{ mt: 1, mb: 1 }} variant="standard">
                <Input 
                    sx={{ p: 1 }}
                    type='email' 
                    fullWidth 
                    placeholder='이메일'
                    startAdornment={<InputAdornment position="start"><EmailIcon sx={{ mr: 1 }} titleAccess='이메일' /></InputAdornment>}
                />
            </FormControl>
            <FormControl fullWidth sx={{ mt: 1, mb: 1 }} variant="standard">
                <Input 
                    sx={{ p: 1 }}
                    type='password' 
                    fullWidth 
                    placeholder='비밀번호'
                    startAdornment={<InputAdornment position="start"><KeyIcon sx={{ mr: 1 }} titleAccess='이메일' /></InputAdornment>}
                    endAdornment={<InputAdornment position="end"><VisibilityIcon titleAccess='이메일' /></InputAdornment>}
                />
            </FormControl>
            <Box sx={{ mt: 5 }}>
                <Button fullWidth size='large' variant="contained" color="success" >로그인</Button>
            </Box>
            <Box sx={{ mt: 3, display: 'flex', justifyContent: 'space-around' }}>
                <Link to='/auth/find-email'>아이디 찾기</Link>
                <Link to='/auth/find-password'>비밀번호 찾기</Link>
                <Link to='/auth/sign-up'>회원가입</Link>
            </Box>
        </Card>
    </Box>
  )
}
