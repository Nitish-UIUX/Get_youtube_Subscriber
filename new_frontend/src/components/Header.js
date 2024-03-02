import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const navItems = [
    { label: 'GetById', path: '/' },
    { label: 'GetByName', path: '/subscriber/name' },
    { label: 'GetAll', path: '/subscriber/gellall' },
];

function Header() {
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar component="nav">
                <Toolbar>
                    <Typography
                        variant="h6"
                        component={Link}
                        to="/"
                        sx={{ flexGrow: 1, textDecoration: 'none', color: 'inherit' }}
                    >
                        MUI
                    </Typography>
                    <ul style={{ display: 'flex', listStyleType: 'none', padding: 0 }}>
                        {navItems.map((item) => (
                            <li key={item.label} style={{ margin: '0 10px' }}>
                                <Button component={Link} to={item.path} sx={{ color: '#fff', textDecoration: 'none' }}>
                                    {item.label}
                                </Button>
                            </li>
                        ))}
                    </ul>
                </Toolbar>
            </AppBar>
            <Box component="main" sx={{ p: 3 }}>
                <Toolbar />
            </Box>
        </Box>
    );
}

export default Header;
