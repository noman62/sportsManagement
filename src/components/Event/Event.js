import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import RequestModal from '../RequestModal/RequestModal'
import './Event.css'
const Event = () => {
  let history = useHistory()
  const [appointmentInfo, setAppointmentInfo] = useState([])

  const getAppointments = async () => {
    const { data } = await axios.get('https://sportsmangement.onrender.com/api/allNotice')

    setAppointmentInfo(data)
  }

  useEffect(() => {
    getAppointments()
  }, [])

  return (
    <div>
      <Navbar />
      <div class='row mb-3'>
        <div class='col-md-12'>
          <div class=' text-center donate-main  bg-1'></div>
        </div>
      </div>
      <div class='row m-3'>
        {appointmentInfo.map((event, index) => {
          return (
            <>
              <div class='col-sm-4 mt-1'>
                <div class='card'>
                  <div class='card-body'>
                    <h5 class='card-title'>{event.eventName}</h5>
                    <p className='description'>
                     {event.lastDate}
                    </p>
                    <RequestModal />
                  </div>
                </div>
              </div>
            </>
          )
        })}
      </div>
    </div>
  )
}

export default Event
