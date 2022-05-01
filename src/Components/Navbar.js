import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import logo from '../Assets/secondHand.jpg'
import { ShoppingCart } from '@material-ui/icons';
import Badge from '@material-ui/core/Badge'
import { Link } from 'react-router-dom'
import { useStateValue } from '../StateProvider';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginBottom: "7rem",
    },
    appBar: {
        backgroundColor: "#266955",
        boxShadow: "none",
    },
    grow: {
        flexGrow: 1,
    },
    button: {
        marginLeft: theme.spacing(2),
    },
    image: {
        marginRight: "10px",
    },
}));

export default function Prueba() {
  const classes = useStyles();
  const [{basket, user}, dispatch] = useStateValue();

  return (
    <div className={classes}>
       <AppBar position="fixed" className={classes.appBar}>
           <Toolbar>
                <Link to="/">
                    <IconButton edge="start">
                        <img src={logo} className={classes.image} />
                    </IconButton>
                </Link>
                <div className={classes.grow}/>
                <Typography variant="h6" color="textPrimary" component="p">
                    {user ? ("Enhorabuena ",user.email) : "Bienvenido" }
                </Typography>
                <div className={classes.button} >
                    <Link to="/signIn"> 
                        <Button variant="outlined">
                            <strong>Sign In</strong>
                        </Button>
                    </Link>
                    <Link to="/checkout-page">
                        <IconButton aria-label="show cart items" color="primary">
                            <Badge badgeContent={basket?.length} color="secondary">
                                <ShoppingCart fontSize="large" color='primary'/>
                            </Badge>
                        </IconButton>
                    </Link>
                    
                </div> 

           </Toolbar>
       </AppBar>
   </div>
  );
}