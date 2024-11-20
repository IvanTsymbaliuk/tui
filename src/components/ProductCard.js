import React, { useState } from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import ProductDialog from "./ProductDialog";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  cardContainer: {
    position: "relative",
    zIndex: "3",
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
    transition: "transform 0.3s ease-in-out",
    "&:hover": {
      transform: "scale(1.08)",
      boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
    },
  },
});

const ProductCard = ({ product }) => {
  const classes = useStyles();
  const [dialogOpen, setDialogOpen] = useState(false);
  const handleCardClick = () => {
    setDialogOpen(true);
  };
  const handleClose = () => {
    setDialogOpen(false);
  };

  return (
    <>
      <Card className={classes.card} onClick={handleCardClick}>
        <CardMedia
          className={classes.cardMedia}
          image={product.imageUrl}
          alt={product.name}
        />
        <CardContent className={classes.cardContent}>
          <Typography variant="h6">{product.name}</Typography>
          <Typography variant="body2" color="text.secondary">
            {product.category}
          </Typography>
          <Typography variant="h6" color="primary">
            Ціна: {product.price} грн
          </Typography>
          <Typography>{product.desc}</Typography>
        </CardContent>
      </Card>
      <ProductDialog
        open={dialogOpen}
        onClose={handleClose}
        product={product}
      />
    </>
  );
};

export default ProductCard;
