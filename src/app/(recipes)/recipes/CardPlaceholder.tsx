import React from "react";

const CardPlaceholder = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8 mt-5 p-4">
      {Array(4)
        .fill("")
        .map((_, index) => (
          <div key={index} className="justify-self-center">
            <div className="flex flex-col gap-4 lg:gap-8 sm:flex-row bg-card-bg backdrop-blur-sm px-8 py-6 lg:px-14 md:py-9 rounded-3xl max-w-xl justify-center animate-pulse">
              <div className="flex justify-center sm:basis-1/2">
                <div className="bg-placeholder rounded-2xl sm:w-40 md:w-36 lg:w-52 xl:w-60 aspect-[144/83]"></div>
              </div>
              <div className="flex flex-col justify-between items-center md:py-4 sm:basis-1/2">
                <div className="bg-placeholder rounded-full h-6 sm:w-32 md:w-48 mb-4"></div>
                <div className="bg-placeholder rounded-full h-10 w-20"></div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default CardPlaceholder;
