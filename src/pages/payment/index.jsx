import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import { useState } from "react";

function index() {
    const [accountName, setAccountName] = useState("");
    const [accountNumber, setAccountNumber] = useState("");
    const [expiry, setExpiry] = useState("");
    const [cvv, setCvv] = useState("");

    const handlePayment = () => {
        // Handle payment logic here
        // You can send the form data to your payment processing backend
        console.log("Payment submitted");
    };

    return (
        <div className="">
            <Navbar />
            <div className="my-4 flex justify-center items-center h-auto mt-32 ">
                <div className="md:w-[400px] bg-white md:shadow-xl md:px-10 md:py-10 p-5 rounded-lg">
                    <div className="space-y-8">
                        <div className="mt-1 md:p-2 w-[320px]  md:w-[500px] text-[12px] md:text-base border-b focus:outline-none">
                            <input
                                type="text"
                                id="accountName"
                                placeholder="Account Name"
                                value={accountName}
                                className="focus:outline-none"
                                onChange={(e) => setAccountName(e.target.value)}
                            />
                        </div>
                        <div className="mt-1 md:p-2 w-[320px] md:w-[400px] text-[12px] md:text-base border-b focus:outline-none">
                            <input
                                type="text"
                                id="accountNumber"
                                placeholder="Account Number"
                                value={accountNumber}
                                className="focus:outline-none"
                                onChange={(e) => setAccountNumber(e.target.value)}
                            />
                        </div>
                        <div className="mt-1 md:p-2 w-[300px] md:w-[400px] text-[12px] md:text-base border-b focus:outline-none">
                            <input
                                type="text"
                                id="expiry"
                                placeholder="Expiry Date"
                                className="focus:outline-none"
                                value={expiry}
                                onChange={(e) => setExpiry(e.target.value)}
                            />
                        </div>
                        <div className="mt-1 md:p-2  w-[300px] md:w-[400px] text-[12px] md:text-base border-b focus:outline-none">
                            <input
                                type="text"
                                id="cvv"
                                placeholder="CVV"
                                className="focus:outline-none"
                                value={cvv}
                                onChange={(e) => setCvv(e.target.value)}
                            />
                        </div>
                        <div className="mt-10 text-center">
                            <a href="/upload">
                                <button className='bg-[#09A122] text-white px-4 py-[10px] w-[180px] text-[16px] md:text-[20px] rounded-[10px] hover:bg-[#09A122]'>Pay</button>
                            </a>

                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    );
}

export default index;
