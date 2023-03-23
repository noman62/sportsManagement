import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { selectUser } from '../../features/userSlice/userSlice'

const AllProduct = () => {
  const [allUser, setAllUser] = useState([])
  const history = useHistory()
  const user = useSelector(selectUser)
  const getAllUser = async () => {
    const { data } = await axios.get('http://localhost:8000/api/products')
    setAllUser(data)
    console.log(data)
  }
  useEffect(() => {
    getAllUser()
  }, [])
  const handleDelete = id => {
    console.log("emon",id);
    fetch(`http://localhost:8000/api/deleteProduct/${id}`, {
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
            <th>Product Name</th>
            <th>Product Type</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {allUser.map((product, index) => {
            return (
              <>
                {user !== null && user.user && user.user.role === 'admin' && (
                  <>
                    <tr>
                      <td>{index + 1}</td>
                      <td>{product.productName}</td>
                      <td>{product.productType}</td>
                  

                      <td>
                        <button
                          onClick={() => handleDelete(product._id)}
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

export default AllProduct
