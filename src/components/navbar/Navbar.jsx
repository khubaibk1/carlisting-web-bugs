"use client";

import Wrapper from "../shared/Wrapper";
import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from "next/navigation";
import Link from "next/link";
import SignInModal from "./SignInModal";
import RegisterModal from "./RegisterModal";
import AccountCreated from "./AccountCreated";

import IoIosMenu from "react-icons/io"
const Navbar = () => {

    const [showSignInModal, setShowSignInModal] = useState(false);
    const toggleSignInModal = () => {
        setShowSignInModal(!showSignInModal);
    };
    const [showRegisterModal, setShowRegisterModal] = useState(false);
    const toggleRegisterModal = () => {
        setShowRegisterModal(!showRegisterModal);
    };
    

    
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const closeDropdown = (e) => {
        if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', closeDropdown);

        return () => {
            document.removeEventListener('mousedown', closeDropdown);
        };
    }, []);

    const router = useRouter();
    const [nav, setNav] = useState(false);
    const handleNavbar = () => {
        setNav(!nav);
    };
    const closeMenu = () => {
        setNav(false);
    };
    return (
        <div >
            <Wrapper>
                <div className="flex justify-between md:justify-evenly md:gap-52 items-center text-black py-5 ">
                    {/* left  */}
                    <div className=" flex items-center  ">
                        {/* logo  */}
                        <Link href={"/"} className="">
                            <svg className="w-[120px] md:w-[170px]" height="56" viewBox="0 0 170 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.90918 27.9296V36.0183C0.90918 36.9963 1.29771 37.9343 1.98929 38.6259C2.47186 39.1085 3.07887 39.4477 3.74276 39.6058L11.4422 41.4389C11.994 41.5703 12.5594 41.6367 13.1267 41.6367H38.7295C39.2718 41.6367 39.8125 41.5761 40.3413 41.4559L48.3839 39.628C49.1339 39.4576 49.7989 39.0262 50.2603 38.411C50.6815 37.8494 50.9092 37.1663 50.9092 36.4644V28.0171C50.9092 26.8164 50.5829 25.6383 49.9651 24.6088L49.9244 24.5409C49.6728 24.1215 49.3707 23.7346 49.0249 23.3887C47.9031 22.2669 46.3816 21.6367 44.7951 21.6367H7.72736H5.64741C4.65086 21.6367 3.69512 22.0326 2.99045 22.7373C2.81549 22.9122 2.65823 23.1041 2.52098 23.3099L2.13063 23.8954C1.33418 25.0901 0.90918 26.4938 0.90918 27.9296Z" fill="#672797" />
                                <path d="M2.72729 46.1818V39.8182C2.72729 38.814 3.54132 38 4.54548 38H10.9091C11.9133 38 12.7273 38.814 12.7273 39.8182V46.1818C12.7273 47.186 11.9133 48 10.9091 48H4.54548C3.54132 48 2.72729 47.186 2.72729 46.1818Z" fill="#672797" />
                                <path d="M39.0911 46.1818V39.8182C39.0911 38.814 39.9051 38 40.9092 38H47.2729C48.277 38 49.0911 38.814 49.0911 39.8182V46.1818C49.0911 47.186 48.277 48 47.2729 48H40.9092C39.9051 48 39.0911 47.186 39.0911 46.1818Z" fill="#672797" />
                                <ellipse cx="9.5459" cy="32.0908" rx="5" ry="5" fill="white" />
                                <ellipse cx="42.2732" cy="32.0908" rx="5" ry="5" fill="white" />
                                <rect x="18.1824" y="28" width="15.4546" height="1.81818" rx="0.909091" fill="white" />
                                <rect x="18.1824" y="31.1816" width="15.4546" height="1.81818" rx="0.909091" fill="white" />
                                <rect x="18.1824" y="34.3638" width="15.4546" height="1.81818" rx="0.909091" fill="white" />
                                <path d="M47.8267 17.0908H45.815C44.6807 17.0908 43.8233 18.1182 44.0262 19.2343L44.5162 21.9295C44.5358 22.0368 44.5645 22.1506 44.6671 22.1877C44.9934 22.3058 46.046 22.3787 48.6365 22.0908C51.5071 21.7719 50.391 19.3313 49.1531 17.7139C48.8399 17.3046 48.3422 17.0908 47.8267 17.0908Z" fill="#672797" />
                                <path d="M42.7274 23.4545C42.7274 22.0079 42.1048 20.6205 40.9966 19.5976C39.8885 18.5747 38.3855 18 36.8183 18C35.2511 18 33.7481 18.5747 32.6399 19.5976C31.5317 20.6205 30.9092 22.0079 30.9092 23.4545L32.502 23.4545C32.502 22.3979 32.9568 21.3845 33.7662 20.6373C34.5757 19.8901 35.6735 19.4703 36.8183 19.4703C37.963 19.4703 39.0609 19.8901 39.8703 20.6373C40.6798 21.3845 41.1345 22.3979 41.1345 23.4545H42.7274Z" fill="#672797" />
                                <path d="M2.61688 17.0908H4.62856C5.76293 17.0908 6.62034 18.1182 6.41741 19.2343L5.92737 21.9295C5.90785 22.0368 5.87911 22.1506 5.77654 22.1877C5.45024 22.3058 4.3976 22.3787 1.80713 22.0908C-1.06354 21.7719 0.0526228 19.3313 1.29047 17.7139C1.60373 17.3046 2.10145 17.0908 2.61688 17.0908Z" fill="#672797" />
                                <path d="M5.90918 22.0909L9.11085 11.6855C9.39337 10.7673 9.95951 9.96225 10.728 9.38586L10.8828 9.2698C11.202 9.03037 11.5514 8.83402 11.9219 8.68582L12.8237 8.32511C13.3606 8.11034 13.9336 8 14.5118 8H36.3975C36.9757 8 37.5487 8.11034 38.0856 8.32511L38.9874 8.68582C39.3579 8.83402 39.7073 9.03037 40.0265 9.2698L40.2507 9.43796C40.9761 9.98201 41.5222 10.7306 41.8188 11.5875L45.4547 22.0909" stroke="#672797" stroke-width="1.36364" />
                                <path d="M89.4 35.88L89.96 36.52C88.5467 38.4933 87.04 39.84 85.44 40.56C83.84 41.28 81.88 41.64 79.56 41.64C76.1467 41.64 73.24 40.24 70.84 37.44C68.44 34.5867 67.2533 31.0933 67.28 26.96C67.3333 22.8 68.5333 19.4133 70.88 16.8C73.2267 14.16 76.12 12.84 79.56 12.84C81.7467 12.84 83.3333 12.9467 84.32 13.16C85.3067 13.3467 86.4933 13.7067 87.88 14.24V20.52H86.68C86.4933 18.1733 85.8667 16.48 84.8 15.44C83.7333 14.3733 82.0267 13.8933 79.68 14C74.5067 14.24 71.92 18.6533 71.92 27.24C71.92 31.0267 72.5867 34.1333 73.92 36.56C75.3067 38.96 77.12 40.1867 79.36 40.24C81.6 40.2667 83.44 39.9467 84.88 39.28C86.32 38.5867 87.8267 37.4533 89.4 35.88ZM109.536 39.88V41H103.136V37.72C100.763 40.2267 98.5226 41.48 96.4159 41.48C95.0026 41.48 93.8693 41.0667 93.0159 40.24C92.0826 39.4133 91.6159 38.24 91.6159 36.72C91.6159 34.6133 92.4293 33.04 94.0559 32C95.2826 31.2533 97.0026 30.68 99.2159 30.28L103.136 29.6C103.189 27.7067 103.029 26.32 102.656 25.44C102.123 24.1867 101.203 23.56 99.8959 23.56C97.6293 23.56 96.4826 24.32 96.4559 25.84C96.4559 26.1067 96.6026 26.4267 96.8959 26.8C97.2159 27.1467 97.3759 27.3333 97.3759 27.36C97.4026 27.76 97.2026 28.0933 96.7759 28.36C96.3759 28.6267 96.0026 28.72 95.6559 28.64C94.3226 28.64 93.6693 27.9067 93.6959 26.44C93.7226 24.9467 94.6426 23.8267 96.4559 23.08C97.5759 22.6533 98.7626 22.44 100.016 22.44C102.123 22.44 103.696 23.0267 104.736 24.2C105.776 25.48 106.296 27.5067 106.296 30.28V39C106.296 39.2667 106.389 39.48 106.576 39.64C106.763 39.8 106.976 39.88 107.216 39.88H109.536ZM103.136 36.12V30.92C100.816 31.2133 98.9093 31.6533 97.4159 32.24C96.7226 32.5067 96.1493 33 95.6959 33.72C95.2426 34.44 95.0159 35.2267 95.0159 36.08C95.0159 36.9333 95.3093 37.6533 95.8959 38.24C96.5093 38.8267 97.2293 39.1467 98.0559 39.2C98.9093 39.2267 99.8026 38.9467 100.736 38.36C101.696 37.7467 102.496 37 103.136 36.12ZM114.616 39V25.2C114.589 24.2933 114.136 23.84 113.256 23.84H111.416V22.72H117.976V26.4C118.269 25.68 118.816 24.9067 119.616 24.08C120.816 22.88 122.083 22.28 123.416 22.28C124.216 22.28 124.856 22.5467 125.336 23.08C125.816 23.6133 126.056 24.2533 126.056 25C126.056 26.4667 125.389 27.2667 124.056 27.4C123.523 26.2267 122.643 25.64 121.416 25.64C120.536 25.64 119.736 26.08 119.016 26.96C118.296 27.84 117.936 28.84 117.936 29.96V39C118.016 39.6133 118.323 39.92 118.856 39.92H121.176V41H111.456V39.92H113.696C114.176 39.92 114.483 39.6133 114.616 39ZM130.945 22.48C130.945 16.0267 133.812 12.8267 139.545 12.88C141.278 12.88 142.785 13.24 144.065 13.96C145.345 14.6533 146.092 15.5733 146.305 16.72C146.412 17.36 146.278 17.88 145.905 18.28C145.532 18.68 145.118 18.88 144.665 18.88C144.212 18.88 143.785 18.7867 143.385 18.6C142.985 18.3867 142.825 18.0667 142.905 17.64C142.905 17.5333 143.012 17.36 143.225 17.12C143.438 16.88 143.545 16.6667 143.545 16.48C143.545 16.2933 143.505 16.1067 143.425 15.92C143.158 15.28 142.665 14.76 141.945 14.36C141.225 13.96 140.438 13.76 139.585 13.76C136.012 13.7867 134.225 16.64 134.225 22.32V22.88L134.265 22.52C134.265 22.5467 134.265 22.84 134.265 23.4H137.425C140.385 23.4 142.358 23.1467 143.345 22.64H144.745V37C144.745 37.7467 144.772 38.4267 144.825 39.04C144.878 39.6267 145.172 39.92 145.705 39.92H148.025V41H138.265V39.92H140.505C140.985 39.92 141.292 39.6133 141.425 39V28C141.425 26.5867 141.358 25.7867 141.225 25.6C140.932 25.0667 139.678 24.8267 137.465 24.88H134.265V37C134.265 37.7467 134.292 38.4267 134.345 39.04C134.398 39.6267 134.692 39.92 135.225 39.92H137.465V41H127.705V39.92H129.945C130.425 39.92 130.732 39.6133 130.865 39C130.892 38.4133 130.905 37.7733 130.905 37.08L130.945 24.88H127.745V23.4H130.945V22.48ZM162.737 22.44H169.177L168.377 24.56L163.777 24.16C165.031 25.3333 165.671 26.68 165.697 28.2C165.751 29.4 165.431 30.5733 164.737 31.72C164.044 32.8667 163.151 33.72 162.057 34.28C160.671 35.0533 159.297 35.44 157.937 35.44C157.511 35.44 157.137 35.3867 156.817 35.28L155.697 36.24C155.244 36.6933 155.017 37.1067 155.017 37.48C155.017 38.0933 155.364 38.52 156.057 38.76C156.377 38.8667 157.017 38.9467 157.977 39L164.217 39.48C167.284 39.6933 168.817 41.1733 168.817 43.92C168.817 46.0267 167.857 47.8667 165.937 49.44C164.044 51.0133 161.484 51.8 158.257 51.8C155.857 51.8 153.857 51.24 152.257 50.12C150.657 49.0533 149.857 47.72 149.857 46.12C149.857 44.5467 150.404 43.36 151.497 42.56C152.217 41.9467 153.164 41.56 154.337 41.4C152.657 40.9733 151.817 40.2133 151.817 39.12C151.817 38.2933 152.297 37.44 153.257 36.56C153.631 36.24 154.337 35.76 155.377 35.12C154.577 35.0933 153.631 34.5867 152.537 33.6C151.444 32.6133 150.884 31.3733 150.857 29.88C150.777 27.56 151.564 25.7467 153.217 24.44C154.871 23.1067 156.924 22.4267 159.377 22.4C160.791 22.4 161.911 22.4133 162.737 22.44ZM158.297 34.04C159.551 34.04 160.551 33.6133 161.297 32.76C162.071 31.88 162.431 30.6933 162.377 29.2C162.351 27.68 162.017 26.48 161.377 25.6C160.604 24.4 159.524 23.8 158.137 23.8C156.777 23.8 155.751 24.28 155.057 25.24C154.364 26.2 154.017 27.4533 154.017 29C154.017 30.52 154.417 31.7467 155.217 32.68C156.044 33.5867 157.071 34.04 158.297 34.04ZM160.297 42.24L156.137 41.88C155.417 41.9067 154.724 42.24 154.057 42.88C153.257 43.5467 152.857 44.4267 152.857 45.52C152.857 47.1733 153.377 48.4133 154.417 49.24C155.484 50.0933 156.964 50.52 158.857 50.52C160.777 50.52 162.404 50.04 163.737 49.08C165.071 48.12 165.737 46.8533 165.737 45.28C165.737 44.1867 165.284 43.44 164.377 43.04C163.657 42.6933 162.297 42.4267 160.297 42.24Z" fill="#672797" />
                            </svg>

                        </Link>

                    </div>
                    <div>
                        <ul className=" hidden md:flex space-x-12 text-base   font-[400] text-[18px]">
                            <button
                                onClick={() => router.push("/sell")}
                                className={` li text-[18px]`}
                            >
                                <p className="a">Buy</p>
                            </button>
                            <button
                                onClick={() => router.push("/sell")}
                                // onClick={toggleDropdown}
                                className="li text-[18px]"  
                            >
                                <p className="a">Dealer</p>
                            </button>
                            {/* <Link href='#pricing'>
                                <button

                                    className="li text-[18px]"
                                >
                                    <p className="a">Trade</p>
                                </button>
                            </Link>
                            <Link href='#pricing'>
                                <button

                                    className="li text-[18px]"
                                >
                                    <p className="a">Bid</p>
                                </button>
                            </Link>
                            <Link href='#pricing'>
                                <button

                                    className="li text-[18px]"
                                >
                                    <p className="a">Clear</p>
                                </button>
                            </Link> */}
                        </ul>
                    </div>
                    {/* right */}
                    <div className="hidden md:flex items-center gap-10">
                        {/* sign in */}
                        <div className="flex  items-center space-x-2 pl-2  rounded-md">
                            <button
                            onClick={()=>router.push("/carGarage")}

                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                                    <path d="M25.5 13.0001L13 19.4763L13.6476 19.9087L25.5 13.9465L37.3524 19.9087L38 19.4764L25.5 13.0001ZM25.5 15.0178L14.1239 20.7404V37H15.7112V21.4558H35.2888V37H36.8761V20.7404L25.5 15.0178ZM16.8224 22.5205V23.4787H34.1776V22.5205H16.8224ZM16.8224 24.4369V25.3951H34.1776V24.4369H16.8224ZM22.1136 26.3533C21.6639 26.3533 21.352 26.6473 21.1109 26.9708C20.8699 27.2942 20.673 27.7001 20.5036 28.1547C20.2777 28.761 20.1046 29.4501 20.0143 30.1183C19.5528 29.9994 18.8477 29.8825 18.7272 30.2393C18.6027 30.6085 19.1158 30.9624 19.6092 31.2091C19.5922 31.2659 19.5758 31.3246 19.5612 31.3871C19.4664 31.7927 19.4151 32.2941 19.4151 32.7945C19.4151 33.2949 19.4664 33.7964 19.5612 34.202C19.6285 34.4898 19.7257 34.7219 19.8122 34.8707H31.1878C31.2743 34.7219 31.3715 34.4898 31.4388 34.202C31.5336 33.7964 31.5849 33.2949 31.5849 32.7945C31.5849 32.2941 31.5336 31.7927 31.4388 31.387C31.4246 31.3273 31.4086 31.2679 31.3908 31.2091C31.8842 30.9624 32.3973 30.6085 32.2728 30.2393C32.1523 29.8825 31.4472 29.9994 30.9857 30.1183C30.8954 29.4501 30.7224 28.761 30.4964 28.1547C30.327 27.7001 30.1301 27.2942 29.889 26.9708C29.648 26.6473 29.3361 26.3533 28.8864 26.3533H22.1136ZM22.1136 27.3115H28.8864C28.8599 27.3115 28.9714 27.3368 29.1271 27.5457C29.2829 27.7547 29.4565 28.094 29.6045 28.4911C29.7989 29.0126 29.9478 29.6323 30.0293 30.2167C28.7909 29.8734 27.4144 29.8667 25.5 29.8667C23.5856 29.8667 22.2091 29.8734 20.9707 30.2167C21.0522 29.6323 21.2011 29.0125 21.3955 28.4911C21.5435 28.094 21.7171 27.7547 21.8728 27.5457C22.0286 27.3368 22.1401 27.3115 22.1136 27.3115ZM21.267 31.9428C21.4915 31.9428 21.7069 32.0325 21.8657 32.1923C22.0244 32.352 22.1136 32.5687 22.1136 32.7945C22.1136 33.0204 22.0244 33.2371 21.8657 33.3968C21.7069 33.5565 21.4915 33.6463 21.267 33.6463C21.0425 33.6463 20.8272 33.5565 20.6684 33.3968C20.5096 33.2371 20.4204 33.0204 20.4204 32.7945C20.4204 32.5687 20.5096 32.352 20.6684 32.1923C20.8272 32.0325 21.0425 31.9428 21.267 31.9428ZM29.733 31.9428C29.9575 31.9428 30.1729 32.0325 30.3316 32.1923C30.4904 32.352 30.5796 32.5687 30.5796 32.7945C30.5796 33.0204 30.4904 33.2371 30.3316 33.3968C30.1729 33.5565 29.9575 33.6463 29.733 33.6463C29.5085 33.6463 29.2931 33.5565 29.1343 33.3968C28.9756 33.2371 28.8864 33.0204 28.8864 32.7945C28.8864 32.5687 28.9756 32.352 29.1343 32.1923C29.2931 32.0325 29.5085 31.9428 29.733 31.9428ZM20.05 35.8289V37H21.6374V35.8289H20.05ZM29.3626 35.8289V37H30.95V35.8289H29.3626Z" fill="#8552AC" />
                                </svg>
                                
                            </button>
                        </div>
                        
                        {/* start a project  */}
                        <button
                        onClick={()=>router.push("/favourite")}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="30" viewBox="0 0 32 30" fill="none">
                                <path d="M27.9268 17.8984L27.9397 17.8845C29.6042 16.0689 30.5149 13.6472 30.4998 11.1476C30.4848 8.648 29.5449 6.23831 27.858 4.44475C26.1682 2.64818 23.8607 1.61339 21.4294 1.59719C19.4848 1.58424 17.6112 2.22396 16.0633 3.38863C15.4832 2.93606 14.8514 2.5555 14.1801 2.25704C13.0644 1.76105 11.8639 1.50285 10.6486 1.50002C9.43315 1.49719 8.2316 1.7498 7.11377 2.24064C5.9962 2.73135 4.98703 3.44923 4.14158 4.34824C3.29632 5.24705 2.63087 6.30959 2.17921 7.47267C1.72759 8.63564 1.49744 9.87913 1.50002 11.1325C1.5026 12.3859 1.73787 13.6283 2.19432 14.7893C2.65039 15.9493 3.31948 17.008 4.16746 17.9025C4.16823 17.9033 4.16899 17.9041 4.16976 17.9049L12.796 27.0776L12.7961 27.0778C13.6415 27.9765 14.8084 28.5 16.046 28.5C17.2836 28.5 18.4504 27.9765 19.2958 27.0778L19.2961 27.0775L27.9268 17.8984Z" stroke="#8552AC" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            
                        </button>
                        <div className="relative z-[999]" ref={dropdownRef}>
                            <button
                                className="flex items-center space-x-2"
                                onClick={toggleDropdown}
                            >
                                
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M12 12C13.5913 12 15.1174 11.3679 16.2426 10.2426C17.3679 9.11742 18 7.5913 18 6C18 4.4087 17.3679 2.88258 16.2426 1.75736C15.1174 0.632141 13.5913 0 12 0C10.4087 0 8.88258 0.632141 7.75736 1.75736C6.63214 2.88258 6 4.4087 6 6C6 7.5913 6.63214 9.11742 7.75736 10.2426C8.88258 11.3679 10.4087 12 12 12ZM16 6C16 7.06087 15.5786 8.07828 14.8284 8.82843C14.0783 9.57857 13.0609 10 12 10C10.9391 10 9.92172 9.57857 9.17157 8.82843C8.42143 8.07828 8 7.06087 8 6C8 4.93913 8.42143 3.92172 9.17157 3.17157C9.92172 2.42143 10.9391 2 12 2C13.0609 2 14.0783 2.42143 14.8284 3.17157C15.5786 3.92172 16 4.93913 16 6ZM24 22C24 24 22 24 22 24H2C2 24 0 24 0 22C0 20 2 14 12 14C22 14 24 20 24 22ZM22 21.992C21.998 21.5 21.692 20.02 20.336 18.664C19.032 17.36 16.578 16 12 16C7.42 16 4.968 17.36 3.664 18.664C2.308 20.02 2.004 21.5 2 21.992H22Z" fill="#8552AC" />
                                </svg>
                                
                            </button>

                            

                            {isOpen && (
                                <div className="absolute right-0 mt-8 w-[340px] h-[200px] bg-white p-5  shadow-lg ">
                                    {/* Dropdown items */}
                                    <p className="text-[20px] font-[600] text-[#672797]">
                                        Profile
                                    </p>
                                    <div className="p-2">
                                        <a href="#" className=" py-4 flex items-center gap-4" onClick={() => { toggleSignInModal(); setIsOpen(false); }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path d="M12 12C13.5913 12 15.1174 11.3679 16.2426 10.2426C17.3679 9.11742 18 7.5913 18 6C18 4.4087 17.3679 2.88258 16.2426 1.75736C15.1174 0.632141 13.5913 0 12 0C10.4087 0 8.88258 0.632141 7.75736 1.75736C6.63214 2.88258 6 4.4087 6 6C6 7.5913 6.63214 9.11742 7.75736 10.2426C8.88258 11.3679 10.4087 12 12 12ZM16 6C16 7.06087 15.5786 8.07828 14.8284 8.82843C14.0783 9.57857 13.0609 10 12 10C10.9391 10 9.92172 9.57857 9.17157 8.82843C8.42143 8.07828 8 7.06087 8 6C8 4.93913 8.42143 3.92172 9.17157 3.17157C9.92172 2.42143 10.9391 2 12 2C13.0609 2 14.0783 2.42143 14.8284 3.17157C15.5786 3.92172 16 4.93913 16 6ZM24 22C24 24 22 24 22 24H2C2 24 0 24 0 22C0 20 2 14 12 14C22 14 24 20 24 22ZM22 21.992C21.998 21.5 21.692 20.02 20.336 18.664C19.032 17.36 16.578 16 12 16C7.42 16 4.968 17.36 3.664 18.664C2.308 20.02 2.004 21.5 2 21.992H22Z" fill="#141415" />
                                            </svg>
                                            <p>
                                                Sign In
                                            </p>
                                        </a>
                                        <a href="#" className=" py-6 flex items-center gap-4" onClick={() => { toggleRegisterModal(); setIsOpen(false); }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path d="M12 12C13.5913 12 15.1174 11.3679 16.2426 10.2426C17.3679 9.11742 18 7.5913 18 6C18 4.4087 17.3679 2.88258 16.2426 1.75736C15.1174 0.632141 13.5913 0 12 0C10.4087 0 8.88258 0.632141 7.75736 1.75736C6.63214 2.88258 6 4.4087 6 6C6 7.5913 6.63214 9.11742 7.75736 10.2426C8.88258 11.3679 10.4087 12 12 12ZM16 6C16 7.06087 15.5786 8.07828 14.8284 8.82843C14.0783 9.57857 13.0609 10 12 10C10.9391 10 9.92172 9.57857 9.17157 8.82843C8.42143 8.07828 8 7.06087 8 6C8 4.93913 8.42143 3.92172 9.17157 3.17157C9.92172 2.42143 10.9391 2 12 2C13.0609 2 14.0783 2.42143 14.8284 3.17157C15.5786 3.92172 16 4.93913 16 6ZM24 22C24 24 22 24 22 24H2C2 24 0 24 0 22C0 20 2 14 12 14C22 14 24 20 24 22ZM22 21.992C21.998 21.5 21.692 20.02 20.336 18.664C19.032 17.36 16.578 16 12 16C7.42 16 4.968 17.36 3.664 18.664C2.308 20.02 2.004 21.5 2 21.992H22Z" fill="#141415" />
                                            </svg>
                                            <p>

                                                Create an Account
                                            </p>
                                        </a>
                                    </div>
                                </div>
                            )}



                        </div>
                        <button className="text-center text-white text-[16px] md:text-[20px] py-[10px] rounded-[10px] w-[50px] md:w-[90px] bg-[#09A122]" onClick={() => router.push("/sell")}>
                Login
            </button>
                    </div>

                    {/* mobile menu  */}
                    <div className={`sm:block md:hidden flex gap-1 items-center z-50 `} onClick={handleNavbar}>
                        {nav ? (
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                <path
                                    d="M0.291848 0.317792C0.47896 0.131308 0.732598 0.0265619 0.99705 0.0265619C1.2615 0.0265619 1.51514 0.131308 1.70225 0.317792L5.98669 4.59317L10.2711 0.317792C10.3931 0.18671 10.5483 0.0908837 10.7202 0.0404102C10.8922 -0.0100634 11.0746 -0.0133156 11.2483 0.030996C11.422 0.0753075 11.5805 0.165542 11.707 0.292193C11.8336 0.418844 11.9237 0.577222 11.9676 0.750641C12.0121 0.923749 12.009 1.10561 11.9586 1.27711C11.9083 1.44861 11.8126 1.6034 11.6815 1.72521L7.3971 6.00059L11.6815 10.276C11.8129 10.3977 11.9089 10.5525 11.9595 10.7241C12.0101 10.8957 12.0133 11.0778 11.9689 11.2511C11.9245 11.4244 11.8341 11.5825 11.7072 11.7089C11.5803 11.8352 11.4216 11.925 11.2478 11.9689C11.0743 12.0132 10.892 12.0101 10.7202 11.9599C10.5483 11.9097 10.3932 11.8141 10.2711 11.6834L5.98669 7.40802L1.70225 11.6834C1.51296 11.8592 1.26275 11.9549 1.00419 11.9505C0.745642 11.946 0.498889 11.8417 0.315798 11.6595C0.133186 11.4768 0.0286623 11.2306 0.024196 10.9726C0.0197296 10.7145 0.115668 10.4649 0.291848 10.276L4.57629 6.00059L0.291848 1.72521C0.104968 1.5385 0 1.2854 0 1.0215C0 0.757611 0.104968 0.504508 0.291848 0.317792Z"
                                    fill="#672797"
                                />
                            </svg>
                        ) : (

                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path
                                    d="M2.5 5.625H18.5M2.5 9.625H18.5M2.5 13.625H18.5"
                                    stroke="#8552AC"
                                    strokeWidth="1.40625"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        )}
                        <p className="text-[16px] font-[500] text-[#8552AC]">
                            {nav ? '' : 'Menu'}
                        </p>
                    </div>
                    <div
                        className={
                            nav
                                ? "md:hidden z-40 fixed top-0 right-0 shadow-md overflow-hidden bottom-0 flex justify-start items-start py-20 px-5 w-full h-screen  bg-white text-black  text-right ease-linear duration-200 transform translate-x-0"
                                : "md:hidden z-40 fixed top-0 right-0 shadow-md overflow-hidden bottom-0 flex justify-start items-start py-20 px-5 w-full h-screen text-black bg-white  text-right ease-linear duration-200  transform translate-x-full"
                        }
                    >
                        <div className="absolute mt-[-2.5rem]">
                            <p className="text-[16px] font-[500] text-[#8552AC]">
                                Menu
                            </p>
                        </div>
                        <div className="p-2 text-[#141415] z-[9999]">
                            <a href="#" className=" py-4 flex items-center gap-4" onClick={() => { toggleSignInModal(); setIsOpen(false); }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="28" viewBox="0 0 30 28" fill="none">
                                    <path d="M26.5625 16.5559L26.5626 16.5559L26.5711 16.5466C28.1476 14.827 29.0142 12.5282 28.9998 10.1506C28.9855 7.77306 28.0913 5.48586 26.4938 3.78732C24.8943 2.08676 22.7158 1.11244 20.4261 1.09718C18.4651 1.08412 16.577 1.77559 15.0577 3.02951C14.4287 2.4918 13.7287 2.04812 12.977 1.71392C11.9242 1.24592 10.7925 1.00269 9.64739 1.00002C8.50226 0.997356 7.36952 1.23532 6.31479 1.69845L6.71683 2.61407L6.31479 1.69845C5.26023 2.16149 4.30623 2.83965 3.50582 3.69077C2.70553 4.54176 2.07421 5.54916 1.6453 6.65366C1.21642 7.7581 0.997566 8.93981 1.00002 10.1315C1.00247 11.3231 1.22619 12.5038 1.65964 13.6063C2.09285 14.7082 2.72781 15.7121 3.53094 16.5591C3.53146 16.5597 3.53198 16.5602 3.5325 16.5608L12.1602 25.7351L12.1603 25.7352C12.9147 26.5371 13.9512 27 15.046 27C16.1408 27 17.1773 26.5371 17.9317 25.7352L17.9318 25.735L26.5625 16.5559Z" stroke="#141415" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <p>
                                    Saved Searches
                                </p>
                            </a>
                            <a href="#" className=" py-4 flex items-center gap-4" onClick={() => { toggleSignInModal() }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M12 12C13.5913 12 15.1174 11.3679 16.2426 10.2426C17.3679 9.11742 18 7.5913 18 6C18 4.4087 17.3679 2.88258 16.2426 1.75736C15.1174 0.632141 13.5913 0 12 0C10.4087 0 8.88258 0.632141 7.75736 1.75736C6.63214 2.88258 6 4.4087 6 6C6 7.5913 6.63214 9.11742 7.75736 10.2426C8.88258 11.3679 10.4087 12 12 12ZM16 6C16 7.06087 15.5786 8.07828 14.8284 8.82843C14.0783 9.57857 13.0609 10 12 10C10.9391 10 9.92172 9.57857 9.17157 8.82843C8.42143 8.07828 8 7.06087 8 6C8 4.93913 8.42143 3.92172 9.17157 3.17157C9.92172 2.42143 10.9391 2 12 2C13.0609 2 14.0783 2.42143 14.8284 3.17157C15.5786 3.92172 16 4.93913 16 6ZM24 22C24 24 22 24 22 24H2C2 24 0 24 0 22C0 20 2 14 12 14C22 14 24 20 24 22ZM22 21.992C21.998 21.5 21.692 20.02 20.336 18.664C19.032 17.36 16.578 16 12 16C7.42 16 4.968 17.36 3.664 18.664C2.308 20.02 2.004 21.5 2 21.992H22Z" fill="#141415" />
                                </svg>
                                <p>
                                    Sign In
                                </p>
                            </a>
                            <a href="#" className=" py-6 flex items-center gap-4" onClick={() => { toggleRegisterModal() }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M12 12C13.5913 12 15.1174 11.3679 16.2426 10.2426C17.3679 9.11742 18 7.5913 18 6C18 4.4087 17.3679 2.88258 16.2426 1.75736C15.1174 0.632141 13.5913 0 12 0C10.4087 0 8.88258 0.632141 7.75736 1.75736C6.63214 2.88258 6 4.4087 6 6C6 7.5913 6.63214 9.11742 7.75736 10.2426C8.88258 11.3679 10.4087 12 12 12ZM16 6C16 7.06087 15.5786 8.07828 14.8284 8.82843C14.0783 9.57857 13.0609 10 12 10C10.9391 10 9.92172 9.57857 9.17157 8.82843C8.42143 8.07828 8 7.06087 8 6C8 4.93913 8.42143 3.92172 9.17157 3.17157C9.92172 2.42143 10.9391 2 12 2C13.0609 2 14.0783 2.42143 14.8284 3.17157C15.5786 3.92172 16 4.93913 16 6ZM24 22C24 24 22 24 22 24H2C2 24 0 24 0 22C0 20 2 14 12 14C22 14 24 20 24 22ZM22 21.992C21.998 21.5 21.692 20.02 20.336 18.664C19.032 17.36 16.578 16 12 16C7.42 16 4.968 17.36 3.664 18.664C2.308 20.02 2.004 21.5 2 21.992H22Z" fill="#141415" />
                                </svg>
                                <p>

                                    Create an Account
                                </p>
                            </a>
                        </div>
                    </div>
                    {showSignInModal && (
                        <SignInModal isOpen={showSignInModal} onClose={toggleSignInModal} />
                    )}
                    {showRegisterModal && (
                        <RegisterModal isOpen={showRegisterModal} onClose={toggleRegisterModal} />
                    )}
                </div>
            </Wrapper>
        </div>
    );
};

export default Navbar;
