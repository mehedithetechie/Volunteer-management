import { Link } from "react-router-dom";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import Slider from "react-slick";
import { Typewriter } from "react-simple-typewriter";
import { Fade } from "react-awesome-reveal";

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };
  return (
    <div>
      <Slider {...settings}>
        <div className="relative">
          <img
            className="h-[650px] w-full object-cover object-center"
            src={img1}
            alt="Slide 1"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>

          <div className="absolute top-56 w-screen flex justify-center flex-col items-center  text-white">
            <h2 className="md:text-5xl text-2xl font-bold text-center mb-6 bg-white bg-opacity-30 text-white py-4 px-8"><Typewriter
              words={['We Try To Help People With Volunteering ']}
              loop={true}
              cursor
              cursorStyle='|'
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={2000}
            /></h2>
            
            <div className="flex items-center gap-4">
              <Link to='/add-volunteer-need-posts'>  <button className="text-white border-2 border-blue-500 md:px-16 px-4 py-4 mt-8 text-xs md:text-base bg-blue-500 ">Need Volunteer</button></Link>

              <Link to='/all-volunteer-need-posts'><button className="text-white border-2 border-white  md:px-16 px-2 py-4 mt-8 cursor-pointer">All Volunteer Need Posts</button></Link>
            </div>

          </div>

        </div>
        <div className="relative">

          <img
            className="h-[650px] w-full object-cover object-center"
            src={img2}
            alt="Slide 2"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>

          <div className="absolute top-56 w-screen flex justify-center flex-col items-center  text-white">
            <h2 className="md:text-5xl text-2xl font-bold text-center mb-6 bg-white bg-opacity-30 text-white py-4 px-8"><Typewriter
              words={['We Try To Help People With Volunteering ']}
              loop={true}
              cursor
              cursorStyle='|'
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={2000}
            /></h2>

           
            <div className="flex items-center gap-4">
              <Link to='/add-volunteer-need-posts'>  <button className="text-white border-2 border-blue-500 md:px-16 px-4 py-4 mt-8 text-xs md:text-base bg-blue-500 ">Need Volunteer</button></Link>

              <Link to='/all-volunteer-need-posts'><button className="text-white border-2 border-white  md:px-16 px-2 py-4 mt-8 cursor-pointer">All Volunteer Need Posts</button></Link>
            </div>
          </div>
        </div>
        <div className="relative">

          <img
            className="h-[650px] w-full object-cover object-center"
            src={img3}
            alt="Slide 3"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>

          <div className="absolute top-56 w-screen flex justify-center flex-col items-center  text-white">
            <h2 className="md:text-5xl text-2xl font-bold text-center mb-6 bg-white bg-opacity-30 text-white py-4 px-8"><Typewriter
              words={['We Try To Help People With Volunteering ']}
              loop={true}
              cursor
              cursorStyle='|'
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={2000}
            /></h2>

            <div className="flex items-center gap-4">
              <Link to='/add-volunteer-need-posts'>  <button className="text-white border-2 border-blue-500 md:px-16 px-4 py-4 mt-8 text-xs md:text-base bg-blue-500 ">Need Volunteer</button></Link>

              <Link to='/all-volunteer-need-posts'><button className="text-white border-2 border-white  md:px-16 px-2 py-4 mt-8 cursor-pointer">All Volunteer Need Posts</button></Link>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Hero;