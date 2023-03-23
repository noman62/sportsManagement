import { $CombinedState } from '@reduxjs/toolkit'
import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Table } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import Navbar from '../../Navbar/Navbar'
const Tabble_Tennis = () => {
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
      <h1 className='text-center my-3'>Football Fixture:</h1>
      <Table striped bordered hover className='w-75 mt-5 mx-auto text-center'>
      <thead>
        <tr>
          <th>Date and Time</th>
          <th>Match and Score</th>
          <th>Winner</th>
        </tr>
      </thead>
      <tbody>
      {appointmentInfo.map((fixture, index) => {
          return (
            
        <tr className=''>
          <td>
            <p>{fixture.date}</p>
          <h5>{fixture.time}</h5>
          </td>
          <td>
            <h5>{fixture.match}</h5>
          <h6>{fixture.result}</h6>
          </td>
          <td><h3>{fixture.win}</h3></td>
        </tr>
          )
        })}
      </tbody>
    </Table>
    </div>
  )
}

export default Tabble_Tennis
