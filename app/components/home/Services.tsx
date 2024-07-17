import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding, faHouse, faKey } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link';

const Services = () => {
  return (
    <div className='grid grid-cols-12 max-w-[850px] w-full mx-auto gap-5 px-3 relative z-10 top-[-70px]'>
      <div className='col-span-12 md:col-span-4 flex flex-col justify-between pt-10 pb-6 px-6 bg-white shadow-xl border-b-4 border-[#41a9b2]'>
        <FontAwesomeIcon icon={faHouse} className='w-6 h-6 mb-10 self-end text-[#78ba3b]' />
        <h1 className='font-bold text-lg mb-4'>Sell Property</h1>
        <p className='font-light mb-6'>Proven ability to market and sell properties through a customized, strategic plan, resulting in clients netting top dollar.</p>
        <Link className='text-sm font-light' href='/services'>View Service</Link>
      </div>
      <div className='col-span-12 md:col-span-4 flex flex-col justify-between pt-10 pb-6 px-6 bg-white shadow-xl border-b-4 border-[#41a9b2]'>
        <FontAwesomeIcon icon={faBuilding} className='w-6 h-6 mb-10 self-end text-[#78ba3b]' />
        <h1 className='font-bold text-lg mb-4'>Buy Property</h1>
        <p className='font-light mb-6'>Expertise in guiding clients (including first time buyers) through the process with ease.</p>
        <Link className='text-sm font-light' href='/services'>View Service</Link>
      </div>
      <div className='col-span-12 md:col-span-4 flex flex-col justify-between pt-10 pb-6 px-6 bg-white shadow-xl border-b-4 border-[#41a9b2]'>
        <FontAwesomeIcon icon={faKey} className='w-6 h-6 mb-10 self-end text-[#78ba3b]' />
        <h1 className='font-bold text-lg mb-4'>Rent Property</h1>
        <p className='font-light mb-6'>Helping those who seek alternatives to owning, find the best option.</p>
        <Link className='text-sm font-light' href='/services'>View Service</Link>
      </div>
    </div>
  );
};

export default Services;
