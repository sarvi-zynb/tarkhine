const Button = ({
  children,
  onClick,
  filled,
  icon,
  color,
  disabled,
  className
}) => {
  return (
    <>
      {color === "white" ? (
        <>
          {filled ? (
            <button
              className={`${className} flex items-center justify-center text-white text-[10px] sm:text-xs md:text-sm lg:text-base border border-[#417F56] bg-[#417F56] py-1 px-2 md:px-5 rounded-[4px] hover:bg-transparent hover:text-[#417F56] 
                disabled:bg-[#cdcdcd] disabled:border-[#cdcdcd] disabled:hover:text-white disabled:hover:bg-[#cdcdcd] transition duration-500`}
              onClick={onClick}
              disabled={disabled}
            >
              {children}
              {icon}
            </button>
          ) : (
            <button
              className={`${className} flex items-center justify-center text-white text-[10px] sm:text-xs md:text-sm lg:text-base border border-white bg-transparent py-1 px-2 md:px-5 rounded-[4px] hover:bg-white hover:text-black
                 disabled:bg-[#cdcdcd] disabled:border-[#cdcdcd] disabled:hover:text-white disabled:hover:bg-[#cdcdcd] transition duration-500`}
              onClick={onClick}
              disabled={disabled}
            >
              {children}
              {icon}
            </button>
          )}
        </>
      ) : (
        <>
          {filled ? (
            <button
              className={`${className} flex items-center justify-center text-white text-[10px] sm:text-xs md:text-sm lg:text-base border border-[#417F56] bg-[#417F56] py-1 px-2 md:px-5 rounded-[4px] hover:bg-transparent hover:text-[#417F56]
                 disabled:bg-[#cdcdcd] disabled:border-[#cdcdcd] disabled:hover:bg-[#cdcdcd] disabled:hover:text-white transition duration-500`}
              onClick={onClick}
              disabled={disabled}
            >
              {children}
              {icon}
            </button>
          ) : (
            <button
              className={`${className} flex items-center justify-center text-[#417F56] text-[10px] sm:text-xs md:text-sm lg:text-base border border-[#417F56] bg-white py-1.5 px-2 md:px-5 rounded-[4px] hover:bg-[#417F56] hover:text-white
                 disabled:bg-[#cdcdcd] disabled:border-[#cdcdcd] disabled:hover:text-white disabled:hover:bg-[#cdcdcd] transition duration-500`}
              onClick={onClick}
              disabled={disabled}
            >
              {children}
              {icon}
            </button>
          )}
        </>
      )}
    </>
  );
};

export default Button;
