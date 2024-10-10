import SectionTitle from './SectionTitle'; // Importing your existing SectionTitle component

const Services = () => {
  const services = [
    {
      title: 'Nesciunt Mete',
      description: 'Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.',
      icon: 'bi bi-bar-chart-line',
      iconColor: 'text-cyan-500',
      borderColor: 'border-cyan-500',
      bgColor: '#0DCAF01A' // Add bgColor
    },
    {
      title: 'Eosle Commodi',
      description: 'Ut autem aut autem non a. Sint sint sit facilis nam iusto sint. Libero corrupti neque eum hic non ut nesciunt dolorem.',
      icon: 'bi bi-broadcast',
      iconColor: 'text-orange-500',
      borderColor: 'border-orange-500',
      bgColor: '#FD7E141A' // Add bgColor
    },
    {
      title: 'Ledo Markt',
      description: 'Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus ea aut. Vel qui id voluptas adipisci eos earum corrupti.',
      icon: 'bi bi-easel',
      iconColor: 'text-teal-500',
      borderColor: 'border-teal-500',
      bgColor: '#20C9971A' // Add bgColor
    },
    {
      title: 'Asperiores Commodi',
      description: 'Non et temporibus minus omnis sed dolor esse consequatur. Cupiditate sed error ea fuga sit provident adipisci neque.',
      icon: 'bi bi-bounding-box-circles',
      iconColor: 'text-red-500',
      borderColor: 'border-red-500',
      bgColor: '#DF15041A' // Add bgColor
    },
    {
      title: 'Velit Doloremque',
      description: 'Cumque et suscipit saepe. Est maiores autem enim facilis ut aut ipsam corporis aut. Sed animi at autem alias eius labore.',
      icon: 'bi bi-calendar4-week',
      iconColor: 'text-indigo-500',
      borderColor: 'border-indigo-500',
      bgColor: '#6610F21A' // Add bgColor
    },
    {
      title: 'Dolori Architecto',
      description: 'Hic molestias ea quibusdam eos. Fugiat enim doloremque aut neque non et debitis iure. Corrupti recusandae ducimus enim.',
      icon: 'bi bi-chat-square-text',
      iconColor: 'text-pink-500',
      borderColor: 'border-pink-500',
      bgColor: '#F3268C1A' // Add bgColor
    },
  ];

  return (
    <section id="services" className="services section bg-[#f8fbfc] py-16 m-auto">
      <div className="min-[800px]:w-[87vw] m-auto">
        {/* Section Title */}
        <div className="container mx-auto">
          <SectionTitle
            title="Services"
            description="Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit"
          />
        </div>

        {/* Services List */}
        <div className="container mx-auto mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {services.map((service, index) => (
              <div
                key={index}
                className="service-item bg-white p-6 rounded-lg border hover:shadow-lg relative flex"
                data-aos="fade-up"
                data-aos-delay={100 * (index + 1)}
              >
                <i
                  className={`${service.icon} ${service.iconColor} text-4xl mb-4 border ${service.borderColor} rounded-[10px] w-[72px] h-[72px] text-center justify-center items-center flex mr-[25px] p-2`}
                  style={{ backgroundColor: service.bgColor }} // Apply the dynamic background color
                ></i>
                <div>
                  <h3 className="text-[22px] font-bold font-nunito mb-[10px]">{service.title}</h3>
                  <p className="text-gray-400">{service.description}</p>
                  <a href="#" className="learn text-[14px] text-[#388da8] hover:underline mt-[10px]">
                    Learn More <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
