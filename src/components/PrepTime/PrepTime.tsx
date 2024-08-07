import React from "react";
import icon from "../../assets/output-onlinetools.png";

const PrepTime = ({ duration }: { duration: string }) => {
  const minutes = parseInt(duration.substring(2, duration.length - 1));
  let statement = "";
  if (minutes < 60) {
    statement = `Preparation time: ${minutes} minutes`;
  } else {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    statement = `Preparation time: ${hours} hours ${remainingMinutes} minutes`;
  }

  return (
    <div className="flex flex-row items-center">
      <img src={icon.src} alt="prep time" height={20} width={20} />
      <p className="pl-1 py-1 body-s text-inactive-text">{statement}</p>
    </div>
  );
};

export default PrepTime;
