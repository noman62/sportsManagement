import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { selectUser } from '../../features/userSlice/userSlice'

const AllParticipant = () => {
  const [allUser, setAllUser] = useState([])
  const user = useSelector(selectUser)
  const history = useHistory()
  console.log(user.user.email)

  const getAllUser = async () => {
    const { data } = await axios.get(
      'https://sportsmangement.onrender.com/api/registrations'
    )
    setAllUser(data)
    console.log(data)
  }
  useEffect(() => {
    getAllUser()
  }, [])
  const updateStatus = async id => {
    console.log(id)
    axios
      .put(`https://sportsmangement.onrender.com/api/update/${id}`, {
        withCredentials: true
      })
      .then(res => {
        console.log('success', res)
        window.alert("approved Successfully")
        window.location.reload(false)
        history.push('admindeshboard')
      })
      .catch(error => {
        console.log(error.response)
      })
  }

  const handleDelete = id => {
    fetch(
      `https://sportsmangement.onrender.com/api/deleteDonation/${id}`,
      {
        method: 'DELETE'
      }
    )
      .then(res => res.json())
      .then(result => {
        if (result) {
          window.alert("delete successfully")
          window.location.reload(false)
          history.push('admindeshboard')
        }
      })
  }
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
            <th></th>
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
           
                <td>
                  <button
                    onClick={() => handleDelete(donar._id)}
                    className='btn btn-danger ml-2'
                  >
                    Delete
                  </button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default AllParticipant
