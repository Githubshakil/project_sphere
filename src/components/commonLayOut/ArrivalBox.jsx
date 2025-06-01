import { useState } from "react";
import HartShape from "../../icons/HartShape";
import CartBtn from "./CartBtn";
import { GoStarFill } from "react-icons/go";
const ArrivalBox = ({
  loveIcon,
  arrivalItemName,
  arrivalItemPrice,
  paraText,
  totalRating,
  rating,
  className
}) => {

    let [ratingValue, setRatingValue] = useState(new Array(+rating).fill(rating));
  return (
    
      <div className={className}>
        <div className="w-[410px] relative  h-[404px] border-1 border-[#fff] rounded-[15px] drop-shadow-lg backdrop-blur-sm pt-[99px] pb-[38px] pl-[52px] pr-[56px] ">
          <div className=" h-[267px] bg-[#d9d9d9]"></div>
          {(loveIcon && (
            <div className="w-[49px] h-[49px] bg-[#000] rounded-full absolute top-[28px] right-[30px] flex items-center justify-center">
              <HartShape />
            </div>
          )) || (
            <div className="w-[49px] h-[49px] bg-[#000] rounded-full absolute top-[28px] right-[86px] flex items-center justify-center">
              <HartShape />
            </div>
          )}
        </div>

        <div>
          <div className="flex items-center justify-between mt-[38px]">
            <div className='text-[#2c2c2c] font-["Montserrat"] text-[23px] font-extrabold leading-[130%]'>
              {arrivalItemName}
            </div>
            <div className='text-[#2c2c2c] font-["Montserrat"] text-[23px] font-extrabold leading-[130%]'>
              ${arrivalItemPrice}
            </div>
          </div>
          <p className="w-[410px]  mt-[21px] text-[#000] font-['Montserrat'] text-[18px]  font-normal leading-[155%]">{paraText}</p>
          <div className="flex items-center gap-2.5 mt-[17px]">
            <div className=" flex items-center text-[20px]  text-[#04a904]  ">
            {ratingValue.map((item, index)=>(
                <GoStarFill key={index} className="m-0.5" />
            ))}
          </div>
            <span className="text-black font-['Montserrat'] text-[18px] leading-[155%]">{totalRating}</span>
          </div>
          <CartBtn/>
        </div>
      </div>
    
  );
};

export default ArrivalBox;
