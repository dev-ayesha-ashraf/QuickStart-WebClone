import React from 'react';
const ClientsSection = () => {
  const clients = [
    '/client-1.png',
    '/client-2.png',
    '/client-3.png',
    '/client-4.png',
    '/client-5.png',
    '/client-6.png',
  ];

  return (
    <section id="clients" className="clients section">
      <div className="container mx-auto px-4" data-aos="fade-up">
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4">
          {clients.map((client, index) => (
            <div key={index} className="client-logo">
              <img src={client} className="img-fluid" alt={`Client ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
