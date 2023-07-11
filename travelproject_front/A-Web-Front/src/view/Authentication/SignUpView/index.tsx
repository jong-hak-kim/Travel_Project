import React from 'react'
import { Box, Button, Card, CardContent, FormControl, Input, InputAdornment } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import CheckIcon from '@mui/icons-material/Check';
import CakeIcon from '@mui/icons-material/Cake';
import KeyIcon from '@mui/icons-material/Key';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import SendIcon from '@mui/icons-material/Send';
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';


export default function SignUpView() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Card sx={{ p: 5, width: '25vw' }}>
            <FormControl fullWidth sx={{ mt: 1, mb: 1 }} variant="standard">
                <Input 
                    sx={{ p: 1 }}
                    type='email' 
                    fullWidth
                    placeholder='이름'
                    startAdornment={<InputAdornment position="start"><PersonIcon sx={{ mr: 1 }} titleAccess='이름' /></InputAdornment>}
                />
            </FormControl>
            <FormControl fullWidth sx={{ mt: 1, mb: 1 }} variant="standard">
                <Input 
                    sx={{ p: 1 }}
                    type='email' 
                    fullWidth 
                    placeholder='이메일'
                    startAdornment={<InputAdornment position="start"><EmailIcon sx={{ mr: 1 }} titleAccess='이메일' /></InputAdornment>}
                    endAdornment={<InputAdornment position="end"><CheckIcon titleAccess='이메일' /></InputAdornment>}
                />
            </FormControl>
            <FormControl fullWidth sx={{ mt: 1, mb: 1 }} variant="standard">
                <CakeIcon sx={{ m: 1, color: 'gray' }} />
                <Box>

                </Box>
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
            <FormControl fullWidth sx={{ mt: 1, mb: 1 }} variant="standard">
                <Input 
                    sx={{ p: 1 }}
                    type='password' 
                    fullWidth 
                    placeholder='비밀번호 확인'
                    startAdornment={<InputAdornment position="start"><KeyIcon sx={{ mr: 1 }} titleAccess='이메일' /></InputAdornment>}
                    endAdornment={<InputAdornment position="end"><VisibilityIcon titleAccess='이메일' /></InputAdornment>}
                />
            </FormControl>
            <FormControl fullWidth sx={{ mt: 1, mb: 1 }} variant="standard">
                <Input 
                    sx={{ p: 1 }}
                    type='text' 
                    fullWidth 
                    placeholder='휴대전화번호'
                    startAdornment={<InputAdornment position="start"><PhoneAndroidIcon sx={{ mr: 1 }} titleAccess='이메일' /></InputAdornment>}
                    endAdornment={<InputAdornment position="end"><SendIcon titleAccess='이메일' /></InputAdornment>}
                />
            </FormControl>
            <FormControl fullWidth sx={{ mt: 1, mb: 1 }} variant="standard">
                <Input 
                    sx={{ p: 1 }}
                    type='text' 
                    fullWidth 
                    placeholder='인증번호'
                    startAdornment={<InputAdornment position="start"><MarkUnreadChatAltIcon sx={{ mr: 1 }} titleAccess='이메일' /></InputAdornment>}
                    endAdornment={<InputAdornment position="end"><CheckIcon titleAccess='이메일' /></InputAdornment>}
                />
            </FormControl>
            <Box sx={{ mt: 5 }}>
                <Button fullWidth size='large' color="info" >회원 가입</Button>
            </Box>
        </Card>
    </Box>
  )
}
