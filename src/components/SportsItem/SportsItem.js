import React from 'react'
import { Button } from 'react-bootstrap';
import {  useHistory } from 'react-router-dom';
import Navbar from '../Navbar/Navbar'

const SportsItem = () => {
  let history=useHistory();
  const handleProduct=(key)=>{
    history.push(`/item/${key}`);
}
  return (
    <div>
      {/* <div class='row main-heading '>
        <div class='col-md-9'>
          <img
            class='nstu_logo p-2'
            src='image/Logo_of_Noakhali_Science_and_Technology_University.gif'
            alt='NSTU LOGO'
          />
          <div class='nstu'>
            <h5 class='text-uppercase text-left font-weight-bolder'>
              Noakhali Science and Technology University
            </h5>
            <h5 class='text-uppercase text-left font-weight-bolder'>
              Department of Department of Physical Education
            </h5>
          </div>
        </div>
        <div class='col-md-3'>
          <h2 class=' e-notice p-3'></h2>
        </div>
      </div> */}
      <div>
        <Navbar />
      </div>

      <div class='event-main-page'>
        <div class='container dept text-center'>
          <div class='row'>
            <div class='col-sm-12'>
              <h1>Sports Item</h1>
            </div>
          </div>
        </div>
      </div>
      <div class='container bg-light px-5'>
        <div class='row'>
          <div class='col-sm-4 sport'>
            <img
              class='w-100'
              src='https://wallpaperaccess.com/full/1088580.jpg'
              alt=''
            />
            <p class='p-1'>
              <b>Cricket</b>
            </p>
            <ul>
              <li><Button variant="light"  onClick={()=>handleProduct("cricket-shoes")}>Shoes</Button></li>
              <li><Button variant="light" onClick={()=>handleProduct("cricket-ball")}>Ball</Button></li>
              <li><Button variant="light" onClick={()=>handleProduct("cricket-bet")}>Bets</Button></li>
            </ul>
          </div>
          <div class='col-sm-4 sport'>
            <img
              class='w-100'
              src='https://files.ekmcdn.com/allwallpapers/images/paper-photo-wallpaper-football-stadium-champions--(2)-32457-p.jpg?v=599d4741-9423-4652-b292-e55e0354b409'
              alt=''
            />
            <p class='p-1'>
              <b>Football</b>
            </p>
            <ul>
              <li><Button variant="light" onClick={()=>handleProduct("football-shoes")}>Shoes</Button></li>
              <li><Button variant="light" onClick={()=>handleProduct("football-ball")}>Ball</Button></li>
              <li><Button variant="light" onClick={()=>handleProduct("football-boots")}>Boots</Button></li>
            </ul>
          </div>
          <div class='col-sm-4 sport'>
            <img
              class='w-100'
              src='../assets/badminton.jpg'
              alt=''
            />
            <p class='p-1'>
              <b>Badminton</b>
            </p>
            <ul>
              <li><Button variant="light" onClick={()=>handleProduct("badminton-shoes")}>Shoes</Button></li>
              <li><Button variant="light" onClick={()=>handleProduct("badminton-racket")}>Racket</Button></li>
              <li><Button variant="light" onClick={()=>handleProduct("badminton-flower")}>Flower</Button></li>
            </ul>
          </div>
        </div>
      </div>
      

      
    </div>
  )
}

export default SportsItem
