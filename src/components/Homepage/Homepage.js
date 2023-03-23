import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Button } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/userSlice/userSlice'
import ControlledCarousel from '../ControlledCarousel/ControlledCarousel'
import Header from '../Header/Header'
import HeroSection from '../HeroSection/HeroSection'
import Navbar from '../Navbar/Navbar'
import Screen from '../Screen/Screen'

const Homepage = () => {
  const user = useSelector(selectUser)
  console.log(user)
  const [notices, setNotices] = useState([])
  // const [newNotice, setnewNotice] = useState([])
  const [events, setEvents] = useState([])
// useEffect(() => {
//   fetch('notice.json')
//     .then (res=>res.json)
//     .then(data=> setnewNotice(data))
// });
  const getAllNotice = async () => {
    const { data } = await axios.get('https://sportsmangement.onrender.com/api/allNotice')
    setNotices(data)
  }
  const getAllEvent = async () => {
    const { data } = await axios.get('https://sportsmangement.onrender.com/api/allEvent')
    // setNotices(data)
    setEvents(data)
    console.log(data)
  }
  useEffect(() => {
    getAllNotice()
    getAllEvent()
  }, [])
  return (
    <div>
      <div id='homapage'>
        <div>
          <Navbar />
        </div>
        <div class='row ' style={{ background: 'rgba(225, 235, 255, 0.644)' }}>
          {/* <div class='col-md-2'>
            <div class='catagory-list'>
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Notice</li>
              </ul>
            </div>
          </div> */}
          <div class="carousel-container col-md-12" style={{'height': '300px;'}}>
            <HeroSection />
          </div>
          {/* <div class='col-md-2 about-profile'>
            <img src='./image/profile.jpg' class='img-fluid about-img' alt='' />
          </div> */}
        </div>

        {/* <div class='home'>
          <div class='container d-flex justify-content-center'>
            <div class='row dept'>
              <div class='col-sm-12 p-4 text-center'>
                <h1 class='py-3'>Department of Physical Education</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                  aut modi debitis consequatur laudantium vel distinctio
                  necessitatibus iure optio. Ipsam omnis eos similique optio,
                  illo eveniet asperiores dolor amet deleniti, quidem corrupti
                  molestiae. Tempora sint architecto perferendis ut nemo, odit
                  numquam voluptas deleniti! Quidem, sit? Soluta assumenda
                  voluptatum nobis necessitatibus doloremque, fuga, maxime
                  exercitationem amet, distinctio deserunt voluptate ut
                  praesentium vitae possimus consectetur ea. Odit suscipit quo
                  facere, quod quam ex doloribus asperiores architecto saepe,
                  nostrum nesciunt obcaecati cum, deserunt ullam. Soluta
                  corrupti cupiditate harum asperiores dignissimos amet quidem
                  facere. Eum ullam harum laborum impedit nesciunt non iure
                  sequi amet!
                </p>
              </div>
            </div>
          </div>
        </div> */}
        <div class='notice pb-4'>
          <div class='container text-center'>
            <div class='row'>
              <div class='col-sm-12'>
                <h1 class='p-5'>Latest News</h1>
              </div>
            </div>
            <div class='row'>
              <div class='col-sm-6'>
              <h3 class='py-4 mb-5'>Recent News</h3>
                <div
                  id='carouselExampleSlidesOnly'
                  class='carousel slide'
                  data-ride='carousel'
                >
                  <div class='carousel-inner'>
                    {notices.reverse().map((notice, index) => (
                      <Screen index={index} notice={notice} />
                    ))}
                  </div>
                </div>
              </div>

              <div class='col-sm-6'>
                <h3 class='py-4'>News Headline</h3>
                <div>
            <div class="card">
        <div class="card-body">
          <h5 class="card-title">আন্তঃঅনুষদীয় ক্রিকেট, ফুটবল, দাবা ও টেবিল টেনিস প্রতিযোগিতা-২০২৩ সংক্রান্ত বিজ্ঞপ্তি</h5>
          <p class="card-text">February 25, 2023</p>
          <a href="/notice" class="btn btn-primary">See more</a>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">বার্ষিক ক্রীড়া প্রতিযোগীতা ও পুরস্কার বিতরণ” সংক্রান্ত বিজ্ঞপ্তি</h5>
          <p class="card-text">February 16, 2023</p>
          <a href="/notice" class="btn btn-primary">See more</a>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">বার্ষিক ক্রীড়া প্রতিযোগিতা-২০২৩ উপলক্ষ্যে বিভিন্ন ইভেন্টের বাছাইপর্ব সংক্রান্ত বিজ্ঞপ্তি</h5>
          <p class="card-text">February 02, 2023</p>
          <a href="/notice" class="btn btn-primary">See more</a>
        </div>
      </div>
      <Button className='my-2 w-100 bg-dark'>View all notice</Button>
        </div>
              </div>
            </div>
          </div>
        </div>
        <div class='event p-4'>
          <div class='container text-center'>
            <div class='row'>
              <div class='col-sm-12'>
                <h1 class='p-4'>Events</h1>
              </div>
            </div>
            <div class='row'>
              {events.reverse().map(latest => {
                return (
                  <div className='col-sm-4 event-item'>
                    <div className='events p-4'>
                      <h3>{latest.eventName}</h3>
                      <p>{latest.eventDetails}</p>
                    </div>
                  </div>
                )
              })}
            </div>
            {user !== null && user.user  && (
              <a href='/singleEvent'>
                <div class='row'>
                  <div class='col-sm-12 pt-4'>
                    <button class='btn btn-sm btn-primary'>Read More</button>
                  </div>
                </div>
              </a>
            )}
         
            
          </div>
        </div>
        <div class='vc'>
          <div class='container text-center d-flex justify-contents-center p-4'>
            <div class='row'>
              <div class='col-sm-12'>
                <img src='assets/vice_chancellor.jpg' alt='' />

                <p class='p-4'>
                  <b>
                    <i>
                    “ছাত্র-ছাত্রীরা শুধু পড়ালেখা করলেই চলবে না, পড়ালেখার পাশাপাশি তাদের শারীরিক ও মানসিক বিকাশের জন্য খেলাধুলা করা অত্যন্ত প্রয়োজন।”<br></br>উপাচার্য-প্রফেসর ড. মোহাম্মদ দিদার-উল-আলম
                    </i>
                  </b>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class='photo-gallary'>
          <div class='container-fluid'>
            <div class='row'>
              <div class='col-sm-12 text-center'>
                <h1 class='p-4'>Photo Gallary</h1>
              </div>
            </div>
            <div class='row marquee-image'>
              <div class='col-12 col-md-12'>
                <marquee behavior='' direction=''>
                  <ul>
                    <li>
                      <img
                        src='../assets/image1.jpg'
                        alt=''
                      />
                    </li>
                    <li>
                      <img
                        src='../assets/image2.JPG'
                        alt=''
                      />
                    </li>
                    <li>
                      <img
                        src='../assets/image3.jpg'
                        alt=''
                      />
                    </li>
                    <li>
                      <img
                        src='../assets/image4.jpg'
                        alt=''
                      />
                    </li>
                    <li>
                      <img
                        src='../assets/image5.jpeg'
                        alt=''
                      />
                    </li>
                    <li>
                      <img
                        src='../assets/image6.jpg'
                        alt=''
                      />
                    </li>
             
                  </ul>
                </marquee>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Homepage
