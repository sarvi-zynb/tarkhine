const IconButton = ({ children, icon, filled, onClick, className }) => {
  return (
    <>
      {filled ? (
        <button
          onClick={onClick}
          className={`${className} flex items-center justify-center text-white bg-[#417F56] font-medium  text-xs md:text-sm lg:text-base border border-[#417F56] rounded-[4px] px-2 py-1 hover:bg-white hover:text-[#417F56] transition duration-500`}
        >
          {icon}
          {children}
        </button>
      ) : (
        <button
          onClick={onClick}
          className={`${className} flex items-center justify-center text-[#417F56] font-medium text-xs md:text-sm lg:text-base border border-[#417F56] rounded-[4px] px-2 py-1 hover:bg-[#417F56] hover:text-white transition duration-500`}
        >
          {icon}
          {children}
        </button>
      )}
    </>
  );
};

export default IconButton;
