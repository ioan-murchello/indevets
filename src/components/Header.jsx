const Header = () => {
  return (
    <header className='flex flex-col sm:flex-row gap-y-5 justify-between items-center bg-[var(--header-bg)] sm:rounded-full px-12 py-6'>
      <a className='text-3xl text-white' href='#'>
        IndeVets
      </a>
      <nav>
        <ul className='flex px-4 gap-x-8 gap-y-5 items-center justify-center xl:ml-64 text-xl flex-wrap'>
          <li className='sm:hover:text-white active:text-white transition-all duration-300'>
            <a href='#'>Veterinarians</a>
          </li>
          <li className='sm:hover:text-white active:text-white transition-all duration-300'>
            <a href='#'>Hospitals</a>
          </li>
          <li className='sm:hover:text-white active:text-white transition-all duration-300'>
            <a href='#'>Why IndeVets</a>
          </li>
        </ul>
      </nav>
      <button className='text-xl text-white active:text-white px-7 py-2 border'>
        login / register
      </button>
    </header>
  );
}
export default Header
 