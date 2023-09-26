import React from "react";
import Wrapper from "../shared/Wrapper";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import Image from "next/image";
import { BsSpeedometer2 } from "react-icons/bs";
import Link from 'next/link';
function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className={`cursor-pointer bg-[#D0BCDF] hover:bg-[#672797]   transition-all ease-in duration-300  md:block hidden absolute top-[50%]  -right-1   p-1 rounded-full`}
      onClick={onClick}
    >
      <MdKeyboardArrowRight size={30} className="text-white " />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className={`cursor-pointer bg-[#D0BCDF] hover:bg-[#672797] md:block hidden transition-all ease-in duration-300  z-50 absolute top-[50%] left-1  p-1 rounded-full `}
      onClick={onClick}
    >
      <MdKeyboardArrowLeft size={30} className="text-white " />
    </div>
  );
}

const Carousel = () => {
  
  const data = [
    {
      id: 1,
      img: "/images/img1.png",
      title: "Nardo Grey BMW M3 F80",
      mileage: "5,000 mi.",
      price: "$60,000",
      cond: "Clear",
      cond1: "Clean",
      own: "Owner",
      color1: "#E15B3E",
      color2: "#09A122",
      color3: "#1AB5E6",
      tele: "+1(202)9782211",
    },
    {
      id: 2,
      img: "/images/img2.jpeg",
      title: "Luxurious Red BMW M4",
      mileage: "5,000 mi.",
      price: "$60,000",
      cond: "Clear",
      cond1: "Clean",
      own: "Owner",
      color1: "#E15B3E",
      color2: "#09A122",
      color3: "#1AB5E6",
      tele: "+1(202)9782211",
    },
    {
      id: 3,
      img: "/images/img3.jpeg",
      title: "Luxury Sedan Audi A4",
      mileage: "5,000 mi.",
      price: "$60,000",
      cond: "Clear",
      cond1: "Clean",
      own: "Owner",
      color1: "#E15B3E",
      color2: "#09A122",
      color3: "#1AB5E6",
      tele: "+1(202)9782211",
    },
    {
      id: 4,
      img: "/images/usedcar2.jpeg",
      title: "Luxury Sedan Audi A4",
      mileage: "5,000 mi.",
      price: "$60,000",
      cond: "Clear",
      cond1: "Clean",
      own: "Owner",
      color1: "#E15B3E",
      color2: "#09A122",
      color3: "#1AB5E6",
      tele: "+1(202)9782211",
    },
    {
      id: 2,
      img: "/images/usedcar3.jpeg",
      title: "Luxury Sedan Audi A4",
      mileage: "5,000 mi.",
      price: "$60,000",
      cond: "Clear",
      cond1: "Clean",
      own: "Owner",
      color1: "#E15B3E",
      color2: "#09A122",
      color3: "#1AB5E6",
      tele: "+1(202)9782211",
    },
    {
      id: 3,
      img: "/images/usedcar4.jpeg",
      title: "Luxury Sedan Audi A4",
      mileage: "5,000 mi.",
      price: "$60,000",
      cond: "Clear",
      cond1: "Clean",
      own: "Owner",
      color1: "#E15B3E",
      color2: "#09A122",
      color3: "#1AB5E6",
      tele: "+1(202)9782211",
    },
    {
      id: 4,
      img: "/images/usedcar5.jpeg",
      title: "Luxury Sedan Audi A4",
      mileage: "5,000 mi.",
      price: "$60,000",
      cond: "Clear",
      cond1: "Clean",
      own: "Owner",
      color1: "#E15B3E",
      color2: "#09A122",
      color3: "#1AB5E6",
      tele: "+1(202)9782211",
    },
  ];

  const settings = {
    dots: false,
    dotsClass: "slick-dots line-indicator",
    infinite: false,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        },
      },
    ],
  };

  return (
    <div className="relative mt-20 md:mt-[28rem]">
      <Wrapper>
        <div className="flex flex-col justify-start items-start">
          <h1 className="text-[20px] md:text-[36px] font-[500] md:pl-5">
            Clear deals for you in Washington, DC.
          </h1>
          <Slider {...settings} className="w-[100%] ">
            {data.map((item, index) => (
              <Link href={`/used-car/${item.id}`} key={index} >
              <div
              key={index}
              className="flex flex-col justify-center   items-center p-5"
              >
                <div className="bg-white flex flex-col w-[260px]   md:w-[380px] shadow-lg">
                  <Image
                    src={item.img}
                    alt=""
                    width={800}
                    height={800}
                    className="md:w-[400px] md:h-[280px] w-[260px] h-[182px] object-cover"
                  />
                  <div className="flex justify-between items-start px-3 py-5">
                    <div className="flex flex-col md:w-1/2">
                      <h1 className={` font-[500] text-[16px] md:text-[24px] `}>
                        {item.title}
                      </h1>
                      <p
                        className={`text-[10px] text-[#737074] hidden md:flex items-center gap-1`}
                      >
                        <BsSpeedometer2 size={14} />
                        {item.mileage}
                      </p>
                      <p className="text-[24px] md:text-[28px] font-[600]">{item.price}</p>
                      <p className="text-[10px] pt-2 text-[#09A122] font-[600] underline hidden md:flex items-center gap-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="13"
                          height="12"
                          viewBox="0 0 13 12"
                          fill="none"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M1.89347 4.57061C3.0873 7.16957 5.20847 9.22917 7.84147 10.3459L7.84947 10.3493L8.3588 10.5759C8.6734 10.7162 9.0267 10.744 9.35934 10.6545C9.69199 10.565 9.9837 10.3638 10.1855 10.0846L11.0348 8.90928C11.0598 8.87466 11.0705 8.83179 11.0648 8.7895C11.0591 8.7472 11.0374 8.7087 11.0041 8.68194L9.52147 7.48528C9.50397 7.47116 9.4838 7.46074 9.46216 7.45462C9.44053 7.44851 9.41789 7.44683 9.39559 7.4497C9.37329 7.45256 9.35181 7.45991 9.33242 7.47129C9.31304 7.48268 9.29616 7.49787 9.2828 7.51594L8.70547 8.29461C8.63745 8.38648 8.54001 8.45226 8.42938 8.48101C8.31875 8.50976 8.2016 8.49974 8.09747 8.45261C6.12484 7.55898 4.54443 5.97857 3.6508 4.00594C3.60367 3.90181 3.59365 3.78466 3.62239 3.67403C3.65114 3.5634 3.71693 3.46596 3.8088 3.39794L4.5868 2.81994C4.60488 2.80658 4.62007 2.7897 4.63145 2.77032C4.64283 2.75093 4.65018 2.72945 4.65305 2.70715C4.65591 2.68486 4.65423 2.66221 4.64812 2.64058C4.64201 2.61895 4.63158 2.59877 4.61747 2.58128L3.42147 1.09861C3.3947 1.06536 3.35621 1.04365 3.31391 1.03794C3.27162 1.03224 3.22875 1.04298 3.19413 1.06794L2.01213 1.92128C1.73106 2.12401 1.52887 2.41782 1.43991 2.75277C1.35094 3.08771 1.38071 3.44312 1.52413 3.75861L1.89347 4.56994V4.57061ZM7.4468 11.2646C4.5862 10.0499 2.28187 7.81146 0.984799 4.98728L0.983465 4.98594L0.614132 4.17261C0.375079 3.6469 0.325405 3.05464 0.473549 2.49646C0.621693 1.93827 0.958519 1.44859 1.4268 1.11061L2.6088 0.257276C2.85088 0.0825565 3.15074 0.00729287 3.44664 0.0469779C3.74254 0.0866629 4.01197 0.238277 4.19947 0.47061L5.39613 1.95394C5.49489 2.07632 5.56788 2.21741 5.61073 2.36872C5.65357 2.52002 5.66539 2.67843 5.64546 2.83442C5.62553 2.99041 5.57428 3.14076 5.49477 3.27644C5.41526 3.41211 5.30915 3.53032 5.1828 3.62394L4.73613 3.95461C5.49132 5.41884 6.68391 6.61142 8.14813 7.36661L8.47947 6.91994C8.57309 6.79369 8.69126 6.68766 8.82688 6.60822C8.9625 6.52877 9.11277 6.47755 9.26868 6.45763C9.42459 6.4377 9.58292 6.44949 9.73416 6.49227C9.8854 6.53506 10.0264 6.60796 10.1488 6.70661L11.6321 7.90328C11.8647 8.09079 12.0164 8.36035 12.0561 8.65641C12.0958 8.95247 12.0204 9.25247 11.8455 9.49461L10.9961 10.6706C10.6599 11.1359 10.1739 11.4713 9.61954 11.6205C9.06523 11.7697 8.47646 11.7236 7.95213 11.4899L7.4468 11.2646Z"
                            fill="#505057"
                          />
                        </svg>
                        {item.tele}
                      </p>
                    </div>
                    <div className="hidden md:flex flex-col w-1/3 gap-2 pt-9 text-center font-[500]">
                      <p
                        style={{ background: `${item.color1}` }}
                        className="rounded-full p-1 text-[14px]"
                      >
                        {item.cond}
                      </p>
                      <p
                        style={{ background: `${item.color2}` }}
                        className="rounded-full p-1 text-[14px]"
                      >
                        {item.cond1}
                      </p>
                      <p
                        style={{ background: `${item.color3}` }}
                        className="rounded-full p-1 text-[14px]"
                      >
                        {item.own}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              </Link>
            ))}
          </Slider>
        </div>
      </Wrapper>
    </div>
  );
};

export default Carousel;
