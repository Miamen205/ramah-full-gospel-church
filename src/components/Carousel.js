import React, { Component } from "react";

class Carousel extends Component {
  render() {
    return (
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            class="active"
          />
          <li data-target="#carouselExampleIndicators" data-slide-to="1" />
          <li data-target="#carouselExampleIndicators" data-slide-to="2" />
        </ol>
        <div class="carousel-inner" role="listbox">
          <div class="carousel-item active">
            <img
              id="image"
              class="d-block img-fluid"
              src="https://i.imgur.com/70c83AN.gif"
              alt=" The R4C Boy"
            />
          </div>
          <div class="carousel-item">
            <img
              id="image"
              class="d-block img-fluid"
              src="https://i.imgur.com/G4SCZlj.jpg"
              alt="Second slide"
            />
          </div>
          <div class="carousel-item">
            <img
              id="image"
              class="d-block img-fluid"
              src="https://i.imgur.com/B4Pyk5Z.jpg"
              alt="Third slide"
            />
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true" />
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true" />
          <span class="sr-only">Next</span>
        </a>
      </div>
    );
  }
}
export default Carousel;
