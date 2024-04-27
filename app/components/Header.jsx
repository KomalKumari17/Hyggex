import React from 'react';

const Header = () => {
  return (
    <header className="text-gray-800 bg-white py-4 px-[5%]">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src="/images/hyggex.png" alt="Logo" className="h-8" />
          
        </div>
        <nav className="ml-4">
            <ul className="flex space-x-4 items-center">
              <li><a href="#" className="hover:text-blue-300">Home</a></li>
              <li><a href="#" className="hover:text-blue-300">Flashcard</a></li>
              <li><a href="#" className="hover:text-blue-300">Contact</a></li>
              <li><a href="#" className="hover:text-blue-300">FAQ</a></li>
              <button className="bg-gradient-to-br from-blue-950 to-blue-800  text-white px-8 py-2 rounded-full">Login</button>
            </ul>
          </nav>
       
      </div>
      <div className="flex py-[4%]">
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.0" stroke="currentColor" class="w-6 h-6 text-gray-500">
  <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
</svg>

<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3.0" stroke="currentColor" className="w-5 h-5  pt-1 text-blue-900">
  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>
<span className='text-gray-600'>Flashcard</span>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3.0" stroke="currentColor" className="w-5 h-5  pt-1 text-blue-900">
  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>
<span className='text-gray-600'>Mathematics</span>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3.0" stroke="currentColor" className="w-5 h-5  pt-1 text-blue-900">
  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>
<span className='text-blue-900 font-semibold'>Relation and Function</span>


      </div>
    </header>
  );
};

export default Header;
