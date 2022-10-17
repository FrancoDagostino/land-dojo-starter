import { SearchInput } from '../SearchInput/SearchInput'
import { Navbar } from '../Navbar/Navbar'
import { Drawer } from '../Drawer/Drawer';
import { AppBar, Box, Container,IconButton, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import logo_desk from '../../assets/logo.svg'
import logo_mob from '../../assets/logo-mobile.svg'
import shopping_cart from '../../assets/shopping-cart.svg'
import user_info from '../../assets/user-info.svg'
import { useState } from 'react'
import createBreakpoints from '@mui/system/createTheme/createBreakpoints';

const breakPoints = createBreakpoints({})

const styles = {
    appBar:(theme)=>({
        background: `${theme.palette.purpleDark.main}`,
        boxShadow:'none',
        [breakPoints.up('lg')]:{
            padding:'38px 0'
        }
    })
}
export const Header = () => {

    const [openDrawer, setOpenDrawer] = useState(false)


  return (
    <AppBar position="static" sx={styles.appBar}>
      <Container maxWidth="xl">
        <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}/>
            <Toolbar disableGutters>
                <Typography 
                    noWrap
                    component="a"
                    href="/"
                    sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    }}
                >
                   <Box component='img' src={logo_desk}/>     
                </Typography>
                <Box sx={{flexGrow:1, display:{xs:'flex',md:'none'}}}>
                    <IconButton size='large' color='inherit' onClick={() => setOpenDrawer(true)}>
                        <MenuIcon />
                    </IconButton>
                </Box>
                <Typography 
                    noWrap
                    component="a"
                    href="/"
                    sx={{
                    mr: 2,
                    display: { xs: 'flex', md: 'none' },
                    flexGrow:1
                    }}
                >
                   <Box component='img' src={logo_mob}/>     
                </Typography>
                <Box sx={{flexGrow:1, display:{xs:'none',lg:'flex'},paddingLeft:'80px'}}>
                   <Navbar white/>     
                </Box>
                <SearchInput/>
                <Box sx={{display:'flex'}}>
                    <IconButton>
                        <Box component='img' src={shopping_cart}/>
                    </IconButton>
                    <IconButton sx={{display:{xs:'none',lg:'block'}}}>
                        <Box component='img' src={user_info}/>
                    </IconButton>
                </Box>
            </Toolbar>
        </Container>
    </AppBar>

  )
}
