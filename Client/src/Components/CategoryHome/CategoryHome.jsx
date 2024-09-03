import React from 'react';

function CategoryHome() {

    const categories = [
      { cities: '07 Cities', icon: 'fa-stethoscope', name: 'Dentists', listings: 607 },
      { cities: '17 Cities', icon: 'fa-building', name: 'IT & Banking', listings: 76 },
      { cities: '19 Cities', icon: 'fa-shopping-basket', name: 'Shoppings', listings: 112 },
      { cities: '32 Cities', icon: 'fa-screwdriver', name: 'Home Services', listings: 322 },
      { cities: '27 Cities', icon: 'fa-basketball-ball', name: 'Active Life', listings: 161 },
      { cities: '26 Cities', icon: 'fa-utensils', name: 'Restaurants', listings: 172 },
      { cities: '10 Cities', icon: 'fa-book-open', name: 'Education', listings: 144 },
      { cities: '24 Cities', icon: 'fa-house-damage', name: 'Real Estate', listings: 210 },
      { cities: '18 Cities', icon: 'fa-wine-glass', name: 'Event Planning', listings: 241 },
      { cities: '06 Cities', icon: 'fa-car-alt', name: 'Automotive', listings: 52 },
      { cities: '08 Cities', icon: 'fa-pencil-ruler', name: 'Art & Design', listings: 97 },
      { cities: '05 Cities', icon: 'fa-plane', name: 'Hotel & Travel', listings: 42 },
    ];
    
  return (
    <>
      {/* <!-- ======================= Listing Categories ======================== --> */}
      <section className="space min gray">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <div className="sec_title position-relative text-center mb-5">
                <h6 className="mb-0 theme-cl">Popular Categories</h6>
                <h2 className="ft-bold">Browse Top Categories</h2>
              </div>
            </div>
          </div>

          {/* <!-- row --> */}
          <div className="row align-items-center">
            {categories.map((category, index) => (
              <div
                key={index}
                className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6"
              >
                <div className="cats-wrap text-center">
                  <a href="listing-search-v1.html" className="Goodup-catg-wrap">
                    <div className="Goodup-catg-city">{category.cities}</div>
                    <div className="Goodup-catg-icon">
                      <i className={`fas ${category.icon}`}></i>
                    </div>
                    <div className="Goodup-catg-caption">
                      <h4 className="fs-md mb-0 ft-medium m-catrio">
                        {category.name}
                      </h4>
                      <span className="text-muted">
                        {category.listings} Listings
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            ))}
          </div>
          {/* <!-- row --> */}
        </div>
      </section>
      {/* <!-- ======================= Listing Categories End ======================== --> */}
    </>
  );
}

export default CategoryHome;
