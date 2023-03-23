import React from 'react';
import { Button } from 'react-bootstrap';
import Pdf from "react-to-pdf";
import Navbar from '../Navbar/Navbar';
const ref = React.createRef();
const Notice = () => {
   
    return (
        <div className='text-center mb-5'>
            <div className='mb-5'>
          <Navbar />
          </div>
            <h3>আন্তঃঅনুষদীয় ক্রিকেট, ফুটবল, দাবা ও টেবিল টেনিস প্রতিযোগিতা-২০২৩ সংক্রান্ত বিজ্ঞপ্তি</h3>
            <p>notice / By Physical Education</p>
            <div>
    <Pdf targetRef={ref} filename="div-blue.pdf">
        {({toPdf}) => (
            <Button className='mb-5' onClick={toPdf}>Download notice pdf</Button>
        )}
    </Pdf>
    <div className='m-auto' style={{width: 500, height: 800, background: 'white'}} ref={ref}>
    <img src='../assets/notice-01.png'/>
    </div>
        </div>

        </div>
    );
};

export default Notice;