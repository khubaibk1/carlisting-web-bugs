import Footer from '@/components/footer/Footer';
import Navbar from '@/components/navbar/Navbar';
import React, { useState } from 'react'

const index = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = () => {

    };
    return (
        <div >
            <Navbar />
            <div className='md:h-screen'>
                <div className=" md:absolute left-0 right-0 bottom-0  flex flex-col justify-center items-center md:max-w-[400px] mx-auto  py-6  w-full  ">

                    <div className='bg-white rounded-2xl md:shadow-md flex flex-col  p-10 w-full  md:h-[700px] '
                    style={{ boxShadow: "0 0 5px rgba(0, 0, 0, 0.5)" }}
                    >
                        <h2 className="text-[20px] font-[600] md:font-[500] text-[#141415] md:text-center mb-4">Create Account</h2>
                        <p className='text-[14px] font-[400] md:text-center'>Fill in your details to create an account</p>
                        <div className="my-4 flex justify-center items-center">
                            <input
                                type="Name"
                                id="Name"
                                className="mt-1 md:p-2 md:w-[100%] w-[400px]  text-[12px] md:text-base border-b focus:outline-none"
                                placeholder="Name"

                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="my-4 flex justify-center items-center">
                            <input
                                type="email"
                                id="email"
                                className="mt-1 md:p-2 md:w-[100%] w-[400px]  text-[12px] md:text-base border-b focus:outline-none"
                                placeholder="Email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className="my-4 flex justify-center items-center">
                            <input
                                type="password"
                                id="password"
                                className="mt-1 md:p-2 md:w-[100%] w-full text-[12px] md:text-base border-b focus:outline-none"
                                placeholder="Enter Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="flex justify-center flex-col items-center mt-10 md:mt-[280px] ">

                            <div>
                                <a href="/packages">
                                    <button

                                        className="bg-[#09A122] text-white px-4 py-[10px] w-[320px] md:w-[350px] text-[16px] md:text-[20px] rounded-[10px] hover:bg-[#09A122]"

                                    >
                                        Register
                                    </button>

                                </a>
                            </div>

                        </div>

                    </div>
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default index