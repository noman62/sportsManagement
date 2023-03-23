import axios from 'axios'
import React from 'react'
import { NavDropdown } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { logout, selectUser } from '../../features/userSlice/userSlice'


import './Navbar.css'
const Navbar = () => {
  const user = useSelector(selectUser)
  console.log(user)
  const dispatch = useDispatch();
  const history = useHistory()
  const handleLogout = async (e) => {
    e.preventDefault();
    // make state null
    const { data } = await axios.get('http://localhost:8000/api/logout');
    dispatch(logout());
    window.alert("logout Successfully")
    history.push("/home");
    
  };

  return (
    <div style={{width:'100%'}}>
      <nav class='navbar navbar-expand-lg    navbar-light bg-light'>
        {/* <a class='navbar-brand' href='/home'>
          Sports 
        </a> */}
        <button
          class='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span class='navbar-toggler-icon'></span>
        </button>

        <div class='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul class='navbar-nav m-auto d-flex fw-small'>
            <li class='nav-item px-2 active'>
              <a class='nav-link' href='/home'>
                Home <span class='sr-only'>(current)</span>
              </a>
            </li>
            <li class='nav-item px-2'>
              <a class='nav-link' href='/singleEvent'>
                Events
              </a>
            </li>
            <li class='nav-item px-2'>
              <a class='nav-link' href='/sportsItem'>
              Sports Item
              </a>
            </li>
            <li class='nav-item px-2'>
              <a class='nav-link' href='/rules'>
              Rules and Regulations
              </a>
            </li>
            <li class='nav-item px-2'>
              <a class='nav-link' href='/achievment'>
              Acheivement
              </a>
            </li>
            <li class='nav-item px-2'>
              <a class='nav-link' href='/teacher'>
              Teachers and Officers Profile
              </a>
            </li>
              <NavDropdown title="Match Fixture" id="basic-nav-dropdown">
              <NavDropdown.Item href="/sFixture">Football</NavDropdown.Item>
              <NavDropdown.Item href="/volleyballf">
                Volleyball
              </NavDropdown.Item>
              <NavDropdown.Item href="/badmintonF">Badminton</NavDropdown.Item>
              <NavDropdown.Item href="/tabletennisF">Tabble Tennis</NavDropdown.Item>
            </NavDropdown>
          </ul>
          {user === null && (
            <div class=' my-2 my-lg-0'>
              <a class='px-4 log-button' href='/login'>
                Log In
              </a>

              <a class='btn  px-4 button' href='/register'>
                Sign Up
              </a>
            </div>
          )}
          {user !== null && user.user && (
            <>
              <a href='admindeshboard'>{user?.user?.name}</a>
              <button
                onClick={e => handleLogout(e)}
                type='button'
                class='btn  ml-2'
              >
                Log Out
              </button>
          
            </>
          )}
            {/* <div class=' my-2 my-lg-0'>
              <a class='px-4 log-button' href='/login'>
                Log In
              </a>

              <a class='btn  px-1 button' href='/signUp'>
                Sign Up
              </a>
            </div> */}
          
     
        </div>
      </nav>
    </div>
  )
}

export default Navbar
