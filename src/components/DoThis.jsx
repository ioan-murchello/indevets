import marker from '../assets/undraw_maker.svg';

const DoThis = () => {
  return (
    <section className='bg-[var(--title-works)]'>
      <div className='container mx-auto flex flex-col md:flex-row   justify-center items-center gap-x-16 py-12 sm:py-24 px-4 sm:px-24'>
        <img className='w-64  h-64 sm:w-[350px] sm:h-[350px]' src={marker} alt='bycicle' />
        <div>
          <h2 className='text-3xl sm:text-[55px] sm:leading-[64px] text-white'>
            Sounds pretty good, <br /> right? Let’s do this.
          </h2>
          <div className='text-white mt-9 flex flex-col sm:flex-col md:flex-row gap-x-9 gap-y-6'>
            <p className='text-xl max-w-350px]'>
              I want to be an IndeVet. Take me to the application page!
            </p>
            <p className='text-xl max-w-350px]'>
              We want to be one of your awesome hospital partners.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default DoThis;
