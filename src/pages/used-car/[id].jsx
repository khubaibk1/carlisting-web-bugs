import { useRouter } from "next/router";
import carData from "../../../data/carData"
import Image from "next/image";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import Wrapper from "@/components/shared/Wrapper";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import React, { useState } from "react";
import { TbArrowMerge, TbDropletHalfFilled } from "react-icons/tb";
import { AiFillStar } from "react-icons/ai";
import { BiTrim } from "react-icons/bi";
import { BsStarHalf, BsSpeedometer2, BsCalendar3 } from "react-icons/bs";
import { HiHashtag } from "react-icons/hi";
import { GiEyedropper } from "react-icons/gi";
import { CiUser, CiLaptop } from "react-icons/ci";
import { PiEngineBold, PiCarProfile } from "react-icons/pi";
import { FaLocationDot } from "react-icons/fa6";
import { LuDot, LuFuel } from "react-icons/lu";
import {
    CustomPrevButton,
    CustomNextButton,
} from "../../components/custombuttons/CustomButtons"
const index = () => {
    const router = useRouter();
    const { id } = router.query;
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
    };

    const blogId = parseInt(id);
    const blog = carData.find((blog) => blog.id === parseInt(id));
    const blogIndex = carData.findIndex((blog) => blog.id === blogId);
    const handlePrevBlog = () => {
        if (blogIndex > 0) {
            const prevBlogId = carData[blogIndex - 1].id;
            router.push(`/used-car/${prevBlogId}`);
        }
    };

    const handleNextBlog = () => {
        if (blogIndex < carData.length - 1) {
            const nextBlogId = carData[blogIndex + 1].id;
            router.push(`/used-car/${nextBlogId}`);
        }
    };
    return (
        <div>
            <Navbar />
            <main className="">
                {blog && (
                    <>
                        {/* next previous bar  */}
                        <div
                            className="shadow-md"
                        // style={{ boxShadow: "0px 4px 12px 0px rgba(35, 31, 32, 0.12)" }}
                        >
                            <div className="p-3 md:p-5 flex justify-between w-full max-w-screen-xl md:mx-auto">
                                <div className="flex justify-start items-center">
                                    <p className={`font-[400]  w-[200px] text-left `}>
                                        {carData[blogIndex].id}
                                        <span>  of </span>
                                        <span className="font-[500]">{carData.length} </span> listings
                                    </p>
                                </div>
                                <div className="flex gap-4 justify-end items-end">

                                    <div className="flex gap-2">
                                        <button
                                            onClick={handlePrevBlog}
                                            disabled={blogIndex === 0}
                                            className={` rounded focus:outline-none text-left font-medium   ${blogIndex === 0
                                                ? "text-gray-400 cursor-not-allowed"
                                                : "text-[#672797]"
                                                }`}
                                        >
                                            Previous
                                        </button>
                                    </div>
                                    <button
                                        onClick={handleNextBlog}
                                        disabled={blogIndex === carData.length - 1}
                                        className={`rounded focus:outline-none font-medium text-right  ${blogIndex === carData.length - 1
                                            ? "text-gray-400 cursor-not-allowed"
                                            : "text-[#672797]"
                                            }`}
                                    >
                                        Next
                                    </button>
                                </div>

                            </div>
                        </div>
                        <Wrapper>
                            <div className="flex md:flex-row flex-col justify-start items-start md:gap-7">
                                <div className="flex flex-col justify-start items-start w-full md:w-2/3 mt-7">
                                    <p className="text-[28px] md:text-[36px] font-[500]">{blog.title}</p>
                                    <div className="md:flex w-full justify-between items-center hidden ">
                                        <p className="text-[24px] font-[400]">
                                            2 LT / 30,000 miles
                                        </p>
                                        <div className="flex gap-4 items-center">
                                            <button className="flex items-center gap-1 text-[16px] font-[400]">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                    <path d="M14.1667 12.9757C13.5756 12.9757 13.0467 13.2167 12.6422 13.5942L7.09667 10.2609C7.13556 10.0761 7.16667 9.8914 7.16667 9.69863C7.16667 9.50586 7.13556 9.32112 7.09667 9.13638L12.58 5.83518C13 6.23678 13.5522 6.48578 14.1667 6.48578C15.4578 6.48578 16.5 5.40948 16.5 4.07614C16.5 2.74281 15.4578 1.6665 14.1667 1.6665C12.8756 1.6665 11.8333 2.74281 11.8333 4.07614C11.8333 4.26891 11.8644 4.45365 11.9033 4.63839L6.42 7.9396C6 7.53799 5.44778 7.28899 4.83333 7.28899C3.54222 7.28899 2.5 8.3653 2.5 9.69863C2.5 11.032 3.54222 12.1083 4.83333 12.1083C5.44778 12.1083 6 11.8593 6.42 11.4577L11.9578 14.799C11.9189 14.9677 11.8956 15.1444 11.8956 15.3211C11.8956 16.6143 12.9144 17.6665 14.1667 17.6665C15.4189 17.6665 16.4378 16.6143 16.4378 15.3211C16.4378 14.0279 15.4189 12.9757 14.1667 12.9757ZM14.1667 3.27293C14.5944 3.27293 14.9444 3.63438 14.9444 4.07614C14.9444 4.51791 14.5944 4.87936 14.1667 4.87936C13.7389 4.87936 13.3889 4.51791 13.3889 4.07614C13.3889 3.63438 13.7389 3.27293 14.1667 3.27293ZM4.83333 10.5018C4.40556 10.5018 4.05556 10.1404 4.05556 9.69863C4.05556 9.25687 4.40556 8.89542 4.83333 8.89542C5.26111 8.89542 5.61111 9.25687 5.61111 9.69863C5.61111 10.1404 5.26111 10.5018 4.83333 10.5018ZM14.1667 16.1404C13.7389 16.1404 13.3889 15.779 13.3889 15.3372C13.3889 14.8954 13.7389 14.534 14.1667 14.534C14.5944 14.534 14.9444 14.8954 14.9444 15.3372C14.9444 15.779 14.5944 16.1404 14.1667 16.1404Z" fill="#141415" />
                                                </svg>
                                                Share

                                            </button>
                                            <button
                                                className="flex items-center gap-1 text-[16px] font-[400]"
                                                onClick={handleClick}
                                            >
                                                {isClicked ? (
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="20"
                                                        height="20"
                                                        viewBox="0 0 18 16"
                                                        fill="#8552AC"
                                                        stroke="#8552AC"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                    >
                                                        <path d="M16.0221 9.44346L16.0221 9.44349L16.0265 9.43894C16.9797 8.45332 17.5086 7.12966 17.4999 5.75488C17.4912 4.38009 16.9454 3.06334 15.9797 2.09008C15.0139 1.11669 13.7057 0.565323 12.3382 0.556686C11.1305 0.549059 9.9638 0.965271 9.03404 1.72467C8.63346 1.38599 8.18359 1.10951 7.69923 0.905397C7.06783 0.639323 6.39036 0.501524 5.70575 0.500013C5.02115 0.498501 4.34309 0.633309 3.71053 0.896595C3.07798 1.15988 2.50351 1.5464 2.02 2.03376C1.53649 2.52112 1.15346 3.09972 0.892694 3.73626C0.631931 4.37278 0.498517 5.05481 0.500012 5.74324C0.501508 6.43166 0.637885 7.1131 0.901412 7.74847C1.16481 8.38352 1.55009 8.96017 2.03536 9.44524C2.03561 9.44549 2.03586 9.44574 2.03611 9.44599L7.34578 14.798L7.34583 14.798C7.79141 15.247 8.39652 15.5 9.0283 15.5C9.66008 15.5 10.2652 15.247 10.7108 14.798L10.7109 14.798L16.0221 9.44346Z" />
                                                    </svg>
                                                ) : (
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                        <path d="M17.8582 11.5966L17.8582 11.5966L17.8626 11.592C18.9226 10.4786 19.5096 8.98475 19.4999 7.43465C19.4902 5.88454 18.8846 4.39846 17.8106 3.29893C16.7363 2.199 15.2795 1.57456 13.7551 1.56478C12.3927 1.55604 11.0782 2.03895 10.0377 2.91709C9.58281 2.51978 9.06933 2.19613 8.51497 1.95881C7.8117 1.65775 7.05685 1.50173 6.29385 1.50001C5.53086 1.4983 4.77534 1.65094 4.07077 1.94885C3.36623 2.24675 2.72688 2.68388 2.1891 3.23455C1.65135 3.7852 1.22572 4.43854 0.936081 5.15677C0.646451 5.87498 0.498354 6.64431 0.500014 7.42067C0.501674 8.19704 0.653061 8.96569 0.945765 9.68261C1.23834 10.3992 1.6665 11.0504 2.20626 11.5985C2.20651 11.5987 2.20677 11.599 2.20703 11.5992L8.18061 17.716L8.18066 17.7161C8.66961 18.2166 9.33523 18.5 10.0318 18.5C10.7284 18.5 11.3941 18.2166 11.883 17.7161L11.8831 17.716L17.8582 11.5966Z" stroke="#141415" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                )}
                                                Save
                                            </button>
                                        </div>

                                    </div>
                                    {/* photo gallery  */}
                                    <div className="mt-5">
                                        <div className="w-[325px] md:w-full">
                                            <Carousel
                                                showStatus={false}
                                                renderArrowPrev={(onClickHandler, hasPrev, label) =>
                                                    hasPrev && <CustomPrevButton onClick={onClickHandler} />
                                                }
                                                renderArrowNext={(onClickHandler, hasNext, label) =>
                                                    hasNext && <CustomNextButton onClick={onClickHandler} />
                                                }
                                                interval="1000"
                                                transitionTime="1000"
                                                renderIndicator={(clickHandler, isSelected, index, label) => null}
                                                showThumbs={true}
                                                className="custom-carousel"
                                            >

                                                <div>
                                                    <img
                                                        src={blog.imgs[0].img}
                                                        alt=""
                                                        className="md:w-[640px] "
                                                    />
                                                </div>
                                                <div>
                                                    <img
                                                        src={blog.imgs[1].img} alt=""
                                                    />
                                                </div>
                                                <div>
                                                    <img
                                                        src={blog.imgs[2].img} alt=""
                                                    />
                                                </div>
                                                <div>
                                                    <img
                                                        src={blog.imgs[3].img} alt=""
                                                    />
                                                </div>
                                                <div>
                                                    <img
                                                        src={blog.imgs[4].img} alt=""
                                                    />
                                                </div>
                                                <div>
                                                    <img
                                                        src={blog.imgs[5].img} alt=""
                                                    />
                                                </div>
                                            </Carousel>

                                        </div>
                                    </div>
                                    <div className="max-w-[90%] w-full">
                                        <div className="flex md:flex-row flex-col md:justify-between ">
                                            <div className="flex md:flex-row flex-col  gap-4 mb-2">
                                                <div className="flex items-center md:mt-[-3.2rem]  gap-2">
                                                    <p className="text-[32px] font-[600]">
                                                        $89,000
                                                    </p>
                                                    <p className="text-[12px] text-[#505057] font-[400]">
                                                        $3,200 below market
                                                    </p>

                                                </div>
                                                <p className="text-[#09A122] font-[600] md:pt-2 text-[20px]">
                                                    AMAZING!
                                                </p>
                                            </div>
                                            <div className="flex flex-row md:flex-col py-2 md:border rounded-md md:p-3 text-[12.5px] md:text-base border-t gap-2 items-center md:items-start md:gap-4 font-[500]">
                                                <p>
                                                    Retail: $80,000 - $93,000
                                                </p>
                                                <div>
                                                    <LuDot size={10} className="text-[#777] md:hidden" />
                                                </div>
                                                <p>
                                                    Trade In: $75,000
                                                </p>

                                            </div>

                                        </div>

                                    </div>
                                </div>
                                <div className="md:w-[441px] md:pt-[140px] pt-5">
                                    <div className="flex flex-col start gap-4 items-start w-full rounded-[10px] border px-3 md:px-8 py-3">
                                        <div className="flex items-center gap-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                                <path d="M22.0251 32.1115C22.061 28.4401 21.1302 25.4545 19.9462 25.4429C18.7621 25.4314 17.7732 28.3983 17.7373 32.0696C17.7014 35.7411 18.6322 38.7267 19.8162 38.7383C21.0003 38.7499 21.9893 35.783 22.0251 32.1115Z" fill="#141415" />
                                                <path d="M15.1572 31.2777C17.1725 28.2086 18.0038 25.1937 17.014 24.5438C16.0242 23.8939 13.5881 25.855 11.5729 28.9241C9.5576 31.9933 8.72632 35.0081 9.71608 35.6581C10.7059 36.308 13.1419 34.3469 15.1572 31.2777Z" fill="#141415" />
                                                <path d="M9.82297 26.8746C13.1777 25.3824 15.5071 23.2957 15.0258 22.2138C14.5446 21.1319 11.435 21.4645 8.08025 22.9568C4.72556 24.4489 2.39618 26.5356 2.87742 27.6176C3.35865 28.6995 6.46828 28.3668 9.82297 26.8746Z" fill="#141415" />
                                                <path d="M14.6231 19.1797C14.8032 18.0094 12.0075 16.6079 8.37869 16.0493C4.74979 15.4908 1.662 15.9868 1.48187 17.1571C1.30174 18.3274 4.09749 19.7289 7.72635 20.2874C11.3552 20.846 14.443 20.35 14.6231 19.1797Z" fill="#141415" />
                                                <path d="M15.9261 16.3914C16.7102 15.5042 15.1157 12.8139 12.3646 10.3825C9.61344 7.95106 6.74754 6.69925 5.9634 7.5865C5.17925 8.47376 6.77381 11.1641 9.52496 13.5955C12.2761 16.027 15.142 17.2787 15.9261 16.3914Z" fill="#141415" />
                                                <path d="M18.5215 14.7621C19.6608 14.4397 19.774 11.3143 18.7744 7.78146C17.7747 4.24859 16.0406 1.64599 14.9012 1.9684C13.7619 2.29081 13.6487 5.41612 14.6484 8.94903C15.648 12.4818 17.3821 15.0845 18.5215 14.7621Z" fill="#141415" />
                                                <path d="M25.5668 9.05921C26.636 5.54673 26.5845 2.41979 25.4517 2.07498C24.3189 1.73017 22.5338 4.29805 21.4646 7.81053C20.3955 11.323 20.447 14.4499 21.5798 14.7947C22.7126 15.1395 24.4977 12.5717 25.5668 9.05921Z" fill="#141415" />
                                                <path d="M30.6016 13.8051C33.3997 11.4279 35.0466 8.76923 34.2799 7.86686C33.5133 6.96446 30.6234 8.16003 27.8254 10.5372C25.0272 12.9144 23.3804 15.573 24.147 16.4754C24.9137 17.3778 27.8035 16.1823 30.6016 13.8051Z" fill="#141415" />
                                                <path d="M32.2656 20.5215C35.9048 20.0347 38.7276 18.6886 38.5706 17.5149C38.4136 16.3413 35.3361 15.7846 31.6969 16.2714C28.0578 16.7583 25.2349 18.1043 25.392 19.278C25.549 20.4516 28.6264 21.0084 32.2656 20.5215Z" fill="#141415" />
                                                <path d="M36.9602 27.953C37.4627 26.8809 35.1749 24.7486 31.8503 23.1905C28.5257 21.6325 25.4232 21.2386 24.9208 22.3108C24.4183 23.383 26.706 25.5153 30.0307 27.0733C33.3552 28.6313 36.4577 29.0253 36.9602 27.953Z" fill="#141415" />
                                                <path d="M29.9666 35.8638C30.969 35.2335 30.1974 32.2028 28.243 29.0946C26.2887 25.9863 23.8918 23.9776 22.8894 24.6078C21.887 25.2381 22.6586 28.2688 24.613 31.377C26.5673 34.4853 28.9642 36.4941 29.9666 35.8638Z" fill="#141415" />
                                            </svg>
                                            <p className="text-[24px] md:text-[32px] font-[500] text-[#391553]">
                                                Bryan Auto Deals
                                            </p>
                                        </div>
                                        <p className="flex items-center gap-2 ">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.84032 9.85616C7.63107 13.7546 10.8128 16.844 14.7623 18.5192L14.7743 18.5242L15.5383 18.8642C16.0102 19.0746 16.5402 19.1162 17.0391 18.982C17.5381 18.8478 17.9757 18.5459 18.2783 18.1272L19.5523 16.3642C19.5898 16.3122 19.6059 16.2479 19.5973 16.1845C19.5888 16.121 19.5562 16.0633 19.5063 16.0232L17.2823 14.2282C17.2561 14.207 17.2258 14.1913 17.1934 14.1822C17.1609 14.173 17.127 14.1705 17.0935 14.1748C17.0601 14.1791 17.0278 14.1901 16.9988 14.2072C16.9697 14.2243 16.9444 14.247 16.9243 14.2742L16.0583 15.4422C15.9563 15.58 15.8101 15.6786 15.6442 15.7218C15.4782 15.7649 15.3025 15.7499 15.1463 15.6792C12.1874 14.3387 9.81676 11.9681 8.47632 9.00916C8.40563 8.85295 8.39059 8.67724 8.43371 8.51129C8.47684 8.34534 8.57552 8.19918 8.71332 8.09716L9.88032 7.23016C9.90744 7.21012 9.93022 7.1848 9.9473 7.15572C9.96437 7.12665 9.97539 7.09442 9.97969 7.06097C9.98399 7.02753 9.98147 6.99356 9.9723 6.96111C9.96313 6.92866 9.94749 6.8984 9.92632 6.87216L8.13232 4.64816C8.09218 4.59829 8.03444 4.56572 7.97099 4.55716C7.90755 4.5486 7.84324 4.56471 7.79132 4.60216L6.01832 5.88216C5.59672 6.18627 5.29342 6.62698 5.15998 7.12939C5.02654 7.63181 5.07118 8.16493 5.28632 8.63816L5.84032 9.85516V9.85616ZM14.1703 19.8972C9.87942 18.0752 6.42292 14.7174 4.47732 10.4812L4.47532 10.4792L3.92132 9.25916C3.56274 8.47059 3.48823 7.5822 3.71045 6.74493C3.93266 5.90765 4.4379 5.17313 5.14032 4.66616L6.91332 3.38616C7.27645 3.12408 7.72623 3.01118 8.17008 3.07071C8.61394 3.13024 9.01808 3.35766 9.29932 3.70616L11.0943 5.93116C11.2425 6.11473 11.3519 6.32636 11.4162 6.55332C11.4805 6.78028 11.4982 7.01789 11.4683 7.25187C11.4384 7.48586 11.3615 7.71138 11.2423 7.9149C11.123 8.11841 10.9638 8.29572 10.7743 8.43616L10.1043 8.93216C11.2371 11.1285 13.026 12.9174 15.2223 14.0502L15.7193 13.3802C15.8598 13.1908 16.037 13.0317 16.2404 12.9126C16.4439 12.7934 16.6693 12.7166 16.9031 12.6867C17.137 12.6568 17.3745 12.6745 17.6014 12.7387C17.8282 12.8028 18.0398 12.9122 18.2233 13.0602L20.4483 14.8552C20.7971 15.1364 21.0247 15.5408 21.0842 15.9849C21.1438 16.4289 21.0307 16.879 20.7683 17.2422L19.4943 19.0062C18.99 19.7041 18.2609 20.2072 17.4294 20.431C16.598 20.6548 15.7148 20.5857 14.9283 20.2352L14.1703 19.8972Z" fill="#505057" />
                                            </svg>
                                            <p className="text-[#0866FC] font-[500]">
                                                {blog.tele}
                                            </p>
                                        </p>
                                        <p className="flex items-center gap-2 text-[#505057] font-[500]">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <g clip-path="url(#clip0_1_5632)">
                                                    <path d="M11.9996 24C11.9996 24 3.59961 13.044 3.59961 8.4C3.59961 7.2969 3.81688 6.20459 4.23902 5.18546C4.66116 4.16632 5.2799 3.24032 6.05991 2.4603C6.83992 1.68029 7.76593 1.06155 8.78507 0.639412C9.8042 0.217272 10.8965 0 11.9996 0C13.1027 0 14.195 0.217272 15.2141 0.639412C16.2333 1.06155 17.1593 1.68029 17.9393 2.4603C18.7193 3.24032 19.3381 4.16632 19.7602 5.18546C20.1823 6.20459 20.3996 7.2969 20.3996 8.4C20.3996 13.044 11.9996 24 11.9996 24ZM11.9996 10.8C12.6361 10.8 13.2466 10.5471 13.6967 10.0971C14.1468 9.64697 14.3996 9.03652 14.3996 8.4C14.3996 7.76348 14.1468 7.15303 13.6967 6.70294C13.2466 6.25286 12.6361 6 11.9996 6C11.3631 6 10.7526 6.25286 10.3026 6.70294C9.85247 7.15303 9.59961 7.76348 9.59961 8.4C9.59961 9.03652 9.85247 9.64697 10.3026 10.0971C10.7526 10.5471 11.3631 10.8 11.9996 10.8Z" fill="#141415" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_1_5632">
                                                        <rect width="24" height="24" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                            <p>
                                                {blog.location}
                                            </p>
                                        </p>
                                        <p className="flex items-center gap-2 text-[#505057] font-[500]">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path d="M16.36 14C16.44 13.34 16.5 12.68 16.5 12C16.5 11.32 16.44 10.66 16.36 10H19.74C19.9 10.64 20 11.31 20 12C20 12.69 19.9 13.36 19.74 14M14.59 19.56C15.19 18.45 15.65 17.25 15.97 16H18.92C17.9512 17.6683 16.4141 18.932 14.59 19.56ZM14.34 14H9.66C9.56 13.34 9.5 12.68 9.5 12C9.5 11.32 9.56 10.65 9.66 10H14.34C14.43 10.65 14.5 11.32 14.5 12C14.5 12.68 14.43 13.34 14.34 14ZM12 19.96C11.17 18.76 10.5 17.43 10.09 16H13.91C13.5 17.43 12.83 18.76 12 19.96ZM8 8H5.08C6.03886 6.32721 7.5748 5.06149 9.4 4.44C8.8 5.55 8.35 6.75 8 8ZM5.08 16H8C8.35 17.25 8.8 18.45 9.4 19.56C7.57862 18.9317 6.04485 17.6677 5.08 16ZM4.26 14C4.1 13.36 4 12.69 4 12C4 11.31 4.1 10.64 4.26 10H7.64C7.56 10.66 7.5 11.32 7.5 12C7.5 12.68 7.56 13.34 7.64 14M12 4.03C12.83 5.23 13.5 6.57 13.91 8H10.09C10.5 6.57 11.17 5.23 12 4.03ZM18.92 8H15.97C15.657 6.76146 15.1936 5.5659 14.59 4.44C16.43 5.07 17.96 6.34 18.92 8ZM12 2C6.47 2 2 6.5 2 12C2 14.6522 3.05357 17.1957 4.92893 19.0711C5.85752 19.9997 6.95991 20.7362 8.17317 21.2388C9.38642 21.7413 10.6868 22 12 22C14.6522 22 17.1957 20.9464 19.0711 19.0711C20.9464 17.1957 22 14.6522 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7362 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2Z" fill="#141415" />
                                            </svg>
                                            <p>
                                                www.bryandeals.com

                                            </p>
                                        </p>
                                        <p className="flex items-center gap-1 text-[#505057] font-[500]">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <g clip-path="url(#clip0_1_5640)">
                                                    <path d="M22.5 10.5H19.8103L15.75 6.4397C15.6112 6.2998 15.446 6.18889 15.264 6.11341C15.082 6.03792 14.8867 5.99938 14.6897 6.00001H4.15125C3.90487 6.00046 3.66239 6.0616 3.44525 6.17802C3.22811 6.29444 3.04299 6.46256 2.90625 6.66751L0.125625 10.8338C0.0439236 10.9572 0.000244554 11.102 0 11.25L0 15.75C0 16.1478 0.158035 16.5294 0.43934 16.8107C0.720644 17.092 1.10218 17.25 1.5 17.25H3.09375C3.25898 17.8953 3.63428 18.4673 4.16048 18.8757C4.68669 19.2842 5.33387 19.5059 6 19.5059C6.66613 19.5059 7.31331 19.2842 7.83952 18.8757C8.36572 18.4673 8.74102 17.8953 8.90625 17.25H15.0938C15.259 17.8953 15.6343 18.4673 16.1605 18.8757C16.6867 19.2842 17.3339 19.5059 18 19.5059C18.6661 19.5059 19.3133 19.2842 19.8395 18.8757C20.3657 18.4673 20.741 17.8953 20.9062 17.25H22.5C22.8978 17.25 23.2794 17.092 23.5607 16.8107C23.842 16.5294 24 16.1478 24 15.75V12C24 11.6022 23.842 11.2207 23.5607 10.9393C23.2794 10.658 22.8978 10.5 22.5 10.5ZM4.15125 7.50001H14.6897L17.6897 10.5H2.15625L4.15125 7.50001ZM6 18C5.70333 18 5.41332 17.912 5.16665 17.7472C4.91997 17.5824 4.72771 17.3481 4.61418 17.074C4.50065 16.7999 4.47094 16.4983 4.52882 16.2074C4.5867 15.9164 4.72956 15.6491 4.93934 15.4393C5.14912 15.2296 5.41639 15.0867 5.70736 15.0288C5.99834 14.971 6.29994 15.0007 6.57403 15.1142C6.84811 15.2277 7.08238 15.42 7.2472 15.6667C7.41203 15.9133 7.5 16.2033 7.5 16.5C7.5 16.8978 7.34196 17.2794 7.06066 17.5607C6.77936 17.842 6.39782 18 6 18ZM18 18C17.7033 18 17.4133 17.912 17.1666 17.7472C16.92 17.5824 16.7277 17.3481 16.6142 17.074C16.5006 16.7999 16.4709 16.4983 16.5288 16.2074C16.5867 15.9164 16.7296 15.6491 16.9393 15.4393C17.1491 15.2296 17.4164 15.0867 17.7074 15.0288C17.9983 14.971 18.2999 15.0007 18.574 15.1142C18.8481 15.2277 19.0824 15.42 19.2472 15.6667C19.412 15.9133 19.5 16.2033 19.5 16.5C19.5 16.8978 19.342 17.2794 19.0607 17.5607C18.7794 17.842 18.3978 18 18 18ZM22.5 15.75H20.9062C20.741 15.1047 20.3657 14.5327 19.8395 14.1243C19.3133 13.7158 18.6661 13.4941 18 13.4941C17.3339 13.4941 16.6867 13.7158 16.1605 14.1243C15.6343 14.5327 15.259 15.1047 15.0938 15.75H8.90625C8.74102 15.1047 8.36572 14.5327 7.83952 14.1243C7.31331 13.7158 6.66613 13.4941 6 13.4941C5.33387 13.4941 4.68669 13.7158 4.16048 14.1243C3.63428 14.5327 3.25898 15.1047 3.09375 15.75H1.5V12H22.5V15.75Z" fill="#141415" />
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_1_5640">
                                                        <rect width="24" height="24" fill="white" />
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                            Inventory  <span className="text-[#0866FC]"> (150)</span>
                                        </p>
                                        <div className="flex flex-col  text-[#505057] font-[500]">
                                            <p>
                                                Dealer’s Trade in rating
                                            </p>
                                            <div className="flex pt-5 md:pt-0">

                                                <div className="flex flex-row gap-1">
                                                    <div className="bg-[#00B67A] w-[24px] h-[24px] flex justify-center items-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                            <g clip-path="url(#clip0_1_3435)">
                                                                <path d="M11.4847 11.1132L12.9447 15.6079L8.00267 12.0159L11.4847 11.1132ZM16 6.20658H9.89L8.00333 0.392578L6.11 6.20791L0 6.19991L4.948 9.79791L3.05467 15.6072L8.00267 12.0159L11.058 9.79791L16 6.20658Z" fill="white" />
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0_1_3435">
                                                                    <rect width="16" height="16" fill="white" />
                                                                </clipPath>
                                                            </defs>
                                                        </svg>

                                                    </div>
                                                    <div className="bg-[#00B67A] w-[24px] h-[24px] flex justify-center items-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                            <g clip-path="url(#clip0_1_3435)">
                                                                <path d="M11.4847 11.1132L12.9447 15.6079L8.00267 12.0159L11.4847 11.1132ZM16 6.20658H9.89L8.00333 0.392578L6.11 6.20791L0 6.19991L4.948 9.79791L3.05467 15.6072L8.00267 12.0159L11.058 9.79791L16 6.20658Z" fill="white" />
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0_1_3435">
                                                                    <rect width="16" height="16" fill="white" />
                                                                </clipPath>
                                                            </defs>
                                                        </svg>

                                                    </div>
                                                    <div className="bg-[#00B67A] w-[24px] h-[24px] flex justify-center items-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                            <g clip-path="url(#clip0_1_3435)">
                                                                <path d="M11.4847 11.1132L12.9447 15.6079L8.00267 12.0159L11.4847 11.1132ZM16 6.20658H9.89L8.00333 0.392578L6.11 6.20791L0 6.19991L4.948 9.79791L3.05467 15.6072L8.00267 12.0159L11.058 9.79791L16 6.20658Z" fill="white" />
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0_1_3435">
                                                                    <rect width="16" height="16" fill="white" />
                                                                </clipPath>
                                                            </defs>
                                                        </svg>

                                                    </div>
                                                    <div className="bg-[#00B67A] w-[24px] h-[24px] flex justify-center items-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                            <g clip-path="url(#clip0_1_3435)">
                                                                <path d="M11.4847 11.1132L12.9447 15.6079L8.00267 12.0159L11.4847 11.1132ZM16 6.20658H9.89L8.00333 0.392578L6.11 6.20791L0 6.19991L4.948 9.79791L3.05467 15.6072L8.00267 12.0159L11.058 9.79791L16 6.20658Z" fill="white" />
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0_1_3435">
                                                                    <rect width="16" height="16" fill="white" />
                                                                </clipPath>
                                                            </defs>
                                                        </svg>

                                                    </div>
                                                    <div className="w-[24px] h-[24px] flex justify-center items-center" style={{ background: "linear-gradient(to right, #00B67A 50%, #808080 50%)" }}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                            <g clip-path="url(#clip0_1_3435)">
                                                                <path d="M11.4847 11.1132L12.9447 15.6079L8.00267 12.0159L11.4847 11.1132ZM16 6.20658H9.89L8.00333 0.392578L6.11 6.20791L0 6.19991L4.948 9.79791L3.05467 15.6072L8.00267 12.0159L11.058 9.79791L16 6.20658Z" fill="white" />
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0_1_3435">
                                                                    <rect width="16" height="16" fill="white" />
                                                                </clipPath>
                                                            </defs>
                                                        </svg>
                                                    </div>

                                                </div>


                                            </div>
                                        </div>
                                        <div className="font-[500] flex flex-col">
                                            <p>
                                                Dealer’s Overall rating
                                            </p>
                                            <div className="flex items-center gap-[2px]">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                                                    <path d="M5 0L6.12257 3.45492H9.75528L6.81636 5.59017L7.93893 9.04508L5 6.90983L2.06107 9.04508L3.18364 5.59017L0.244718 3.45492H3.87743L5 0Z" fill="#F5B431" />
                                                </svg><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                                                    <path d="M5 0L6.12257 3.45492H9.75528L6.81636 5.59017L7.93893 9.04508L5 6.90983L2.06107 9.04508L3.18364 5.59017L0.244718 3.45492H3.87743L5 0Z" fill="#F5B431" />
                                                </svg><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                                                    <path d="M5 0L6.12257 3.45492H9.75528L6.81636 5.59017L7.93893 9.04508L5 6.90983L2.06107 9.04508L3.18364 5.59017L0.244718 3.45492H3.87743L5 0Z" fill="#F5B431" />
                                                </svg><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                                                    <path d="M5 0L6.12257 3.45492H9.75528L6.81636 5.59017L7.93893 9.04508L5 6.90983L2.06107 9.04508L3.18364 5.59017L0.244718 3.45492H3.87743L5 0Z" fill="#F5B431" />
                                                </svg><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                                                    <path d="M5 0L6.12257 3.45492H9.75528L6.81636 5.59017L7.93893 9.04508L5 6.90983L2.06107 9.04508L3.18364 5.59017L0.244718 3.45492H3.87743L5 0Z" fill="#F5B431" />
                                                </svg>
                                                <div>
                                                    <p className="text-[14px] font-[400]">
                                                        4.9 (17 reviews)
                                                    </p>
                                                </div>

                                            </div>

                                        </div>
                                        <div className="flex flex-col justify-center items-center mx-auto">
                                            <button

                                                className="bg-[#09A122] text-white  px-4 py-[10px] w-[300px] md:text-[16px] rounded-[10px] hover:bg-[#09A122]"

                                            >
                                                Contact Dealer</button>
                                            <div className="flex items-center gap-3 mt-6">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                                    <path d="M21.8761 13.1251C21.1261 16.8751 18.2986 20.4061 14.3311 21.1951C12.3961 21.5804 10.3888 21.3455 8.59507 20.5237C6.80136 19.7018 5.31265 18.3351 4.34091 16.618C3.36917 14.9008 2.96395 12.9209 3.18293 10.9601C3.40192 8.99926 4.23396 7.15751 5.56057 5.69707C8.28157 2.70007 12.8761 1.87507 16.6261 3.37507" stroke="#09A122" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M9.125 11.625L12.875 15.375L21.875 5.625" stroke="#09A122" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                                <p className="text-[#505057] font-[500]">
                                                    Vertial/approved
                                                </p>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* key details  */}
                            <div>
                                <section className=" bg-white  container mx-auto  py-8">
                                    <div className="pt-5">
                                        <h6 className="text-black font-[600] text-[28px] underline underline-offset-1">
                                            Key Details
                                        </h6>
                                        <div className="grid grid-cols-1 items-start md:gap-10 py-5 md:grid-cols-3">
                                            <ul className="flex flex-col gap-1">
                                                <li className="flex items-center">
                                                    <div className="w-[40px] h-[40px] rounded-full border broder-slate-200 mt-1 ms-2 bg-white flex items-center justify-center">
                                                        <TbArrowMerge />
                                                    </div>
                                                    <p className="mt-1 ms-2 ">
                                                        Make: <span className="font-medium">BMW</span>
                                                    </p>
                                                </li>
                                                <li className="flex items-center">
                                                    <div className="w-[40px] h-[40px] rounded-full border broder-slate-200 mt-1 ms-2 bg-white flex items-center justify-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18" fill="none">
                                                            <path d="M14.2857 0V2.25H5.71429V0H0V6H5.71429V3.75H10.7307C10.2587 4.39553 10.0019 5.18614 10 6V12C9.99924 12.5965 9.77324 13.1683 9.37154 13.5901C8.96984 14.0119 8.42523 14.2492 7.85714 14.25H5.71429V12H0V18H5.71429V15.75H7.85714C8.804 15.7488 9.71175 15.3533 10.3813 14.6503C11.0508 13.9473 11.4274 12.9942 11.4286 12V6C11.4284 5.70466 11.4836 5.41217 11.5911 5.13925C11.6986 4.86632 11.8562 4.61831 12.055 4.40937C12.2538 4.20042 12.4899 4.03465 12.7497 3.92152C13.0095 3.80838 13.288 3.7501 13.5693 3.75H14.2857V6H20V0H14.2857ZM4.28571 4.5H1.42857V1.5H4.28571V4.5ZM4.28571 16.5H1.42857V13.5H4.28571V16.5ZM18.5714 4.5H15.7143V1.5H18.5714V4.5Z" fill="#141415" />
                                                        </svg>
                                                    </div>
                                                    <p className="mt-1 ms-2 ">
                                                        Model: <span className="font-medium">2 Series</span>
                                                    </p>
                                                </li>
                                                <li className="flex items-center">
                                                    <div className="w-[40px] h-[40px] rounded-full border broder-slate-200 mt-1 ms-2 bg-white flex items-center justify-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                            <path d="M2.22222 14.4444H5.55556V17.7778C5.55556 19.0033 6.55222 20 7.77778 20H17.7778C19.0033 20 20 19.0033 20 17.7778V7.77778C20 6.55222 19.0033 5.55556 17.7778 5.55556H14.4444V2.22222C14.4444 0.996667 13.4478 0 12.2222 0H2.22222C0.996667 0 0 0.996667 0 2.22222V12.2222C0 13.4478 0.996667 14.4444 2.22222 14.4444ZM17.7778 7.77778L17.7744 17.7778H7.77778V14.4444H12.2222C13.4478 14.4444 14.4444 13.4478 14.4444 12.2222V7.77778H17.7778ZM2.22222 7.77778H7.77778V2.22222H12.2222L12.2189 12.2222H2.22222V7.77778Z" fill="#141415" />
                                                        </svg>
                                                    </div>
                                                    <p className="mt-1 ms-2 ">
                                                        Trim: <span className="font-medium">2 LT</span>
                                                    </p>
                                                </li>
                                                <li className="flex items-center">
                                                    <div className="w-[40px] h-[40px] rounded-full border broder-slate-200 mt-1 ms-2 bg-white flex items-center justify-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                                            <path d="M18.6923 2.53857H3.30769C2.03319 2.53857 1 3.57176 1 4.84627V18.6924C1 19.9669 2.03319 21.0001 3.30769 21.0001H18.6923C19.9668 21.0001 21 19.9669 21 18.6924V4.84627C21 3.57176 19.9668 2.53857 18.6923 2.53857Z" stroke="#141415" stroke-width="1.53846" stroke-linejoin="round" />
                                                            <path d="M12.9234 11.0001C13.5606 11.0001 14.0772 10.4835 14.0772 9.84623C14.0772 9.20898 13.5606 8.69238 12.9234 8.69238C12.2861 8.69238 11.7695 9.20898 11.7695 9.84623C11.7695 10.4835 12.2861 11.0001 12.9234 11.0001Z" fill="#141415" />
                                                            <path d="M16.7691 11.0001C17.4063 11.0001 17.9229 10.4835 17.9229 9.84623C17.9229 9.20898 17.4063 8.69238 16.7691 8.69238C16.1318 8.69238 15.6152 9.20898 15.6152 9.84623C15.6152 10.4835 16.1318 11.0001 16.7691 11.0001Z" fill="#141415" />
                                                            <path d="M12.9234 14.8463C13.5606 14.8463 14.0772 14.3297 14.0772 13.6924C14.0772 13.0552 13.5606 12.5386 12.9234 12.5386C12.2861 12.5386 11.7695 13.0552 11.7695 13.6924C11.7695 14.3297 12.2861 14.8463 12.9234 14.8463Z" fill="#141415" />
                                                            <path d="M16.7691 14.8463C17.4063 14.8463 17.9229 14.3297 17.9229 13.6924C17.9229 13.0552 17.4063 12.5386 16.7691 12.5386C16.1318 12.5386 15.6152 13.0552 15.6152 13.6924C15.6152 14.3297 16.1318 14.8463 16.7691 14.8463Z" fill="#141415" />
                                                            <path d="M5.23099 14.8463C5.86825 14.8463 6.38484 14.3297 6.38484 13.6924C6.38484 13.0552 5.86825 12.5386 5.23099 12.5386C4.59374 12.5386 4.07715 13.0552 4.07715 13.6924C4.07715 14.3297 4.59374 14.8463 5.23099 14.8463Z" fill="#141415" />
                                                            <path d="M9.0767 14.8463C9.71395 14.8463 10.2305 14.3297 10.2305 13.6924C10.2305 13.0552 9.71395 12.5386 9.0767 12.5386C8.43945 12.5386 7.92285 13.0552 7.92285 13.6924C7.92285 14.3297 8.43945 14.8463 9.0767 14.8463Z" fill="#141415" />
                                                            <path d="M5.23099 18.6925C5.86825 18.6925 6.38484 18.1759 6.38484 17.5386C6.38484 16.9014 5.86825 16.3848 5.23099 16.3848C4.59374 16.3848 4.07715 16.9014 4.07715 17.5386C4.07715 18.1759 4.59374 18.6925 5.23099 18.6925Z" fill="#141415" />
                                                            <path d="M9.0767 18.6925C9.71395 18.6925 10.2305 18.1759 10.2305 17.5386C10.2305 16.9014 9.71395 16.3848 9.0767 16.3848C8.43945 16.3848 7.92285 16.9014 7.92285 17.5386C7.92285 18.1759 8.43945 18.6925 9.0767 18.6925Z" fill="#141415" />
                                                            <path d="M12.9234 18.6925C13.5606 18.6925 14.0772 18.1759 14.0772 17.5386C14.0772 16.9014 13.5606 16.3848 12.9234 16.3848C12.2861 16.3848 11.7695 16.9014 11.7695 17.5386C11.7695 18.1759 12.2861 18.6925 12.9234 18.6925Z" fill="#141415" />
                                                            <path d="M4.8457 1V2.53846M17.1534 1V2.53846" stroke="#141415" stroke-width="1.53846" stroke-linecap="round" stroke-linejoin="round" />
                                                            <path d="M21 6.38477H1" stroke="#141415" stroke-width="1.53846" stroke-linejoin="round" />
                                                        </svg>
                                                    </div>
                                                    <p className="mt-1 ms-2 ">
                                                        Year: <span className="font-medium">2020</span>
                                                    </p>
                                                </li>
                                                <li className="flex items-center">
                                                    <div className="w-[40px] h-[40px] rounded-full border broder-slate-200 mt-1 ms-2 bg-white flex items-center justify-center">
                                                        <BsSpeedometer2 />
                                                    </div>
                                                    <p className="mt-1 ms-2 ">
                                                        Milage: <span className="font-medium">30,000</span>
                                                    </p>
                                                </li>
                                                <li className="flex items-center">
                                                    <div className="w-[40px] h-[40px] rounded-full border broder-slate-200 mt-1 ms-2 bg-white flex items-center justify-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" viewBox="0 0 16 20" fill="none">
                                                            <path d="M0.75 18.4211H15.25C15.44 18.4211 15.6229 18.4971 15.7618 18.6337C15.9006 18.7702 15.9851 18.9572 15.998 19.1567C16.011 19.3563 15.9515 19.5536 15.8316 19.7087C15.7117 19.8639 15.5402 19.9654 15.352 19.9926L15.25 20H0.75C0.559977 19.9999 0.377059 19.924 0.238208 19.7874C0.0993575 19.6508 0.0149261 19.4639 0.00197411 19.2643C-0.0109779 19.0648 0.0485155 18.8675 0.168433 18.7123C0.28835 18.5572 0.45975 18.4557 0.648 18.4284L0.75 18.4211ZM12.25 0C13.2446 0 14.1984 0.415882 14.9017 1.15616C15.6049 1.89643 16 2.90046 16 3.94737V12.8947C16 13.9416 15.6049 14.9457 14.9017 15.6859C14.1984 16.4262 13.2446 16.8421 12.25 16.8421H3.75C2.75544 16.8421 1.80161 16.4262 1.09835 15.6859C0.395088 14.9457 0 13.9416 0 12.8947V3.94737C0 2.90046 0.395088 1.89643 1.09835 1.15616C1.80161 0.415882 2.75544 0 3.75 0H12.25ZM12.25 1.57895H3.75C3.15326 1.57895 2.58097 1.82848 2.15901 2.27264C1.73705 2.71681 1.5 3.31922 1.5 3.94737V12.8947C1.5 13.5229 1.73705 14.1253 2.15901 14.5695C2.58097 15.0136 3.15326 15.2632 3.75 15.2632H12.25C12.8467 15.2632 13.419 15.0136 13.841 14.5695C14.2629 14.1253 14.5 13.5229 14.5 12.8947V3.94737C14.5 3.31922 14.2629 2.71681 13.841 2.27264C13.419 1.82848 12.8467 1.57895 12.25 1.57895Z" fill="#141415" />
                                                        </svg>
                                                    </div>
                                                    <p className="mt-1 ms-2 ">
                                                        Title: <span className="font-medium">Clean</span>
                                                    </p>
                                                </li>
                                                <li className="flex items-center">
                                                    <div className="w-[40px] h-[40px] rounded-full border broder-slate-200 mt-1 ms-2 bg-white flex items-center justify-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" viewBox="0 0 16 20" fill="none">
                                                            <path d="M8 0C5.2385 0 3 2.2385 3 5C3 7.7615 5.2385 10 8 10C10.7615 10 13 7.7615 13 5C13 2.2385 10.7615 0 8 0ZM4.25 5C4.25 4.00544 4.64509 3.05161 5.34835 2.34835C6.05161 1.64509 7.00544 1.25 8 1.25C8.99456 1.25 9.94839 1.64509 10.6517 2.34835C11.3549 3.05161 11.75 4.00544 11.75 5C11.75 5.99456 11.3549 6.94839 10.6517 7.65165C9.94839 8.35491 8.99456 8.75 8 8.75C7.00544 8.75 6.05161 8.35491 5.34835 7.65165C4.64509 6.94839 4.25 5.99456 4.25 5ZM2.125 12C1.5615 12 1.02108 12.2238 0.622575 12.6222C0.224074 13.0206 0.000132588 13.561 0 14.1245V14.5C0 16.3775 0.971 17.7835 2.46 18.69C3.925 19.5815 5.893 20 8 20C10.107 20 12.075 19.5815 13.54 18.69C15.029 17.7835 16 16.3775 16 14.5V14.1245C16 13.8455 15.945 13.5692 15.8382 13.3114C15.7314 13.0536 15.5749 12.8194 15.3776 12.6221C15.1802 12.4248 14.946 12.2683 14.6882 12.1616C14.4303 12.0548 14.154 11.9999 13.875 12H2.125ZM1.25 14.1245C1.25013 13.8925 1.34238 13.6701 1.50646 13.5061C1.67054 13.3421 1.89302 13.25 2.125 13.25H13.875C14.3585 13.25 14.75 13.6415 14.75 14.1245V14.5C14.75 15.872 14.07 16.904 12.89 17.6225C11.685 18.356 9.966 18.75 8 18.75C6.034 18.75 4.315 18.356 3.11 17.6225C1.93 16.904 1.25 15.8725 1.25 14.5V14.1245Z" fill="#141415" />
                                                        </svg>
                                                    </div>
                                                    <p className="mt-1 ms-2 ">
                                                        Owners: <span className="font-medium">1 owner</span>
                                                    </p>
                                                </li>
                                            </ul>
                                            <ul className="flex flex-col gap-1">
                                                <li className="flex items-center">
                                                    <div className="w-[40px] h-[40px] rounded-full border broder-slate-200 mt-1 ms-2 bg-white flex items-center justify-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                            <path d="M2.77778 0C2.04107 0 1.33453 0.292658 0.813592 0.813592C0.292658 1.33453 0 2.04107 0 2.77778V6.11111C0 6.84782 0.292658 7.55436 0.813592 8.0753C1.33453 8.59623 2.04107 8.88889 2.77778 8.88889C3.51449 8.88889 4.22103 8.59623 4.74196 8.0753C5.2629 7.55436 5.55556 6.84782 5.55556 6.11111V5.55556H8.07556C8.32111 5.98222 8.70556 6.31889 9.16667 6.50556V13.4944C8.70556 13.6811 8.32222 14.0178 8.07556 14.4444H5.55556V13.8889C5.55556 13.1522 5.2629 12.4456 4.74196 11.9247C4.22103 11.4038 3.51449 11.1111 2.77778 11.1111C2.04107 11.1111 1.33453 11.4038 0.813592 11.9247C0.292658 12.4456 0 13.1522 0 13.8889V17.2222C0 17.9589 0.292658 18.6655 0.813592 19.1864C1.33453 19.7073 2.04107 20 2.77778 20C3.51449 20 4.22103 19.7073 4.74196 19.1864C5.2629 18.6655 5.55556 17.9589 5.55556 17.2222V16.1111H7.84778C7.97055 16.5886 8.24865 17.0117 8.63828 17.3139C9.02791 17.616 9.50696 17.78 10 17.78C10.493 17.78 10.9721 17.616 11.3617 17.3139C11.7514 17.0117 12.0294 16.5886 12.1522 16.1111H14.4444V17.2222C14.4444 17.9589 14.7371 18.6655 15.258 19.1864C15.779 19.7073 16.4855 20 17.2222 20C17.9589 20 18.6655 19.7073 19.1864 19.1864C19.7073 18.6655 20 17.9589 20 17.2222V13.8889C20 13.1522 19.7073 12.4456 19.1864 11.9247C18.6655 11.4038 17.9589 11.1111 17.2222 11.1111C16.4855 11.1111 15.779 11.4038 15.258 11.9247C14.7371 12.4456 14.4444 13.1522 14.4444 13.8889V14.4444H11.9244C11.6764 14.0153 11.2925 13.6811 10.8333 13.4944V6.50556C11.2944 6.31889 11.6778 5.98222 11.9244 5.55556H14.4444V6.11111C14.4444 6.84782 14.7371 7.55436 15.258 8.0753C15.779 8.59623 16.4855 8.88889 17.2222 8.88889C17.9589 8.88889 18.6655 8.59623 19.1864 8.0753C19.7073 7.55436 20 6.84782 20 6.11111V2.77778C20 2.04107 19.7073 1.33453 19.1864 0.813592C18.6655 0.292658 17.9589 0 17.2222 0C16.4855 0 15.779 0.292658 15.258 0.813592C14.7371 1.33453 14.4444 2.04107 14.4444 2.77778V3.88889H12.1522C12.0294 3.41137 11.7514 2.98825 11.3617 2.68613C10.9721 2.384 10.493 2.22003 10 2.22003C9.50696 2.22003 9.02791 2.384 8.63828 2.68613C8.24865 2.98825 7.97055 3.41137 7.84778 3.88889H5.55556V2.77778C5.55556 2.04107 5.2629 1.33453 4.74196 0.813592C4.22103 0.292658 3.51449 0 2.77778 0ZM1.66667 2.77778C1.66667 2.48309 1.78373 2.20048 1.9921 1.9921C2.20048 1.78373 2.48309 1.66667 2.77778 1.66667C3.07246 1.66667 3.35508 1.78373 3.56345 1.9921C3.77183 2.20048 3.88889 2.48309 3.88889 2.77778V6.11111C3.88889 6.4058 3.77183 6.68841 3.56345 6.89679C3.35508 7.10516 3.07246 7.22222 2.77778 7.22222C2.48309 7.22222 2.20048 7.10516 1.9921 6.89679C1.78373 6.68841 1.66667 6.4058 1.66667 6.11111V2.77778ZM2.77778 12.7778C3.07246 12.7778 3.35508 12.8948 3.56345 13.1032C3.77183 13.3116 3.88889 13.5942 3.88889 13.8889V17.2222C3.88889 17.5169 3.77183 17.7995 3.56345 18.0079C3.35508 18.2163 3.07246 18.3333 2.77778 18.3333C2.48309 18.3333 2.20048 18.2163 1.9921 18.0079C1.78373 17.7995 1.66667 17.5169 1.66667 17.2222V13.8889C1.66667 13.5942 1.78373 13.3116 1.9921 13.1032C2.20048 12.8948 2.48309 12.7778 2.77778 12.7778ZM16.1111 2.77778C16.1111 2.48309 16.2282 2.20048 16.4365 1.9921C16.6449 1.78373 16.9275 1.66667 17.2222 1.66667C17.5169 1.66667 17.7995 1.78373 18.0079 1.9921C18.2163 2.20048 18.3333 2.48309 18.3333 2.77778V6.11111C18.3333 6.4058 18.2163 6.68841 18.0079 6.89679C17.7995 7.10516 17.5169 7.22222 17.2222 7.22222C16.9275 7.22222 16.6449 7.10516 16.4365 6.89679C16.2282 6.68841 16.1111 6.4058 16.1111 6.11111V2.77778ZM17.2222 12.7778C17.5169 12.7778 17.7995 12.8948 18.0079 13.1032C18.2163 13.3116 18.3333 13.5942 18.3333 13.8889V17.2222C18.3333 17.5169 18.2163 17.7995 18.0079 18.0079C17.7995 18.2163 17.5169 18.3333 17.2222 18.3333C16.9275 18.3333 16.6449 18.2163 16.4365 18.0079C16.2282 17.7995 16.1111 17.5169 16.1111 17.2222V13.8889C16.1111 13.5942 16.2282 13.3116 16.4365 13.1032C16.6449 12.8948 16.9275 12.7778 17.2222 12.7778Z" fill="#141415" />
                                                        </svg>
                                                    </div>
                                                    <p className="mt-1 ms-2 ">
                                                        Drive Train:{" "}
                                                        <span className="font-medium">All-Wheel Drive</span>
                                                    </p>
                                                </li>
                                                <li className="flex items-center">
                                                    <div className="w-[40px] h-[40px] rounded-full border broder-slate-200 mt-1 ms-2 bg-white flex items-center justify-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16" fill="none">
                                                            <path d="M19.375 6.125C19.2092 6.125 19.0503 6.19085 18.9331 6.30806C18.8158 6.42527 18.75 6.58424 18.75 6.75V8.625H17.5V7.375C17.5 7.04348 17.3683 6.72554 17.1339 6.49112C16.8995 6.2567 16.5815 6.125 16.25 6.125H15.2586L12.5 3.36641C12.3843 3.24983 12.2467 3.1574 12.095 3.0945C11.9433 3.0316 11.7806 2.99948 11.6164 3H10V1.75H11.875C12.0408 1.75 12.1997 1.68415 12.3169 1.56694C12.4342 1.44973 12.5 1.29076 12.5 1.125C12.5 0.95924 12.4342 0.800269 12.3169 0.683058C12.1997 0.565848 12.0408 0.5 11.875 0.5H6.875C6.70924 0.5 6.55027 0.565848 6.43306 0.683058C6.31585 0.800269 6.25 0.95924 6.25 1.125C6.25 1.29076 6.31585 1.44973 6.43306 1.56694C6.55027 1.68415 6.70924 1.75 6.875 1.75H8.75V3H3.75C3.41848 3 3.10054 3.1317 2.86612 3.36612C2.6317 3.60054 2.5 3.91848 2.5 4.25V8.625H1.25V6.75C1.25 6.58424 1.18415 6.42527 1.06694 6.30806C0.949732 6.19085 0.79076 6.125 0.625 6.125C0.45924 6.125 0.300269 6.19085 0.183058 6.30806C0.065848 6.42527 0 6.58424 0 6.75L0 11.75C0 11.9158 0.065848 12.0747 0.183058 12.1919C0.300269 12.3092 0.45924 12.375 0.625 12.375C0.79076 12.375 0.949732 12.3092 1.06694 12.1919C1.18415 12.0747 1.25 11.9158 1.25 11.75V9.875H2.5V11.4914C2.49948 11.6556 2.5316 11.8183 2.5945 11.97C2.6574 12.1217 2.74983 12.2594 2.86641 12.375L5.625 15.1336C5.74065 15.2502 5.87832 15.3426 6.03001 15.4055C6.1817 15.4684 6.34438 15.5005 6.50859 15.5H11.6164C11.7806 15.5005 11.9433 15.4684 12.095 15.4055C12.2467 15.3426 12.3843 15.2502 12.5 15.1336L15.2586 12.375H16.25C16.5815 12.375 16.8995 12.2433 17.1339 12.0089C17.3683 11.7745 17.5 11.4565 17.5 11.125V9.875H18.75V11.75C18.75 11.9158 18.8158 12.0747 18.9331 12.1919C19.0503 12.3092 19.2092 12.375 19.375 12.375C19.5408 12.375 19.6997 12.3092 19.8169 12.1919C19.9342 12.0747 20 11.9158 20 11.75V6.75C20 6.58424 19.9342 6.42527 19.8169 6.30806C19.6997 6.19085 19.5408 6.125 19.375 6.125ZM16.25 11.125H15.2586C15.0944 11.1245 14.9317 11.1566 14.78 11.2195C14.6283 11.2824 14.4907 11.3748 14.375 11.4914L11.6164 14.25H6.50859L3.75 11.4914V4.25H11.6164L14.375 7.0086C14.4907 7.12517 14.6283 7.2176 14.78 7.2805C14.9317 7.3434 15.0944 7.37553 15.2586 7.375H16.25V11.125Z" fill="#141415" />
                                                        </svg>
                                                    </div>
                                                    <p className="mt-1 ms-2 ">
                                                        Engine: <span className="font-medium">182 hp</span>
                                                    </p>
                                                </li>
                                                <li className="flex items-center">
                                                    <div className="w-[40px] h-[40px] rounded-full border broder-slate-200 mt-1 ms-2 bg-white flex items-center justify-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" viewBox="0 0 16 20" fill="none">
                                                            <path d="M4 3H0V0H4V3ZM0 20H4V17H0V20ZM10 0H6V3H10V0ZM6 20H10V17H6V20ZM12 0V3H16V0H12ZM13 9H9V5H7V9H3V5H1V15H3V11H7V15H9V11H15V5H13V9Z" fill="#141415" />
                                                        </svg>
                                                    </div>
                                                    <p className="mt-1 ms-2 ">
                                                        Transmission: <span className="font-medium">Automatic</span>
                                                    </p>
                                                </li>
                                                <li className="flex items-center">
                                                    <div className="w-[40px] h-[40px] rounded-full border broder-slate-200 mt-1 ms-2 bg-white flex items-center justify-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.1102 13.9543C16.6985 13.156 15.8277 12.621 14.7735 12.7535C13.7618 12.8801 12.6168 13.0701 11.4652 13.3585C9.59267 13.8268 7.981 14.7751 6.871 15.5701L6.53767 15.816L6.38433 15.9326L6.10433 16.1543L5.86183 16.3543L5.57267 16.606C4.86933 17.2318 5.34767 18.2543 6.14267 18.3293L6.236 18.3335H13.3985C13.9878 18.3334 14.5703 18.2084 15.1077 17.9667C15.6451 17.7249 16.1251 17.3719 16.516 16.931L16.6518 16.7693L16.8185 16.5618C17.4627 15.756 17.5168 14.7426 17.1102 13.9543ZM14.9802 14.4068C15.3135 14.3651 15.5243 14.516 15.6293 14.7185C15.6845 14.8299 15.7094 14.9538 15.7015 15.0778C15.6936 15.2019 15.6532 15.3217 15.5843 15.4251L15.5168 15.521L15.3502 15.7293C15.133 16.0006 14.8617 16.2237 14.5535 16.3842C14.2453 16.5448 13.907 16.6393 13.5602 16.6618L13.3985 16.6668H8.21433C9.17267 16.0226 10.4452 15.331 11.8693 14.9751C12.8941 14.7243 13.9329 14.534 14.9802 14.4068ZM4.16683 1.66681C3.65017 1.66681 3.27183 1.94848 3.0335 2.25348C2.806 2.54265 2.6585 2.90348 2.556 3.25015C2.34767 3.95265 2.25017 4.85598 2.21267 5.75765C2.18183 6.51681 2.19267 7.32098 2.23183 8.07098L2.26683 8.62098C2.32517 9.42765 2.41683 10.1335 2.52017 10.5976C2.96433 12.596 3.741 13.8035 4.61017 14.4618C5.44267 15.0918 6.40767 15.2285 7.03933 14.9118C7.31517 14.7743 7.58267 14.5268 7.80433 14.2701C8.07086 13.9571 8.29527 13.6106 8.47184 13.2393C8.86017 12.4268 9.09933 11.3285 8.70767 10.1535C8.46517 9.42598 7.99767 8.97265 7.586 8.63348L7.321 8.42015C6.85183 8.04681 6.46183 7.72681 6.16267 7.12765C6.08517 6.97265 6.0285 6.66098 6.01517 6.13181L6.01267 5.87931L6.01933 5.25765C6.0235 5.00765 6.02767 4.74348 6.02517 4.48765C6.01933 3.94598 5.98517 3.30431 5.77517 2.78181C5.6635 2.50431 5.48517 2.21431 5.19433 1.99431C4.8973 1.77486 4.53607 1.65972 4.16683 1.66681ZM4.24767 3.45848C4.31683 3.66848 4.3535 4.00848 4.3585 4.50431V4.73931L4.351 5.31348C4.34684 5.59265 4.34267 5.88681 4.34933 6.17181C4.36267 6.70681 4.41267 7.35515 4.67183 7.87265C5.03434 8.59931 5.49934 9.07015 5.9135 9.42265L6.15517 9.62265L6.28267 9.72348C6.7785 10.1185 7.00683 10.321 7.126 10.6801C7.346 11.3385 7.226 11.9826 6.96767 12.5201C6.84017 12.7893 6.68433 13.016 6.54017 13.1835C6.4735 13.2618 6.416 13.3176 6.37433 13.3551L6.31183 13.4085L6.23267 13.4051C6.12183 13.396 5.90434 13.3518 5.616 13.1335C5.16017 12.7876 4.536 11.9876 4.14683 10.236C4.11183 10.0768 4.07683 9.87265 4.04434 9.63515L3.99767 9.25431C3.98933 9.18765 3.98267 9.11848 3.976 9.04765L3.93683 8.60598L3.90433 8.13265L3.891 7.88681L3.87183 7.38181C3.85586 6.86329 3.85781 6.34437 3.87767 5.82598C3.9135 4.97015 4.00433 4.22848 4.15434 3.72348C4.18016 3.6331 4.21133 3.54517 4.24767 3.45848Z" fill="#141415" />
                                                        </svg>
                                                    </div>
                                                    <p className="mt-1 ms-2 ">
                                                        Interior color: <span className="font-medium">Black</span>
                                                    </p>
                                                </li>
                                                <li className="flex items-center">
                                                    <div className="w-[40px] h-[40px] rounded-full border broder-slate-200 mt-1 ms-2 bg-white flex items-center justify-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20" fill="none">
                                                            <path d="M9 20C6.64479 20 4.63915 19.162 2.98306 17.4859C1.32698 15.8098 0.499292 13.7855 0.5 11.413C0.5 10.2174 0.721355 9.11232 1.16406 8.09783C1.60677 7.08333 2.21771 6.17754 2.99688 5.38043L7.88438 0.461957C8.04375 0.317029 8.22083 0.203986 8.41563 0.122826C8.61042 0.0416668 8.80521 0.000724638 9 0C9.19479 0 9.38958 0.0409422 9.58438 0.122826C9.77917 0.20471 9.95625 0.317754 10.1156 0.461957L15.0031 5.38043C15.7823 6.17754 16.3932 7.08333 16.8359 8.09783C17.2786 9.11232 17.5 10.2174 17.5 11.413C17.5 13.7862 16.6723 15.8109 15.0169 17.487C13.3616 19.163 11.3559 20.0007 9 20ZM9 17.8261V2.3913L4.48438 6.95652C3.86458 7.55435 3.39956 8.22935 3.08931 8.98152C2.77906 9.7337 2.62429 10.5442 2.625 11.413C2.625 13.1703 3.24479 14.6786 4.48438 15.938C5.72396 17.1975 7.22917 17.8268 9 17.8261Z" fill="#141415" />
                                                        </svg>
                                                    </div>
                                                    <p className="mt-1 ms-2 ">
                                                        Exterior color: <span className="font-medium">Gray</span>
                                                    </p>
                                                </li>
                                                <li className="flex items-center">
                                                    <div className="w-[40px] h-[40px] rounded-full border broder-slate-200 mt-1 ms-2 bg-white flex items-center justify-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                                            <path d="M1.5 21H13.5M2.5 8H12.5M12.5 21V3C12.5 2.46957 12.2893 1.96086 11.9142 1.58579C11.5391 1.21071 11.0304 1 10.5 1H4.5C3.96957 1 3.46086 1.21071 3.08579 1.58579C2.71071 1.96086 2.5 2.46957 2.5 3V21M12.5 12H14.5C15.0304 12 15.5391 12.2107 15.9142 12.5858C16.2893 12.9609 16.5 13.4696 16.5 14V16C16.5 16.5304 16.7107 17.0391 17.0858 17.4142C17.4609 17.7893 17.9696 18 18.5 18C19.0304 18 19.5391 17.7893 19.9142 17.4142C20.2893 17.0391 20.5 16.5304 20.5 16V8.83C20.5002 8.56609 20.4482 8.30474 20.3469 8.06103C20.2457 7.81732 20.0972 7.59606 19.91 7.41L16.5 4" stroke="#141415" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                        </svg>
                                                    </div>
                                                    <p className="mt-1 ms-2 ">
                                                        Fuel/Energy type: <span className="font-medium">Gasoline</span>
                                                    </p>
                                                </li>
                                                <li className="flex items-center">
                                                    <div className="w-[40px] h-[40px] rounded-full border broder-slate-200 mt-1 ms-2 bg-white flex items-center justify-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                            <path d="M19.7826 6.79348C19.9022 6.79348 20 6.69565 20 6.57609V4.94565C20 4.82609 19.9022 4.72826 19.7826 4.72826H15.3261V0.217391C15.3261 0.0978261 15.2283 0 15.1087 0H13.3696C13.25 0 13.1522 0.0978261 13.1522 0.217391V4.72826H6.95652V0.217391C6.95652 0.0978261 6.8587 0 6.73913 0H5C4.88043 0 4.78261 0.0978261 4.78261 0.217391V4.72826H0.217391C0.0978261 4.72826 0 4.82609 0 4.94565V6.57609C0 6.69565 0.0978261 6.79348 0.217391 6.79348H4.78261V13.2065H0.217391C0.0978261 13.2065 0 13.3043 0 13.4239V15.0543C0 15.1739 0.0978261 15.2717 0.217391 15.2717H4.78261V19.7826C4.78261 19.9022 4.88043 20 5 20H6.73913C6.8587 20 6.95652 19.9022 6.95652 19.7826V15.2717H13.1522V19.7826C13.1522 19.9022 13.25 20 13.3696 20H15.1087C15.2283 20 15.3261 19.9022 15.3261 19.7826V15.2717H19.7826C19.9022 15.2717 20 15.1739 20 15.0543V13.4239C20 13.3043 19.9022 13.2065 19.7826 13.2065H15.3261V6.79348H19.7826ZM13.1522 13.2065H6.95652V6.79348H13.1522V13.2065Z" fill="#141415" />
                                                        </svg>
                                                    </div>
                                                    <p className="mt-1 ms-2 ">
                                                        VIN: <span className="font-medium">372722BQUISHJGCF7</span>
                                                    </p>
                                                </li>
                                            </ul>
                                            <ul className="flex flex-col gap-1">
                                                <li className="flex items-center">
                                                    <div className="w-[40px] h-[40px] rounded-full border broder-slate-200 mt-1 ms-2 bg-white flex items-center justify-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                            <path d="M19.7826 6.79348C19.9022 6.79348 20 6.69565 20 6.57609V4.94565C20 4.82609 19.9022 4.72826 19.7826 4.72826H15.3261V0.217391C15.3261 0.0978261 15.2283 0 15.1087 0H13.3696C13.25 0 13.1522 0.0978261 13.1522 0.217391V4.72826H6.95652V0.217391C6.95652 0.0978261 6.8587 0 6.73913 0H5C4.88043 0 4.78261 0.0978261 4.78261 0.217391V4.72826H0.217391C0.0978261 4.72826 0 4.82609 0 4.94565V6.57609C0 6.69565 0.0978261 6.79348 0.217391 6.79348H4.78261V13.2065H0.217391C0.0978261 13.2065 0 13.3043 0 13.4239V15.0543C0 15.1739 0.0978261 15.2717 0.217391 15.2717H4.78261V19.7826C4.78261 19.9022 4.88043 20 5 20H6.73913C6.8587 20 6.95652 19.9022 6.95652 19.7826V15.2717H13.1522V19.7826C13.1522 19.9022 13.25 20 13.3696 20H15.1087C15.2283 20 15.3261 19.9022 15.3261 19.7826V15.2717H19.7826C19.9022 15.2717 20 15.1739 20 15.0543V13.4239C20 13.3043 19.9022 13.2065 19.7826 13.2065H15.3261V6.79348H19.7826ZM13.1522 13.2065H6.95652V6.79348H13.1522V13.2065Z" fill="#141415" />
                                                        </svg>
                                                    </div>
                                                    <p className="mt-1 ms-2 ">
                                                        Stock: <span className="font-medium">45T121</span>
                                                    </p>
                                                </li>
                                                <li className="flex items-center">
                                                    <div className="w-[40px] h-[40px] rounded-full border broder-slate-200 mt-1 ms-2 bg-white flex items-center justify-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="20" viewBox="0 0 14 20" fill="none">
                                                            <path d="M6.99992 20C6.99992 20 0 10.87 0 7C-1.36978e-08 6.08075 0.181058 5.1705 0.532837 4.32122C0.884616 3.47194 1.40023 2.70026 2.05023 2.05025C2.70023 1.40024 3.4719 0.884626 4.32117 0.532843C5.17043 0.18106 6.08068 0 6.99992 0C7.91916 0 8.8294 0.18106 9.67867 0.532843C10.5279 0.884626 11.2996 1.40024 11.9496 2.05025C12.5996 2.70026 13.1152 3.47194 13.467 4.32122C13.8188 5.1705 13.9998 6.08075 13.9998 7C13.9998 10.87 6.99992 20 6.99992 20ZM6.99992 9C7.53035 9 8.03905 8.78929 8.41411 8.41421C8.78918 8.03914 8.9999 7.53043 8.9999 7C8.9999 6.46957 8.78918 5.96086 8.41411 5.58579C8.03905 5.21071 7.53035 5 6.99992 5C6.46949 5 5.96079 5.21071 5.58572 5.58579C5.21065 5.96086 4.99994 6.46957 4.99994 7C4.99994 7.53043 5.21065 8.03914 5.58572 8.41421C5.96079 8.78929 6.46949 9 6.99992 9Z" fill="#141415" />
                                                        </svg>
                                                    </div>
                                                    <p className="mt-1 ms-2 ">
                                                        Location: <span className="font-medium">Washington, DC</span>
                                                    </p>
                                                </li>
                                                <li className="flex items-center">
                                                    <div className="w-[40px] h-[40px] rounded-full border broder-slate-200 mt-1 ms-2 bg-white flex items-center justify-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="12" viewBox="0 0 20 12" fill="none">
                                                            <path d="M18.75 3.99826H16.5086L13.125 0.39067C13.0093 0.266374 12.8717 0.167828 12.72 0.100762C12.5683 0.0336963 12.4056 -0.000552625 12.2414 6.74279e-06H3.45937C3.25406 0.000412052 3.052 0.0547342 2.87104 0.158173C2.69009 0.261611 2.53583 0.410981 2.42188 0.593082L0.104688 4.2948C0.036603 4.4045 0.000203795 4.53309 0 4.66464L0 8.66289C0 9.01636 0.131696 9.35535 0.366117 9.60529C0.600537 9.85523 0.918479 9.99565 1.25 9.99565H2.57812C2.71581 10.569 3.02856 11.0772 3.46707 11.4401C3.90557 11.803 4.44489 12 5 12C5.55511 12 6.09443 11.803 6.53293 11.4401C6.97144 11.0772 7.28419 10.569 7.42188 9.99565H12.5781C12.7158 10.569 13.0286 11.0772 13.4671 11.4401C13.9056 11.803 14.4449 12 15 12C15.5551 12 16.0944 11.803 16.5329 11.4401C16.9714 11.0772 17.2842 10.569 17.4219 9.99565H18.75C19.0815 9.99565 19.3995 9.85523 19.6339 9.60529C19.8683 9.35535 20 9.01636 20 8.66289V5.33101C20 4.97755 19.8683 4.63856 19.6339 4.38862C19.3995 4.13868 19.0815 3.99826 18.75 3.99826ZM3.45937 1.33276H12.2414L14.7414 3.99826H1.79688L3.45937 1.33276ZM5 10.662C4.75277 10.662 4.5111 10.5839 4.30554 10.4374C4.09998 10.291 3.93976 10.0828 3.84515 9.83929C3.75054 9.59576 3.72579 9.32779 3.77402 9.06926C3.82225 8.81073 3.9413 8.57326 4.11612 8.38687C4.29093 8.20048 4.51366 8.07355 4.75614 8.02213C4.99861 7.9707 5.24995 7.9971 5.47835 8.09797C5.70676 8.19884 5.90199 8.36966 6.03934 8.58883C6.17669 8.808 6.25 9.06568 6.25 9.32927C6.25 9.68274 6.1183 10.0217 5.88388 10.2717C5.64946 10.5216 5.33152 10.662 5 10.662ZM15 10.662C14.7528 10.662 14.5111 10.5839 14.3055 10.4374C14.1 10.291 13.9398 10.0828 13.8451 9.83929C13.7505 9.59576 13.7258 9.32779 13.774 9.06926C13.8222 8.81073 13.9413 8.57326 14.1161 8.38687C14.2909 8.20048 14.5137 8.07355 14.7561 8.02213C14.9986 7.9707 15.2499 7.9971 15.4784 8.09797C15.7068 8.19884 15.902 8.36966 16.0393 8.58883C16.1767 8.808 16.25 9.06568 16.25 9.32927C16.25 9.68274 16.1183 10.0217 15.8839 10.2717C15.6495 10.5216 15.3315 10.662 15 10.662ZM18.75 8.66289H17.4219C17.2842 8.08953 16.9714 7.58134 16.5329 7.21843C16.0944 6.85552 15.5551 6.65854 15 6.65854C14.4449 6.65854 13.9056 6.85552 13.4671 7.21843C13.0286 7.58134 12.7158 8.08953 12.5781 8.66289H7.42188C7.28419 8.08953 6.97144 7.58134 6.53293 7.21843C6.09443 6.85552 5.55511 6.65854 5 6.65854C4.44489 6.65854 3.90557 6.85552 3.46707 7.21843C3.02856 7.58134 2.71581 8.08953 2.57812 8.66289H1.25V5.33101H18.75V8.66289Z" fill="#141415" />
                                                        </svg>
                                                    </div>
                                                    <p className="mt-1 ms-2 ">
                                                        Inventory typeL: <span className="font-medium">150</span>
                                                    </p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 items-center gap-5 md:grid-cols-3 px-4 my-2">
                                        <div>
                                            <h6 className="font-[600] text-[24px] ">Options</h6>
                                            <ul className="list-none flex flex-col gap-2">
                                                <li className=" text-[#777] py-1">Alloy Wheels</li>
                                                <li className=" text-[#777] py-1">LED headlights</li>
                                                <li className=" text-[#777] py-1">CD changer</li>
                                                <li className=" text-[#777] py-1">Voice control system</li>
                                            </ul>
                                        </div>
                                        <div className="md:mt-20">
                                            <h6 className="font-[600] text-[24px]">Safety</h6>
                                            <ul className="list-none flex flex-col gap-2">
                                                <li className=" text-[#777] py-1">Dual Front Airbags</li>
                                                <li className=" text-[#777] py-1">Side-impact Airbags</li>
                                                <li className=" text-[#777] py-1">
                                                    Anti-Lock Bracking System
                                                </li>
                                                <li className=" text-[#777] py-1">
                                                    Traction Control {`{ASR}`}
                                                </li>
                                                <li className=" text-[#777] py-1">
                                                    Electronic Stability Program (ESP)
                                                </li>
                                                <li className=" text-[#777] py-1">
                                                    Safety Belt Pretensioners
                                                </li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h6 className="font-[600] text-[24px]">Vehicle History</h6>
                                            <ul className="list-none flex flex-col gap-2">
                                                <li className=" text-[#777] py-1 flex items-center">
                                                    <p className="underline">Title Type:</p>{" "}
                                                    <div className="flex gap-1 items-center ml-2">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                            <rect width="24" height="24" rx="2" fill="#09A122" />
                                                            <path d="M5 9.45455L8.05194 15.281C8.24909 15.6573 8.73702 15.7666 9.07582 15.5102L19 8" stroke="white" stroke-width="2" stroke-linecap="round" />
                                                        </svg>
                                                        <span className="ms-2">

                                                            Clean</span>{" "}

                                                    </div>
                                                </li>
                                                <li className=" text-[#777] py-1 flex items-center">
                                                    <p className="underline">Accident:</p>{" "}
                                                    <span className="ms-2"></span> 0
                                                </li>
                                                <li className=" text-[#777] py-1 flex items-center">
                                                    <p className="underline">Number of Owners:</p>{" "}
                                                    <span className="ms-2"></span> 1Owner
                                                </li>
                                                <li className=" text-[#777] py-1 flex items-center">
                                                    <p className="underline">Maintainance:</p>{" "}
                                                    <span className="ms-2"></span> Well Maintained
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className=" mt-10 md:block hidden">
                                        <h6 className="font-[600] text-[24px] ">Dealer</h6>
                                        <div className="flex flex-col items-center">
                                            <Image
                                                src="/images/banner.png"
                                                alt=""
                                                width={1080}
                                                height={1080}
                                                className="w-[100%] h-[438px] object-contain"
                                            />
                                        </div>
                                    </div>

                                    <div className="flex flex-col md:flex-row items-start pl-5 md:pl-0 gap-6 mt-8">
                                        <div>
                                            <ul className="list-none">
                                                <li className=" text-[24px] font-[600] py-1 flex items-center">
                                                    Bryan Auto
                                                </li>
                                                <li className=" text-[#777] py-1 flex items-center">
                                                    Address Somewhere related
                                                </li>
                                                <li className=" text-[#777] py-1 flex items-center">
                                                    +1 3748597589223
                                                </li>
                                                <li className=" text-[#777] py-1 flex items-center">
                                                    email@bryanauto.com
                                                </li>
                                            </ul>
                                        </div>
                                        <div>
                                            <ul className="list-none">
                                                <li className=" text-[#777] py-1 flex items-center">
                                                    <p className="text-black font-[500]">
                                                        Dealer's website:{" "}

                                                    </p>
                                                    <span className="text-green-600">www.bryanauto.com</span>
                                                </li>
                                                <li className=" text-[#777] py-1 flex items-center">
                                                    <p className="text-black font-[500]">
                                                        View inventory:
                                                    </p>
                                                    <span className="text-blue-600"> (150)</span>
                                                </li>
                                                <div className="flex flex-col   font-[500]">
                                                    <p>
                                                        Dealer’s Trade in rating
                                                    </p>
                                                    <div className="flex pt-5 md:pt-0">

                                                        <div className="flex flex-row gap-1">
                                                            <div className="bg-[#00B67A] w-[24px] h-[24px] flex justify-center items-center">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                                    <g clip-path="url(#clip0_1_3435)">
                                                                        <path d="M11.4847 11.1132L12.9447 15.6079L8.00267 12.0159L11.4847 11.1132ZM16 6.20658H9.89L8.00333 0.392578L6.11 6.20791L0 6.19991L4.948 9.79791L3.05467 15.6072L8.00267 12.0159L11.058 9.79791L16 6.20658Z" fill="white" />
                                                                    </g>
                                                                    <defs>
                                                                        <clipPath id="clip0_1_3435">
                                                                            <rect width="16" height="16" fill="white" />
                                                                        </clipPath>
                                                                    </defs>
                                                                </svg>

                                                            </div>
                                                            <div className="bg-[#00B67A] w-[24px] h-[24px] flex justify-center items-center">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                                    <g clip-path="url(#clip0_1_3435)">
                                                                        <path d="M11.4847 11.1132L12.9447 15.6079L8.00267 12.0159L11.4847 11.1132ZM16 6.20658H9.89L8.00333 0.392578L6.11 6.20791L0 6.19991L4.948 9.79791L3.05467 15.6072L8.00267 12.0159L11.058 9.79791L16 6.20658Z" fill="white" />
                                                                    </g>
                                                                    <defs>
                                                                        <clipPath id="clip0_1_3435">
                                                                            <rect width="16" height="16" fill="white" />
                                                                        </clipPath>
                                                                    </defs>
                                                                </svg>

                                                            </div>
                                                            <div className="bg-[#00B67A] w-[24px] h-[24px] flex justify-center items-center">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                                    <g clip-path="url(#clip0_1_3435)">
                                                                        <path d="M11.4847 11.1132L12.9447 15.6079L8.00267 12.0159L11.4847 11.1132ZM16 6.20658H9.89L8.00333 0.392578L6.11 6.20791L0 6.19991L4.948 9.79791L3.05467 15.6072L8.00267 12.0159L11.058 9.79791L16 6.20658Z" fill="white" />
                                                                    </g>
                                                                    <defs>
                                                                        <clipPath id="clip0_1_3435">
                                                                            <rect width="16" height="16" fill="white" />
                                                                        </clipPath>
                                                                    </defs>
                                                                </svg>

                                                            </div>
                                                            <div className="bg-[#00B67A] w-[24px] h-[24px] flex justify-center items-center">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                                    <g clip-path="url(#clip0_1_3435)">
                                                                        <path d="M11.4847 11.1132L12.9447 15.6079L8.00267 12.0159L11.4847 11.1132ZM16 6.20658H9.89L8.00333 0.392578L6.11 6.20791L0 6.19991L4.948 9.79791L3.05467 15.6072L8.00267 12.0159L11.058 9.79791L16 6.20658Z" fill="white" />
                                                                    </g>
                                                                    <defs>
                                                                        <clipPath id="clip0_1_3435">
                                                                            <rect width="16" height="16" fill="white" />
                                                                        </clipPath>
                                                                    </defs>
                                                                </svg>

                                                            </div>
                                                            <div className="w-[24px] h-[24px] flex justify-center items-center" style={{ background: "linear-gradient(to right, #00B67A 50%, #808080 50%)" }}>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                                    <g clip-path="url(#clip0_1_3435)">
                                                                        <path d="M11.4847 11.1132L12.9447 15.6079L8.00267 12.0159L11.4847 11.1132ZM16 6.20658H9.89L8.00333 0.392578L6.11 6.20791L0 6.19991L4.948 9.79791L3.05467 15.6072L8.00267 12.0159L11.058 9.79791L16 6.20658Z" fill="white" />
                                                                    </g>
                                                                    <defs>
                                                                        <clipPath id="clip0_1_3435">
                                                                            <rect width="16" height="16" fill="white" />
                                                                        </clipPath>
                                                                    </defs>
                                                                </svg>
                                                            </div>

                                                        </div>


                                                    </div>
                                                </div>
                                                <div className="font-[500] flex flex-col">
                                                    <p>
                                                        Dealer’s Overall rating
                                                    </p>
                                                    <div className="flex items-center gap-[2px]">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                                                            <path d="M5 0L6.12257 3.45492H9.75528L6.81636 5.59017L7.93893 9.04508L5 6.90983L2.06107 9.04508L3.18364 5.59017L0.244718 3.45492H3.87743L5 0Z" fill="#F5B431" />
                                                        </svg><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                                                            <path d="M5 0L6.12257 3.45492H9.75528L6.81636 5.59017L7.93893 9.04508L5 6.90983L2.06107 9.04508L3.18364 5.59017L0.244718 3.45492H3.87743L5 0Z" fill="#F5B431" />
                                                        </svg><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                                                            <path d="M5 0L6.12257 3.45492H9.75528L6.81636 5.59017L7.93893 9.04508L5 6.90983L2.06107 9.04508L3.18364 5.59017L0.244718 3.45492H3.87743L5 0Z" fill="#F5B431" />
                                                        </svg><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                                                            <path d="M5 0L6.12257 3.45492H9.75528L6.81636 5.59017L7.93893 9.04508L5 6.90983L2.06107 9.04508L3.18364 5.59017L0.244718 3.45492H3.87743L5 0Z" fill="#F5B431" />
                                                        </svg><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                                                            <path d="M5 0L6.12257 3.45492H9.75528L6.81636 5.59017L7.93893 9.04508L5 6.90983L2.06107 9.04508L3.18364 5.59017L0.244718 3.45492H3.87743L5 0Z" fill="#F5B431" />
                                                        </svg>
                                                        <div>
                                                            <p className="text-[14px] font-[400]">
                                                                4.9 (17 reviews)
                                                            </p>
                                                        </div>

                                                    </div>

                                                </div>
                                            </ul>
                                        </div>
                                    </div>
                                </section>
                            </div>




                        </Wrapper>
                    </>
                )}
            </main>
            <Footer />
        </div>
    )
}

export default index