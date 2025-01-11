import React from 'react';
import { FaMapLocationDot } from 'react-icons/fa6';
import { MdCategory, MdManageAccounts } from 'react-icons/md';
import { Link } from 'react-router-dom';

const VolunteerCard = ({post}) => {
  const {_id, thumbnail, PostTitle, description, Category, Location, OrganizerName, organizerEmail, volunteersNeeded, deadline } = post
  return (
    <div>
      <div className="card card-compact bg-base-100 rounded-none shadow-xl ">
        <figure>
          <img
            className='w-96 h-[300px] object-cover'
            src={thumbnail}
            alt="Shoes" />
        </figure>
       
        <div className="px-5 py-4 mt-6 relative ">
          <div className='absolute -top-11 right-[74px] '>
            <h2 className='bg-[#553739] text-white rounded-2xl py-2 px-8 font-bold'>DeadLine: {deadline}</h2>
        </div>
          <h2 className="card-title">{PostTitle}</h2>
          <div className='my-4'>
            <span className='flex items-center gap-2 tooltip w-44' data-tip="Category"><MdCategory /> <span className='font-bold text-blue-500'>{Category}</span></span>
            <span className='flex items-center gap-2 tooltip w-16' data-tip="volunteer Need"><MdManageAccounts /> <span className='font-bold text-blue-500'>{volunteersNeeded}</span></span>
            <span className='flex items-center gap-2'><FaMapLocationDot /> <span className='font-bold text-blue-500'>{Location}</span></span>
          </div>
          <div className="card-actions justify-end">
            <Link className="bg-blue-500 text-white px-6 py-2 text-lg font-bold" to={`details/${_id}`}>See Details</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VolunteerCard;