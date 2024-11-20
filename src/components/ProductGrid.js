import React, { useEffect, useState } from "react";
import { Box, Container, Grid, Paper } from "@mui/material";
import { onDataChange } from "../firebase/database";
import ProductCard from "./ProductCard";
import { makeStyles } from "@mui/styles";
import BackgroundSlideshow from "./BackgroundSlideshow";

const useStyles = makeStyles({
  paper: {
    padding: "30px",
    position: "relative",
    zIndex: "3",
    marginTop: "90px",
    marginBottom: "90px",
  },
});

const ProductGrid = () => {
  const classes = useStyles();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const path = "products/";
    onDataChange(path, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const formattedData = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        formattedData.sort((a, b) => a.price - b.price);
        setProducts(formattedData);
      } else {
        setProducts([]);
      }
    });
  }, []);

  return (
    <>
      <BackgroundSlideshow />
      <Container maxWidth="md">
        <Box>
          <Paper className={classes.paper}>
            <Grid container spacing={4}>
              {products.map((product) => (
                <Grid item xs={12} sm={6} md={4} key={product.id}>
                  <ProductCard product={product} />
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Box>
      </Container>
    </>
  );
};

export default ProductGrid;
