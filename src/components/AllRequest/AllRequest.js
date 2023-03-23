import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { selectUser } from '../../features/userSlice/userSlice'
import createHistory from 'history/createBrowserHistory'
const AllRequest = () => {
  const [allUser, setAllUser] = useState([])
  const user = useSelector(selectUser)
  const history = useHistory()
  const getAllUser = async () => {
    const { data } = await axios.get(
      'http://localhost:8000/api/allrequest'
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
      .put(
        `http://localhost:8000/api/updateRequest/${id}`,
        { withCredentials: true }
      )
      .then(res => {
        console.log('success', res)
        // window.location.reload(false)

        // history.push('admindeshboard')
        window.alert("Approved Successfully")
        const history = createHistory()
        history.go(0)
      })
      .catch(error => {
        console.log(error.response)
      })
  }
  const handleDelete = id => {
    fetch(
      `http://localhost:8000/api/deleteRequest/${id}`,
      {
        method: 'DELETE'
      }
    )
      .then(res => res.json())
      .then(result => {
        if (result) {
          // window.location.reload(false)
          // history.push('admindeshboard')
          window.alert("delete successfully")
          const history = createHistory()
          history.go(0)
        }
      })
  }
  return (
    <div>
      <table class='table'>
        <thead>
          <tr>
          <th>SN</th>
            <th>Name</th>
            <th>Department</th>
            <th>session</th>
            <th>Student ID</th>
            <th>Mobile</th>
            <th>Status</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {allUser.map((donar, index) => {
            return (
              <tr>
                <td>{index+1}</td>
                <td>{donar.name}</td>
                <td>{donar.department}</td>
                <td>{donar.session}</td>
                <td>{donar.roll}</td>
                <td>{donar.mobile}</td>
                <td>
                  {donar.status === 'Pending' ? (
                    <>
                      <button
                        onClick={() => updateStatus(donar._id)}
                        className='btn btn-warning'
                      >
                        Pending
                      </button>
                    </>
                  ) : (
                    <>
                      <button className='btn btn-success'>Approved</button>
                    </>
                  )}
                </td>
                <td>
                  {' '}
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

export default AllRequest
