
import { Box, Button, Container, FormLabel, Paper, TextField , Typography, Link } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
    const imageUrl = "/assets/auth-bg.jpg";
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
    const handleSubmit = () => {
        
        return;
    };
    const handleClickLogin = () => {
        navigate('/auth/login')
    }
    return (
        <Box
            width={'100%'}
            height={'100%'}
            display={'flex'}
            flexDirection={'row'}
            top={'0'}
            left={'0'}
            position={'fixed'}
            alignItems={'center'}
            sx={{
                backgroundColor:'rgb(243, 246, 249)',
            }}
        >      
            <Box
                zIndex={10}
                width={'100%'}
                height={'100px'}
                sx={{
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundImage: `url(${'https://gear-viet.vercel.app/static/media/shape.c087bf7aeb7116d08f9ac0693e55b4cb.svg'})`,    
                    position: 'absolute',
                    top: '280px',
                }}
            >
                
            </Box>
            <Box
                height={'380px'}
                width={'100%'}
                sx={{
                    backgroundImage: `url(${imageUrl})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    position: 'absolute',
                    top: '0px'
                }}
            >
            </Box>

            <Container 
                maxWidth = 'xs'
                sx={{
                    
                    zIndex: 40,
                    justifyItems:'center',
                }}
            >
                <Paper  
                    sx = {{ 
                        
                        p: '24px',
                        boxShadow: 'rgba(56, 65, 74, 0.15) 0px 1px 2px',
                    }
                }>
                    <Typography 
                        sx={{
                            m: '0px 0px, 8px',
                            fontFamily: 'Poppins, sans-serif',
                            lineHeight: '1.334',
                            color: 'rgb(64, 81, 137)',
                            fontSize: '16px',
                            fontWeight: '600',
                            textAlign: 'center',
                        }}
                    >
                         Forgot Password?
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: '.875rem',
                            lineHeight: '1.25rem',
                            fontFamily: 'Poppins, sans-serif',
                            margin: '0px',
                            fontWeight:'400',
                            color: 'rgb(135, 138, 153)',
                            textAlign: 'center',
                        }}
                    >
                        Reset password with NeKeTech
                    </Typography>
                    <Box
                        sx={{
                            textAlign: 'center',
                        }}
                    >
                        <img
                            src="/assets/auth-forgot-icon.png" 
                            alt="icon" 
                            style={{ width: '80px', height: '80px' }} 
                        />
                    </Box>
                    <Paper
                        sx={{
                            
                            boxShadow: 'rgba(56, 65, 74, 0.15) 0px 1px 2px',
                            backgroundColor: 'rgb(255, 244, 229)',
                            p: '6px 16px',
                            display: 'flex',
                            borderRadius: '4px',
                        }}
                    >   
                        <Typography
                            sx={{
                                color: 'rgb(102, 60, 0)',
                                fontSize: '13px',
                                fontWeight: '400',
                                fontFamily: 'Poppins, sans-serif',  
                                lineHeight: 'line-height: 1.43',
                                p: '8px 0px',
                            }}
                        >
                            Enter your email and instructions will be sent to you!
                        </Typography>
                    </Paper>
                    <Box
                        sx = {{mt: '24px'}}
                    >
                        <FormLabel 
                            sx = {{
                                mb: '5rem', 
                                fontFamily: 'Poppins, sans-serif',
                                fontSize: '13px', 
                                fontWeight:'600'
                            }}
                        > 
                            Username <span style={{color: 'rgb(240, 101, 72)'}}>*</span>
                        </FormLabel>
                        <TextField
                            variant="outlined"
                            id='username'
                            fullWidth
                            required
                            autoFocus
                            sx = {{
                                mb: 2, 
                                mt: 1,
                                p: 0,
                                '& .MuiInputBase-root': {
                                    fontFamily: 'Poppins, sans-serif',
                                    height: '38px',
                                    backgroundColor: 'white',
                                },
                                '& .MuiOutlinedInput-input': {
                                    p: '10px',
                                    fontSize:'13px',
                                }
                            }}
                            placeholder="Enter username address"
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                            
                        />
                        <FormLabel 
                            sx = {{
                                mb: '5rem', 
                                fontFamily: 'Poppins, sans-serif',
                                fontSize: '13px', 
                                fontWeight:'600'
                            }}
                        > 
                            Email <span style={{color: 'rgb(240, 101, 72)'}}>*</span>
                        </FormLabel>
                        <TextField
                            variant="outlined"
                            id='username'
                            fullWidth
                            required
                            autoFocus
                            sx = {{
                                mb: 2, 
                                mt: 1,
                                p: 0,
                                '& .MuiInputBase-root': {
                                    fontFamily: 'Poppins, sans-serif',
                                    height: '38px',
                                    backgroundColor: 'white',
                                },
                                '& .MuiOutlinedInput-input': {
                                    p: '10px',
                                    fontSize:'13px',
                                }

                            }}
                            placeholder="Enter email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            
                        />
                        
                    </Box>                    
                    <Button
                        type="button"
                        variant="contained"
                        fullWidth
                        sx={{
                            mt: 1,
                            backgroundColor: "rgb(10, 179, 156)",
                            mb: 2,
                            fontFamily: 'Poppins, sans-serif',
                            fontSize: '13px',
                            textTransform: 'none',
                            fontWeight: '600',
                            '&:hover': {
                                opacity: 1 ,
                                backgroundColor: "#088f7d",
                            },
                        }}
                        onClick={() => handleSubmit}
                    >
                        Send Reset
                    </Button>
                </Paper> 
                <Typography
                    mt={'24px'}
                    sx={{
                        textAlignLast: 'center',
                        fontFamily: 'Poppins, sans-serif',
                        fontWeight: '400',
                        lineHeight: '1.5',
                        fontSize: '14px',
                    }}
                >
                    Wait, I remember my password... {" "}
                    <Link
                        href= '/auth/login'
                        borderBottom={'black'}
                        underline='always'
                        onClick = {() => handleClickLogin}
                        sx={{
                            m: '0',
                            fontSize: '.875rem',
                            lineHeight: '1.25rem',
                            fontFamily: "Poppins, sans-serif",
                            color:'#000000',
                            fontWeight: '700',
                            textDecorationColor:'#000000',
                        }}
                    >
                        Click here
                    </Link>
                </Typography>
            </Container>
            
        </Box>
    );
}
export default ForgotPassword;