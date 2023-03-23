import React from 'react';


const Header = () => {
    return (
        <div>
                 <div class='row main-heading '>
          <div class='col-md-9'>
            <img
              class='nstu_logo p-2'
              src='image/Logo_of_Noakhali_Science_and_Technology_University.gif'
              alt='NSTU LOGO'
            />
            <div class='nstu'>
              <h5 class='text-uppercase text-left font-weight-bolder'>
                Noakhali Science and Technology University
              </h5>
              <h5 class='text-uppercase text-left font-weight-bolder'>
                Department of Physical Education
              </h5>
            </div>
          </div>
          <div class='col-md-3'>
            <h6 class='fw-bold p-4'>Phone:<small>02334496522 ;</small>Fax:<small>02334496523</small></h6>
          </div>
        </div>
        </div>
    );
};

export default Header;