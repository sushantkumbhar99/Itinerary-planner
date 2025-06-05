

import { MapPin, Edit2, Trash } from 'lucide-react'

export default function ItineraryCard ({ place }) {
  return (
    <div className='bg-white p-3 rounded-xl shadow-md flex  flex-row gap-4 items-start w-full'>
      {/* Image */}
      <div className='w-[112px] h-[112px] flex-shrink-0'>
       
        <img
          src={place.image}
          alt={place.title}
          className='rounded-md w-full h-full object-cover'
        />
      </div>

      {/* Center text area */}
      <div className='flex flex-col flex-grow'>
        <div className='flex flex-row justify-between'>
          <h3 className='text-lg font-semibold'>{place.title}</h3>
          <div className='flex flex-row gap-3 ml-auto mt-2 text-gray-600'>
            <MapPin className='w-4 h-4 hover:text-blue-600' />
            <Edit2 className='w-4 h-4 hover:text-green-600' />
            <Trash className='w-4 h-4 hover:text-red-600' />
          </div>
        </div>

        <p className='text-sm mt-2 mb-2 text-yellow-600 font-medium'>
          ⭐ {place.rating} ({place.visitors})
        </p>

        {/* Description with inline pencil icon */}
        <div className='flex bg-gray-100 items-start w-full p-2 rounded-md'>
          <p className='text-sm text-gray-700 p-1 flex-grow'>
            {place.description}
          </p>
          <Edit2 className='w-4 h-4 mt-2 mr-2 hover:text-green-600' />
        </div>
      </div>

 
    </div>
  )
}
