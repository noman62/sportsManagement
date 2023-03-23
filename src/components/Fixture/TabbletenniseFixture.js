import axios from 'axios'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { selectUser } from '../../features/userSlice/userSlice'
import Navbar from '../Navbar/Navbar'
const TabbleteniseFixture = () => {
  const history = useHistory()
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState({
    match: '',
    date: '',
    time: '',
    result: '',
    win: ''
  })
  const newUser = useSelector(selectUser)
  //Handle form state
  const handleChange = e => {
    const newUserInfo = { ...user }
    newUserInfo[e.target.name] = e.target.value
    setUser(newUserInfo)
  }

  const handleSubmit = e => {
    e.preventDefault()
    setLoading(true)
    axios
      .post('https://sportsmangement.onrender.com/api/addFixture', {
        ...user
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
       <div className='mb-5'>
      <Navbar />

      </div>
      <h3 className='text-center mx-5'>Add Tabbletenis Fixture</h3>
      <div className='container'>
        <div style={{ marginLeft: '200px' }}>
          <div className='row'>
            <div id='upload' className='  col-8'>
              <form className='upload-form' onSubmit={handleSubmit}>
                <div className='form-row'>
                  <div className='form-group col-md-12'>
                    <label for='notice-number'>Match</label>
                    <input
                      type='text'
                      className='form-control form-control-sm'
                      id='notice-number'
                      required
                      placeholder='Match'
                      onChange={handleChange}
                      name='match'
                      defaultValue=''
                    />
                  </div>
                </div>
                <div className='form-row'>
                  <div className='form-group col-md-12'>
                    <label for='notice-number'>Date</label>
                    <input
                      type='text'
                      className='form-control form-control-sm'
                      id='notice-number'
                      required
                      placeholder='Add Match Date'
                      onChange={handleChange}
                      name='date'
                      defaultValue=''
                    />
                  </div>
                </div>
                <div className='form-row'>
                  <div className='form-group col-md-12'>
                    <label for='notice-number'>Time</label>
                    <input
                      type='text'
                      className='form-control form-control-sm'
                      id='notice-number'
                      required
                      placeholder='Add Time'
                      onChange={handleChange}
                      name='time'
                      defaultValue=''
                    />
                  </div>
                </div>
                <div className='form-row'>
                  <div className='form-group col-md-12'>
                    <label for='notice-number'>Result</label>
                    <input
                      type='text'
                      className='form-control form-control-sm'
                      id='notice-number'
                      placeholder='Add Match Result'
                      onChange={handleChange}
                      name='result'
                      defaultValue=''
                    />
                  </div>
                </div>
                <div className='form-row'>
                  <div className='form-group col-md-12'>
                    <label for='notice-number'>Win</label>
                    <input
                      type='text'
                      className='form-control form-control-sm'
                      id='notice-number'
                      placeholder='Add winning Team name'
                      onChange={handleChange}
                      name='win'
                      defaultValue=''
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

export default TabbleteniseFixture
