import meeteng from '../assets/conversation.svg';

const Mision = () => {
  return (
    <section className='py-16 bg-[var(--bg-gray)]'>
      <div className='container mx-auto flex flex-col gap-y-12 md:flex-row justify-between items-center gap-x-6 px-4 sm:px-24'>
        <img
          className='w-64 h-64 sm:w-[350px] sm:h-[350px]'
          src={meeteng}
          alt='conversation'
        />
        <div className='flex flex-col gap-y-5'>
          <h5 className='text-2xl text-[var(--sub-title)]'>Who We Are</h5>
          <h3 className=' text-3xl sm:text-[55px] leading-[50px] font-bold text-[var(--title)]'>
            Our Mission
          </h3>

          <p className='max-w-[600px]'>
            Our team is united by a mission to make veterinary medicine better.
            We’ve been through the long rotations, the office drama, and the
            last-minute schedule changes. It drove the joy out of our jobs and,
            more importantly, out of our lives. So we took it upon ourselves to
            make a change.
          </p>
          <button className='border max-w-[200px] border-[var(--sub-title)] mt-8 p-3 text-[var(--sub-title)]'>
            Why IndeWets ?
          </button>
        </div>
      </div>
    </section>
  );
};
export default Mision;
