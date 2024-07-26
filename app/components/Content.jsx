import React from 'react'

const Content = () => {
  return (
    <div className='text-black'>
    <div className='px-[5%] flex flex-col'>
        <h1 className='text-2xl font-bold text-blue-900'>Relation and Functions (Mathematics)</h1>
        <div className='flex text-gray-500 space-x-8 mt-10 font-semibold justify-center text-[18px]'>
            <span className='text-blue-900 text-center'>Study
            <hr className='border-2 border-blue-900 w-20' /></span>
            <span>Quiz</span>
            <span>Test</span>
            <span>Game</span> 
            <span>Others</span>
        </div>
        <div className='flex justify-center'>
  <div className="flex-1 mt-5 flex-col text-center"> 
  <div className='bg-gradient-to-bl from-[#051A91]  to-[#2284F1] to-[#1F80EB] h-[393.19px] w-[712px] mx-auto p-[3%] rounded-[50px]' >
    <div className="flex flex-col ">
   <div className='flex justify-between'>
   
<img src="/images/Vector (5).png" alt="Vector (5)" />
{/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-white">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
</svg> */}
<img src="/images/Vector (6).png" alt="Vector (6)" />
   </div>
   <div className="text flex justify-center items-center">
        <h1 className='text-white text-4xl my-[15%]'>9+6+7x-2x-3</h1>
   </div>

    </div>
</div>


    <div className='flex mt-7 items-center space-x-40'>

   <img src="/images/Vector (1).png" alt="" className='h-7 w-7 font-semibold ml-[27%]' />

    
    
     <div className='flex space-x-4 items-center'>
  
<img src="/images/Vector (3).png" alt="Vector (3)" />
<span className='font-bold text-black'>01/10</span>
<img src="/images/Vector (4).png" alt="" />
     </div>
     <img src="/images/Vector.png" alt="" className='w-7 h-7'/>
    </div>
  </div>
    </div>
    </div>
    <div className="flex px-[5%] mt-[5%] justify-between">
        <div className=" flex items-center ">
            <img src="/images/Frame 41.png" alt="Frame 41" />
        </div>
        <div className="hyggex flex items-center gap-2">
        <img src="/images/Vector (2).png" alt="Vector (2)" />

            <h1 className='text-blue-900 text-2xl font-bold'>Create Flashcard</h1>
        </div>
    </div>

    {/* FAQ */}
    <div className="flex flex-col gap-7 mt-[7%] px-[7%] w-2/3 font-semibold mb-[5%]">
    <h1 className='text-transparent bg-gradient-to-b from-blue-950 to-blue-500 bg-clip-text text-5xl font-bold pb-3'>FAQ</h1>

    <p className='border border-blue-500 p-4 rounded-lg flex justify-between pr-5'>Can education flashcards be used for all age groups?
    <img src="/images/Vector (7).png" alt="Vector (7)" className='w-5 h-4' />

    </p>
    <p className='border border-blue-500 p-4 rounded-lg flex justify-between pr-5'>How do education flashcards work?
    <img src="/images/Vector (7).png" alt="Vector (7)" className='w-5 h-4'/>
    </p>
    <p className='border border-blue-500 p-4 rounded-lg flex justify-between pr-5'>Can education flashcards be used for test preparation?
    <img src="/images/Vector (7).png" alt="Vector (7)" className='w-5 h-4'/>
    </p>

    </div>
    </div>
  )
}

export default Content