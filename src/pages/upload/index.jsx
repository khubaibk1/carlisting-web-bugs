import Footer from '@/components/footer/Footer';
import Navbar from '@/components/navbar/Navbar';
import React, { useState } from 'react';

const index = () => {
    const [carData, setCarData] = useState({
        make: 'BMW',
        driveTrain: 'All-Wheel Drive',
        stock: '45T121',
        model: '2 Series',
        engine: '182 hp',
        location: 'Washington, DC',
        trim: '2 LT',
        transmission: 'Automatic',
        inventoryType: '150',
        year: '2020',
        interiorColor: 'Black',
        mileage: '30,000',
        exteriorColor: 'Gray',
        title: 'Clean',
        fuelType: 'Gasoline',
        owners: '1 owner',
        vin: '3747428QUISHJGCF7',
    });

    const [selectedImages, setSelectedImages] = useState([]);

    const handleImageUpload = (e) => {
        const files = e.target.files;
        const images = Array.from(files).map((file) => URL.createObjectURL(file));
        setSelectedImages([...selectedImages, ...images]);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCarData({ ...carData, [name]: value });
    };

    return (
        <div>
            <Navbar />
            <div className='flex flex-col justify-center items-center md:h-screen '>
                <div className=" shadow-lg w-[320px] md:w-[800px] md:max-w-[800px] p-5 md:p-20">
                    <h1 className="text-2xl font-semibold mb-4">Upload Car Details</h1>
                    <div className="mb-4">
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageUpload}
                            multiple // Allow multiple file selection
                        />
                        <div className="flex flex-wrap mt-2">
                            {selectedImages.map((image, index) => (
                                <img
                                    key={index}
                                    src={image}
                                    alt={`Car ${index}`}
                                    className="w-48 h-48 mt-2 object-cover mr-4"
                                />
                            ))}
                        </div>
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold mb-2">Key Details</h2>
                        <form className='hidden md:block'>
                            <div className="mb-4">
                                <div className='flex mb-4 flex-col md:flex-row gap-5 items-center'>

                                    <label htmlFor="make" className="block font-semibold">
                                        Make:

                                        <input
                                            type="text"
                                            id="make"
                                            name="make"

                                            onChange={handleInputChange}
                                            className="border border-gray-300 p-2  w-[300px]"
                                        />
                                    </label>
                                    <label htmlFor="make" className="block md:mt-0 md:ml-5 mt-5 font-semibold">
                                        Model:

                                        <input
                                            type="text"
                                            id="make"
                                            name="make"

                                            onChange={handleInputChange}
                                            className="border border-gray-300 p-2  w-[300px]"
                                        />
                                    </label>
                                </div>
                                <div className='flex mb-4 flex-col md:flex-row gap-5 items-center'>

                                    <label htmlFor="make" className="block font-semibold">
                                        Trim:

                                        <input
                                            type="text"
                                            id="make"
                                            name="make"

                                            onChange={handleInputChange}
                                            className="border border-gray-300 p-2  w-[300px]"
                                        />
                                    </label>
                                    <label htmlFor="make" className="block md:mt-0 md:ml-5 mt-5 font-semibold">
                                        Year:

                                        <input
                                            type="text"
                                            id="make"
                                            name="make"

                                            onChange={handleInputChange}
                                            className="border border-gray-300 p-2  w-[300px]"
                                        />
                                    </label>
                                </div>
                                <div className='flex mb-4 flex-col md:flex-row gap-5 items-center'>

                                    <label htmlFor="make" className="block font-semibold">
                                        Milage:

                                        <input
                                            type="text"
                                            id="make"
                                            name="make"

                                            onChange={handleInputChange}
                                            className="border border-gray-300 p-2  w-[300px]"
                                        />
                                    </label>
                                    <label htmlFor="make" className="block md:mt-0  mt-5 font-semibold">
                                        Title:

                                        <input
                                            type="text"
                                            id="make"
                                            name="make"

                                            onChange={handleInputChange}
                                            className="border border-gray-300 p-2  w-[300px]"
                                        />
                                    </label>
                                </div>
                                <div className='flex mb-4 flex-col md:flex-row gap-5 items-center'>

                                    <label htmlFor="make" className="block font-semibold">
                                        Owners:

                                        <input
                                            type="text"
                                            id="make"
                                            name="make"

                                            onChange={handleInputChange}
                                            className="border border-gray-300 p-2  w-[300px]"
                                        />
                                    </label>
                                    <label htmlFor="make" className="block md:mt-0 mt-5 md:ml-5 font-semibold">
                                        Driven Train:

                                        <input
                                            type="text"
                                            id="make"
                                            name="make"

                                            onChange={handleInputChange}
                                            className="border w-[300px] border-gray-300 p-2 "
                                        />
                                    </label>
                                </div>


                            </div>
                            <a href="/" className='flex justify-center items-center mt-10'>
                                <button

                                    className="bg-[#09A122] text-white  px-4 py-[10px] w-[320px] md:w-[350px] text-[16px] md:text-[20px] rounded-[10px] hover:bg-[#09A122]"

                                >
                                    Upload
                                </button>

                            </a>
                        </form>
                        <form className='md:hidden'>
                            <div className="my-4">
                                <div className='flex flex-col gap-2 items-start'>
                                    <label htmlFor="make" className="block font-semibold">
                                        Make:
                                    </label>
                                    <input
                                        type="text"
                                        id="make"
                                        name="make"
                                        onChange={handleInputChange}
                                        className="border border-gray-300 p-2 w-full"
                                    />
                                </div>
                                <div className='flex flex-col gap-2 mt-5 items-start'>
                                    <label htmlFor="make" className="block font-semibold">
                                        Model:
                                    </label>
                                    <input
                                        type="text"
                                        id="make"
                                        name="make"
                                        onChange={handleInputChange}
                                        className="border border-gray-300 p-2 w-full"
                                    />
                                </div>
                                <div className='flex flex-col gap-2 mt-5 items-start'>
                                    <label htmlFor="make" className="block font-semibold">
                                        Trim:
                                    </label>
                                    <input
                                        type="text"
                                        id="make"
                                        name="make"
                                        onChange={handleInputChange}
                                        className="border border-gray-300 p-2 w-full"
                                    />
                                </div>
                                <div className='flex flex-col gap-2 mt-5 items-start'>
                                    <label htmlFor="make" className="block font-semibold">
                                        Year:
                                    </label>
                                    <input
                                        type="text"
                                        id="make"
                                        name="make"
                                        onChange={handleInputChange}
                                        className="border border-gray-300 p-2 w-full"
                                    />
                                </div>
                                <div className='flex flex-col gap-2 mt-5 items-start'>
                                    <label htmlFor="make" className="block font-semibold">
                                        Milage:
                                    </label>
                                    <input
                                        type="text"
                                        id="make"
                                        name="make"
                                        onChange={handleInputChange}
                                        className="border border-gray-300 p-2 w-full"
                                    />
                                </div>
                                <div className='flex flex-col gap-2 mt-5 items-start'>
                                    <label htmlFor="make" className="block font-semibold">
                                        Title:
                                    </label>
                                    <input
                                        type="text"
                                        id="make"
                                        name="make"
                                        onChange={handleInputChange}
                                        className="border border-gray-300 p-2 w-full"
                                    />
                                </div>
                                <div className='flex flex-col gap-2 mt-5 items-start'>
                                    <label htmlFor="make" className="block font-semibold">
                                        Owners:
                                    </label>
                                    <input
                                        type="text"
                                        id="make"
                                        name="make"
                                        onChange={handleInputChange}
                                        className="border border-gray-300 p-2 w-full"
                                    />
                                </div>
                                <div className='flex flex-col gap-2 mt-5 items-start'>
                                    <label htmlFor="make" className="block font-semibold">
                                        Drivern Train:
                                    </label>
                                    <input
                                        type="text"
                                        id="make"
                                        name="make"
                                        onChange={handleInputChange}
                                        className="border border-gray-300 p-2 w-full"
                                    />
                                </div>
                            </div>

                            {/* Repeat similar code for other form fields */}

                            <div className='flex justify-center items-center mt-10'>
                                <button
                                    className="bg-[#09A122] text-white px-4 py-[10px] w-full rounded-[10px] hover:bg-[#09A122]"
                                >
                                    Upload
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    );
};

export default index;
