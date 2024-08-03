import nature from '../assets/undraw_nature.svg'
import walking from '../assets/undraw_walking.svg'
import result from '../assets/undraw_adventure.svg'

const HowItWorks = () => {
  return (
    <section className='container mx-auto flex gap-y-7 justify-center items-center flex-col py-36 sm:pt-64 px-4 sm:px-24'>
      <span className='text-xl sm:text-2xl text-[var(--sub-title)]'>
        Let's start at the beginning
      </span>
      <h3 className='text-3xl sm:text-5xl text-[var(--title)]'>How IndeVets Works</h3>

      <div className='flex flex-col md:flsm:ex-row gap-y-9 gap-x-9 justify-between items-center mt-12 sm:mt-40'>
        <img className='w-64 h-64 sm:w-80 sm:h-80' src={nature} alt='nature' />
        <div className='flex flex-col gap-y-4'>
          <span className='text-xl text-[#798B56]'>Step one...</span>
          <h3 className='text-4xl font-bold leading-[3.25rem] text-[var(--title-works)]'>
            We hire great vets.
          </h3>
          <p className='text-[#284854] max-w-[525px]'>
            Not just any doctor can become an IndeVet. We thoroughly vet and
            hire only the best, highly qualified doctors. They become a part of
            our team, earn market-leading pay and benefits, and gain the freedom
            to choose when and where they work.
          </p>
        </div>
      </div>

      <div className='flex flex-col-reverse  md:flex-row-reverse gap-y-9 gap-x-9 items-center mt-10'>
        <img className='w-64 h-64 sm:w-80 sm:h-80' src={walking} alt='nature' />
        <div className='flex flex-col gap-y-4'>
          <span className='text-xl text-[#798B56]'>Next...</span>
          <h3 className='text-4xl font-bold leading-[3.25rem] text-[var(--title-works)]'>
            We partner with the best <br /> workplaces.
          </h3>
          <p className='text-[#284854] max-w-[525px]'>
            We’ve built partnerships with more than 800 forward-thinking,
            best-in-class hospitals. We expect a lot from our vets, so the same
            applies to our hospitals. We partner with hospitals that not only
            have high medical standards, but also have a commitment to
            maintaining a healthy workplace for staff and patients.
          </p>
        </div>
      </div>

      <div className='flex flex-col md:flex-row gap-y-9 gap-x-9 items-center mt-10'>
        <img className='w-64 h-64 sm:w-80 sm:h-80' src={result} alt='nature' />
        <div className='flex flex-col gap-y-4'>
          <span className='text-xl text-[#798B56]'>The result?</span>
          <h3 className='text-4xl font-bold leading-[3.25rem] text-[var(--title-works)]'>
            Happy vets. Happy <br /> hospitals. Better medicine.
          </h3>
          <p className='text-[#284854] max-w-[525px]'>
            When doctors are in control of their schedules, they’re happier.
            Same goes for hospital teams who can breathe easier about their
            staffing. Together, our doctors and hospital partners are making the
            world of veterinary medicine a better, happier place.
          </p>
        </div>
      </div>
    </section>
  );
}
export default HowItWorks