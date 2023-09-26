import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/Navbar'
import Wrapper from '@/components/shared/Wrapper'
import { UploadOutlined } from '@ant-design/icons';


import React from 'react'
import {     Modal } from 'antd';
import { useState } from 'react';
import { Form, Input, Select, InputNumber, Button ,Upload} from 'antd';
import { useRouter } from 'next/router';

const { Option } = Select;  
const index = () => {
const router=useRouter();
    const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
    
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onFinish = (values) => {
    console.log('Form values:', values);
    router.push('/used-car')
    
  };

    const data = [
        {
            id: 1,
            package: 'Small',
            uploads: '100',
            price: '1'
        },
        {
            id: 2,
            package: 'Large',
            uploads: '100+',
            price: '2'
        }
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
                        <div className='grid grid-cols-1 md:grid-cols-2  gap-5'>
                            {
                                data.map((item, index) => (
                                    <div className='flex flex-col gap-10 justify-center items-center text-center rounded-lg border py-16 px-20 mt-10' key={index}>
                                        <p className='text-[32px] font-[600] text-[#09A122]'>{item.package}</p>
                                        <p className='text-[24px] font-[600]'>{item.uploads} Uploads</p>
                                        <p className='text-[32px] font-[600]'>${item.price}.00</p>
                                        <div onClick={showModal} >
                                            <button className='bg-[#09A122] text-white px-4 py-[10px] w-[180px] text-[16px] md:text-[20px] rounded-[10px] hover:bg-[#09A122]'>Select</button>
                                        </div>

                                    </div>
                                ))
                            }

                        </div>
                    </div>

                </Wrapper>

            </div>
            <Modal title="Car Details" open={isModalOpen} onOk={handleOk} okText="Save"
      cancelText="Cancel"
      footer={[
        
      ]} onCancel={handleCancel}>
            <Form onFinish={onFinish} layout='vertical'>
                <div className='flex flex-row w-full gap-x-4 justify-center'>
                    <div className='w-full'>
                    <p>Make</p>            
  <Form.Item style={{maxWidth:"400px",width:"100%"}}   name="make" rules={[{ required: true, message: 'Please input the make!' }]}>
    <Input className='w-full' style={{width:"100%"}} placeholder="BMW" />
  </Form.Item>
                    </div>
                    <div className=' w-full'>   
                    <p>Model</p>
  <Form.Item style={{width:"100%"}}   name="model" rules={[{ required: true, message: 'Please input the model!' }]}>
    <Input placeholder="2 Series" />
  </Form.Item>
                    </div>
                
  
                </div>

            
  <div className='flex flex-row justify-between gap-x-4'>
  <div className='w-full'>
    <p>Trim</p>
    <Form.Item style={{ width: "100%" }} name="trim" rules={[{ required: true, message: 'Please input the trim!' }]}>
      <Input placeholder="2 LT" />
    </Form.Item>
  </div>
  <div className='w-full'>
    <p>Year</p>
    <Form.Item style={{ width: "100%" }} name="year" rules={[{ required: true, message: 'Please input the year!' }]}>
      <InputNumber style={{ width: "100%" }} placeholder="2020" />
    </Form.Item>
  </div>
</div>
<div className='flex flex-row justify-between   gap-x-4'>
  <div className='w-full'>
    <p>Mileage</p>
    <Form.Item style={{ width: "100%" }} name="mileage" rules={[{ required: true, message: 'Please input the mileage!' }]}>
      <InputNumber style={{ width: "100%" }} placeholder="30,000" />
    </Form.Item>
  </div>
  <div className='w-full'>
    <p>Title</p>
    <Form.Item style={{ width: "100%" }} name="title" rules={[{ required: true, message: 'Please input the title!' }]}>
      <Input placeholder="Clean" />
    </Form.Item>
  </div>
</div>
<div className='flex flex-row justify-between   gap-x-4'>
  <div className='w-full'>
    <p>Owners</p>
    <Form.Item style={{ width: "100%" }} name="owners" rules={[{ required: true, message: 'Please input the number of owners!' }]}>
      <Input placeholder="1 owner" />
    </Form.Item>
  </div>
  <div className='w-full'>
    <p>Drive Train</p>
    <Form.Item style={{ width: "100%" }} name="driveTrain" rules={[{ required: true, message: 'Please input the drive train!' }]}>
      <Input placeholder="All-Wheel Drive" />
    </Form.Item>
  </div>
</div>
{/* Continue adding more divs for each set of Form.Item elements */}

<div className='flex flex-row justify-between   gap-x-4'>
  <div className='w-full'>
    <p>Engine</p>
    <Form.Item style={{ width: "100%" }} name="engine" rules={[{ required: true, message: 'Please input the engine!' }]}>
      <Input placeholder="182 hp" />
    </Form.Item>
  </div>
  <div className='w-full'>
    <p>Transmission</p>
    <Form.Item style={{ width: "100%" }} name="transmission" rules={[{ required: true, message: 'Please input the transmission!' }]}>
      <Input placeholder="Automatic" />
    </Form.Item>
  </div>
</div>
<div className='flex flex-row justify-between   gap-x-4'>
  <div className='w-full'>
    <p>Interior Color</p>
    <Form.Item style={{ width: "100%" }} name="interiorColor" rules={[{ required: true, message: 'Please input the interior color!' }]}>
      <Input placeholder="Black" />
    </Form.Item>
  </div>
  <div className='w-full'>
    <p>Exterior Color</p>
    <Form.Item style={{ width: "100%" }} name="exteriorColor" rules={[{ required: true, message: 'Please input the exterior color!' }]}>
      <Input placeholder="Gray" />
    </Form.Item>
  </div>
</div>
<div className='flex flex-row justify-between   gap-x-4'>
  <div className='w-full'>
    <p>Fuel/Energy Type</p>
    <Form.Item style={{ width: "100%" }} name="fuelType" rules={[{ required: true, message: 'Please input the fuel type!' }]}>
      <Input placeholder="Gasoline" />
    </Form.Item>
  </div>
  <div className='w-full'>
    <p>VIN</p>
    <Form.Item style={{ width: "100%" }} name="vin" rules={[{ required: true, message: 'Please input the VIN!' }]}>
      <Input placeholder="372722BQUISHJGCF7" />
    </Form.Item>
  </div>
</div>
<div className='flex flex-row justify-between   gap-x-4'>
  <div className='w-full'>
    <p>Stock</p>
    <Form.Item style={{ width: "100%" }} name="stock" rules={[{ required: true, message: 'Please input the stock!' }]}>
      <Input placeholder="45T121" />
    </Form.Item>
  </div>
  <div className='w-full'>
    <p>Location</p>
    <Form.Item className='w-full' style={{ width: "100%" }} name="location" rules={[{ required: true, message: 'Please input the location!' }]}>
      <Input placeholder="Washington, DC" />
    </Form.Item>
  </div>
</div>
<div className='flex flex-row justify-between  w-full gap-x-4'>
  <div className='w-full'>
    <p>Inventory Type</p>
    <Form.Item style={{ width: "100%" }} name="inventoryType" rules={[{ required: true, message: 'Please input the inventory type!' }]}>
      <InputNumber style={{ width: "100%" }} placeholder="150" />
    </Form.Item>
  </div>
  <div  className='w-full'>
    <p>Images</p>
  <Upload maxCount={5}
            // onChange={handleFileChange} // Attach the onChange event handler

            className="w-full uploadButton" style={{ width: "100%" }}>
            <Button className="w-full uploadButton" style={{ width: "100%" }} icon={<UploadOutlined />}>Click to Upload</Button>
          </Upload>
   </div>
</div>


  <Form.Item className='flex flex-row justify-end'>    
    <Button type="primary" htmlType="submit">
      Submit
    </Button>
  </Form.Item>
</Form>

      </Modal>
            <Footer />
        </div>
    )
}

export default index

