import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Navbar from '../Navbar/Navbar'

const TeacherEvent = () => {
  

  const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://sportsmangement.onrender.com/api/events')
      .then(res => res.json())
      .then(data1 => setData(data1))
  }, [])
  const allIndoor = data.filter(
    item => item.gender === 'Teacher' && item.gameType === 'Indoor'
  )

  const allOutdoor = data.filter(
    item => item.gender === 'Teacher' && item.gameType === 'Outdoor'
  )

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
              <h1>Teacher's Events</h1>
              <p>
              Every year Nstu Department of Physical Education arranged so many Exciting Men's Indoor and Outdoor Event.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class='container py-4'>
        <div class='row'>
          <div class='col-sm-12 text-center p-4 pb-4'>
            <h1>Outdoor Games</h1>
          </div>
        </div>
        <div class='row'>
          {allOutdoor.map(latest => {
            return (
              <div className='col-sm-4 pb-3 event-item'>
                <div className='events p-4'>
                  <h3>{latest.eventName}</h3>
                  <p>{latest.eventDetails}</p>
                </div>
              </div>
            )
          })}
        </div>
        <div class='row'>
          <div class='col-sm-12 text-center p-4 pb-4'>
            <h1>Indoor Games</h1>
          </div>
        </div>
        <div class='row'>
          {allIndoor.map(latest => {
            return (
              <div className='col-sm-4 pb-3 event-item'>
                <div className='events p-4'>
                  <h3>{latest.eventName}</h3>
                  <p>{latest.eventDetails}</p>
                </div>
              </div>
            )
          })}
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

export default TeacherEvent
