import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { loggin } from '../../features/userSlice/userSlice'

const Login = () => {
  
    const [user, setUser] = useState({
        email: '',
        password: ''
      })
      const [loading, setLoading] = useState(false)
    
      const history = useHistory()
      const dispatch = useDispatch()
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
          .post('https://sportsmangement.onrender.com/api/login', {
            ...user
          })
          .then(response => {
            console.log('success', response.data)
            
            dispatch(
              loggin({
                user: response.data
              })
            )
            
            setTimeout(() => {
              setLoading(false)
            }, 1000)
    
            if (response.data.email) {
              console.log(response.data.email)
              history.push('home')
            }
            
          })
        
      }
  return (
    <div>
      <div class='container-fluid login '>
        <div class='rows'>
          <div class='col-sm-12  '>
            <div class='container dept '>
              <div class='row'>
                <div class='col-sm-5 p-5 text-center'>
                <h4 className='loginName'> Noakhali Science and Technology University</h4>
                  <hr />
                </div>
                <div class='col-sm-7 p-5 text-center'>
                  <h1 class='mb-4'>Log In</h1>
                  <form onSubmit={handleSubmit}>
                    <div class='input-group mb-3 input-group-md'>
                      <div class='input-group-prepend'>
                        <span class='input-group-text'>
                          <i class='fa-solid fa-envelope'></i>
                        </span>
                      </div>
                      <input
                        type='text'
                        class='form-control'
                        placeholder='User Email ID'
                        name='email'
                        onChange={handleChange}
                      />
                    </div>
                    <div class='input-group mb-3 input-group-md'>
                      <div class='input-group-prepend'>
                        <span class='input-group-text'>
                          <i class='fa-solid fa-lock'></i>
                        </span>
                      </div>
                      <input
                        type='text'
                        class='form-control'
                        name='password'
                        placeholder='Password'
                        onChange={handleChange}
                      />
                    </div>
                    {/* <div class="form-check">
                                    <label class="form-check-label">
                                      <input type="checkbox" class="form-check-input" value=""/>Remember Password
                                    </label>
                                  </div> */}
                    <div>
                      <button type='submit' class='btn btn-md login-btn m-3'>
                        Log In
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
