import Carousel from 'react-bootstrap/Carousel';

function IndividualIntervalsExample() {
  return (
    <Carousel className='my-5'>
      <Carousel.Item interval={3500}>
        <img
          className="d-block w-75 m-auto"
          src="../assets/image1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <p className='text-warning fw-bold'>পবিপ্রবিতে আন্তঃবিশ্ববিদ্যালয় ফুটবল টুর্নামেন্ট নোবিপ্রবি ফুটবল দল</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3500}>
        <img
          className="d-block m-auto w-75"
          src="../assets/image2.JPG"
          alt="Second slide"
        />
        <Carousel.Caption>
          <p className='fw-bold'>বঙ্গবন্ধু গোল্ডকাপ ফুটবল টুর্নামেন্ট এ নোবিপ্রবি ফুটবল দল</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3500}>
        <img
          className="d-block m-auto w-75"
          src="../assets/image3.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <p className='fw-bold'>
          শহীদ বুলু স্টেডিয়ামে নোবিপ্রবি ক্রিকেট দল
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;