import React from "react";
import { Dialog, DialogContent, CardMedia, Typography } from "@mui/material";

const ProductDialog = ({ open, onClose, product }) => {
  if (!product) return null;

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <DialogContent>
        <CardMedia
          component="img"
          image={product.imageUrl}
          alt={product.name}
        />
        <Typography variant="h6" component="div" sx={{ mt: 1 }}>
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.desc}
        </Typography>
        <Typography variant="h6" color="primary">
          Ціна: {product.price} грн
        </Typography>

        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          {product.description}
        </Typography>
      </DialogContent>
    </Dialog>
  );
};

export default ProductDialog;
