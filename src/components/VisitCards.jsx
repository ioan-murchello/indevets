import laying_cat from '../assets/laying_cat.svg'
import gray_cat from '../assets/gra_cat.svg'

const VisitCards = () => {
  return (
    <div className='container mx-auto flex flex-col sm:flex-row relative top-16 justify-center gap-x-14 gap-y-4 px-4 '>
      <article className='flex w-full shadow-md flex-col md:flex-row justify-center items-center gap-x-4 bg-[#f2ffd7] p-7 rounded-md'>
        <img
          className='w-20 h-20 sm:w-28 sm:h-28'
          src={laying_cat}
          alt='laying-cat'
        />
        <div>
          <h2 className='text-4xl text-[var(--titles-color)] text-center'>
            Veterinarians
          </h2>
          <p className='text-xl max-w-[180px] text-[var(--sub-title)] text-center'>
            Apply to become an IndeVet
          </p>
        </div>
      </article>
      <article className='flex w-full shadow-md flex-col md:flex-row justify-center items-center gap-x-4 bg-[#f2ffd7] p-7 rounded-md'>
        <img
          className='w-20 h-20 sm:w-28 sm:h-28'
          src={gray_cat}
          alt='laying-cat'
        />
        <div>
          <h2 className='text-4xl text-[var(--titles-color)] text-center'>
            Hospitals
          </h2>
          <p className='text-xl max-w-[180px] text-[var(--sub-title)] text-center'>
            Become an IndeVets partner
          </p>
        </div>
      </article>
    </div>
  );
};
export default VisitCards;
