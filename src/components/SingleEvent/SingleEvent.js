import React from 'react'
import Navbar from '../Navbar/Navbar'

const SingleEvent = () => {
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
              <h1>Events</h1>
              <p>
                শরীরচর্চা শিক্ষা বিভাগের আয়োজনে বিশ্ববিদ্যালয়ের অভ্যন্তরে ছাত্র-ছাত্রীদের নিয়মিত প্রতিযোগিতার আয়োজন করা হয় এবং আন্তঃবিশ্ববিদ্যালয় আয়োজিত বিভিন্ন প্রতিযোগিতায় নিয়মিত অংশগ্রহণ করা হয়ে থাকে। নোয়াখালী বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয়ের বিভিন্ন সীমাবদ্ধতা ও খেলাধুলার যথেষ্ট সুযোগ সুবিধার অভাব থাকা সত্ত্বে ও আমরা ক্রীড়া ক্ষেত্রে গুরুত্বপূর্ণ ভূমিকা রেখে আসছি।
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class='container py-4'>
        <div class='row'>

          <div class='col-sm-4 pb-3 event-item'>
            <a href='/manEvent'>
              <div class='events p-4'>
                <h3>Man's Event </h3>
                <p>
                  Every year Nstu Department of Physical Education arranged so many Exciting Men's Indoor and Outdoor Event.<b>Click For Details</b> 
                </p>
              </div>
            </a>
          </div>
          <div class='col-sm-4 pb-3 event-item'>
            <a href='/girlEvent'>
              <div class='events p-4'>
                <h3>Woman's Event </h3>
                <p>
                Every year Nstu Department of Physical Education arranged so many Exciting Women's Indoor and Outdoor Event.<b>Click For Details</b> 
                </p>
              </div>
            </a>
          </div>
          <div class='col-sm-4 pb-3 event-item'>
            <a href='/teacherEvent'>
              <div class='events p-4'>
                <h3>Teacher's Event </h3>
                <p>
                Every year Nstu Department of Physical Education arranged so many Exciting Teache's Indoor and Outdoor Event.<b>Click For Details</b> 
                </p>
              </div>
            </a>
          </div>

        </div>
      </div>
      {/* 
      <div class='footer bg-dark text-light'>
        <div class='container'>
          <div class='row'>
            <div class='col-sm-12'>
              <h1>Lorem, ipsum dolor.</h1>
              <p>
                <b>Phone :</b> 7r8374823
              </p>
              <p>
                <b>Mobile :</b> 7r8374823
              </p>
              <p>
                <b>Email :</b> 7r8374823
              </p>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default SingleEvent
