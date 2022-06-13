import React from "react";

import { Reveal } from "react-reveal";
import "./ProductItem.css";

const ProdoctItem = ({ product }) => {
  return (
    <div className="card-container">
      <Reveal effect="fadeInUp">
        <div className="card">
          <div className="imgBx">
            <img src={product.image.url} alt="img" />
          </div>
          <div className="content">
            <div className="details">
              <h2>
                {product.name} <br />
                {/* <span>Software engineerer</span> */}
              </h2>
              <div className="description">
                <h3
                  dangerouslySetInnerHTML={{ __html: product.description }}
                ></h3>
              </div>
              <div className="price">
                <h3>{product.price.formatted_with_symbol}</h3>
              </div>
            </div>
          </div>
        </div>
        {/* <CardActions disableSpacing className={classes.cardActions}>
          <IconButton
            className={classes.AddIconBtn}
            aria-label="Add to Cart"
            id={product.id}
            onClick={() => onAddToCart(product.id, 1)}
          >
            <AddShoppingCart></AddShoppingCart>
          </IconButton>
        </CardActions> */}
        {/* </Card> */}
      </Reveal>
    </div>
  );
};

export default ProdoctItem;
