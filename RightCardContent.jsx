import React from 'react'

const RightCardContent = (props) => {
  return (
    <div className='absolute top-0 left-0 h-full w-full  p-8 flex flex-col justify-between'>
      <h2 className='bg-white rounded-full h-12 w-12 flex justify-center items-center font-semibold text-xl'>{props.id}</h2>
      <div><p className='text-shadow-lg text-xl mt-50  text-white font-medium leading-relaxed'>{props.intro}</p></div>
      <div className='flex justify-between'><button className='bg-blue-500 text-white font-medium rounded-full px-8 py-2 '>{props.tag}</button>
        <button className='bg-blue-500 text-white font-medium rounded-full px-3 py-2 '><i className="ri-arrow-right-line"></i></button>

      </div>
    </div>
  )
}

export default RightCardContent
