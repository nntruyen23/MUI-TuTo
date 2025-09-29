import { useState } from 'react';
import { Box, Toolbar, AppBar, IconButton, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import KeyboardArrowLeftSharpIcon from '@mui/icons-material/KeyboardArrowLeftSharp';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import GradingOutlinedIcon from '@mui/icons-material/GradingOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import WarehouseOutlinedIcon from '@mui/icons-material/WarehouseOutlined';
import { useNavigate, useLocation  } from 'react-router-dom';
import { Outlet } from 'react-router-dom';



const HomePage = () => {
  const drawerWidthOpen = 249;  
  const drawerWidthClose = 70;  
  const transitionDuration = 1000; 
  const logoImgURL = 'https://themesbrand.com/velzon/html/default/assets/images/logo-sm.png';
  const textImgURL = 'https://themesbrand.com/velzon/html/default/assets/images/logo-light.png';

  const sideBarItems = [
    { text: 'Home', icon: <HomeOutlinedIcon />, path: '/home' },
    { text: 'Category management', icon: <CategoryOutlinedIcon />, path: '/categories' },
    { text: 'Product management', icon: <Inventory2OutlinedIcon />, path: '/products' },
    { text: 'Order management', icon: <GradingOutlinedIcon />, path: '/orders' },
    { text: 'User management', icon: <AccountCircleOutlinedIcon />, path: '/users' },
    { text: 'Warehouse management', icon: <WarehouseOutlinedIcon />, path: '/warehouse' },
  ];

  const [sideBar, setSideBar] = useState(true);
  const navigate = useNavigate();
  const location = useLocation()

  const handleMenuClick = () => {
    setSideBar((prev) => !prev);
  };
  

  const currentDrawerWidth = sideBar ? drawerWidthOpen : drawerWidthClose;

  return (
    <Box
      sx={{
        display: 'flex',
        width: '100vw',
        height: '100vh',
        backgroundColor: '#F3F3F9',
      }}
    >
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: '#ffffff',
          boxShadow: 'none',
          width: `calc(100% - ${currentDrawerWidth}px)`,
          marginLeft: `${currentDrawerWidth}px`,
          transition: `margin ${transitionDuration}ms ease, width ${transitionDuration}ms ease`, // Đồng bộ với Drawer
        }}
      >
        <Toolbar>
          <IconButton
            sx={{
              color: '#757575',
            }}
            onClick={handleMenuClick}
          >
            {sideBar ? <KeyboardArrowLeftSharpIcon /> : <MenuRoundedIcon />}
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer Sidebar */}
      <Drawer
        variant="permanent"
        sx={{
          width: currentDrawerWidth,
          flexShrink: 0,
          whiteSpace: 'nowrap',
          '& .MuiDrawer-paper': {
            width: currentDrawerWidth,
            boxSizing: 'border-box',
            overflowX: 'hidden',
            backgroundColor: '#405189',
            transition: `width ${transitionDuration}ms ease`, 
          },
        }}
        open={sideBar}
      >
        <Box
          sx={{
            p: '0px 8px',
            height: '100vh',
          }}
        >
          <Box
            sx={{
              pt: '26px',
              pb: '26px',
              textAlign: 'center',
            }}
          >
            <img
              src={sideBar ? textImgURL : logoImgURL}
              style={{
                height: 'auto',
                width: sideBar ? '100px' : '22px',
                transition: 'width 0.2s ease, opacity 0.2s ease', 
                opacity: sideBar ? 1 : 0.8, 
              }}
            />
          </Box>
          <List>
            {sideBarItems.map((item, index) => (
              <ListItem 
                key={index} 
                disablePadding
              >
                <ListItemButton
                  onClick={() => navigate(item.path)}
                  sx={{
                    color: location.pathname === item.path ? '#FFFFFF' : '#9BA9D9',
                    minHeight: 48,
                    justifyContent: sideBar ? 'initial' : 'center',
                    px: 2.5,
                    transition: 'background-color 0.3s ease, padding 0.3s ease',
                    '&:hover': {
                      
                      color: '#FFFFFF', 
                      '& .MuiListItemIcon-root': {
                        backgroundColor: 'none',
                        color: '#FFFFFF',
                      }
                    }
                  }}
                >
                  <ListItemIcon
                    sx={{
                      color: location.pathname === item.path ? '#FFFFFF' : '#9BA9D9',
                      minWidth: 0,
                      mr: sideBar ? 2 : 'auto',
                      justifyContent: 'center',
                      transition: 'margin 0.3s ease, transform 0.3s ease',
                      transform: sideBar ? 'translateX(0)' : 'translateX(2px)',
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <Box
                    sx={{
                      overflow: 'hidden',
                      whiteSpace: 'nowrap',
                      transition: 'width 0.4s ease, opacity 0.4s ease',
                      width: sideBar ? '160px' : '0px',
                      opacity: sideBar ? 1 : 0,
                    }}
                  >
                    <ListItemText
                      primary={
                        <span style={{ fontSize: '14px', fontFamily: 'Poppins, sans-serif' ,fontWeight: 500 }}>
                          {item.text}
                        </span>
                      }
                    />
                  </Box>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          padding: 3,
          marginLeft: `${currentDrawerWidth}px`,
          transition: `margin ${transitionDuration}ms ease`, 
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
};

export default HomePage;
