import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import Producto from './Producto'
import products from '../Productos-data'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: "5rem",
        textAlign: "center",
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },

}));

export default function Productos() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <h1>Bienvenidos a Second Hand</h1>
            <Grid container spacing={2}>
                {
                    products.map(producto =>(
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <Producto key={producto.id} producto={producto}/>
                        </Grid>
                    ))
                }
            </Grid>
        </div>
    );
}