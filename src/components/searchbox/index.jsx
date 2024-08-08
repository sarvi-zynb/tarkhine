const Searchbox = () => {
  return (
    <form className='w-full mx-auto'>
      <div className='relative'>
        <input
          type='text'
          placeholder='جستجو'
          className='block w-full p-1.5 ps-4 text-sm focus:outline-[#353535] border-2 border-[#CBCBCB] rounded-lg placeholder:text-sm'
        />
        <div className='absolute inset-y-0 flex items-center end-0 pe-3'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='16'
            viewBox='0 0 24 24'
            fill='none'
          >
            <path
              d='M11.5 21a9.5 9.5 0 1 0 0-19 9.5 9.5 0 0 0 0 19ZM22 22l-2-2'
              stroke='#353535'
              stroke-width='1.5'
              stroke-linecap='round'
              stroke-linejoin='round'
            ></path>
          </svg>
        </div>
      </div>
    </form>
  );
};

export default Searchbox;
