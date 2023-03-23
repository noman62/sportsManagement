import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/userSlice/userSlice'

const UserRequest = () => {
  const [allUser, setAllUser] = useState([])
  const user = useSelector(selectUser)
  console.log(user.user.email)

  const getAllUser = async () => {
    const { data } = await axios.get(
      `http://localhost:8000/api/requests?email=${user.user.email}`
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
            <th>Department</th>
            <th>session</th>
            <th>Student ID</th>
            <th>Mobile</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {allUser.map((donar, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{donar.name}</td>
                <td>{donar.name}</td>
                <td>{donar.department}</td>
                <td>{donar.session}</td>
                <td>{donar.roll}</td>
                <td>{donar.mobile}</td>
                <td>
                  {donar.status === 'Pending' ? (
                    <>
                      <button className='btn btn-warning'>Pending</button>
                    </>
                  ) : (
                    <>
                      <button className='btn btn-success'>Approved</button>
                    </>
                  )}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default UserRequest
