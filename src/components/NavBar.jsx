import { useState } from 'react';
import logo from "../assets/logo.png"
function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  // Navigation items with paths
  const navigation = [
    { title: 'Home', path: '/' },
    { title: 'About', path: '/about' },
    { title: 'E-service', path: '/e-service' },
    { title: 'Administration', path: '/administration' },
    { title: 'Gallery', path: '/gallery' },
  ];

  return (

    <div className='p-4 md:p-8'>
    <nav className="bg-white w-full border-b md:border-0 md:relative p-2 rounded-3xl shadow-md ">
      <div className="items-center max-w-[1290px] justify-between mx-auto md:flex px-5 sticky top-0   ">
        {/* Logo and Toggle Button */}
        <div className="flex items-center justify-between md:block">
          <a href="#">
            <img
              src={logo}
              width={50}
              height={30}
              alt="sheger city logo"
            />
          </a>

          <div className="md:hidden">
            <button
              className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Navigation Links */}
        <div className={` pb-3 mt-8 md:block md:pb-0 md:mt-0 ${isOpen ? 'block' : 'hidden'}`}>
          <ul className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
            {navigation.map((item, idx) => (
              <li key={idx} className="text-gray-600 hover:text-indigo-600">
                <a href={item.path}>{item.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>

    </div>

  );
}

export default NavBar;
