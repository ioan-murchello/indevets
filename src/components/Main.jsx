import Header from './Header';
import cat from '../assets/cat_animal.svg';
import VisitCards from './VisitCards';

const Main = () => {
  return (
    <main className='bg-[var(--main-bg)]'>
      <div className='container mx-auto pt-9'>
        <Header />
        <section className='container mx-auto grid sm:grid-cols-2 gap-y-5 px-4 sm:px-24 pt-32'>
          <div className='flex flex-col span-2 gap-y-20'>
            <h1 className='text-5xl text-right sm:text-left sm:text-[85px] text-green-400'>
              Veterinary staffing <br /> done right.
            </h1>
            <p className='max-w-[460px] text-white text-xl'>
              IndeVets is on a mission to make veterinary medicine better. We
              unite the nation’s top veterinarians and animal hospitals to
              deliver what matters most in animal care –– happy, healthy doctors
              performing at their best.
            </p>
          </div>
          <img className='w-full h-full relative block -top-8' src={cat} alt='cat' />
        </section>
      </div>
      <VisitCards/>
    </main>
  );
};
export default Main;
