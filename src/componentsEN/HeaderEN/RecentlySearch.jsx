import React from "react";

function RecentlySearch() {
  return (
    <div class="col-md-3 col-lg-2 d-none d-md-block">
      <div class="recently-search">
        <h6 class="default">Recently searches</h6>
        <ul>

            {[1, 2, 3, 4].map((search , key) => (

                <React.Fragment key={key}>
                    <li>
                        <a href="#">Jewellery</a>
                        <button type="button" class="btn-remove small"></button>
                    </li>
                </React.Fragment>
            ))}


        </ul>
      </div>
    </div>
  );
}

export default RecentlySearch;
