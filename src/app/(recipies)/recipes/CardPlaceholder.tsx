import React from 'react'

const CardPlaceholder = () => {
  return (
    <div className="grid grid-cols-1  md:grid-cols-2  gap-4 lg:gap-8 mt-5 p-4">
        {Array(4).fill("").map((_, index) => (
          <div key={index} className="justify-self-center">
            <div className="flex flex-col gap-4 lg:gap-8 sm:flex-row bg-card-bg backdrop-blur-sm px-8 py-6 lg:px-14 md:py-9 rounded-3xl max-w-xl justify-center animate-pulse">
              <div className="flex justify-center basis-1/2">
                <div className="bg-button-color rounded-2xl h-full w-40 sm:w-60 lg:w-80"></div>
              </div>
              <div className="flex flex-col justify-between items-center md:py-4 basis-1/2">
                <div className="bg-button-color rounded-full h-6 w-3/4 mb-4"></div>
                <div className="bg-button-color rounded-full h-10 w-1/2"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
  )
}

export default CardPlaceholder
