import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { selectUser } from '../../features/userSlice/userSlice'

const AllNotice = () => {
  const [allUser, setAllUser] = useState([])
  const history = useHistory()
  const user = useSelector(selectUser)
  const getAllUser = async () => {
    const { data } = await axios.get('https://sportsmangement.onrender.com/api/allNotice')
    setAllUser(data)
    console.log(data)
  }
  useEffect(() => {
    getAllUser()
  }, [])
  const handleDelete = id => {
    console.log("emon",id);
    fetch(`https://sportsmangement.onrender.com/api/deleteNotice/${id}`, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(result => {
        if (result) {
          window.alert("Approved delete successfully")
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
            <th>Title</th>
            <th>EventName</th>
            <th>Last Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {allUser.map((donar, index) => {
            return (
              <>
                {user !== null && user.user && user.user.role === 'admin' && (
                  <>
                    <tr>
                      <td>{index + 1}</td>
                      <td>{donar.title}</td>
                      <td>{donar.eventName}</td>
                      <td>{donar.lastDate}</td>

                      <td>
                        <button
                          onClick={() => handleDelete(donar._id)}
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

export default AllNotice
