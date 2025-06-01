import ArrowLeft from "../../icons/ArrowLeft";
import ArrowRight from "../../icons/ArrowRight";
import ArrivalBox from "../commonLayOut/ArrivalBox";
import ArrivalItems from "../commonLayOut/ArrivalItems";
import Container from "../commonLayOut/Container";

const ArrivalSection = () => {
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
            <div className="flex items-center gap-[24px]">
              <div className=" flex items-center justify-center w-[55px] h-[55px] rounded-full border border-[#000] hover:bg-[#AFE638] transition-all duration-300 cursor-pointer ">
                <ArrowLeft />
              </div>
              <div className=" flex items-center justify-center w-[55px] h-[55px] rounded-full border border-[#000] hover:bg-[#AFE638] transition-all duration-300 cursor-pointer ">
                <ArrowRight />
              </div>
            </div>
          </div>

          <div className=" flex justify-between  gap-[76px]">
            <div className=" mt-8 border-l border-[#E2E2E2] h-[308px]  relative before:content-[''] before:bg-[#5e1ee5] before:absolute before:w-[2px] before:h-[43px]  before:left-[0px] before:top-[70px]  ">
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
            <div className="flex items-center gap-[98px]">
              <ArrivalBox
                loveIcon={true}
                arrivalItemName="Xiphone 14 Pro Maxe"
                arrivalItemPrice="175.00"
                paraText={
                  "Lorem ipsum dolor sit amet consectetur. Eleifend nec morbi tellus vitae leo nunc."
                }
                rating="5"
                totalRating="(121)"
              />
              <ArrivalBox
                loveIcon={false}
                arrivalItemName="Xiphone 13"
                arrivalItemPrice="100.00"
                paraText={
                  "Lorem ipsum dolor sit amet consectetur. Eleifend nec morbi tellus vitae leo nunc."
                }
                rating="5"
                totalRating="(89)"
              />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default ArrivalSection;
