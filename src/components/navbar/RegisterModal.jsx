
// RegisterModal.js
import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import AccountCreated from './AccountCreated';

const RegisterModal = ({ isOpen, onClose }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [showAccountModal, setShowAccountModal] = useState(false);

    const toggleAccountModal = () => {
        setShowAccountModal(!showAccountModal);
    };

    return (
        <div className={`fixed inset-0 flex flex-col justify-start items-start md:items-center md:justify-center z-[99] ${isOpen ? 'visible opacity-100' : 'invisible opacity-0'}`}>
            <div className="fixed inset-0 bg-black opacity-70 z-[-1]" onClick={onClose}></div>
            <div className="bg-white px-5 md:px-6 py-6 shadow-md w-full h-screen md:h-auto md:w-[558px]">
                <div className="flex justify-end">
                    <button className="text-[#141415] hover:text-[#09A122] text-xl" onClick={onClose}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path d="M0.291848 0.317792C0.47896 0.131308 0.732598 0.0265619 0.99705 0.0265619C1.2615 0.0265619 1.51514 0.131308 1.70225 0.317792L5.98669 4.59317L10.2711 0.317792C10.3931 0.18671 10.5483 0.0908837 10.7202 0.0404102C10.8922 -0.0100634 11.0746 -0.0133156 11.2483 0.030996C11.422 0.0753075 11.5805 0.165542 11.707 0.292193C11.8336 0.418844 11.9237 0.577222 11.9676 0.750641C12.0121 0.923749 12.009 1.10561 11.9586 1.27711C11.9083 1.44861 11.8126 1.6034 11.6815 1.72521L7.3971 6.00059L11.6815 10.276C11.8129 10.3977 11.9089 10.5525 11.9595 10.7241C12.0101 10.8957 12.0133 11.0778 11.9689 11.2511C11.9245 11.4244 11.8341 11.5825 11.7072 11.7089C11.5803 11.8352 11.4216 11.925 11.2478 11.9689C11.0743 12.0132 10.892 12.0101 10.7202 11.9599C10.5483 11.9097 10.3932 11.8141 10.2711 11.6834L5.98669 7.40802L1.70225 11.6834C1.51296 11.8592 1.26275 11.9549 1.00419 11.9505C0.745642 11.946 0.498889 11.8417 0.315798 11.6595C0.133186 11.4768 0.0286623 11.2306 0.024196 10.9726C0.0197296 10.7145 0.115668 10.4649 0.291848 10.276L4.57629 6.00059L0.291848 1.72521C0.104968 1.5385 0 1.2854 0 1.0215C0 0.757611 0.104968 0.504508 0.291848 0.317792Z" fill="#09A122" />
                        </svg>
                    </button>
                </div>
                <h2 className="text-[20px] font-[600] md:font-[500] text-[#141415] md:text-center mb-4">Create Account</h2>
                <p className='text-[14px] font-[400] md:text-center'>Fill in your details to create an account</p>
                <div className="my-8 flex justify-center items-center">
                    <input
                        type="email"
                        id="email"
                        className="mt-1 md:p-2 md:w-[70%] w-full text-[12px] md:text-base border-b focus:outline-none"
                        placeholder="Email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="my-4 flex justify-center items-center">
                    <input
                        type="password"
                        id="password"
                        className="mt-1 md:p-2 md:w-[70%] w-full text-[12px] md:text-base border-b focus:outline-none"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="flex justify-center flex-col items-center mt-10 md:mt-0 ">

                    <div onClick={toggleAccountModal}>
                        <button
                            className="bg-[#09A122] text-white px-4 py-[10px] w-[320px] md:w-[350px] text-[16px] md:text-[24px] rounded-[10px] hover:bg-[#09A122]"

                        >
                            Create account
                        </button>
                    </div>
                    <button className="text-[12px] font-[400] md:font-[600] mt-3" onClick={onClose}>
                        By signing up, you agree to our
                        <a href="" className='text-[#09A122] hover:underline'> Terms of Service.</a>
                    </button>
                </div>
            </div>
            {showAccountModal && (
                <AccountCreated isOpen={showAccountModal} onClose={toggleAccountModal} />
            )}
        </div>
    );
};

export default RegisterModal;
