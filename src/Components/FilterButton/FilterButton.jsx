import { Button, Container, Typography } from "@material-ui/core";
import {
  MDBInput,
  MDBModal,
  MDBModalBody,
  MDBModalFooter,
  MDBModalHeader,
} from "mdbreact";
import React, { useState } from "react";
import { Reveal } from "react-reveal";
import "./FilterButton.css";

const FilterButton = ({
  setSearchTerm,
  setFilters,
  filters,
  searchTerm,
  categories,
  checkHandler,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  function clearFilter() {
    setSearchTerm("");
    setFilters([]);
  }

  return (
    <div>
      <div className="filter-btn-container">
        <Reveal effect="fadeInRight">
          <button className="filter-btn" onClick={toggleModal}>
            <i className="fa-solid fa-filter"></i>
          </button>
        </Reveal>

        <MDBModal isOpen={isOpen} toggle={toggleModal} className="filterModal">
          <MDBModalHeader toggle={toggleModal}>Filter</MDBModalHeader>
          <MDBModalBody className="filterModalBody">
            <Container>
              <div className="">
                <h2 className="filterHeadings">Filters</h2>
                <MDBInput
                  label="Search"
                  value={searchTerm}
                  onChange={(event) => {
                    setSearchTerm(event.target.value);
                  }}
                  className="materialInput modal-filter-search"
                ></MDBInput>
                <h2 className="filterHeadings">Categories</h2>
                {categories.map((category) => (
                  <div className="form-check" key={category.id}>
                    <input
                      className="form-check-input"
                      id={category.id}
                      value={category.slug}
                      checked={filters.includes(category.slug) ? true : false}
                      type="checkbox"
                      onChange={(event) => {
                        checkHandler(event);
                      }}
                    ></input>
                    <label className="form-check-label" htmlFor={category.id}>
                      {category.name}
                    </label>
                  </div>
                ))}
              </div>
            </Container>
          </MDBModalBody>
          <MDBModalFooter>
            <Button
              type="button"
              className="btn filter-option-btn-clear"
              data-mdb-ripple-color="dark"
              onClick={clearFilter}
            >
              clear
            </Button>
            <Button
              type="button"
              className="btn filter-option-btn-search"
              data-mdb-ripple-color="dark"
              onClick={toggleModal}
            >
              Search
            </Button>
          </MDBModalFooter>
        </MDBModal>
      </div>
    </div>
  );
};

export default FilterButton;
