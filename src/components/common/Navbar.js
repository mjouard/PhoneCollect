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
import { FaUserCheck, FaUserTimes } from "react-icons/fa"
import { clearCurrentUser, getCurrentUser } from "../../utils/utils.js"
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


const drawerWidth = 240;
const logoutNavItems = [{ text: 'Téléphones', link: "/products/1" },
{ text: 'Ordinateurs', link: "/products/2" }];

const userNavItems = [{ text: 'Téléphones', link: "/products/1" },
{ text: 'Ordinateurs', link: "/products/2" }, { text: 'Mes Commandes', link: "/commande" }];

const adminNavItems = [{ text: 'Téléphones', link: "/products/1" },
{ text: 'Ordinateurs', link: "/products/2" }, { text: 'Admin', link: "/admin" }];

function DrawerAppBar(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [openLogin, setOpenLogin] = React.useState(false);
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const navigateToHome = () => {
        // 👇️ navigate to /products
        navigate('/');
    };
    const [actualItems, setActualItems] = React.useState([])

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const user = getCurrentUser();

    React.useEffect(() => {
        if (user) {
            if (user.role == "admin") {
                setActualItems(adminNavItems)
            }
            else {
                setActualItems(userNavItems)
            }
        }
        else {
            setActualItems(logoutNavItems)
        }
    }, [user]);

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                Phone collect
            </Typography>
            <Divider />
            <List>
                {actualItems.map((item) => (
                    <ListItem key={item.text} disablePadding>
                        <ListItemButton onClick={() => navigate(item.link)} sx={{ textAlign: 'center' }}>
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
            <LoginPage openLogin={openLogin} handleCloseLogin={() => { setOpenLogin(false); handleClose() }} />
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
                    <Box sx={{ display: { xs: "flex", sm: 'none' }, flexDirection: "row", fontSize: "calc(20px + 0.8vw)" }}>
                        <Button
                            id="basic-button"
                            style={{ fontSize: "calc(12px + 0.8vw)", color: "white" }}
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                        >
                            {user ?
                                <FaUserCheck className="user-icon" /> :
                                <FaUserTimes className="user-icon" onClick={() => { setOpenLogin(true); handleClose() }} />
                            }
                        </Button>
                        {user ?
                            <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                }}
                            >
                                <MenuItem onClick={handleClose}>Mon compte</MenuItem>
                                <MenuItem onClick={() => { clearCurrentUser(); handleClose() }}>Déconnexion</MenuItem>
                            </Menu> :
                            null
                        }
                        <CardOffCanvas />
                    </Box>
                    <Box sx={{
                        display: { xs: 'none', sm: 'flex' },
                        justifyContent: 'space-between',
                        width: '100%',
                        marginLeft: "20rem"
                    }}>
                        {actualItems.map((item) => (
                            <Button className="effect-underline" onClick={() => navigate(item.link)} key={item.text} sx={{ color: '#fff', fontSize: "calc(5px + 0.5vw)", fontWeight: "bold" }}>
                                {item.text}
                            </Button>
                        ))}
                        <Box sx={{ display: "flex", flexDirection: "row", fontSize: "calc(20px + 0.8vw)" }}>
                            <Button
                                id="basic-button"
                                style={{ fontSize: "calc(12px + 0.8vw)", color: "white" }}
                                aria-controls={open ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}
                            >
                                {user ?
                                    <FaUserCheck className="user-icon" /> :
                                    <FaUserTimes className="user-icon" onClick={() => { setOpenLogin(true); handleClose() }} />
                                }
                            </Button>
                            {user ?
                                <Menu
                                    id="basic-menu"
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}
                                    MenuListProps={{
                                        'aria-labelledby': 'basic-button',
                                    }}
                                >
                                    <MenuItem onClick={handleClose}>Mon compte</MenuItem>
                                    <MenuItem onClick={() => { clearCurrentUser(); handleClose() }}>Déconnexion</MenuItem>
                                </Menu> :
                                null
                            }
                            <CardOffCanvas />
                        </Box>
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