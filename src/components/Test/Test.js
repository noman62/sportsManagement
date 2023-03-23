import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { selectUser } from '../../features/userSlice/userSlice'

const Test = () => {
  const [allUser, setAllUser] = useState([])
  const history = useHistory()
  const user = useSelector(selectUser)
  const getAllUser = async () => {
    const { data } = await axios.get(
      'http://localhost:8000/api/allUser'
    )
    setAllUser(data)
    console.log(data)
  }
  useEffect(() => {
    getAllUser()
  }, [])
  const handleDelete = id => {
    console.log("delete",id);
    fetch(`http://localhost:8000/api/delete/${id}`, {
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
            <th>SN</th>
            <th>Name</th>
            <th>Email</th>
       
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
                      <td>{donar.name}</td>
                      <td>{donar.email}</td>
                    

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

export default Test
