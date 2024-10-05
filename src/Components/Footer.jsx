import React from 'react';

const Footer = () => {
  return (
    <footer id="footer" className="footer bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full lg:w-1/3 px-4 mb-8">
            <a href="index.html" className="logo flex items-center mb-4">
              <span className="sitename text-2xl font-bold text-gray-800">QuickStart</span>
            </a>
            <div className="footer-contact">
              <p>A108 Adam Street</p>
              <p>New York, NY 535022</p>
              <p className="mt-3"><strong>Phone:</strong> <span>+1 5589 55488 55</span></p>
              <p><strong>Email:</strong> <span>info@example.com</span></p>
            </div>
            <div className="social-links flex mt-4 space-x-4">
              <a href="#" className="text-gray-600 hover:text-gray-900"><i className="bi bi-twitter-x"></i></a>
              <a href="#" className="text-gray-600 hover:text-gray-900"><i className="bi bi-facebook"></i></a>
              <a href="#" className="text-gray-600 hover:text-gray-900"><i className="bi bi-instagram"></i></a>
              <a href="#" className="text-gray-600 hover:text-gray-900"><i className="bi bi-linkedin"></i></a>
            </div>
          </div>

          <div className="w-full lg:w-1/4 px-4 mb-8">
            <h4 className="text-lg font-semibold mb-2">Useful Links</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li><a href="#" className="text-gray-600 hover:text-blue-600">Home</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600">About us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600">Services</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600">Terms of service</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600">Privacy policy</a></li>
            </ul>
          </div>

          <div className="w-full lg:w-1/4 px-4 mb-8">
            <h4 className="text-lg font-semibold mb-2">Our Services</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li><a href="#" className="text-gray-600 hover:text-blue-600">Web Design</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600">Web Development</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600">Product Management</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600">Marketing</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600">Graphic Design</a></li>
            </ul>
          </div>

          <div className="w-full lg:w-1/3 px-4 mb-8">
            <h4 className="text-lg font-semibold mb-2">Our Newsletter</h4>
            <p>Subscribe to our newsletter and receive the latest news about our products and services!</p>
            <form action="forms/newsletter.php" method="post" className="php-email-form flex flex-col mt-4">
              <div className="newsletter-form flex space-x-2">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="form-control w-full p-2 border border-gray-300 rounded"
                  required
                />
                <input
                  type="submit"
                  value="Subscribe"
                  className="p-2 bg-blue-600 text-white rounded cursor-pointer hover:bg-blue-700"
                />
              </div>
              <div className="loading">Loading...</div>
              <div className="error-message text-red-500"></div>
              <div className="sent-message text-green-500">Your subscription request has been sent. Thank you!</div>
            </form>
          </div>
        </div>
      </div>

      <div className="container mx-auto text-center mt-4 px-4">
        <p>© <span>Copyright</span> <strong className="px-1 sitename">QuickStart</strong> <span>All Rights Reserved</span></p>
        <div className="credits">
          Designed by <a href="https://bootstrapmade.com/" className="hover:text-blue-600">BootstrapMade</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
