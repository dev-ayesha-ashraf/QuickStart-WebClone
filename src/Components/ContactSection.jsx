import React from 'react';

const ContactSection = () => {
  return (
    <section id="contact" className="contact section py-12 bg-gray-100">
      {/* Section Title */}
      <div className="container mx-auto text-center mb-8">
        <h2 className="text-3xl font-bold" data-aos="fade-up">Contact</h2>
        <p className="text-gray-600">Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>
      
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {/* Address Info Item */}
          <div className="info-item flex flex-col justify-center items-center p-4 bg-white rounded shadow-md" data-aos="fade-up" data-aos-delay="200">
            <i className="bi bi-geo-alt text-3xl"></i>
            <h3 className="text-xl font-semibold">Address</h3>
            <p>A108 Adam Street, New York, NY 535022</p>
          </div>

          {/* Call Us Info Item */}
          <div className="info-item flex flex-col justify-center items-center p-4 bg-white rounded shadow-md" data-aos="fade-up" data-aos-delay="300">
            <i className="bi bi-telephone text-3xl"></i>
            <h3 className="text-xl font-semibold">Call Us</h3>
            <p>+1 5589 55488 55</p>
          </div>

          {/* Email Us Info Item */}
          <div className="info-item flex flex-col justify-center items-center p-4 bg-white rounded shadow-md" data-aos="fade-up" data-aos-delay="400">
            <i className="bi bi-envelope text-3xl"></i>
            <h3 className="text-xl font-semibold">Email Us</h3>
            <p>info@example.com</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Google Maps */}
          <div className="aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48389.78314118045!2d-74.006138!3d40.710059!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1676961268712!5m2!1sen!2sus"
              frameBorder="0"
              style={{ border: 0, width: '100%', height: '400px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Contact Form */}
          <div>
            <form action="forms/contact.php" method="post" className="php-email-form" data-aos="fade-up" data-aos-delay="400">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <input type="text" name="name" className="form-control w-full p-2 border border-gray-300 rounded" placeholder="Your Name" required />
                </div>

                <div>
                  <input type="email" name="email" className="form-control w-full p-2 border border-gray-300 rounded" placeholder="Your Email" required />
                </div>

                <div className="col-span-2">
                  <input type="text" name="subject" className="form-control w-full p-2 border border-gray-300 rounded" placeholder="Subject" required />
                </div>

                <div className="col-span-2">
                  <textarea name="message" className="form-control w-full p-2 border border-gray-300 rounded" rows="6" placeholder="Message" required></textarea>
                </div>

                <div className="col-span-2 text-center">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">Your message has been sent. Thank you!</div>

                  <button type="submit" className="mt-4 px-6 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition">Send Message</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
