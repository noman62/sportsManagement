import React from 'react'
import { useHistory } from 'react-router-dom';
import Navbar from '../Navbar/Navbar'

const SingleProduct = () => {
  let history=useHistory();
  const handleProduct=(id)=>{
    history.push(`/singleProduct/${id}`);
}
  return (
    <div>
      {/* <div class='row main-heading '>
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
              Department of Department of Physical Education
            </h5>
          </div>
        </div>
        <div class='col-md-3'>
          <h2 class=' e-notice p-3'></h2>
        </div>
      </div> */}
      <div>
        <Navbar />
      </div>

      <div class='event-main-page'>
        <div class='container dept text-center'>
          <div class='row'>
            <div class='col-sm-12'>
              <h1>Sports Item</h1>
            </div>
          </div>
        </div>
      </div>
    

      {/* <div class='footer bg-dark text-light'>
        <div class='container'>
          <div class='row'>
            <div class='col-sm-12'>
              <h1>Lorem, ipsum dolor.</h1>
              <p>
                <b>Phone :</b> 7r8374823
              </p>
              <p>
                <b>Mobile :</b> 7r8374823
              </p>
              <p>
                <b>Email :</b> 7r8374823
              </p>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default SingleProduct
