import React from "react";
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  
    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
      marginTop: theme.spacing(4),
    },
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    cardMedia: {
      paddingTop: '56.25%', // 16:9
    },
    cardContent: {
      flexGrow: 1,
    },
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6),
    },
  }));



export default function Cards(props) {
    const classes = useStyles();
    const mycards = props.data;
    return(
        <>
         {/* End hero unit */}
         <Grid container spacing={4}>
         {mycards.map((card) => (
           <Grid item key={card.id} xs={12} sm={6} md={4}>
             <Card className={classes.card}>
               <CardMedia
                 className={classes.cardMedia}
                 image={card.imagem}
                 title={card.title}
               />
               <CardContent className={classes.cardContent}>
                 <Typography gutterBottom variant="h5" component="h2">
                  {card.title}
                 </Typography>
                 <Typography>
                 {card.description}
                 </Typography>
               </CardContent>
               <CardActions>
                 <Button size="small" color="primary">
                   View
                 </Button>
                 <Button size="small" color="primary">
                   Edit
                 </Button>
               </CardActions>
             </Card>
           </Grid>
         ))}
       </Grid>
        </>
    );
}