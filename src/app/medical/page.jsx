"use client"
import React, { useState } from 'react';
import Modal from 'react-modal';
import Navbar from '@/components/Navbar';
import BabyComponent from '@/components/baby/twomonth';
import Fourmonth from '@/components/baby/fourmonth';
import Sixmonth from '@/components/baby/sixmonth';
import Ninemonth from '@/components/baby/ninemonth';
import Oneyear from '@/components/baby/oneyear';
import Onehalf from '@/components/baby/onehalf';
import Threeyears from '@/components/baby/threeyear';
import Fiveyears from '@/components/baby/fiveyears';

function Medical() {
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const components = {
    '2 Month': <BabyComponent />,
    '4 Month': <Fourmonth/>,
    '6 Month': <Sixmonth/>,
    '9 Month': <Ninemonth/>,
    '1 year': <Oneyear/>,
    'onehalf years': <Onehalf/>,
    '3 years': <Threeyears/>,
    
    '5 years': <Fiveyears/>,

    // '6 Month': <SixMonthComponent />,
    // ... more components
  };

  const handleMonthClick = (month) => {
    setSelectedMonth(month);
    setModalVisible(true);
  };

  const renderComponent = () => {
    return components[selectedMonth] || null;
  };

  return (
    <div>
      <div className="top-0 left-0 sticky">
        <Navbar />
      </div>
      <div className='pt-[100px] '>
        <ul className='flex lg:grid-cols-2 lg:grid  flex-col gap-5  mx-5 text-center text-white py-2 lg:mx-40 lg:pt-10'>
          <li onClick={() => { handleMonthClick('2 Month'); setModalVisible(true); }} className='bg-blue-500 py-2 rounded-lg cursor-pointer lg:py-5'>2 Month</li>
          <li onClick={() => handleMonthClick('4 Month')} className='bg-blue-500 py-2 rounded-lg cursor-pointer lg:py-5'>4 Month</li>
         
          <li onClick={() => { handleMonthClick('6 Month'); setModalVisible(true); }} className='bg-blue-500 py-2 rounded-lg lg:py-5'>6 Month</li>
          <li onClick={() => { handleMonthClick('9 Month'); setModalVisible(true); }} className='bg-blue-500 py-2 rounded-lg lg:py-5'>9 Month</li>
          <li onClick={() => { handleMonthClick('1 year'); setModalVisible(true); }} className='bg-blue-500 py-2 rounded-lg lg:py-5'>12 Month (1 Year)</li>
          <li onClick={() => { handleMonthClick('onehalf years'); setModalVisible(true); }}  className='bg-blue-500 py-2 rounded-lg lg:py-5'>18 Month (1 1/2 Years)</li>
          <li onClick={() => { handleMonthClick('3 years'); setModalVisible(true); }} className='bg-blue-500 py-2 rounded-lg lg:py-5'>3 Years</li>
          <li onClick={() => { handleMonthClick('5 years'); setModalVisible(true); }} className='bg-blue-500 py-2 rounded-lg lg:py-5'>5 Years</li>
        </ul>

        {modalVisible &&  (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center ">
            <div className="modal-bg fixed top-0 left-0 w-full h-full bg-black opacity-50 "></div>
            <div className="modal-container bg-white w-5/6 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto pb-5">
              <div className="modal-content py-4 text-left px-6 ">

                <div className='text-center py-3'>
                  
                </div>

                {renderComponent()}

                <button
                  onClick={() => setModalVisible(false)}
                  className=" bg-red-600 hover:bg-gray-400 text-gray-800 py-1 px-3 rounded float-right"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Medical;
