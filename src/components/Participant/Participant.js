import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/userSlice/userSlice'

const Participant = () => {
  const [allUser, setAllUser] = useState([])
  const user = useSelector(selectUser)
  console.log(user.user.email)

  const getAllUser = async () => {
    const { data } = await axios.get(
      `https://sportsmangement.onrender.com/api/user-donation?email=${user.user.email}`
    )
    setAllUser(data)
    console.log(data)
  }
  useEffect(() => {
    getAllUser()
  }, [])
  return (
    <div>
      <table class='table'>
        <thead>
          <tr>
            <th>Index No</th>
            <th>Name</th>
            <th>department</th>
            <th>session</th>
            <th>Student ID</th>
            <th>Event</th>
         
          </tr>
        </thead>
        <tbody>
          {allUser.map((donar, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{donar.name}</td>
                <td>{donar.department}</td>
                <td>{donar.session}</td>
                <td>{donar.roll}</td>
                <td>{donar.eventType}</td>
                {/* <td>{donar.status}</td> */}
               
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Participant
