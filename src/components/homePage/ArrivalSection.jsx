import Slider from "react-slick";
import ArrowLeft from "../../icons/ArrowLeft";
import ArrowRight from "../../icons/ArrowRight";
import ArrivalBox from "../commonLayOut/ArrivalBox";
import ArrivalItems from "../commonLayOut/ArrivalItems";
import Container from "../commonLayOut/Container";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function NextRightArrow(props){
  return(
    <div onClick={props.onClick} className={` absolute -top-[100px] right-0 flex items-center justify-center w-[55px] h-[55px] rounded-full border border-[#000] hover:bg-[#AFE638] hover:border-[#AFE638] transition-all duration-300 cursor-pointer `}>
                <ArrowRight />
              </div>
  )
}
function PrevNextArrow(props){
  return(
   <div onClick={props.onClick} className=" absolute -top-[100px] right-20 flex items-center justify-center w-[55px] h-[55px] rounded-full border border-[#000] hover:bg-[#AFE638] hover:border-[#AFE638] transition-all duration-300 cursor-pointer ">
                <ArrowLeft />
              </div>
  )
}


const ArrivalSection = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <NextRightArrow/>,
    prevArrow: <PrevNextArrow />,
    autoplay: false,
    autoplaySpeed: 2500,
  };
  return (
    <>
      <div className="mb-[84px]">
        <Container>
          <div className="flex justify-between items-center mb-[46px]">
            <div>
              <h2 className='text-left text-[#000] font-["Prompt"] text-[47px] font-bold leading-[125%] tracking-[-0.94px]'>
                New <span className="text-[#5E1EE5]">arrival</span> for you
              </h2>
            </div>
            
          </div>

          <div className=" flex justify-between  gap-[76px]">
            <div className=" mt-8 border-l border-[#E2E2E2] h-[308px]  relative before:content-[''] before:bg-[#5e1ee5] before:absolute before:w-[2px] before:h-[43px]  before:left-[0px] before:top-[70px]">
              <div className=" w-[250px] absolute top-[17px] ">
                
                  <ArrivalItems
                  arrivalText="Computer & Laptop"
                  arrivalNumber="15"
                  bg={"#1f2537"}
                />
                <ArrivalItems
                  arrivalText="Mobile & Phone"
                  arrivalNumber="35"
                  bg={"#AFE638"}
                  color={"#000"}
                />
                <ArrivalItems
                  arrivalText="Camera Imaging"
                  arrivalNumber="10"
                  bg={"#5E1EE5"}
                />
                <ArrivalItems
                  arrivalText="TV & Smart Box"
                  arrivalNumber="8"
                  bg={"#F1F1F2"}
                  color={"#000"}
                />
                <ArrivalItems
                  arrivalText="Home Appliance"
                  arrivalNumber="2"
                  bg={"#FFE921"}
                  color={"#000"}
                />
                
              </div>
            </div>

            <div className="w-[920px] ">
              <Slider {...settings} >
                <ArrivalBox
                loveIcon={true}
                arrivalItemName="Xiphone 14 Pro Maxe"
                itemPrice={true}
                arrivalItemPrice="175.00"
                paraText={
                  "Lorem ipsum dolor sit amet consectetur. Eleifend nec morbi tellus vitae leo nunc."
                }
                rating="5"
                totalRating="(121)"
                className={"mx-1 ml-[49px] my-0.5"}
              />
              <ArrivalBox
                loveIcon={true}
                arrivalItemName="Xiphone 13"
                itemPrice={true}
                arrivalItemPrice="100.00"
                paraText={
                  "Lorem ipsum dolor sit amet consectetur. Eleifend nec morbi tellus vitae leo nunc."
                }
                rating="5"
                totalRating="(89)"
                className={"ml-[49px] mx-1 my-0.5"}
               
              />
              </Slider>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default ArrivalSection;
