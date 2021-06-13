import React, { Component } from 'react';

//importing material-ui styles
import { withStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

//importing material-ui components
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import { Link } from 'react-router-dom';

//styles for the header using breakpoints to make the header responsive
const styles = theme => ({
    appBar: {
        backgroundColor: '#263238',
        boxShadow: 'none',
    },
    headerTools: {
        [theme.breakpoints.only('xs')]: {
            flexDirection: 'column',
            alignItems: 'flex-start',
        },
    },
    logo: {
        '&:hover': {
            backgroundColor: 'transparent !important',
        },
        cursor: 'default',
    },

});

class Header extends Component {

    render() {
        const { classes } = this.props;
        return (
            <div>
                <AppBar position="static" className={classes.appBar}>
                    <Toolbar className={classes.headerTools}>
                        <Link to={"/"} style={{
                            color: 'white'
                        }}>
                            <IconButton disableRipple={true} className={classes.logo} edge="start" color="inherit"
                                aria-label="app logo">
                                <FastfoodIcon />
                            </IconButton>
                        </Link>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

export default withStyles(styles)(Header);