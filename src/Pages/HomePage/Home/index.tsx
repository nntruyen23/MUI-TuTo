import { Box, Typography, Card, CardContent } from "@mui/material";

const Home = () => {
  const username = 'Anna'
  const cards = [
    {
      title: 'TOTAL EARNINGS',
      value: '0$',
      profit: '+16.24 %',
    },
    {
      title: 'ORDERS',
      value: '0',
      profit: '-3.57 %',
    },
    {
      title: 'USERS',
      value: '0',
      profit: '+29.08 %',
    },
    {
      title: 'NEW PRODUCTION',
      value: '0',
      profit: '+0.00 %',
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
              gap: 2,
            }}
          >
            {cards.map((card, index) => (
              <Card
                key={index}
                sx={{
                    p: '16px',
                    borderRadius: '4px',
                    height: '145px !important',
                    boxShadow: 'rgba(56, 65, 74, 0.15) 0px 1px 2px',
                    '&:hover': {
                      boxShadow: 'rgba(56, 65, 74, 0.15) 0px 4px 8px'
                    }
                }}
              >
                <CardContent>
                  <Box
                    sx={{
                      fontFamily: 'Poppins, sans-serif',
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: '13px'
                      }}
                    >
                      {card.title}
                    </Typography>
                    <Typography>
                      {card.value}
                    </Typography>           
                  </Box>
                </CardContent>
                
              </Card>
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Home;