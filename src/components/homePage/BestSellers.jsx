import React from "react";
import Container from "../commonLayOut/Container";
import StarShape from "../../icons/StarShape";
import Slider from "react-slick";
import ArrivalBox from "../commonLayOut/ArrivalBox";

const BestSellers = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    // nextArrow: <NextRightArrow/>,
    // prevArrow: <PrevNextArrow />,
    autoplay: true,
    autoplaySpeed: 2500,
    
  };
  return (
    <>
      <Container >
       <div className="mb-[105px]">
         <div className="flex mb-[65px]">
          <h3 className='text-left text-[#000] font-["Prompt"] text-[47px] font-bold leading-[125%] tracking-[-0.94px]'>
            Flash sale for <span className="text-[#5E1EE5]">best</span> sellers
          </h3>
          <div>
            <img src="images/shape.png" alt="shape" className="ml-[315px]  " />
            <StarShape className="ml-[532px] mt-[28px]" />
          </div>
        </div>

        <div className="w-[1300px] mx-auto">
          <Slider {...settings} >
            <ArrivalBox
                loveIcon={false}
              arrivalItemName="Xpad Mini 6"
              paraText={
                "Lorem ipsum dolor sit amet consectetur. Eleifend nec morbi tellus vitae leo nunc."
              }
              rating="5"
              totalRating="(121)"
              className={"my-0.5 mx-1 "}
              percentTag={"8"}
              bestprice={"89.000"}
              delPrice={"150.00"}
              bestSellprice={true}
             
            />
            <ArrivalBox
              loveIcon={false}
              arrivalItemName="Hypermac Air Purpler M1"
              arrivalItemPrice={null}
              paraText={
                "Lorem ipsum dolor sit amet consectetur. Eleifend nec morbi tellus vitae leo nunc."
              }
              rating="5"
              totalRating="(125)"
              className={" my-0.5 mx-1 "}
              percentTag={"8"}
              bestprice={"89.000"}
              delPrice={"150.00"}
              bestSellprice={true}
              
            />
            <ArrivalBox
              loveIcon={false}
              arrivalItemName="AR10 AC 1PK with S-Inverter"
              arrivalItemPrice={null}
              paraText={
                "Lorem ipsum dolor sit amet consectetur. Eleifend nec morbi tellus vitae leo nunc."
              }
              rating="5"
              totalRating="(125)"
              className={" my-0.5 mx-1"}
              percentTag={"13"}
              bestprice={"90.000"}
              delPrice={"250.00"}
              bestSellprice={true}
              
            />
            
          </Slider>
        </div>
       </div>
      </Container>
    </>
  );
};

export default BestSellers;
