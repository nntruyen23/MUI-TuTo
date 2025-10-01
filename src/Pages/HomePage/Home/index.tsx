import { Box, Typography, Card, CardContent } from "@mui/material";
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
const Home = () => {
  const username = 'Anna'
  const cards = [
    {
      title: 'TOTAL EARNINGS',
      value: '$0',
      profit: '+16.24 %',
      icon: {
        bgcolor: '#D3F1ED',
        i: <MonetizationOnOutlinedIcon sx={{color: '#23BBA6'}} />,
      },
    },
    {
      title: 'ORDERS',
      value: '0',
      profit: '-3.57 %',
      icon: {
        bgcolor: 'rgba(41, 156, 219, 0.18)',
        i: <ShoppingBagOutlinedIcon sx={{color: 'rgb(41, 156, 219)'}} />,
      },
    },
    {
      title: 'USERS',
      value: '0',
      profit: '+29.08 %',
      icon: {
        bgcolor: '#FEF2DF',
        i: <AccountCircleOutlinedIcon sx={{color: '#F7B84B'}} />,
      },
    },
    {
      title: 'NEW PRODUCTION',
      value: '0',
      profit: '+0.00 %',
      icon: {
        bgcolor: '#DDE0EA',
        i: <Inventory2OutlinedIcon sx={{color: '#405189'}} />,
      },
    },
  ];

  return(
    <>
      <Box
        sx={{
          width: "100%",
          height: "100%",
        }}
      >
        <Box
          sx={{
            p: '24px'
          }}
        >
          <Box
            sx={{
              mb: '24px',
            }}
          >
            <Typography
              sx={{
                color: 'rgb(73, 80, 87)',
                opacity: 1,
                fontWeight:'600',
                fontSize: '16px',
                fontFamily: 'Poppins, sans-serif',
                lineHeight: '1.5',
              }}
            >
              Good Morning, {username}!
            </Typography>
            <Typography
              sx={{
                color: 'rgb(135, 138, 153)',
                opacity: 1,
                fontWeight:'500',
                fontSize: '13px',
                fontFamily: 'Poppins, sans-serif',
                lineHeight: '1.5',
              }}
            >
              Here's what's happening with your store today.
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: 'repeat(1, 1fr)',  
                md: 'repeat(2, 1fr)',  
                xl: 'repeat(4, 1fr)',  
              },
              gap: '24px',
            }}
          >
            {cards.map((card, index) => (
              <Box
                sx={{
                  height: '145px !important',
                }}
              >
                <Card
                  key={index}
                  sx={{
                      borderRadius: '4px',
                      height: '100%',
                      boxShadow: 'rgba(56, 65, 74, 0.15) 0px 1px 2px',
                      '&:hover': {
                        boxShadow: 'rgba(56, 65, 74, 0.15) 0px 4px 8px'
                      }
                  }}
                >
                  <Box
                    sx={{
                      height: '100%',
                      width: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      
                    }}
                  >
                    <CardContent>
                      <Box
                        sx={{
                          width: '100%',
                          display: 'flex',
                          flexDirection: 'row',
                          position: 'relative',
                        }}
                      >
                        <Box>
                          <Typography
                            sx={{
                              fontSize: '13px',
                              color: '#878A99',
                              fontWeight: 400,
                              fontFamily: 'Poppins, sans-serif',
                            }}
                          >
                            {card.title}
                          </Typography>
                        </Box>
                        <Box
                          sx={{
                            position: 'absolute',
                            right:0,
                          }}
                        >
                          <Typography
                            sx={{
                                fontFamily: 'Poppins, sans-serif',
                                fontSize: '13px',
                                color: 'rgb(10, 179, 156)',
                                fontWeight: 500,
                              }}
                          >
                            {card.profit}
                          </Typography> 
                        </Box>
                      </Box>
                      <Box
                        sx={{
                          width: '100%',
                          display: 'flex',
                          flexDirection: 'row',
                          mt: '24px',
                          position: 'relative'
                        }}
                      >
                        <Box>
                          <Typography
                            sx={{
                                fontFamily: 'Poppins, sans-serif',
                                fontSize: '22px',
                                color: 'rgb(73, 80, 87)',
                                fontWeight: 500,
                                mb: '10px',
                              }}
                          >
                            {card.value}
                          </Typography> 
                          <Typography
                            sx={{
                                fontFamily: 'Poppins, sans-serif',
                                fontSize: '13px',
                                textDecorationLine: 'underline',
                                color: 'rgb(64, 81, 137)',
                              }}
                          >
                            See details
                          </Typography> 
                        </Box>
                        <Box 
                          sx={{
                            position: 'absolute',
                            right: 0,
                            bottom: 0,
                            width: '48px',
                            height:'48px',
                            backgroundColor: card.icon.bgcolor,
                            borderRadius: '4px',
                            alignContent: 'center',
                            textAlign: 'center',
                          }}
                        >
                          {card.icon.i}
                        </Box>
                      </Box>
                    </CardContent>
                  </Box>

                </Card>
              </Box>

            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Home;