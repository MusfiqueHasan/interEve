import React from 'react';
import img from '../../images/services.jpg'
const Servises = () => {
    return (
        <div className='relative h-screen grid md:grid-cols-2 '>
            <div className='h-full relative z-0'>
                <div className=' animate-spin absolute left-36 top-28'>
                    <img className='' src={img} width='525'  alt="" />
                </div>
                <div className='w-60 h-60 absolute bottom-72 left-72  bg-green-800 rounded-full text-white '>
                    <p className='text-2xl text-center py-16 px-4 font-extrabold font-mono'>We are providing the best services </p>
                </div>
            </div>
            <div>
                <p>hello</p>
            </div>
        </div>
    );
};

export default Servises;