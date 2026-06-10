import ServicesGrid from '@/components/ServicesGrid';

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <ServicesGrid />
      </div>
    </section>
  );
};

export default Services;
