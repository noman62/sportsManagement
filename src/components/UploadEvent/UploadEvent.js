import axios from 'axios'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { selectUser } from '../../features/userSlice/userSlice'
import Navbar from '../Navbar/Navbar'

import './UploadEvent.css'
const UploadEvent = () => {
  const history = useHistory()
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState({
    eventName: '',
    eventDetails: '',
    lastDate: '',
    gender: '',
    gameType: ''
  })
  const newUser = useSelector(selectUser)
  //Handle form state
  const handleChange = e => {
    const newUserInfo = { ...user }
    newUserInfo[e.target.name] = e.target.value
    setUser(newUserInfo)
  }

  const handleSubmit = e => {
    e.preventDefault()
    setLoading(true)
    axios
      .post('http://localhost:8000/api/addEvent', {
        ...user
      })
      .then(response => {
        console.log('success', response)
        setTimeout(() => {
          setLoading(false)
        }, 2000)
        history.push('home')
      })
      .catch(error => {
        console.log(error.response)
      })
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
      <Navbar />
      <div className='container'>
        <div style={{ marginLeft: '200px' }}>
          <div className='row'>
            <div id='upload' className='  col-8'>
              <form className='upload-form' onSubmit={handleSubmit}>
                <div className='form-row'>
                  <div className='form-group col-md-12'>
                    <label for='notice-number'>Event Name</label>
                    <input
                      type='text'
                      className='form-control form-control-sm'
                      id='notice-number'
                      required
                      placeholder='Enter Event Name'
                      onChange={handleChange}
                      name='eventName'
                      //   onChange={handleChange}
                      defaultValue=''
                    />
                  </div>
                </div>
                <div className='form-row'>
                  <div className='form-group col-md-12'>
                    <label for='notice-number'>Event Description</label>
                    <input
                      type='text'
                      className='form-control form-control-sm'
                      id='notice-number'
                      required
                      placeholder='Event Details'
                      onChange={handleChange}
                      name='eventDetails'
                      defaultValue=''
                    />
                  </div>
                </div>
                <div className='form-row'>
                  <div className='form-group col-md-12'>
                    <label for='notice-number'>Last Date</label>
                    <input
                      type='text'
                      className='form-control form-control-sm'
                      id='notice-number'
                      required
                      placeholder='Last date'
                      onChange={handleChange}
                      name='lastDate'
                      defaultValue=''
                    />
                  </div>
                </div>
                <div class='form-row'>
                  <div class='form-group col-md-12'>
                    <select
                      class='form-select'
                      aria-label='Default select example'
                      name='gender'
                      onChange={handleChange}
                    >
                      <option selected>Select Option</option>
                      <option>Man</option>
                      <option>Woman</option>
                      <option>Teacher</option>
                    </select>
                  </div>
                </div>

                <div class='form-row'>
                  <div class='form-group col-md-12'>
                    <select
                      class='form-select'
                      aria-label='Default select example'
                      name='gameType'
                      onChange={handleChange}
                    >
                      <option selected>Select Event Type</option>
                      <option>Indoor</option>
                      <option>Outdoor</option>
                    </select>
                  </div>
                </div>
                <div className='form-row'>
                  <div className='form-group col-md-12 text-center'>
                    <button type='submit' className=' btn btn-info w-50'>
                      Submit{' '}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* <div class='footer bg-dark text-light mt-3'>
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

export default UploadEvent
