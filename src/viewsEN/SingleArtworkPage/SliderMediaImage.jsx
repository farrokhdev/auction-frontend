import React from "react";

function SliderMediaImage({artwork}) {

  return (
    <div className="col-lg-6">
      <div
        id="inner-artwork"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-touch="false"
      >
        <div className="carousel-indicators ">

        {artwork?.media?.length ? artwork?.media?.map((img , index)=> (
            <button
              type="button"
              data-bs-target="#inner-artwork"
              data-bs-slide-to={index}
              className="active"
              aria-current="false"
              aria-label={`Slide ${index + 1}`}
          >
            <img
              src={img?.exact_url}
              style={{width : '100px' , height : '100px'}}
              className="img-fluid w-100 d-xl-block"
              alt="..."
            />
          </button>

        )) : ''}

        </div>

        <div className="carousel-inner ">

        {artwork?.media?.length ? artwork?.media?.map(img => (

              <div className="carousel-item active">
                <img
                  src={img?.exact_url}
                  style={{width : '547px' , height : '547px'}}
                  className="d-block img-fluid w-100"
                  alt="..."
                />
              </div>
              
        )) : ''}

        </div>
      </div>
    </div>
  );
}

export default SliderMediaImage;
