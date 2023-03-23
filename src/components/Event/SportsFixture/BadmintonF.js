import { $CombinedState } from '@reduxjs/toolkit'
import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Table } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import Navbar from '../../Navbar/Navbar'
const BadmintonF = () => {
  let history = useHistory()
  const [appointmentInfo, setAppointmentInfo] = useState([])

  const getAppointments = async () => {
    const { data } = await axios.get('http://localhost:8000/api/allfixture')
console.log(data)
    setAppointmentInfo(data)
  }

  useEffect(() => {
    getAppointments()
  }, [])

  return (
    <div>
      <Navbar />
      <div className='mt-5 text-center mx-auto w-50'>
      </div>
      <h1 className='text-center my-3'>Badminton Fixture:</h1>
      <Table striped bordered hover className='w-75 mt-5 mx-auto text-center'>
      <thead>
        <tr>
          <th  className='bg-dark text-light'>Date and Time</th>
          <th  className='bg-dark text-light'>Match and Score</th>
          <th  className='bg-dark text-light'>Winner</th>
        </tr>
      </thead>
      <tbody>
      {appointmentInfo.map((fixture, index) => {
          return (
            
            <tr>
            <td  className='bg-success text-white'>
              <p>{fixture.date}</p>
            <h6>{fixture.time}</h6>
            </td>
            <td  className='bg-info text-dark'>
              <h5>{fixture.match}</h5>
            <h4>{fixture.result}</h4>
            </td>
            <td  className='bg-primary text-light'>
              <h3>{fixture.win}</h3>
              </td>
          </tr>
          )
        })}
      </tbody>
    </Table>
    </div>
  )
}

export default BadmintonF
