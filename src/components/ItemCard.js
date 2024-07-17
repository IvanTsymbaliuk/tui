import { Box, Card, CardMedia, CardContent, Typography } from "@mui/material";

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  itemCardMedia: {
    paddingTop: "56.25%",
  },
  box: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
  },
  itemCard: {
    flexGrow: "1",
  },
});

export default function ItemCard() {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.box}>
        <Card className={classes.itemCard}>
          <CardMedia
            image="/img/card.jpg"
            title="tuya"
            className={classes.itemCardMedia}
          />
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Туя Смарагд
            </Typography>
            <Typography>Зріст 150см</Typography>
          </CardContent>
        </Card>
      </Box>
    </>
  );
}
