import { Link, OutlinedInput, InputAdornment , Box, Button, Checkbox, Container, FormControlLabel, FormLabel, Paper, TextField , FormControl, IconButton, Grid } from '@mui/material';
import { useState } from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const imageUrl = "src/assets/auth-bg.jpg";
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
        window.location.href = "/dashboard";
    }
    return (
        <>
        <Box
            sx={{
                minHeight: "100vh",
                backgroundImage: `url(${imageUrl})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Container maxWidth = 'xs'>
                <Paper elevation={10} sx = {{mt: 8, p: 2}}>
                    <Box
                        sx={{
                            color: '#3e744e',
                            textAlignLast: "center",
                            fontFamily:  "Roboto, Helvetica, Arial, sans-serif",
                        }}
                    >
                        <h1> SIGN IN </h1>
                    </Box>
                    <Box
                        sx = {{mt: 1}}
                    >
                        <FormLabel sx = {{pb: 1}}> UserName </FormLabel>
                        <TextField
                            variant="outlined"
                            id='username'
                            fullWidth
                            required
                            autoFocus
                            sx = {{mb: 2}}
                            placeholder="Enter username address"
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                            
                        />
                        <FormLabel sx = {{pb: 1}}> Password </FormLabel>
                        <FormControl
                            variant="outlined"
                            fullWidth
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
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
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
                                    color:"#616161"
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
                            <Link href="#" >
                                Forgot Password
                            </Link>
                        </Grid>
                    </Grid>
                    
                    <Button
                        type="button"
                        variant="contained"
                        fullWidth
                        sx={{
                            mt: 1,
                            backgroundColor: "#3e744e",
                            mb: 2,
                            '&:hover': {
                                opacity: 1 ,
                                backgroundColor: "#356443",
                            }
                        }}
                        onClick={handleSubmitSignIn}
                    >
                        Sign In
                    </Button>
                    <Box
                        sx={{
                                alignContent: "center",
                                textAlignLast: "right"   
                        }}
                    >
                        <Link href="#" >
                            Resigter
                        </Link>
                    </Box>
                </Paper> 
            </Container>
        </Box>
        </>
    );
}
export default Login;