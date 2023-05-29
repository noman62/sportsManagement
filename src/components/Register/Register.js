import axios from 'axios'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';

const Register = () => {
  const [imageURL, setImageURL] = useState(null)
  const history = useHistory()
  const [user, setUser] = useState({
    name:'',
    email:'',
    roll:'',
    session:'',
    password:'',
    department:'',
    imageURL:''
  })

  const [loading, setLoading] = useState(false)
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

  //Handle Form Submit
  const handleSubmit = e => {
    e.preventDefault()
    setLoading(true)
    axios
      .post('http://localhost:8000/api/register', {
        ...user
      })
      .then(response => {
        console.log('success', response)
        
        setTimeout(() => {
          setLoading(false)
        }, 1000)
        window.alert("done")
        history.push("/login");
      })
      .catch(error => {
        console.log(error.response)
        
      })
  }
  return (
    <div>
      <div class='container-fluid login '>
        <div class='rows'>
          <div class='col-sm-12  '>
            <div class='container dept   '>
              <div class='row'>
                <div class='col-sm-5 p-5 text-center'>
                  <h4 className='loginName'> Noakhali Science and Technology University</h4>
                  <hr />
                </div>
                <div class='col-sm-7 p-5 text-center'>
                  <h1 class='mb-4'>Registration</h1>
                  <form onSubmit={handleSubmit}>
                    <div class='input-group mb-3'>
                      <div class='input-group-prepend'>
                        <span class='input-group-text'>
                          <i class='fa fa-user'></i>
                        </span>
                      </div>
                      <input
                        type='text'
                        class='form-control'
                        placeholder='Enter your full name'
                        name='name'
                        onChange={handleChange}
                      />
                    </div>
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
                          <i class='fa-solid fa-envelope'></i>
                        </span>
                      </div>
                      <input
                        type='text'
                        class='form-control'
                        placeholder='Enter your Student ID'
                        name='roll'
                        onChange={handleChange}
                      />
                    </div>
                    <div class='input-group mb-3 input-group-md'>
                      <div class='input-group-prepend'>
                        <span class='input-group-text'>
                          <i class='fa-solid fa-envelope'></i>
                        </span>
                      </div>
                      <input
                        type='text'
                        class='form-control'
                        placeholder='Enter your Session'
                        name='session'
                        onChange={handleChange}
                      />
                    </div>
                    <div class='input-group mb-3 input-group-md'>
                      <div class='input-group-prepend'>
                        <span class='input-group-text'>
                          <i class='fa-solid fa-envelope'></i>
                        </span>
                      </div>
                      <input
                        type='text'
                        class='form-control'
                        placeholder='Enter your Department'
                        name='department'
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
                        placeholder=' Password'
                        name='password'
                        
                        onChange={handleChange}
                      />
                    </div>
                    <div class='form-row'>
                  <div class='form-group col-md-12'>
                   
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
                    <div>
                      <button type='submit' class='btn btn-md login-btn m-3'>
                        Registration
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

export default Register
