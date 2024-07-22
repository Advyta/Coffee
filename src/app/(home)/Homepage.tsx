import React from 'react'
import bgOne from '../../assets/mike-kenneally-tNALoIZhqVM-unsplash.jpg'

export default function Homepage() {
  return (
    <div style={{ backgroundImage: `url(${bgOne.src})` }} className='bg-cover w-full aspect-bg-1'>
      <div className="flex justify-end">
        <h1 className='page-title mt-36 mr-16'>Coffee Creations</h1>
      </div>
    </div>
  )
}
