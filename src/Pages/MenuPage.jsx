import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import { MDBInput } from "mdbreact";
import { FilterButton, ProductItem } from "../Components";

import "../styles/MenuPage.css";
import { Reveal } from "react-reveal";

function MenuPage({ products, categories }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState([]);

  function checkHandler(e) {
    if (e.target.checked) {
      setFilters((oldArray) => [...oldArray, e.target.value]);
    } else {
      let newFilter = filters.filter((val) => {
        if (val !== e.target.value) {
          return val;
        } else {
          return null;
        }
      });
      setFilters(newFilter);
    }
  }

  function filterFuntion(val) {
    let temp = null;
    if (searchTerm === "") {
      temp = val;
    } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
      temp = val;
    }

    if (temp && temp.categories.length > 0 && filters.length > 0) {
      let exist = false;

      for (let i = 0; i < temp.categories.length; i++) {
        let test = filters.filter((val) => {
          if (val === temp.categories[i].slug) {
            return val;
          }
          return null;
        });

        if (test.length > 0) {
          exist = true;
          break;
        }
      }

      if (exist) {
        return temp;
      } else {
        return null;
      }
    } else if (filters.length > 0) {
      return null;
    }

    return temp;
  }

  return (
    <main>
      <div className="FilterButton">
        <FilterButton
          setSearchTerm={setSearchTerm}
          setFilters={setFilters}
          filters={filters}
          searchTerm={searchTerm}
          categories={categories}
          checkHandler={checkHandler}
        ></FilterButton>
      </div>
      <Grid
        container
        justifyContent="flex-start"
        spacing={4}
        className="shoppingContainer"
      >
        {products
          .filter((val) => {
            return filterFuntion(val);
          })
          .map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
              <ProductItem
                product={product}
                // onAddToCart={onAddToCart}
              ></ProductItem>
            </Grid>
          ))}
      </Grid>
    </main>
  );
}

export default MenuPage;
