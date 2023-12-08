import axios from 'axios';
import PropTypes from 'prop-types';
import  { useState , useEffect}  from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Drawer from '@mui/material/Drawer';
import Avatar from '@mui/material/Avatar';
import { alpha } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import ListItemButton from '@mui/material/ListItemButton';

import { usePathname } from 'src/routes/hooks';
import { RouterLink } from 'src/routes/components';

import { useResponsive } from 'src/hooks/use-responsive';

import Scrollbar from 'src/components/scrollbar';

import { NAV } from './config-layout';
import { ip } from "../../_mock/ipa.json"
import navConfig from './config-navigation';

// ----------------------------------------------------------------------

export default function Nav({ openNav, onCloseNav }) {
  const [account , setAccount] = useState('U')
  const token = window.localStorage.getItem('token')

  const pathname = usePathname();

  const upLg = useResponsive('up', 'lg');

  useEffect(() => {

    const fetchData = async () => {
      try {
        // Make your API call here
        const response = await axios.post(`http://${ip}:3000/api/user-data`,{ token });
        // Update the state with the fetched data
        
        setAccount(response.data[0]);

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
    
    if (openNav) {
      onCloseNav();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname , token]);


  const renderAccount = (
    <Box
      sx={{
        my: 3,
        mx: 2.5,
        py: 2,
        px: 2.5,
        display: 'flex',
        borderRadius: 1.5,
        alignItems: 'center',
        bgcolor: (theme) => alpha(theme.palette.grey[500], 0.12),
      }}
    >
      <Avatar>
        U
      </Avatar>

      <Box sx={{ ml: 2 }}>
        <Typography variant="subtitle2">{account.display_name}</Typography>

        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {account.Position}
        </Typography>
      </Box>
    </Box>
  );

  const renderMenu = (
    <Stack component="nav" spacing={0.5} sx={{ px: 2 }}>
      {navConfig.map((item) => (
        <NavItem key={item.title} item={item} />
      ))}
    </Stack>
  );

  const renderContent = (
    <Scrollbar
      sx={{
        height: 1,
        '& .simplebar-content': {
          height: 1,
          display: 'flex',
          flexDirection: 'column',
        },
      }}
    >
      
    {/* Render component here */}

      {renderAccount}

      {renderMenu}

      <Box sx={{ flexGrow: 1 }} />


    </Scrollbar>
  );

  return (
    <Box
      sx={{
        flexShrink: { lg: 0 },
        width: { lg: NAV.WIDTH },
      }}
    >
      {upLg ? (
        <Box
          sx={{
            height: 1,
            position: 'fixed',
            width: NAV.WIDTH,
            borderRight: (theme) => `dashed 1px ${theme.palette.divider}`,
          }}
        >
          {renderContent}
        </Box>
      ) : (
        <Drawer
          open={openNav}
          onClose={onCloseNav}
          PaperProps={{
            sx: {
              width: NAV.WIDTH,
            },
          }}
        >
          {renderContent}
        </Drawer>
      )}
    </Box>
  );
}

Nav.propTypes = {
  openNav: PropTypes.bool,
  onCloseNav: PropTypes.func,
};

// ----------------------------------------------------------------------

function NavItem({ item }) {
  const pathname = usePathname();

  const active = item.path === pathname;

  return (
    <ListItemButton
      component={RouterLink}
      href={item.path}
      sx={{
        minHeight: 44,
        borderRadius: 0.75,
        typography: 'body2',
        color: 'text.secondary',
        textTransform: 'capitalize',
        fontWeight: 'fontWeightMedium',
        ...(active && {
          color: 'primary.main',
          fontWeight: 'fontWeightSemiBold',
          bgcolor: (theme) => alpha(theme.palette.primary.main, 0.08),
          '&:hover': {
            bgcolor: (theme) => alpha(theme.palette.primary.main, 0.16),
          },
        }),
      }}
    >
      
      {/* Icon at Nav */}
      <Box component="span" sx={{ width: 24, height: 24, mr: 2 }}>
        {item.icon}
      </Box>
      {/* Title at Nav */}
      <Box component="span">{item.title} </Box>
    </ListItemButton>
  );
}

NavItem.propTypes = {
  item: PropTypes.object,
};
