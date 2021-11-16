import React from "react";

function SliderMediaImage() {
  return (
    <div className="col-lg-6">
      <div
        id="inner-artwork"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-touch="false"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#inner-artwork"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          >
            <img
              src="https://picsum.photos/seed/picsum/100/100"
              width="547"
              height="547"
              className="img-fluid w-100 d-xl-block"
              alt="..."
            />
          </button>
          <button
            type="button"
            data-bs-target="#inner-artwork"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          >
            <img
              src="https://picsum.photos/100/100"
              width="547"
              height="547"
              className="d-xl-block img-fluid w-100"
              alt="..."
            />
          </button>
          <button
            type="button"
            data-bs-target="#inner-artwork"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          >
            <img
              src="https://picsum.photos/100/100/"
              width="547"
              height="547"
              className="d-xl-block img-fluid w-100"
              alt="..."
            />
          </button>
          <button
            type="button"
            data-bs-target="#inner-artwork"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          >
            <img
              src="https://picsum.photos/100/100"
              width="547"
              height="547"
              className="d-xl-block img-fluid w-100"
              alt="..."
            />
          </button>
          <button
            type="button"
            data-bs-target="#inner-artwork"
            data-bs-slide-to="4"
            aria-label="Slide 5"
          >
            <img
              src="img/img-5.jpg"
              width="547"
              height="547"
              className="d-xl-block img-fluid w-100"
              alt="..."
            />
          </button>
          <button
            type="button"
            data-bs-target="#inner-artwork"
            data-bs-slide-to="5"
            aria-label="Slide 6"
          >
            <img
              src="https://picsum.photos/id/237/100/100"
              width="547"
              height="547"
              className="d-xl-block img-fluid w-100"
              alt="..."
            />
          </button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://picsum.photos/seed/picsum/400/400"
              width="547"
              height="547"
              className="d-block img-fluid w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://picsum.photos/400/400"
              width="547"
              height="547"
              className="d-block img-fluid w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://picsum.photos/400/400/"
              width="547"
              height="547"
              className="d-block img-fluid w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://picsum.photos/400/400"
              width="547"
              height="547"
              className="d-block img-fluid w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://picsum.photos/id/237/400/400"
              width="547"
              height="547"
              className="d-block img-fluid w-100"
              alt="..."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SliderMediaImage;
