import axios from 'axios'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { selectUser } from '../../features/userSlice/userSlice'
import Navbar from '../Navbar/Navbar'

import './UploadProduct.css'
const UploadProduct = () => {
  const history = useHistory()
  const [imageURL, setImageURL] = useState(null)
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState({
    productName: '',
    productType: '',
    imageURL: ''
  })
  const newUser = useSelector(selectUser)
  //Handle form state
  const handleChange = e => {
    const newUserInfo = { ...user }
    newUserInfo[e.target.name] = e.target.value
    setUser(newUserInfo)
  }
  const handleImageUpload = event => {
    console.log(event.target.files)
    const imageData = new FormData()
    imageData.set('key', '668f9a81c863630a432f6a4184904575')
    imageData.append('image', event.target.files[0])

    axios
      .post('https://api.imgbb.com/1/upload', imageData)
      .then(res => {
        console.log(res.data.data.display_url)
        setImageURL(res.data.data.display_url)
        setUser({ ...user, imageURL: res.data.data.display_url })
      })
      .catch(error => {
        console.log(error)
      })
  }

  const handleSubmit = e => {
    e.preventDefault()
    setLoading(true)
    axios
      .post('https://sportsmangement.onrender.com/api/addProduct', {
        ...user,
      })
      .then(response => {
        console.log('success', response)
        setTimeout(() => {
          setLoading(false)
        }, 2000)
        history.push('home')
      })
      .catch(error => {
        console.log(error.response)
      })
  }

  return (
    <div>
      
      <Navbar />
      <div className='container'>
        <div style={{ marginLeft: '200px' }}>
          <div className='row'>
            <div id='upload' className='  col-8'>
              <form className='upload-form' onSubmit={handleSubmit}>
                <div className='form-row'>
                  <div className='form-group col-md-12'>
                    <label for='notice-number'>Item Name</label>
                    <input
                      type='text'
                      className='form-control form-control-sm'
                      id='notice-number'
                      required
                      placeholder='Type Item name'
                      onChange={handleChange}
                      name='productName'
                      //   onChange={handleChange}
                      defaultValue=''
                    />
                  </div>
                </div>
             
                <div class='form-row'>
                  <div class='form-group col-md-12'>
                    <select
                      class='form-select'
                      aria-label='Default select example'
                      name='productType'
                      onChange={handleChange}
                    >
                      <option selected>Item category</option>
                      <option>cricket-shoes</option>
                      <option>cricket-ball</option>
                      <option>cricket-bet</option>
                      <option>football-shoes</option>
                      <option>football-ball</option>
                      <option>football-boots</option>
                      <option >badminton-flower</option>
                      <option >badminton-racket</option>
                      <option >badminton-racket</option>
                      <option >badminton-shoes</option>
                    
                    </select>
                  </div>
                </div>
                <div class='form-row'>
                  <div class='form-group col-md-12'>
                    <label for='files'>Select Images:</label>
                    <input
                      class='form-control'
                      type='file'
                      id='files'
                      required
                      multiple
                      name='imageURL'
                      onChange={handleImageUpload}
                      // onChange={handleImageUpload}
                    />
                  </div>
                </div>
                <div className='form-row'>
                  <div className='form-group col-md-12 text-center'>
                    <button type='submit' className=' btn btn-info w-50'>
                      Submit{' '}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default UploadProduct
