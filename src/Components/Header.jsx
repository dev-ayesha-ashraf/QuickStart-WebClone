import React, { useState } from 'react';
import logo from '/logo.png';

const Header = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDeepDropdownOpen, setIsDeepDropdownOpen] = useState(false);

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  const handleDropdownClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
    setIsDeepDropdownOpen(false); // Close deep dropdown when main dropdown is toggled
  };

  const handleDeepDropdownClick = (event) => {
    event.stopPropagation(); // Prevent event from bubbling up to the parent
    setIsDeepDropdownOpen(!isDeepDropdownOpen);
  };

  const closeDropdowns = () => {
    setIsDropdownOpen(false);
    setIsDeepDropdownOpen(false);
  };

  return (
    <header id="header" className="py-8 header flex items-center fixed top-0 w-full z-50 bg-white shadow">
      <div className="w-full container-fluid xl:container relative flex items-center justify-around">
        <a href="index.html" className="logo flex items-center">
          <img src={logo} className='ml-[8px] h-[36px]' alt="Logo" />
          <h1 className="font-nunito sitename text-3xl font-bold ml-2 text-[#3d4348]">QuickStart</h1>
        </a>

        <nav id="navmenu" className={`navmenu hidden lg:flex ${isNavVisible ? 'flex' : 'hidden'}`}>
          <ul className="flex space-x-6">
            <li>
              <a href="#hero" className="active text-primary hover:text-[#388da8]">Home</a>
            </li>
            <li>
              <a href="#about" className="text-gray-700 hover:text-primary hover:text-[#388da8]">About</a>
            </li>
            <li>
              <a href="#features" className="text-gray-700 hover:text-primary hover:text-[#388da8]">Features</a>
            </li>
            <li>
              <a href="#services" className="text-gray-700 hover:text-primary hover:text-[#388da8]">Services</a>
            </li>
            <li>
              <a href="#pricing" className="text-gray-700 hover:text-primary hover:text-[#388da8]">Pricing</a>
            </li>
            <li className="relative group">
              <a href="#" className="text-gray-700 hover:text-primary flex items-center" onClick={handleDropdownClick}>
                Dropdown <i className="bi bi-chevron-down ml-1"></i>
              </a>
              {isDropdownOpen && (
                <ul className="absolute left-0 top-full bg-white shadow-lg py-2 space-y-1 w-[200px]">
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 hover:text-[#388da8]" onClick={closeDropdowns}>Dropdown 1</a>
                  </li>
                  <li className="relative group">
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 flex items-center hover:text-[#388da8]" onClick={handleDeepDropdownClick}>
                      Deep Dropdown <i className="bi bi-chevron-down ml-1"></i>
                    </a>
                    {isDeepDropdownOpen && (
                      <ul className="absolute left-full top-0 bg-white shadow-lg py-2 space-y-1 w-[200px]">
                        <li><a href="#" className="block px-4 py-2 hover:bg-gray-100 hover:text-[#388da8]" onClick={closeDropdowns}>Deep Dropdown 1</a></li>
                        <li><a href="#" className="block px-4 py-2 hover:bg-gray-100 hover:text-[#388da8]" onClick={closeDropdowns}>Deep Dropdown 2</a></li>
                        <li><a href="#" className="block px-4 py-2 hover:bg-gray-100 hover:text-[#388da8]" onClick={closeDropdowns}>Deep Dropdown 3</a></li>
                        <li><a href="#" className="block px-4 py-2 hover:bg-gray-100 hover:text-[#388da8]" onClick={closeDropdowns}>Deep Dropdown 4</a></li>
                        <li><a href="#" className="block px-4 py-2 hover:bg-gray-100 hover:text-[#388da8]" onClick={closeDropdowns}>Deep Dropdown 5</a></li>
                      </ul>
                    )}
                  </li>
                  <li><a href="#" className="block px-4 py-2 hover:bg-gray-100 hover:text-[#388da8]" onClick={closeDropdowns}>Dropdown 2</a></li>
                  <li><a href="#" className="block px-4 py-2 hover:bg-gray-100 hover:text-[#388da8]" onClick={closeDropdowns}>Dropdown 3</a></li>
                  <li><a href="#" className="block px-4 py-2 hover:bg-gray-100 hover:text-[#388da8]" onClick={closeDropdowns}>Dropdown 4</a></li>
                </ul>
              )}
            </li>
            <li>
              <a href="#contact" className="text-gray-700 hover:text-primary hover:text-[#388da8]">Contact</a>
            </li>
          </ul>
        </nav>

        <div>
          <button className='bg-[#388da8] text-white mr-3.5 px-[25px] py-[8px] rounded-[50px] text-sm hover:bg-[#4ea2bc]'>Get Started</button>
        </div>

        <i onClick={toggleNav} className="mobile-nav-toggle d-xl-none bi bi-list lg:hidden cursor-pointer"></i>

        {isNavVisible && (
          <div className="mobile-nav-popup fixed top-0 left-0 w-full h-full bg-gray-500 z-40 flex flex-col">
            <button onClick={toggleNav} className="self-end m-4 text-3xl text-white mt-[15px] mr-[45px]">x</button>
            <nav className="flex flex-col">
              <ul className="space-y-4 bg-white h-[85vh] w-[90vw] m-auto flex flex-col py-[10px] rounded-md">
                <li><a href="#hero" className="text-primary py-[10px] px-[20px] font-medium text-[17px]">Home</a></li>
                <li><a href="#about" className="text-gray-700 hover:text-primary py-[10px] px-[20px] font-medium text-[17px]">About</a></li>
                <li><a href="#features" className="text-gray-700 hover:text-primary py-[10px] px-[20px] font-medium text-[17px]">Features</a></li>
                <li><a href="#services" className="text-gray-700 hover:text-primary py-[10px] px-[20px] font-medium text-[17px]">Services</a></li>
                <li><a href="#pricing" className="text-gray-700 hover:text-primary py-[10px] px-[20px] font-medium text-[17px]" >Pricing</a></li>

                {/* Mobile Dropdown */}
                <li className="relative">
                  <a href="#" className="text-gray-700 hover:text-primary flex py-[10px] px-[20px]" onClick={handleDropdownClick}>
                    Dropdown <i className="bi bi-chevron-down ml-1"></i>
                  </a>
                  {isDropdownOpen && (
                    <ul className="absolute left-0 top-full bg-white shadow-lg py-2 space-y-1 w-[200px] ">
                      <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 hover:text-[#388da8]" onClick={closeDropdowns}>Dropdown 1</a>
                      </li>
                      <li className="relative group">
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 flex items-center hover:text-[#388da8]" onClick={handleDeepDropdownClick}>
                          Deep Dropdown <i className="bi bi-chevron-down ml-1"></i>
                        </a>
                        {isDeepDropdownOpen && (
                          <ul className="absolute left-full top-0 bg-white shadow-lg py-2 space-y-1 w-[200px]">
                            <li><a href="#" className="block px-4 py-2 hover:bg-gray-100 hover:text-[#388da8]" onClick={closeDropdowns}>Deep Dropdown 1</a></li>
                            <li><a href="#" className="block px-4 py-2 hover:bg-gray-100 hover:text-[#388da8]" onClick={closeDropdowns}>Deep Dropdown 2</a></li>
                            <li><a href="#" className="block px-4 py-2 hover:bg-gray-100 hover:text-[#388da8]" onClick={closeDropdowns}>Deep Dropdown 3</a></li>
                            <li><a href="#" className="block px-4 py-2 hover:bg-gray-100 hover:text-[#388da8]" onClick={closeDropdowns}>Deep Dropdown 4</a></li>
                            <li><a href="#" className="block px-4 py-2 hover:bg-gray-100 hover:text-[#388da8]" onClick={closeDropdowns}>Deep Dropdown 5</a></li>
                          </ul>
                        )}
                      </li>
                      <li><a href="#" className="block px-4 py-2 hover:bg-gray-100 hover:text-[#388da8]" onClick={closeDropdowns}>Dropdown 2</a></li>
                      <li><a href="#" className="block px-4 py-2 hover:bg-gray-100 hover:text-[#388da8]" onClick={closeDropdowns}>Dropdown 3</a></li>
                      <li><a href="#" className="block px-4 py-2 hover:bg-gray-100 hover:text-[#388da8]" onClick={closeDropdowns}>Dropdown 4</a></li>
                    </ul>
                  )}
                </li>

                <li><a href="#contact" className="text-gray-700 hover:text-primary py-[10px] px-[20px]">Contact</a></li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
