
import ArrowDown from '../../icons/ArrowDown';

const Button = ({
    textbtn,
    bg = "#000",
    fontName = "Montserrat",
    fontWeight = "500",
    size = "16px",
    color = "white",
    paddingY = 16,
    paddingX = 37,
    radius = 52,
    
    
    }) => {

  

  return (
    <>
    <button className='flex items-center gap-2.5 justify-center cursor-pointer transform' 
    style={{
        backgroundColor: bg,
        fontFamily: fontName,
        fontWeight: fontWeight,
        fontSize: size,
        color: color,
        padding: `${paddingY}px ${paddingX}px`,
        borderRadius: `${radius}px`,
        
        
        
    }}
    >{textbtn}<ArrowDown />
    </button>
    </>
  );
};

export default Button