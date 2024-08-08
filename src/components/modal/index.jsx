const Modal = ({ close, title, children, bg }) => {
  return (
    <>
      <div
        className='flex justify-center items-center fixed inset-0 z-50'
      >
        <div className='relative w-auto my-6 mx-auto max-w-xs md:max-w-xl lg:max-w-3xl'>

          <div
            style={{
              backgroundImage: `url(${bg})`,
              backgroundSize: "cover",
            }}
            className='border-0 rounded-lg p-5 shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'
          >
            <div className='flex justify-between items-start my-1'>
              <p className='text-[#353535] font-bold text-sm md:text-xl'>{title}</p>
              <button className='md:text-2xl' onClick={close}>
                <i className='fas fa-times'></i>
              </button>
            </div>
            {children}
          </div>
        </div>
      </div>
      <div className='backdrop-blur-sm fixed inset-0 z-40'></div>
    </>
  );
};

export default Modal;
