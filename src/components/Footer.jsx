import dog from '../assets/speacking_dog.svg'

const Footer = () => {
  return (
    <footer className='container mx-auto px-4 py-20'>
      <div className='flex sm:justify-evenly flex-wrap gap-5 mb-7'>
        <div className='flex flex-col justify-start'>
          <h2 className='text-sm text-[var(--title)] uppercase'>
            Veterinarians
          </h2>
          <ul className='flex flex-col gap-y-3 pt-4'>
            <li>
              <a className='text-[var(--sub-title)]' href='#'>
                Explore IndeVets
              </a>
            </li>
            <li>
              <a className='text-[var(--sub-title)]' href='#'>
                Become an IndeVet
              </a>
            </li>
            <li>
              <a className='text-[var(--sub-title)]' href='#'>
                FAQs for Veterinarians
              </a>
            </li>
          </ul>
        </div>
        <div flex w-full flex-col justify-start>
          <h2 className='text-sm text-[var(--title)] uppercase'>Hospitals</h2>
          <ul className='flex flex-col gap-y-3 pt-4'>
            <li>
              <a className='text-[var(--sub-title)]' href='#'>
                Partnering with IndeVets
              </a>
            </li>
            <li>
              <a className='text-[var(--sub-title)]' href='#'>
                Become a Partner
              </a>
            </li>
            <li>
              <a className='text-[var(--sub-title)]' href='#'>
                Frequently Asked Questions
              </a>
            </li>
          </ul>
        </div>
        <div>
          <img className=' w-52 h-52' src={dog} alt='dog and girl' />
        </div>
        <div flex w-full flex-col justify-start>
          <h2 className='text-sm text-[var(--title)] uppercase'>Find Us</h2>
          <ul className='flex flex-col gap-y-3 pt-4'>
            <li>
              <p>
                990 Spring Garden Street <br /> Suite 402 <br />
                Philadelphia, PA 19123
              </p>
            </li>
            <li>
              <p>
                (833) IndeVets <br /> (833) 463-3838
              </p>
            </li>
          </ul>
        </div>
      </div>

      <span>&copy; Indevets 2024</span>
    </footer>
  );
};
export default Footer;
