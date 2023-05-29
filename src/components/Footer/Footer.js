import React from 'react'

const Footer = () => {
  return (
    <div >
 
      <div
        class='container-fluid text-center w-100 p-2 '
        style={{ 'background-color': 'rgb(116, 197, 238)', width: '100%' }}
      >
        <div class='row mt-4'>
          <div class='col-sm-4'>
            <img
              style={{ height: '100px', width: '60px' }}
              src='../assets/nstu_logo.png'
            />
            <h1 style={{ fontSize: 'large' }}>Physical Department</h1>
            <p>
              Noakhali Science and Technology University(NSTU),Noakhali-3814
            </p>
          </div>
          <div class='col-sm-4'>
            <h1 style={{ fontSize: 'medium' }}>
              <b>Office location</b>
            </h1>
            <p>
              Idris Auditorium Building-2nd floor
              <br />
              Main Gate, NSTU
              <br />
              +8801716729015
              <br />
              9:00 a.m. – 5:00
            </p>
          </div>
          <div class='col-sm-4'>
            <h3 style={{ 'font-size': 'medium' }}><strong>NSTU</strong></h3>
            <p style={{ padding: '5px' }}>
              Noakhali-3814, Bangladesh
              <br />
              <b>Phone</b> : +880-531-61355
              <br />
              <b>FAX</b> : +880-531-61311
              <br />
              <b>Website</b> :
              <a href='https://nstu.edu.bd/'>https://nstu.edu.bd/</a>
            </p>
          </div>
        </div>
      </div>
      <div className='text-center py-3 bg-dark'>
        <p><small className='text-white'>Copyright © 2023 Physical Education | Powered by Asadullah Al Noman, NSTU.</small></p>
      </div>
    </div>
  )
}

export default Footer
