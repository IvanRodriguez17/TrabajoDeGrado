import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import { accounting } from 'accounting';
import { IconButton } from '@material-ui/core';
import { actionTypes } from '../reducer';
import { useStateValue } from "../StateProvider";

const useStyles = makeStyles((theme) => ({
    root:{
        maxWidth: 345,
        marginTop: theme.spacing(10),
    },
    action:{
        marginTop: "1rem",
    },
    media:{
        height: 0,
        paddingTop: "56.25%",
    },
    cardActions: {
        display: "flex",
        justifyContent: "space-between",
        textAlign: "center",
    },
    cardRating: {
        display: "flex"
    }
}));

export default function CheckoutCard({

  producto: {id, name, productType, price, rating, image, description, size}}) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [{basket}, dispatch] = useStateValue();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const removeItem = () => dispatch({
    type: actionTypes.REMOVE_ITEM,
    id: id,
  })

  return (
    <Card className={classes.root}>
      <CardHeader
        action={
          <Typography
            className={classes.action}
            variant='h7'
            color='inherit'
          >
            {accounting.formatMoney(price, "$")} <br/> 
            Talla {size}            
          </Typography>
        }
        title={ name }
        subheader="Disponible"
      />
      <CardMedia
        className={classes.media}
        image={ image }
        title={ name }
      />
      <CardActions disableSpacing className={classes.cardActions}>
        <div className={classes.cardRating}>
            {Array(rating)
                .fill()
                .map((_, i) => (
                    <p>&#11088;</p>
                ))
            }
        </div>
        <IconButton>
            <DeleteIcon onClick={removeItem}/>
        </IconButton>
      </CardActions>
    </Card>
  );
}