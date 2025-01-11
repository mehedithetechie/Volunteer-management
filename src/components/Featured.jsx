import featured  from '../assets/featured.jpg'

const Featured = () => {
  return (
    <div className='md:w-10/12 w-11/12 xl:w-8/12 mx-auto mt-24'>
      <h2 className='font-bold text-3xl ml-4 md:ml-0  mb-8 xl:mb-5 text-center xl:text-left'>Our featured project</h2>
      <div className='flex flex-col xl:flex-row  justify-center items-center gap-10  '>
        
        <div className='xl:w-6/12 w-11/12 mx-auto'>
          <img className='w-[2000px]' src={featured} alt="" />
        </div>
        <div className='xl:w-6/12 w-11/12 ml-4 md:ml-0'>
          <h2 className='font-bold text-3xl mb-4'>Help to for a better education in India</h2>
          <p className='font-normal text-sm leading-7'>Improving education in India requires a comprehensive approach to enhance both the quality and accessibility of learning. One of the primary areas of focus is the quality of education itself, which can be improved by updating curriculums, adopting modern teaching methods, and incorporating technology into classrooms. By integrating digital tools such as smartboards and online platforms, education can become more engaging and accessible, 
            Teacher training also plays a crucial role in shaping the educational experience. Teachers need regular professional development to stay updated with new teaching methods and technological advancements. By improving teacher quality and emphasizing student-centered learning, education can become more interactive and impactful. Alongside this, ensuring access to education in rural and remote areas is essential. Expanding educational infrastructure, providing reliable internet, and establishing transport networks can bridge the educational gap between urban and rural regions, ensuring equal opportunities for all students. ensuring access to education in rural and remote areas is essential. Expanding educational infrastructure, providing reliable internet, and establishing transport networks can bridge the educational gap between urban and rural regions, ensuring equal opportunities for all students.</p>
          <div className='text-center'> <button className='btn bg-red-600 px-10 rounded-none my-4 text-white'>Donate</button></div>
        </div>
      </div>
   </div>
  );
};

export default Featured;