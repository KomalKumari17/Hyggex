import React from 'react';

const Header = () => {
  return (
    <header className="text-gray-800 bg-white py-4 px-[5%]">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src="/images/Component 40.png" alt="Logo" className="h-8" />
          
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
      
<img src="/images/Vector (8).png" alt="Vector (8)" />
<img src="/images/Frame.png" alt="Frame" />


<span className='text-gray-600'>Flashcard</span>
<img src="/images/Frame.png" alt="Frame" />
<span className='text-gray-600'>Mathematics</span>
<img src="/images/Frame.png" alt="Frame" />
<span className='text-blue-900 font-semibold'>Relation and Function</span>


      </div>
    </header>
  );
};

export default Header;
