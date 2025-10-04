import React from 'react';
import { FiShoppingBag } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const EmptyCartComp = ({ text , icon }) => {
  return (
    <div className='flex h-[100vh] items-center justify-center box-border '>
      <div className='text-center flex items-center justify-center flex-col gap-3'>
        {icon && <FiShoppingBag className='text-center text-8xl text-blue-400' />}
        <h2 className='text-3xl font-bold '>Your cart is empty</h2>
        <p className='text-gray-500 '>{text}</p>
   
        <div className='mt-4'>
          <Link to={'/'} className='bg-blue-500 py-2.5 px-6 text-white font-semibold rounded-md'>
           Continue Shopping 
          </Link>
        </div>

      </div>
      
    </div>
  );
}

export default EmptyCartComp;


// 
// 

// Continue Shopping