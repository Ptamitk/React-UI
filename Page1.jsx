import React from 'react'
import Left from './Left';
import Right from './Right';

const Page1 = (props) => {
  return (
    <div className='py-10 flex items-center gap-10 px-18 h-[90vh] '>
      <Left />
      <Right users={props.users} />
    </div>
  )
}

export default Page1
