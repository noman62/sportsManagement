import { SyncOutlined } from '@ant-design/icons'
import axios from 'axios'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { selectUser } from '../../features/userSlice/userSlice'

const ProductModal = () => {
  const history = useHistory()

  const [loading, setLoading] = useState(false)
  const [request, setRequest] = useState({
    name:"",
    department:"",
    session:"",
    roll:"",
    mobile:"",
    email:""
  })

  const user = useSelector(selectUser)

  const handleChange = e => {
    const newRequestInfo = { ...request }
    newRequestInfo[e.target.name] = e.target.value
    setRequest(newRequestInfo)
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setLoading(true)


    axios
      .post('http://localhost:8000/api/request', {
        ...request,
        email: user.user.email
      })
      .then(response => {
        console.log('success', response)
        setTimeout(() => {
          setLoading(false)
        }, 2000)

        history.push('/home')
      })
      .catch(error => {
        console.log(error.response)
      })
  }
  return (
    <div>
      <button
        type='button'
        class='btn btn-info'
        data-toggle='modal'
        data-target='#exampleModal'
      >
        Get Product
      </button>
      <div
        class='modal fade'
        id='exampleModal'
        tabindex='-1'
        role='dialog'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'
      >
        <div class='modal-dialog' role='document'>
          <div class='modal-content'>
            <div class='modal-header'>
              <h5 class='modal-title' id='exampleModalLabel'>
                Registration Form
              </h5>
              <button
                type='button'
                class='close'
                data-dismiss='modal'
                aria-label='Close'
              >
                <span aria-hidden='true'>&times;</span>
              </button>
            </div>
            <div class='modal-body'>
              <form className='upload-form' onSubmit={handleSubmit}>
                <div className='form-row'>
                  <div className='form-group col-md-12'>
                    <label for='short-title'>Name</label>
                    <input
                      type='text'
                      className='form-control form-control-sm'
                      id='short-title'
                      required
                      placeholder='Type Your Name'
                      onChange={handleChange}
                      name='name'
                      defaultValue=''
                    />
                  </div>
                </div>
             
             
                <div className='form-row'>
                  <div className='form-group col-md-12'>
                    <label for='short-title'>Department</label>
                    <input
                      type='text'
                      className='form-control form-control-sm'
                      id='short-title'
                      required
                      placeholder='Type your department name'
                      onChange={handleChange}
                      name='department'
                      defaultValue=''
                    />
                  </div>
                </div>
                <div className='form-row'>
                  <div className='form-group col-md-12'>
                    <label for='short-title'>Session</label>
                    <input
                      type='text'
                      className='form-control form-control-sm'
                      id='short-title'
                      required
                      placeholder='Type Your session'
                      onChange={handleChange}
                      name='session'
                      defaultValue=''
                    />
                  </div>
                </div>
                <div className='form-row'>
                  <div className='form-group col-md-12'>
                    <label for='short-title'>Student ID</label>
                    <input
                      type='text'
                      className='form-control form-control-sm'
                      id='short-title'
                      required
                      placeholder='Student ID'
                      onChange={handleChange}
                      name='roll'
                      defaultValue=''
                    />
                  </div>
                </div>
                <div className='form-row'>
                  <div className='form-group col-md-12'>
                    <label for='short-title'>Mobile Number</label>
                    <input
                      type='text'
                      className='form-control form-control-sm'
                      id='short-title'
                      required
                      placeholder='Mobile Number'
                      onChange={handleChange}
                      name='mobile'
                      defaultValue=''
                    />
                  </div>
                </div>

                <div className='form-row'>
                  <div className='form-group col-md-12 text-center'>
                    <button type='submit' className=' btn btn-info w-50'>
                      {loading ? <SyncOutlined spin /> : 'SUBMIT'}
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div class='modal-footer'>
              <button
                type='button'
                class='btn btn-warning'
                data-dismiss='modal'
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductModal
