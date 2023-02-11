import React from "react";
import "./testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "swiper/css/effect-coverflow";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const testimonials = (props) => {
  const info = [
    {
      name: "Dr. John Watson",
      position: "Detective Assistant",
      img: "https://44.media.tumblr.com/30a0cf100a3566b8ccd6724d4abb5527/tumblr_olwxvooqUu1tc7805o1_500.gif",
      // company:
      //   "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/2560px-Microsoft_logo_%282012%29.svg.png",
      testimonials:
        "Working with Sherlock was a wild ride, to say the least. He's got a wicked sense of humor, and he's always up for a good laugh, even in the middle of a high-stakes investigation",
    },
    {
      name: "Eileen Prince",
      position: "Forensic Specialist",
      img: "https://i.guim.co.uk/img/media/d56cf414fd7f4681a7fc2b54c367ef6f4364a4c2/0_288_3567_3564/master/3567.jpg?width=700&quality=85&auto=format&fit=max&s=75a1fa9b32ef1c8c5e324578b45e6d48",
      // company:
      //   "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/2560px-Microsoft_logo_%282012%29.svg.png",
      testimonials:
        "I never knew detective work could be so much fun! Sherlock has a unique perspective on the world that makes even the most mundane clues seem like a treasure trove of laughs.",
    },
    {
      name: "Mary Morstan",
      position: "Intelligence Analyst",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq1YsjGS8uwnJLObbA3RsT3rtYxojABIzMDhUDPz-wIruPHVkwreclYRba0f5K7w-zjIU&usqp=CAU",
      // company: "https://logo-sign.com/logos/Deutsche-bank-logo.png",
      testimonials:
        "I always thought detectives were supposed to be serious and stoic, but Sherlock shattered that stereotype for me. He's got a wicked sense of humor and a mischievous streak that keeps things interesting, to say the least",
    },
    {
      name: "Molly Hooper",
      position: "Technical Specialist",
      img: "https://sherlockholmestv.files.wordpress.com/2016/03/a13053560a636bee20be251c10f3e1d1.jpg",
      // company:
      //   "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/2560px-Microsoft_logo_%282012%29.svg.png",
      testimonials:
        "Sherlock is the only detective I know who can make a criminal confession into a stand-up comedy routine. He's got a quick wit and a natural talent for entertaining, and I wouldn't be surprised if he eventually makes the leap to full-time comedy",
    },
    {
      name: "Greg Lestrade",
      position: "Research Assistant",
      img: "https://pbs.twimg.com/profile_images/477365311809658880/3BBXuib5_400x400.png",
      // company:
      //   "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/2560px-Microsoft_logo_%282012%29.svg.png",
      testimonials:
        "Sherlock is like the cool uncle you always wanted, but instead of taking you to amusement parks, he takes you to crime scenes. And instead of cotton candy, he hands out obscure references and witty one-liners. I never knew detective work could be this much fun!",
    },
    {
      name: "Sally Donovan",
      position: "Field Agent",
      img: "https://64.media.tumblr.com/c4a4771eaf8f8a527b7ee4fd41c43b8b/tumblr_inline_p7pkj1X4DZ1qiv5yk_500.jpg",
      // company:
      //   "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/2560px-Microsoft_logo_%282012%29.svg.png",
      testimonials:
        "I never knew a detective could be so eccentric. But then again, I never worked with someone who spends more time talking to his imaginary deerstalker hat than he does to actual people. But hey, if it works for him, it works for me!",
    },
  ];

  return (
    <>
      <div className="container23">
        <div className="testim">
          <h1 className="testim-head mt-36">Testimonials</h1>
        </div>

        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          spaceBetween={10}
          slidesPerView={"1"}
          breakpoints={{
            220: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            // when window width is >= 480px
            480: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            // when window width is >= 640px
            640: {
              slidesPerView: 1,
              spaceBetween: 40,
            },
            840: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1020: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1220: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1400: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          centeredSlides={true}
          loop={true}
          // coverflowEffect={{
          //   rotate: 50,
          //   stretch: 0,
          //   depth: 100,
          //   modifier: 1,
          //   slideShadows: true,
          // }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={true}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {info.map((member, i) => (
            <SwiperSlide key={`member${i}`}>
              <div className="h-auto w-[400px] rounded-lg bg-[#f9997620] bg-opacity-20 shadow-lg px-5 mt-36 mx-auto pb-10 transition ease-in-out hover:scale-105 transform -translate-y-2">
                <div className="w-full pt-1 mt-36 ">
                  <div className="overflow-hidden rounded-full border-4 border-full transition duration-300 ease-in-out transform hover:scale-110 border-cyan-600 w-24 h-24 -mt-16 mx-auto shadow-lg">
                    {/* <a href={linkedin ? linkedin : null} target="_blank" rel="noreferrer"> */}
                    <img src={member.img} alt="name" loading="lazy" />
                    {/* </a> */}
                  </div>
                </div>
                <div className="mt-4 ">
                  <p className="text-xl font-primary text-orange-400 font-bold text-center">
                    {member.name}
                  </p>
                  <p className="text-md font-secondary text-gray-200 text-center mt-2 mb-1">
                    {member.position}
                  </p>
                  {/* <img
                  src={member.company}
                  alt="company name"
                  className="scale-50"
                /> */}
                </div>
                {/* <div className="h-48 w-48 text-center">
        <img src="https://pngimg.com/uploads/amazon/amazon_PNG6.png"/>
      </div> */}

                {/* <div className="-mt-3"> */}

                <div className="w-full overflow-y-auto h-56">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                    className="relative top-0 left-0 transform translate-x-2 translate-y-6 h-8 w-8 fill-current text-white opacity-10"
                  >
                    <path d="M42.991,9.131L42.991,9.131c0,0.459-0.28,0.882-0.712,1.036C38.619,11.472,33,16.271,33,24	c0,1.328,0.227,2,0.74,2c0.601,0,1.554-1,4.26-1c3.289,0,7,2.622,7,7.059C45,35.942,42.088,40,37,40c-4.135,0-10-3.083-10-12.093	c0-12.478,9.397-17.774,14.432-19.811C42.175,7.796,42.991,8.329,42.991,9.131z"></path>
                    <path d="M18.991,9.131L18.991,9.131c0,0.459-0.28,0.882-0.712,1.036C14.619,11.472,9,16.271,9,24	c0,1.328,0.227,2,0.74,2c0.601,0,1.554-1,4.26-1c3.289,0,7,2.622,7,7.059C21,35.942,18.088,40,13,40C8.865,40,3,36.917,3,27.907	c0-12.478,9.397-17.774,14.432-19.811C18.175,7.796,18.991,8.329,18.991,9.131z"></path>
                  </svg>
                  <p className="text-lg font-secondary text-gray-300  md:ml-12 sm:ml-16 sm:mr-4 text-left ">
                    {member.testimonials}
                  </p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                    className="relative transform -translate-x-full -translate-y-6 h-8 w-8 left-full  fill-current text-white opacity-10"
                  >
                    <path d="M5.009,38.88L5.009,38.88c0-0.459,0.28-0.882,0.712-1.036C9.381,36.539,15,31.74,15,24.011	c0-1.328-0.227-2-0.74-2c-0.601,0-1.554,1-4.26,1c-3.289,0-7-2.622-7-7.059c0-3.883,2.912-7.941,8-7.941c4.135,0,10,3.083,10,12.093	c0,12.478-9.397,17.774-14.432,19.811C5.825,40.215,5.009,39.682,5.009,38.88z"></path>
                    <path d="M29.009,38.88L29.009,38.88c0-0.459,0.28-0.882,0.712-1.036C33.381,36.539,39,31.74,39,24.011	c0-1.328-0.227-2-0.74-2c-0.601,0-1.554,1-4.26,1c-3.289,0-7-2.622-7-7.059c0-3.883,2.912-7.941,8-7.941c4.135,0,10,3.083,10,12.093	c0,12.478-9.397,17.774-14.432,19.811C29.825,40.215,29.009,39.682,29.009,38.88z"></path>
                  </svg>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default testimonials;
