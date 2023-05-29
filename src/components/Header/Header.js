import React from 'react';


const Header = () => {
  return (
    <div>
      <div class='row main-heading '>
        <div class='col-md-7'>
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
        <div class='col-md-5'>
          <h6 class='fw-bold p-4'><i class="fas fa-phone"></i>&nbsp;<small className='mr-4'>01837-241100</small>&nbsp;<i class="fas fa-fax"></i>&nbsp;<small className='mr-4'>02334496523</small> &nbsp;<i class="fa-solid fa-envelope"></i>&nbsp;<small>info@nstu.edu.bd</small></h6>
        </div>
      </div>
    </div>
  );
};

export default Header;