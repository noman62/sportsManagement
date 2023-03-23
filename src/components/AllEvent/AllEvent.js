import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { selectUser } from '../../features/userSlice/userSlice'

const AllEvent = () => {
  const [allUser, setAllUser] = useState([])
  const history = useHistory()
  const user = useSelector(selectUser)
  const getAllUser = async () => {
    const { data } = await axios.get('https://sportsmangement.onrender.com/api/events')
    setAllUser(data)
    console.log(data)
  }
  useEffect(() => {
    getAllUser()
  }, [])
  const handleDelete = id => {
    console.log("emon",id);
    fetch(`https://sportsmangement.onrender.com/api/deleteEvent/${id}`, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(result => {
        if (result) {
          window.alert(" delete successfully")
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
            <th>EventName</th>
            <th>Event Type</th>
            <th>Indoor/Outdoor</th>
            <th>Last Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {allUser.map((event, index) => {
            return (
              <>
                {user !== null && user.user && user.user.role === 'admin' && (
                  <>
                    <tr>
                      <td>{index + 1}</td>
                      <td>{event.eventName}</td>
                      <td>{event.gender}</td>
                      <td>{event.gameType}</td>
                      <td>{event.lastDate}</td>

                      <td>
                        <button
                          onClick={() => handleDelete(event._id)}
                          className='btn btn-danger ml-2'
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  </>
                )}
              </>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default AllEvent
