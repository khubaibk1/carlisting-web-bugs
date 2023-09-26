import React, { useState } from 'react'
import Wrapper from '../shared/Wrapper'
import Image from 'next/image';
import { BsDot, BsSpeedometer2 } from 'react-icons/bs';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import Filters from '../searchResult/Filters';
import PageCount from '../searchResult/PageCount';
import Sort from './Sort';
import SortMob from './SortMob';
import MobileFilter from '../searchResult/MobileFilter';
import filterIcon from "../../../public/images/filterBlack.png";
import Link from 'next/link';
import carData from "../../../data/carData"


function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <div
            className={`cursor-pointer    absolute top-[42%]  -right-1   p-2 rounded-full`}
            onClick={onClick}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="24" viewBox="0 0 14 24" fill="none">
                <path d="M1 23L13 12L1 1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </div>
    );
}

function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div
            className={`cursor-pointer    z-50 absolute top-[40%]  p-2  `}
            onClick={onClick}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="24" viewBox="0 0 14 24" fill="none">
                <g filter="url(#filter0_b_1_4175)">
                    <path d="M13 23L1 12L13 1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </g>
                <defs>
                    <filter id="filter0_b_1_4175" x="-30" y="-30" width="74" height="84" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feGaussianBlur in="BackgroundImageFix" stdDeviation="15" />
                        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1_4175" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_1_4175" result="shape" />
                    </filter>
                </defs>
            </svg>
        </div>
    );
}
const UsedCar = () => {
    const data = [
        {
            id: 1,
            imgs: [
                {
                    img: "/images/usedcar1.jpeg",
                },
                {
                    img: "/images/usedcar1.jpeg",
                },
                {
                    img: "/images/usedcar1.jpeg",
                },
                {
                    img: "/images/usedcar1.jpeg",
                },
            ],
            title: "BMW M4",
            mileage: "10,000 mi.",
            market: "$8,000 below market",
            location: "New York, US.   20 miles away",
            deal: "AMAZING!",
            price: "$70,000",
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
            imgs: [
                {
                    img: "/images/usedcar2.jpeg",
                },
                {
                    img: "/images/usedcar2.jpeg",
                },
                {
                    img: "/images/usedcar2.jpeg",
                },
                {
                    img: "/images/usedcar2.jpeg",
                },
            ],

            title: "BMW 3 Series",
            mileage: "30,000 mi.",
            market: "$3,200 below market",
            location: "California, US.   28 miles away",
            deal: "AMAZING!",
            price: "$89,000",
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
            imgs: [
                {
                    img: "/images/usedcar3.jpeg",
                },
                {
                    img: "/images/usedcar3.jpeg",
                },
                {
                    img: "/images/usedcar3.jpeg",
                },
                {
                    img: "/images/usedcar3.jpeg",
                },
            ],
            title: "BMW",
            mileage: "12,000 mi.",
            market: "$4,000 below market",
            location: "New York, US.   20 miles away",
            deal: "AMAZING!",
            price: "$80,000",
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
            imgs: [
                {
                    img: "/images/usedcar4.jpeg",
                },
                {
                    img: "/images/usedcar4.jpeg",
                },
                {
                    img: "/images/usedcar4.jpeg",
                },
                {
                    img: "/images/usedcar4.jpeg",
                },
            ],
            title: "Mercedes Benz W140",
            mileage: "10,000 mi.",
            market: "$3,000 below market",
            location: "California, US.   28 miles away",
            deal: "AMAZING!",
            price: "$24,300",
            cond: "Clear",
            cond1: "Clean",
            own: "Owner",
            color1: "#E15B3E",
            color2: "#09A122",
            color3: "#1AB5E6",
            tele: "+1(202)9782211",
        },
        {
            id: 5,
            imgs: [
                {
                    img: "/images/usedcar5.jpeg",
                },
                {
                    img: "/images/usedcar5.jpeg",
                },
                {
                    img: "/images/usedcar5.jpeg",
                },
                {
                    img: "/images/img2.jpeg",
                },
            ],
            title: "Audi S5",
            mileage: "5,000 mi.",
            market: "$3,600 below market",
            location: "Seattle, US.   15 miles away",
            deal: "AMAZING!",
            price: "$34,600",
            cond: "Clear",
            cond1: "Clean",
            own: "Owner",
            color1: "#E15B3E",
            color2: "#09A122",
            color3: "#1AB5E6",
            tele: "+1(202)9782211",
        },
        {
            id: 6,
            imgs: [
                {
                    img: "/images/usedcar6.jpeg",
                },
                {
                    img: "/images/usedcar6.jpeg",
                },
                {
                    img: "/images/usedcar6.jpeg",
                },
                {
                    img: "/images/usedcar6.jpeg",
                },
            ],
            title: "Porsche 997 Turbo",
            mileage: "10,000 mi.",
            market: "$10,000 below market",
            location: "California, US.   28 miles away",
            deal: "AMAZING!",
            price: "$140,600",
            cond: "Clear",
            cond1: "Clean",
            own: "Owner",
            color1: "#E15B3E",
            color2: "#09A122",
            color3: "#1AB5E6",
            tele: "+1(202)9782211",
        },
        {
            id: 7,
            imgs: [
                {
                    img: "/images/usedcar7.jpeg",
                },
                {
                    img: "/images/usedcar7.jpeg",
                },
                {
                    img: "/images/usedcar7.jpeg",
                },
                {
                    img: "/images/usedcar7.jpeg",
                },
            ],
            title: "BMW M4",
            mileage: "10,000 mi.",
            market: "$8,000 below market",
            location: "New York, US.   20 miles away",
            deal: "AMAZING!",
            price: "$70,000",
            cond: "Clear",
            cond1: "Clean",
            own: "Owner",
            color1: "#E15B3E",
            color2: "#09A122",
            color3: "#1AB5E6",
            tele: "+1(202)9782211",
        },
        {
            id: 8,
            imgs: [
                {
                    img: "/images/usedcar8.jpeg",
                },
                {
                    img: "/images/usedcar8.jpeg",
                },
                {
                    img: "/images/usedcar8.jpeg",
                },
                {
                    img: "/images/usedcar8.jpeg",
                },
            ],
            title: "Maserati GranTurismo",
            mileage: "10,000 mi.",
            market: "$14,300 below market",
            location: "Chicago, US.   21 miles away",
            deal: "AMAZING!",
            price: "$200,000",
            cond: "Clear",
            cond1: "Clean",
            own: "Owner",
            color1: "#E15B3E",
            color2: "#09A122",
            color3: "#1AB5E6",
            tele: "+1(202)9782211",
        },
        {
            id: 9,
            imgs: [
                {
                    img: "/images/usedcar9.jpeg",
                },
                {
                    img: "/images/usedcar9.jpeg",
                },
                {
                    img: "/images/usedcar9.jpeg",
                },
                {
                    img: "/images/usedcar9.jpeg",
                },
            ],
            title: "BMW M4",
            mileage: "10,000 mi.",
            market: "$8,000 below market",
            location: "New York, US.   20 miles away",
            deal: "AMAZING!",
            price: "$70,000",
            cond: "Clear",
            cond1: "Clean",
            own: "Owner",
            color1: "#E15B3E",
            color2: "#09A122",
            color3: "#1AB5E6",
            tele: "+1(202)9782211",
        },
        {
            id: 10,
            imgs: [
                {
                    img: "/images/usedcar10.jpeg",
                },
                {
                    img: "/images/usedcar10.jpeg",
                },
                {
                    img: "/images/usedcar10.jpeg",
                },
                {
                    img: "/images/usedcar10.jpeg",
                },
            ],
            title: "BMW M4",
            mileage: "10,000 mi.",
            market: "$8,000 below market",
            location: "New York, US.   20 miles away",
            deal: "AMAZING!",
            price: "$70,000",
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
            imgs: [
                {
                    img: "/images/usedcar11.jpeg",
                },
                {
                    img: "/images/usedcar11.jpeg",
                },
                {
                    img: "/images/usedcar11.jpeg",
                },
                {
                    img: "/images/usedcar11.jpeg",
                },
            ],
            title: "BMW M4",
            mileage: "10,000 mi.",
            market: "$8,000 below market",
            location: "New York, US.   20 miles away",
            deal: "AMAZING!",
            price: "$70,000",
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
            imgs: [
                {
                    img: "/images/usedcar12.jpeg",
                },
                {
                    img: "/images/usedcar12.jpeg",
                },
                {
                    img: "/images/usedcar12.jpeg",
                },
                {
                    img: "/images/usedcar12.jpeg",
                },
            ],
            title: "BMW M4",
            mileage: "10,000 mi.",
            market: "$8,000 below market",
            location: "New York, US.   20 miles away",
            deal: "AMAZING!",
            price: "$70,000",
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
            imgs: [
                {
                    img: "/images/usedcar13.jpeg",
                },
                {
                    img: "/images/usedcar13.jpeg",
                },
                {
                    img: "/images/usedcar13.jpeg",
                },
                {
                    img: "/images/usedcar13.jpeg",
                },
            ],
            title: "BMW M4",
            mileage: "10,000 mi.",
            market: "$8,000 below market",
            location: "New York, US.   20 miles away",
            deal: "AMAZING!",
            price: "$70,000",
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
            imgs: [
                {
                    img: "/images/usedcar14.jpeg",
                },
                {
                    img: "/images/usedcar14.jpeg",
                },
                {
                    img: "/images/usedcar14.jpeg",
                },
                {
                    img: "/images/usedcar14.jpeg",
                },
            ],
            title: "BMW M4",
            mileage: "10,000 mi.",
            market: "$8,000 below market",
            location: "New York, US.   20 miles away",
            deal: "AMAZING!",
            price: "$70,000",
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
            imgs: [
                {
                    img: "/images/usedcar15.jpeg",
                },
                {
                    img: "/images/usedcar15.jpeg",
                },
                {
                    img: "/images/usedcar15.jpeg",
                },
                {
                    img: "/images/usedcar15.jpeg",
                },
            ],
            title: "BMW M4",
            mileage: "10,000 mi.",
            market: "$8,000 below market",
            location: "New York, US.   20 miles away",
            deal: "AMAZING!",
            price: "$70,000",
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
            imgs: [
                {
                    img: "/images/usedcar16.jpeg",
                },
                {
                    img: "/images/usedcar16.jpeg",
                },
                {
                    img: "/images/usedcar16.jpeg",
                },
                {
                    img: "/images/usedcar16.jpeg",
                },
            ],
            title: "BMW M4",
            mileage: "10,000 mi.",
            market: "$8,000 below market",
            location: "New York, US.   20 miles away",
            deal: "AMAZING!",
            price: "$70,000",
            cond: "Clear",
            cond1: "Clean",
            own: "Owner",
            color1: "#E15B3E",
            color2: "#09A122",
            color3: "#1AB5E6",
            tele: "+1(202)9782211",
        },
    ];
    const [isClicked, setIsClicked] = useState(Array(data.length).fill(false));
    const [isMobileFilterModalOpen, setIsMobileFilterModalOpen] = useState(false);
    const handleButtonClick = (index) => {
        const updatedState = [...isClicked];
        updatedState[index] = !updatedState[index];
        setIsClicked(updatedState);
    };
    const handleModalClose = () => {
        setIsMobileFilterModalOpen(false);
      };
      const handleModalOpen = () => {
        setIsMobileFilterModalOpen(true);
      };

    const settings = {
        dots: false,
        dotsClass: "slick-dots line-indicator",
        infinite: false,
        speed: 1000,
        slidesToShow: 1,
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
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };
    return (
        <div >
            <Wrapper>
                <div className='flex flex-col justify-start items-start'>
                {/* <button className=' sm:flex md:hidden flex flex-col items-center' onClick={handleModalOpen}>
                    <Image  src={filterIcon} />
                    <p>Filter</p>
                        </button>
                     */}
                        <MobileFilter  isOpen={isMobileFilterModalOpen}
        onClose={handleModalClose}/>
                    <div className='flex gap-2 md:gap-5 items-center underline'>
                        <a href="">
                            <p className='text-[#141415] font-[500] text-[16px] '>
                                Used Cars For Sale
                            </p>
                        </a>
                        <svg xmlns="http://www.w3.org/2000/svg" width="9" height="12" viewBox="0 0 9 12" fill="none">
                            <path d="M8.38433 5.5853C8.67856 5.78348 8.67856 6.21651 8.38433 6.4147L0.779331 11.5372C0.447218 11.7609 0 11.523 0 11.1225L0 0.877458C0 0.47703 0.447217 0.239056 0.77933 0.46276L8.38433 5.5853Z" fill="#141415" />
                        </svg>
                        <a href="">
                            <p className='text-[#141415] font-[500] text-[16px]'>
                                Schenectady,NY
                            </p>
                        </a>
                    </div>
                    <div className='flex items-center justify-between w-full'>
                        <div className='flex items-center gap-1 pt-5 '>
                            <p>
                                <span className='text-[20px]  md:text-[28px] font-[600] text-[#141415]'>
                                    Used-Clear :
                                </span>
                                <span className='text-[16px] font-none lg:hidden md:hidden xl:hidden'> 2020 Mercedes-Benz S550 in Washington, DC.</span>
                            </p>

                            <p className='text-[28px]  font-[400] text-[#141415] hidden lg:block md:block sm:hidden xl:block '>
                                2020 Mercedes-Benz S550 in Washington, DC.
                            </p>

                        </div>

                        <div className='gap-3 items-center hidden lg:flex md:flex sm:hidden xl:flex'>
                            <button className='border rounded-full border-[#141415] py-2 px-3 text-[#141415]'>
                                Set Notification
                            </button>
                            <button className='border rounded-full border-[#141415] py-2 px-3 text-[#141415]'>
                                Save Search
                            </button>

                        </div>

                    </div>
                    <div className='flex md:hidden justify-between items-center w-full my-3'>
                        <div>
                            <SortMob />
                        </div>
                        <div>
                            <button className='flex flex-col justify-start gap-2 ' onClick={handleModalOpen}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M9 5.00001C8.73478 5.00001 8.48043 5.10537 8.29289 5.2929C8.10536 5.48044 8 5.73479 8 6.00001C8 6.26523 8.10536 6.51958 8.29289 6.70712C8.48043 6.89465 8.73478 7.00001 9 7.00001C9.26522 7.00001 9.51957 6.89465 9.70711 6.70712C9.89464 6.51958 10 6.26523 10 6.00001C10 5.73479 9.89464 5.48044 9.70711 5.2929C9.51957 5.10537 9.26522 5.00001 9 5.00001ZM6.17 5.00001C6.3766 4.41448 6.75974 3.90744 7.2666 3.5488C7.77346 3.19015 8.37909 2.99756 9 2.99756C9.62091 2.99756 10.2265 3.19015 10.7334 3.5488C11.2403 3.90744 11.6234 4.41448 11.83 5.00001H19C19.2652 5.00001 19.5196 5.10537 19.7071 5.2929C19.8946 5.48044 20 5.73479 20 6.00001C20 6.26523 19.8946 6.51958 19.7071 6.70712C19.5196 6.89465 19.2652 7.00001 19 7.00001H11.83C11.6234 7.58554 11.2403 8.09258 10.7334 8.45122C10.2265 8.80986 9.62091 9.00246 9 9.00246C8.37909 9.00246 7.77346 8.80986 7.2666 8.45122C6.75974 8.09258 6.3766 7.58554 6.17 7.00001H5C4.73478 7.00001 4.48043 6.89465 4.29289 6.70712C4.10536 6.51958 4 6.26523 4 6.00001C4 5.73479 4.10536 5.48044 4.29289 5.2929C4.48043 5.10537 4.73478 5.00001 5 5.00001H6.17ZM15 11C14.7348 11 14.4804 11.1054 14.2929 11.2929C14.1054 11.4804 14 11.7348 14 12C14 12.2652 14.1054 12.5196 14.2929 12.7071C14.4804 12.8947 14.7348 13 15 13C15.2652 13 15.5196 12.8947 15.7071 12.7071C15.8946 12.5196 16 12.2652 16 12C16 11.7348 15.8946 11.4804 15.7071 11.2929C15.5196 11.1054 15.2652 11 15 11ZM12.17 11C12.3766 10.4145 12.7597 9.90744 13.2666 9.5488C13.7735 9.19015 14.3791 8.99756 15 8.99756C15.6209 8.99756 16.2265 9.19015 16.7334 9.5488C17.2403 9.90744 17.6234 10.4145 17.83 11H19C19.2652 11 19.5196 11.1054 19.7071 11.2929C19.8946 11.4804 20 11.7348 20 12C20 12.2652 19.8946 12.5196 19.7071 12.7071C19.5196 12.8947 19.2652 13 19 13H17.83C17.6234 13.5855 17.2403 14.0926 16.7334 14.4512C16.2265 14.8099 15.6209 15.0025 15 15.0025C14.3791 15.0025 13.7735 14.8099 13.2666 14.4512C12.7597 14.0926 12.3766 13.5855 12.17 13H5C4.73478 13 4.48043 12.8947 4.29289 12.7071C4.10536 12.5196 4 12.2652 4 12C4 11.7348 4.10536 11.4804 4.29289 11.2929C4.48043 11.1054 4.73478 11 5 11H12.17ZM9 17C8.73478 17 8.48043 17.1054 8.29289 17.2929C8.10536 17.4804 8 17.7348 8 18C8 18.2652 8.10536 18.5196 8.29289 18.7071C8.48043 18.8947 8.73478 19 9 19C9.26522 19 9.51957 18.8947 9.70711 18.7071C9.89464 18.5196 10 18.2652 10 18C10 17.7348 9.89464 17.4804 9.70711 17.2929C9.51957 17.1054 9.26522 17 9 17ZM6.17 17C6.3766 16.4145 6.75974 15.9074 7.2666 15.5488C7.77346 15.1902 8.37909 14.9976 9 14.9976C9.62091 14.9976 10.2265 15.1902 10.7334 15.5488C11.2403 15.9074 11.6234 16.4145 11.83 17H19C19.2652 17 19.5196 17.1054 19.7071 17.2929C19.8946 17.4804 20 17.7348 20 18C20 18.2652 19.8946 18.5196 19.7071 18.7071C19.5196 18.8947 19.2652 19 19 19H11.83C11.6234 19.5855 11.2403 20.0926 10.7334 20.4512C10.2265 20.8099 9.62091 21.0025 9 21.0025C8.37909 21.0025 7.77346 20.8099 7.2666 20.4512C6.75974 20.0926 6.3766 19.5855 6.17 19H5C4.73478 19 4.48043 18.8947 4.29289 18.7071C4.10536 18.5196 4 18.2652 4 18C4 17.7348 4.10536 17.4804 4.29289 17.2929C4.48043 17.1054 4.73478 17 5 17H6.17Z" fill="#141415" />
                                </svg>
                                <p className='text-[12px] font-[500]'>
                                    Filter
                                </p>
                            </button>
                        </div>


                    </div>

                    <div className='hidden lg:block md:block sm:hidden xl:block '>
                        <Filters />
                    </div>


                    <div className='flex justify-center items-center relative  md:w-auto'>
                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 md:gap-x-10'>

                            {
                                carData.map((item, i) => (
                                    <Link href={`/used-car/${item.id}`} key={i} >
                                    <div
                                       
                                        className="flex flex-col justify-center items-center py-5"
                                    >
                                        <div className="bg-white flex flex-col w-[320px] sm:w-[344px] md:w-[290px]  ">
                                            <div>
                                                <Slider {...settings} >
                                                    {
                                                        item.imgs.map((items, index) => (
                                                            <Image
                                                                src={items.img}
                                                                alt=""
                                                                width={800}
                                                                height={800}
                                                                className="w-[300px] h-[200px] md:h-[190px] object-cover relative"
                                                            />


                                                        ))
                                                    }
                                                </Slider>
                                            </div>
                                            <button
                                                className={`bg-white w-[30px] h-[30px] shadow-sm rounded-full absolute ml-[17rem] md:ml-[15.5rem] mt-[1rem] flex items-center justify-center `}
                                                onClick={() => handleButtonClick(i)}
                                            >
                                                {isClicked[i] ? <AiFillHeart size={20} className='text-[#8552AC]' /> : <AiOutlineHeart size={20} />}
                                            </button>
                                            <div className="flex   items-start pl-3 py-5  md:w-auto ">
                                                <div className="flex flex-col ">
                                                    <h1 className={` font-[500] text-[16px] `}>
                                                        {item.title}
                                                    </h1>
                                                    <div className='flex items-center flex-row gap-10 '>
                                                        <div className='flex items-center '>
                                                            <p className="text-[14px] font-[600]">{item.price}</p>
                                                            <BsDot size={10} />
                                                            <p className='text-[8px] font-[500] text-[#505057]'>
                                                                {item.market}
                                                            </p>
                                                        </div>
                                                        <div>
                                                            <p className='uppercase text-[#09A122] font-[600] text-[10px]'>
                                                                {item.deal}
                                                            </p>
                                                        </div>

                                                    </div>
                                                    <div className='flex justify-between '>
                                                        <div className='flex flex-col '>
                                                            <p
                                                                className={`text-[8px] text-[#737074] flex items-center gap-1 mt-1`}
                                                            >
                                                                <BsSpeedometer2 size={14} />
                                                                {item.mileage}
                                                            </p>
                                                            <p className='text-[8px] font-[400] flex items-center gap-1 mt-2 text-[#505057]'>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                                                    <g clip-path="url(#clip0_1_4191)">
                                                                        <path d="M5.9998 12C5.9998 12 1.7998 6.522 1.7998 4.2C1.7998 3.64845 1.90844 3.1023 2.11951 2.59273C2.33058 2.08316 2.63995 1.62016 3.02996 1.23015C3.41996 0.840145 3.88297 0.530776 4.39253 0.319706C4.9021 0.108636 5.44825 0 5.9998 0C6.55136 0 7.09751 0.108636 7.60707 0.319706C8.11664 0.530776 8.57965 0.840145 8.96965 1.23015C9.35966 1.62016 9.66903 2.08316 9.8801 2.59273C10.0912 3.1023 10.1998 3.64845 10.1998 4.2C10.1998 6.522 5.9998 12 5.9998 12ZM5.9998 5.4C6.31806 5.4 6.62329 5.27357 6.84833 5.04853C7.07338 4.82348 7.1998 4.51826 7.1998 4.2C7.1998 3.88174 7.07338 3.57652 6.84833 3.35147C6.62329 3.12643 6.31806 3 5.9998 3C5.68154 3 5.37632 3.12643 5.15128 3.35147C4.92623 3.57652 4.7998 3.88174 4.7998 4.2C4.7998 4.51826 4.92623 4.82348 5.15128 5.04853C5.37632 5.27357 5.68154 5.4 5.9998 5.4Z" fill="#505057" />
                                                                    </g>
                                                                    <defs>
                                                                        <clipPath id="clip0_1_4191">
                                                                            <rect width="12" height="12" fill="white" />
                                                                        </clipPath>
                                                                    </defs>
                                                                </svg>
                                                                {item.location}
                                                            </p>
                                                            <p className="text-[10px] pt-2 text-[#0866FC] font-[600] underline flex items-center gap-1">
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
                                                        <div className="flex flex-col ml-[10rem] md:ml-[10rem]  absolute w-[120px] gap-1  text-center font-[500] ">
                                                            <p
                                                                style={{ background: `${item.color1}` }}
                                                                className="rounded-full py-[2px] text-[12px]"
                                                            >
                                                                {item.cond}
                                                            </p>
                                                            <p
                                                                style={{ background: `${item.color2}` }}
                                                                className="rounded-full py-[2px] text-[12px]"
                                                            >
                                                                {item.cond1}
                                                            </p>
                                                            <p
                                                                style={{ background: `${item.color3}` }}
                                                                className="rounded-full py-[2px] text-[12px]"
                                                            >
                                                                {item.own}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    </Link>

                                ))
                            }

                        </div>
                    </div>
                    <div className='mx-auto flex justify-center items-center md:w-full h-[60px] mt-[30px]'>
                        <PageCount />
                    </div>
                </div>
            </Wrapper>

        </div>
    )
}

export default UsedCar