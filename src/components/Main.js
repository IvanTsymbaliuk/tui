import {
  Paper,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
  Box,
  Modal,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

import ItemCard from "./ItemCard";

const useStyles = makeStyles({
  box: {
    boxShadow: "-10px -10px 100px 5px rgba(0,0,0, 0.7)",
  },
  paper: {
    padding: "30px",
    position: "relative",
    zIndex: "2",
    marginTop: "90px",
    marginBottom: "90px",
  },
  background: {
    zIndex: "1",
    position: "fixed",
    top: "0",
    width: "100%",
    height: "100%",
    backgroundImage: `linear-gradient(rgba(0,0,0, 0.3), rgba(0,0,0, 0.3)), url(/img/1.jpg)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  cardContainer: {
    position: "relative",
    zIndex: "2",
    opacity: "1",
  },
  cardMedia: {
    paddingTop: "56.25%",
  },
  cardContent: {
    flexGrow: 1,
  },
  card: {
    boxShadow: "0 8px 8px rgba(0, 0, 0, 0.2)",
    transition: "transform 0.2s ease-in-out",
    "&:hover": {
      transform: "scale(1.07)",
      boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
    },
  },
});

export default function Main() {
  const classes = useStyles();
  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className={classes.background}></div>
      <Container className={classes.cardContainer} maxWidth="md">
        <Box className={classes.box}>
          <Paper className={classes.paper}>
            <Grid container spacing={4}>
              {cards.map((card) => (
                <Grid item key={card} xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image="/img/card.jpg"
                      title="tuya"
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography variant="h5" gutterBottom>
                        Туя Смарагд
                      </Typography>
                      <Typography>Висота 150см</Typography>
                    </CardContent>
                    <CardActions>
                      <Button
                        size="medium"
                        color="primary"
                        onClick={handleClickOpen}
                      >
                        Переглянути
                      </Button>
                      <Modal open={open} onClose={handleClose}>
                        <ItemCard />
                      </Modal>
                      <Typography>Ціна 150грн</Typography>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Box>
      </Container>
    </>
  );
}
