import ArrowLeft from "../../icons/ArrowLeft";
import ArrowRight from "../../icons/ArrowRight";
import Container from "../commonLayOut/Container";

const ArrivalSection = () => {
  return (
    <>
      <div>
        <Container>
          <div className="flex justify-between items-center mb-[48px]">
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


          <div></div>
        </Container>
      </div>
    </>
  );
};

export default ArrivalSection;
