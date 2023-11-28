import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Link } from 'react-router-dom';
import { Link as Scroll } from 'react-scroll';
import H from '../../../assets/Home/animations/navbarH.json'
import { useLottie } from 'lottie-react';
import { Grid } from '@mui/material';
import useAuth from '../../../Hooks/useAuth';

const pages = ['Home', 'FAQ', 'All Tests', 'Login', 'Register'];
const settings = ['Dashboard', 'Logout'];

function Navbar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const { user, logOut } = useAuth()
    
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleLogout = () => {
        console.log('logout alhamdulillah');
        logOut()
            .then()
            .catch()
    }

    const options = {
        animationData: H,
        loop: 2,

    };
    const { View } = useLottie(options);

    return (
        <AppBar color='info' position="sticky" sx={{ pt: 1 }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 10 }} /> */}
                    <Grid sx={{ display: { xs: 'none', md: 'flex', width: 56 }, mr: -1 }} >{View}</Grid>
                    <Typography
                        variant="h4"
                        noWrap
                        component={Link}
                        to="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.2rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        ealthHub
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyItems: 'end' }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    {
                                        (page === 'Login' || page === 'Register') && user ? null : (
                                            <Button
                                                key={page}
                                                onClick={handleCloseNavMenu}
                                                component={Link}
                                                to={page === 'Login' ? '/login' : (page === 'Register' ? '/register' : (page === 'All Tests') ? '/all-tests' : undefined)}
                                                sx={{ mr: 2, display: 'block', }}
                                            >
                                                {page}
                                            </Button>
                                        )
                                    }
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 5,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Health
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'end' }}>
                        {pages.map((page, index) => (
                            <Scroll
                                key={index}
                                activeClass={page}
                                to={page}
                                spy={true}
                                smooth={true}
                                offset={50}
                                duration={500}

                            >
                                {
                                    (page === 'Login' || page === 'Register') && user ? null : (
                                        <Button
                                            key={page}
                                            onClick={handleCloseNavMenu}
                                            component={Link}
                                            to={page === 'Login' ? '/login' : (page === 'Register' ? '/register' : (page === 'All Tests') ? '/all-tests' : undefined)}
                                            sx={{ my: 2, mr: 2, color: 'white', display: 'block', border: '1px solid', textAlign: "center", fontWeight: '600' }}
                                        >
                                            {page}
                                        </Button>
                                    )
                                }
                            </Scroll>
                        ))}

                    </Box>


                    {
                        user && <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <Avatar alt={user?.displayName} src={user?.photoURL ? user.photoURL : "/static/images/avatar/2.jpg"} />
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                {settings.map((setting) => (
                                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                        <Typography textAlign="center">{
                                            setting === 'Dashboard' ? (
                                                <Button
                                                    component={Link}
                                                    to='/dashboard/user'
                                                    sx={{ color: 'inherit', textDecoration: 'none' }}
                                                >
                                                    {setting}
                                                </Button>
                                            ) : setting === 'Logout' ? (
                                                <Button

                                                    onClick={handleLogout}
                                                    sx={{ color: 'inherit', textDecoration: 'none' }}
                                                >
                                                    {setting}
                                                </Button>
                                            ) : (
                                                setting
                                            )
                                        }</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                    }
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Navbar;