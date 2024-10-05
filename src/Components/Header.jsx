import React, { useState, useEffect } from 'react';
import logo from '/logo.png';

const Header = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDeepDropdownOpen, setIsDeepDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  const handleDropdownClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
    setIsDeepDropdownOpen(false);
  };

  const handleDeepDropdownClick = (event) => {
    event.stopPropagation();
    setIsDeepDropdownOpen(!isDeepDropdownOpen);
  };

  const closeDropdowns = () => {
    setIsDropdownOpen(false);
    setIsDeepDropdownOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      id="header"
      className={`pt-[20px] pb-[20px] header flex items-center fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}
    >
      <div className="w-full container-fluid xl:container relative flex items-center m-auto justify-around mx-[65px]">
        <a href="index.html" className="logo flex items-center mr-auto">
          <img src={logo} className="ml-[8px] h-[36px]" alt="Logo" />
          <h1 className="font-nunito sitename text-3xl font-bold ml-2 text-[#3d4348]">QuickStart</h1>
        </a>
        <div className='flex'>
          <nav id="navmenu" className={`navmenu hidden lg:flex ${isNavVisible ? 'flex' : 'hidden'}`}>
            <ul className="flex justify-center align-center text-center">
            <li className="cursor-pointer">
                  <a href="#hero" className="text-[#313336] py-[10px] px-[20px] font-normal text-[17px] hover:text-[#388da8]">
                    Home
                  </a>
                </li>
                <li className="hover:text-[#388da8] cursor-pointer">
                  <a href="#about" className="hover:text-[#388da8] text-[#313336] py-[10px] px-[20px] font-normal text-[17px] hover:text-[#388da8]">
                    About
                  </a>
                </li>
                <li className="cursor-pointer">
                  <a href="#features" className="text-[#313336] py-[10px] px-[20px] font-normal text-[17px] hover:text-[#388da8]">
                    Features
                  </a>
                </li>
                <li className="cursor-pointer">
                  <a href="#services" className="text-[#313336] py-[10px] px-[20px] font-normal text-[17px] hover:text-[#388da8]">
                    Services
                  </a>
                </li>
                <li className="cursor-pointer">
                  <a href="#pricing" className="text-[#313336] py-[10px] px-[20px] font-normal text-[17px] hover:text-[#388da8]">
                    Pricing
                  </a>
                </li>
              
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
                          <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 hover:text-[#388da8]" onClick={closeDropdowns}>
                              Deep Dropdown 1
                            </a>
                          </li>
                          <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 hover:text-[#388da8]" onClick={closeDropdowns}>
                              Deep Dropdown 2
                            </a>
                          </li>    <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 hover:text-[#388da8]" onClick={closeDropdowns}>
                              Deep Dropdown 3
                            </a>
                          </li>    <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 hover:text-[#388da8]" onClick={closeDropdowns}>
                              Deep Dropdown 4
                            </a>
                          </li>
                        </ul>
                      )}
 <li>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100 hover:text-[#388da8]" onClick={closeDropdowns}>
                        Dropdown 3
                      </a>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100 hover:text-[#388da8]" onClick={closeDropdowns}>
                        Dropdown 4
                      </a>
                    </li>
                    </li>
                    
        
                  </ul>
                )}
              </li>
              <li className="cursor-pointer">
                  <a href="#contact" className="text-[#313336] py-[10px] px-[20px] font-normal text-[17px] hover:text-[#388da8]">
                    Contact
                  </a>
                </li>
            </ul>
          </nav>

          <div>
            <button className="mr-3.5 bg-[#388da8] text-white ml-3.5 px-[25px] py-[8px] rounded-[50px] text-sm hover:bg-[#4ea2bc]">
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
                <li className="hover:text-[#388da8] cursor-pointer">
                  <a href="#hero" className="text-primary py-[10px] px-[20px] font-medium text-[17px]">
                    Home
                  </a>
                </li>
                <li className="hover:text-[#388da8] cursor-pointer">
                  <a href="#about" className="text-primary py-[10px] px-[20px] font-medium text-[17px]">
                    About
                  </a>
                </li>
                <li className="hover:text-[#388da8] cursor-pointer">
                  <a href="#features" className="text-primary py-[10px] px-[20px] font-medium text-[17px]">
                    Features
                  </a>
                </li>
                <li className="hover:text-[#388da8] cursor-pointer">
                  <a href="#services" className="text-primary py-[10px] px-[20px] font-medium text-[17px]">
                    Services
                  </a>
                </li>
                <li className="hover:text-[#388da8] cursor-pointer">
                  <a href="#pricing" className="text-primary py-[10px] px-[20px] font-medium text-[17px]">
                    Pricing
                  </a>
                </li>
                
                <li className="hover:text-[#388da8] cursor-pointer">
                  <a href="#contact" className="text-primary py-[10px] px-[20px] font-medium text-[17px]">
                    Contact
                  </a>
                </li>
                {/* Mobile Dropdown */}
                <li className="relative hover:text-[#388da8] cursor-pointer">
                  <a
                    href="#"
                    className="text-primary py-[10px] px-[20px] font-medium text-[17px] flex items-center"
                    onClick={handleDropdownClick}
                  >
                    Dropdown <i className="bi bi-chevron-down ml-1"></i>
                  </a>
                  {isDropdownOpen && (
                    <ul className="absolute left-0 top-full dropdownUl shadow-lg py-2 space-y-1 w-full overflow-y-auto max-h-40">
                      <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 hover:text-[#388da8]" onClick={closeDropdowns}>
                          Dropdown 1
                        </a>
                      </li>
                      <li className="relative group">
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 flex items-center hover:text-[#388da8]"
                          onClick={handleDeepDropdownClick}
                        >
                          Deep Dropdown <i className="bi bi-chevron-down ml-1"></i>
                        </a>
                        {isDeepDropdownOpen && (
                          <ul className="deepDropdown absolute left-0 top-full bg-gray-200 shadow-lg py-2 space-y-1 w-full overflow-y-auto max-h-40">
                            <li>
                              <a href="#" className="block px-4 py-2 hover:bg-gray-300 hover:text-[#388da8]" onClick={closeDropdowns}>
                                Deep Dropdown 1
                              </a>
                            </li>
                            <li>
                              <a href="#" className="block px-4 py-2 hover:bg-gray-300 hover:text-[#388da8]" onClick={closeDropdowns}>
                                Deep Dropdown 2
                              </a>
                            </li> <li>
                              <a href="#" className="block px-4 py-2 hover:bg-gray-300 hover:text-[#388da8]" onClick={closeDropdowns}>
                                Deep Dropdown 3
                              </a>
                            </li> <li>
                              <a href="#" className="block px-4 py-2 hover:bg-gray-300 hover:text-[#388da8]" onClick={closeDropdowns}>
                                Deep Dropdown 4
                              </a>
                            </li>
                          </ul>
                        )}
                      </li>
                      <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 hover:text-[#388da8]" onClick={closeDropdowns}>
                          Dropdown 2
                        </a>
                      </li>
                      <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 hover:text-[#388da8]" onClick={closeDropdowns}>
                          Dropdown 3
                        </a>
                      </li>
                      <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 hover:text-[#388da8]" onClick={closeDropdowns}>
                          Dropdown 4
                        </a>
                      </li>
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
