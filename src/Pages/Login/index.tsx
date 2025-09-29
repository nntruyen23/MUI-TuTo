import { Link, OutlinedInput, InputAdornment , Box, Button, Checkbox, Container, FormControlLabel, FormLabel, Paper, TextField , FormControl, IconButton, Grid, Typography } from '@mui/material';
import { useState } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const imageUrl = "/src/assets/auth-bg.jpg";
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };
    const handleSubmitSignIn = () => {
        
        if (!userName || !password) {
            alert("Vui lòng nhập đầy đủ Username và Password!");
            return;
        }
        //check thông tin đăng nhập 
        //...
        alert("Đăng nhập thành công.");
        setUserName('');
        setPassword('');
        //Chuyển hướng
        //...
        window.location.href = "";
    }
    const handleClickForgotPassword = () => {
        navigate('/auth/forgotpassword')
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
                    zIndex: 40
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
                         Welcome Back !
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
                         Sign in to continue.
                    </Typography>
                    <Box
                        sx = {{mt: 1}}
                    >
                        <FormLabel 
                            sx = {{
                                mb: '5rem', 
                                fontFamily: 'Poppins, sans-serif',
                                fontSize: '13px', 
                                fontWeight:'600'
                            }}
                        > 
                            Username 
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
                            Password 
                        </FormLabel>
                        <FormControl
                            variant="outlined"
                            fullWidth
                            sx={{
                                mt: 1,
                                '& .MuiOutlinedInput-input': {
                                    p: '10px',
                                    fontSize:'13px',
                                }

                            }}
                        >   
                            <OutlinedInput
                                id="password"
                                type={showPassword ? 'text' : 'password'}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label={
                                                showPassword ? 'hide the password' : 'display the password'
                                            }
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            onMouseUp={handleMouseUpPassword}
                                            edge="end"
                                        > 
                                            <Box sx={{ transform: 'scale(0.7)' }}>
                                                {showPassword ? <Visibility /> : <VisibilityOff />}
                                            </Box>
                                        </IconButton>
                                    </InputAdornment>
                                }
                                placeholder="Enter password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}                                
                            />
                        </FormControl>
                        
                    </Box>
                    <Grid container>
                        <Grid size={6}>
                            <FormControlLabel 
                                control={<Checkbox value={"remember"} color='primary'/>}
                                sx={{
                                    
                                     
                                    '& .MuiTypography-root': {
                                        m: '0',
                                        fontSize: '14px',
                                        fontFamily: "Poppins, sans-serif",
                                        color:"rgb(73, 80, 87)",
                                        fontWeight: '400',
                                        lineHeight: '1.5',
                                    }
                                }}
                                label="Remember me"
                            />
                        </Grid>
                        <Grid 
                            size={6}
                            sx={{
                                alignContent: "center",
                                textAlignLast: "right"   
                            }}
                        >
                            <Link 
                                href= '/auth/forgotpassword'
                                className='text-sm  cursor-pointer '
                                underline="none"
                                onClick = {() => handleClickForgotPassword}
                                sx={{
                                    m: '0',
                                    fontSize: '14px',
                                    lineHeight: '1.5',
                                    fontFamily: "Poppins, sans-serif",
                                    color:'rgb(135, 138, 153)',
                                    fontWeight: '400',
                                    '&:hover': {
                                        color: '#223767',
                                    },
                                }}
                            >
                                Forgot Password?
                            </Link>
                        </Grid>
                    </Grid>
                    
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
                        onClick={handleSubmitSignIn}
                    >
                        Sign In
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
                    Don't have an LoginValuesType ? {" "}
                    <Typography
                        component="span"
                        sx={{ 
                            color: '#000000', 
                            fontWeight: '700', 
                            textDecorationLine: 'underline',
                            fontSize: '.875rem',
                            lineHeight: '1.25rem',

                        }}
                    >
                         Sign up
                    </Typography>
                </Typography>
            </Container>
            
        </Box>
        
    );
}
export default Login;