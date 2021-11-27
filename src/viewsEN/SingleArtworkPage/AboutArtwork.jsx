import React from "react";
import momentJalaali from 'moment-jalaali';

function AboutArtwork({artwork}) {
  return (
    <div
      className="tab-pane fade show active "
      id="detail-artwork1"
      role="tabpanel"
      aria-labelledby="home-tab"
    >
      <table className="table-main" id="about-artwork">
        <tbody>
          {/* <tr>
            <td>Signed</td>
            <td>Sadeq Adhaam 1939 - 2018 (bottom,right)</td>
          </tr> */}
          <tr>
            <td>Category</td>
            <td>{ artwork?.category ?  artwork?.category?.map(item => (
                    <span className="mx-1">{item?.title_en}</span>
                )) : ''}</td>
          </tr>
          <tr>
            <td>Size</td>
            <td>
              <span>
                <div> {`${artwork?.artwork_height ? artwork?.artwork_height + ' * ' : ''}  ${artwork?.artwork_width ? artwork?.artwork_width : ''} * ${artwork?.artwork_length ? artwork?.artwork_length : ''}`} </div>                 
              </span>
            </td>
          </tr>
          <tr>
            <td>Date</td>
            <td>{artwork?.creation_date ? momentJalaali(artwork?.creation_date).format(`YYYY.MM.DD`) : ''}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default AboutArtwork;
