import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";

import useStyles from "./styles";
import { Reveal } from "react-reveal";

const ProdoctItem = ({ product, onAddToCart }) => {
  const classes = useStyles();

  return (
    <Reveal effect="fadeInUp">
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={product.image.url}
          title={product.name}
        ></CardMedia>
        <CardContent className={classes.CardContentContainer}>
          <div className={classes.CardContent}>
            <Typography variant="h5">{product.name}</Typography>
            <Typography variant="h5">
              {product.price.formatted_with_symbol}
            </Typography>
          </div>
          <Typography
            dangerouslySetInnerHTML={{ __html: product.description }}
            variant="body2"
            color="textSecondary"
          />
        </CardContent>
        <CardActions disableSpacing className={classes.cardActions}>
          <IconButton
            className={classes.AddIconBtn}
            aria-label="Add to Cart"
            id={product.id}
            onClick={() => onAddToCart(product.id, 1)}
          >
            <AddShoppingCart></AddShoppingCart>
          </IconButton>
        </CardActions>
      </Card>
    </Reveal>
  );
};

export default ProdoctItem;
