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
          <i
            className='iconsax text-base md:text-xl text-[#353535]'
            icon-name='search-normal-2'
          ></i>
        </div>
      </div>
    </form>
  );
};

export default Searchbox;
