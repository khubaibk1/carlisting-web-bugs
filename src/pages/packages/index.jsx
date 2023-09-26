import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/Navbar'
import Wrapper from '@/components/shared/Wrapper'
import React from 'react'

const index = () => {
    const data = [
        {
            id: 1,
            package: 'Basic',
            uploads: '10',
            price: '20'
        },
        {
            id: 2,
            package: 'Standard',
            uploads: '15',
            price: '40'
        },
        {
            id: 3,
            package: 'Premium',
            uploads: '20',
            price: '100'
        },
    ]
    return (
        <div>
            <Navbar />
            <div>
                <Wrapper>
                    <div className='md:h-screen flex flex-col justify-center items-center'>
                        <h1 className='text-center text-[32px] font-[600]'>
                            Select Package
                        </h1>
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                            {
                                data.map((item, index) => (
                                    <div className='flex flex-col gap-10 justify-center items-center text-center rounded-lg border py-16 px-20 mt-10' key={index}>
                                        <p className='text-[32px] font-[600] text-[#09A122]'>{item.package}</p>
                                        <p className='text-[24px] font-[600]'>{item.uploads} Uploads</p>
                                        <p className='text-[32px] font-[600]'>${item.price}.00</p>
                                        <a href="/payment">
                                            <button className='bg-[#09A122] text-white px-4 py-[10px] w-[180px] text-[16px] md:text-[20px] rounded-[10px] hover:bg-[#09A122]'>Select</button>
                                        </a>

                                    </div>
                                ))
                            }

                        </div>
                    </div>

                </Wrapper>
            </div>
            <Footer />
        </div>
    )
}

export default index