import React, { useState, useEffect } from 'react';
import logo from '/logo.png';

const Header = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDeepDropdownOpen, setIsDeepDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleNav = () => setIsNavVisible(prev => !prev);
  const handleDropdownClick = () => {
    setIsDropdownOpen(prev => !prev);
    setIsDeepDropdownOpen(false);
  };

  const handleDeepDropdownClick = (event) => {
    event.stopPropagation();
    setIsDeepDropdownOpen(prev => !prev);
  };

  const closeDropdowns = () => {
    setIsDropdownOpen(false);
    setIsDeepDropdownOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      id="header"
      className={`pt-5 pb-5 flex items-center fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'} lg:justify-center` }
    >
      <div className="w-full container-fluid xl:container relative flex items-center m-auto justify-around mx-16 sm:mx-0 lg:w-[87vw]">
        <a href="index.html" className="logo flex items-center mr-auto">
          <img src={logo} className="ml-2 h-9" alt="Logo" />
          <h1 className="font-nunito sitename text-3xl font-bold ml-2 text-[#3d4348]">QuickStart</h1>
        </a>
        <div className='flex'>
          <nav id="navmenu" className={`navmenu hidden lg:flex ${isNavVisible ? 'flex' : 'hidden'}`}>
            <ul className="flex justify-center align-center text-center">
              {['Home', 'About', 'Features', 'Services', 'Pricing', 'Contact'].map(item => (
                <li key={item} className="cursor-pointer">
                  <a href={`#${item.toLowerCase()}`} className="text-[#313336] py-2 px-5 font-normal text-[17px] hover:text-[#388da8]">
                    {item}
                  </a>
                </li>
              ))}
              <li className="relative group">
                <a href="#" className="text-gray-700 hover:text-[#388da8] flex items-center" onClick={handleDropdownClick}>
                  Dropdown <i className="bi bi-chevron-down ml-1"></i>
                </a>
                {isDropdownOpen && (
                  <ul className="absolute left-0 top-full bg-white shadow-lg py-2 space-y-1 w-[200px]">
                    <li>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100 hover:text-[#388da8]" onClick={closeDropdowns}>
                        Dropdown 1
                      </a>
                    </li>
                    <li className="relative group">
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100 flex items-center hover:text-[#388da8]" onClick={handleDeepDropdownClick}>
                        Deep Dropdown <i className="bi bi-chevron-down ml-1"></i>
                      </a>
                      {isDeepDropdownOpen && (
                        <ul className="absolute left-full top-0 bg-white shadow-lg py-2 space-y-1 w-full max-h-40 overflow-y-auto">
                          {['Deep Dropdown 1', 'Deep Dropdown 2', 'Deep Dropdown 3', 'Deep Dropdown 4'].map(subItem => (
                            <li key={subItem}>
                              <a href="#" className="block px-4 py-2 hover:bg-gray-100 hover:text-[#388da8]" onClick={closeDropdowns}>
                                {subItem}
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                    {['Dropdown 2', 'Dropdown 3', 'Dropdown 4'].map(subItem => (
                      <li key={subItem}>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 hover:text-[#388da8]" onClick={closeDropdowns}>
                          {subItem}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            </ul>
          </nav>

          <div>
            <button className="mr-3.5 bg-[#388da8] text-white ml-3.5 px-6 py-2 rounded-[50px] text-sm hover:bg-[#4ea2bc]">
              Get Started
            </button>
          </div>
        </div>

        <i onClick={toggleNav} className="mobile-nav-toggle d-xl-none bi bi-list lg:hidden cursor-pointer text-[28px]"></i>

        {isNavVisible && (
          <div className="mobile-nav-popup fixed top-0 left-0 w-full h-full bg-gray-500 z-40 flex flex-col overflow-x-hidden">
            <button onClick={toggleNav} className="self-end m-4 text-3xl text-white mt-[15px] mr-[45px]">
              x
            </button>
            <nav className="flex flex-col">
              <ul className="space-y-4 bg-white h-[85vh] w-[90vw] m-auto flex flex-col py-[10px] rounded-md overflow-y-auto">
                {['hero', 'About', 'Features', 'Services', 'Pricing', 'Contact'].map(item => (
                  <li key={item} className="hover:text-[#388da8] cursor-pointer">
                    <a href={`#${item.toLowerCase()}`} className="text-primary py-2 px-5 font-medium text-[17px]">
                      {item}
                    </a>
                  </li>
                ))}
                {/* Mobile Dropdown */}
                <li className="relative hover:text-[#388da8] cursor-pointer">
                  <a
                    href="#"
                    className="text-primary py-2 px-5 font-medium text-[17px] flex items-center"
                    onClick={handleDropdownClick}
                  >
                    Dropdown <i className="bi bi-chevron-down ml-1"></i>
                  </a>
                  {isDropdownOpen && (
                    <ul className="absolute left-0 top-full dropdownUl shadow-lg py-2 space-y-1 w-full overflow-y-auto max-h-40">
                      {['Dropdown 1', 'Dropdown 2', 'Dropdown 3'].map(subItem => (
                        <li key={subItem}>
                          <a href="#" className="block px-4 py-2 hover:bg-gray-100 hover:text-[#388da8]" onClick={closeDropdowns}>
                            {subItem}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
