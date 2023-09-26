import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/navigation';

const AccountCreated = ({ isOpen, onClose }) => {
    const router = useRouter();
    return (
        <div className={`fixed inset-0 flex flex-col items-center justify-center z-[9999] ${isOpen ? 'visible opacity-100' : 'invisible opacity-0'}`}>
            <div
                className="fixed inset-0 bg-black opacity-50 z-[-1]"

            ></div>
            <div className="bg-white px-6 py-6 flex flex-col justify-center items-center shadow-md w-full h-screen md:h-auto md:w-[558px]">
                <div className='flex flex-col gap-2 justify-center items-center'>
                    <img src="/images/hand.png" alt="" className='w-[204px]' />
                    <p className='text-[16px] font-[500] text-[#141415] max-w-[247px] text-center'>You have successfully created an account.</p>
                </div>

                <div className="flex justify-center flex-col items-center mt-5">
                    <Link href={'/'} onClick={()=> router.refresh()}>
                        <button
                            className="bg-[#09A122] text-white px-4 py-[10px] w-[320px] text-[16px]  md:w-[350px] md:text-[24px] rounded-[10px] hover:bg-[#09A122]"
                            
                        >
                            Back to home
                        </button>

                    </Link>

                </div>
            </div>
        </div>
    );
};

export default AccountCreated;
