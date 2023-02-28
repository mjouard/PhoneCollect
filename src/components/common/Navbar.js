import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import "./navbar.css"
import LoginPage from '../pages/LoginPage';
import CardOffCanvas from './CardOffCanvas';

const drawerWidth = 240;
const navItems = [{ text: 'Téléphones', link: "/products/1" },
{ text: 'Ordinateurs', link: "/products/2" }, { text: 'Mes Commandes', link: "/commande" }];

function DrawerAppBar(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [openLogin, setOpenLogin] = React.useState(false);
    const navigate = useNavigate();

    const navigateToHome = () => {
        // 👇️ navigate to /products
        navigate('/');
    };

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                Phone collect
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <ListItemText primary={item.text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex', marginBottom: "15rem" }}>
            <LoginPage openLogin={openLogin} handleCloseLogin={() => setOpenLogin(false)} />
            <img onClick={navigateToHome} alt="" src="/logo/phone_collect_logo.png" className='logo' />
            <CssBaseline />
            <AppBar component="nav" style={{ backgroundColor: "black", height: "100px", justifyContent: 'center', zIndex: "1" }}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Box sx={{
                        display: { xs: 'none', sm: 'flex' },
                        justifyContent: 'space-between',
                        width: '100%',
                        marginLeft: "20rem"
                    }}>
                        {navItems.map((item) => (
                            <Button onClick={() => navigate(item.link)} key={item.text} sx={{ color: '#fff', fontSize: "calc(5px + 0.5vw)", minWidth: "30px" }}>
                                {item.text}
                            </Button>
                        ))}
                        <Button onClick={() => setOpenLogin(true)} sx={{ color: '#fff', fontSize: "calc(5px + 0.5vw)" }}>
                            Connexion
                        </Button>
                        <CardOffCanvas />
                    </Box>
                </Toolbar>
            </AppBar>
            <Box component="nav">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
        </Box>
    );
}

DrawerAppBar.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default DrawerAppBar;