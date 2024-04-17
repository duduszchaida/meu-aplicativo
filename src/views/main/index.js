import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Header from '../../components/navHeader';
import Cards from '../../components/mycards';
import Footer from '../../components/footer';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

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

const cards = [
  {
  id: 1,
  imagem: 'https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_1280.jpg',
  title: 'Notebook',
  description: 'Notebook na mesa de trabalho'
},
{
  id: 2,
  imagem: 'https://media.istockphoto.com/id/1465316259/pt/foto/business-data-analysis-working-in-business-analytics-and-data-management-system-to-make-report.jpg?s=2048x2048&w=is&k=20&c=eidHyFOor_ah0b45Ef70UA092KFCgimjcuAIe4YUijI=',
  title: 'Tablet',
  description: 'Desenhando no tablet'
},
{
  id: 3,
  imagem: 'https://cdn.pixabay.com/photo/2020/09/27/13/15/data-5606639_1280.jpg',
  title: 'Codigo',
  description: 'Codigo de desenvolvimento de um software'
},
{
  id: 4,
  imagem: 'https://media.istockphoto.com/id/844437488/pt/foto/project-manager-using-gantt-chart-tasks-planning-and-scheduling-computer.jpg?s=2048x2048&w=is&k=20&c=wE4fUB9yxORJoojOYK6mgCm2XDRaB6NCCYHFm58WtqU=',
  title: 'Desktop',
  description: 'Trabalhando em uma maquina desktop'
}
];

export default function App() {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
        <Header />
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Album layout
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Something short and leading about the collection below—its contents, the creator, etc.
              Make it short and sweet, but not too short so folks don&apos;t simply skip over it
              entirely.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    Main call to action
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Secondary action
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
         <Cards data={cards}/>
        </Container>
      </main>
      {/* Footer */}
      <Footer />
      {/* End footer */}
    </>
  );
}