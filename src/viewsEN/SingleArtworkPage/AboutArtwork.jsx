import React from "react";

function AboutArtwork() {
  return (
    <div
      className="tab-pane fade show active "
      id="detail-artwork1"
      role="tabpanel"
      aria-labelledby="home-tab"
    >
      <table className="table-main" id="about-artwork">
        <tbody>
          <tr>
            <td>Signed</td>
            <td>Sadeq Adhaam 1939 - 2018 (bottom,right)</td>
          </tr>
          <tr>
            <td>Category</td>
            <td>Sculpture</td>
          </tr>
          <tr>
            <td>Size</td>
            <td>50 * 70 cm</td>
          </tr>
          <tr>
            <td>Date</td>
            <td>1989.08.09</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default AboutArtwork;
