import React from 'react';

const Footer = () => {
  return (
    <footer id="footer" className="footer bg-[#f8fbfc] py-[50px]">
      <div className="container mx-auto min-[800px]:w-[87vw] px-4">
        <div className="flex flex-wrap -mx-4 font-nunito">
          <div className="w-full md:w-1/3 lg:w-1/4 px-4 mb-8">
            <a href="index.html" className="logo flex items-center mb-4">
              <span className="sitename text-2xl font-bold text-[#313336]">QuickStart</span>
            </a>
            <div className="footer-contact pt-4 text-sm text-[#3d4348]">
              <p className='mb-[5px]'>A108 Adam Street</p>
              <p>New York, NY 535022</p>
              <p className="mt-3 mb-[5px]"><strong>Phone:</strong> <span>+1 5589 55488 55</span></p>
              <p className='mb-[5px]'><strong>Email:</strong> <span>info@example.com</span></p>
            </div>
            <div className="social-links flex mt-4 space-x-4">
              <a href="#" className="text-gray-600 hover:text-gray-900 w-10 h-10 flex text-center justify-center items-center"><i class="bi bi-twitter"></i></a>
              <a href="#" className="text-gray-600 hover:text-gray-900 w-10 h-10 flex text-center justify-center items-center"><i className="bi bi-facebook"></i></a>
              <a href="#" className="text-gray-600 hover:text-gray-900 w-10 h-10 flex text-center justify-center items-center"><i className="bi bi-instagram"></i></a>
              <a href="#" className="text-gray-600 hover:text-gray-900 w-10 h-10 flex text-center justify-center items-center"><i className="bi bi-linkedin"></i></a>
            </div>
          </div>

          <div className="footer-links w-full md:w-1/3 lg:w-1/4 px-4 mb-8">
            <h4 className="text-base font-semibold mb-2">Useful Links</h4>
            <ul className="space-y-1">
              <li className='pb-[10px] text-[#3d4348]'><a href="#" className="text-gray-600 hover:text-blue-600">Home</a></li>
              <li className='pb-[10px] text-[#3d4348]'><a href="#" className="text-gray-600 hover:text-blue-600">About us</a></li>
              <li className='pb-[10px] text-[#3d4348]'><a href="#" className="text-gray-600 hover:text-blue-600">Services</a></li>
              <li className='pb-[10px] text-[#3d4348]'><a href="#" className="text-gray-600 hover:text-blue-600">Terms of service</a></li>
              <li className='pb-[10px] text-[#3d4348]'><a href="#" className="text-gray-600 hover:text-blue-600">Privacy policy</a></li>
            </ul>
          </div>

          <div className="footer-links w-full md:w-1/3 lg:w-1/4 px-4 mb-8">
            <h4 className="text-base font-semibold mb-2">Our Services</h4>
            <ul className="space-y-1">
              <li className='pb-[10px] text-[#3d4348]'><a href="#" className="text-gray-600 hover:text-blue-600">Web Design</a></li>
              <li className='pb-[10px] text-[#3d4348]'><a href="#" className="text-gray-600 hover:text-blue-600">Web Development</a></li>
              <li className='pb-[10px] text-[#3d4348]'><a href="#" className="text-gray-600 hover:text-blue-600">Product Management</a></li>
              <li className='pb-[10px] text-[#3d4348]'><a href="#" className="text-gray-600 hover:text-blue-600">Marketing</a></li>
              <li className='pb-[10px] text-[#3d4348]'><a href="#" className="text-gray-600 hover:text-blue-600">Graphic Design</a></li>
            </ul>
          </div>

          <div className="newslettser w-full lg:w-1/4 px-4 mb-8">
            <h4 className="text-base font-semibold mb-2">Our Newsletter</h4>
            <p>Subscribe to our newsletter and receive the latest news about our products and services!</p>
            <form action="forms/newsletter.php" method="post" className="php-email-form flex flex-col mt-4">
              <div className="newsletter-form flex">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="email"
                  required
                />
                <input
                  type="submit"
                  value="Subscribe"
                  className="submit"
                />
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="copy-right container mx-auto text-center mt-4 px-4">
        <p>© <span>Copyright</span> <strong className="px-1 sitename">QuickStart</strong> <span>All Rights Reserved</span></p>
        <div className="credits">
          Designed by <a href="https://bootstrapmade.com/" className="hover:text-blue-600">BootstrapMade</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
