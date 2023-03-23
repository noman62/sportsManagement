import React from 'react'
import Navbar from '../Navbar/Navbar'
import Image from './Logo_of_Noakhali_Science_and_Technology_University.gif'
import './Item.css'
import axios from 'axios'
import { useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { useState } from 'react'
import ProductModal from '../ProductModal/ProductModal'

const Item = () => {
  const { key } = useParams()
  const [appointmentInfo, setAppointmentInfo] = useState([])

  const getAppointments = async () => {
    const { data } = await axios.get(`https://sportsmangement.onrender.com/api/search/${key}`)

    setAppointmentInfo(data)
  }

  useEffect(() => {
    getAppointments()
  }, [])

  return (
    <div>
      {/* <div class='row main-heading '>
        <div class='col-md-9'>
          <img class='nstu_logo p-2' src={Image} alt='NSTU LOGO' />
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
      <Navbar />

      <div class='container-fluid donated-product'>
        <div class='row'>
          <div class='col-sm-12 text-center p-3'>
            <h1>
              <b>Available Product :{appointmentInfo.length}</b>
            </h1>
          </div>
        </div>

        <div class='row p-4'>
          {appointmentInfo.map((product, index) => {
            return (
              <>
                <div class='col-md-3  mb-3 col-sm-6 '>
                  <div class='product-d   text-center'>
                    <img class='h-50  w-100' src={product.imageURL} alt='' />

                    <p>
                      <p>{product.productName}</p>
                    </p>

                    <ProductModal />
                  </div>
                </div>
              </>
            )
          })}
        </div>
        <div class='row '></div>
      </div>
      <div>
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
    </div>
  )
}

export default Item
