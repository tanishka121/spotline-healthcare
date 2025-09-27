import img3 from "../assets/img3.jpg";

export default function Services() {
  const services = [
    "General Consultation",
    "Diagnostics",
    "Online Prescriptions",
    "Patient Monitoring",
  ];

  return (
    <section
      id="services"
      className="py-16 px-4 md:px-6 bg-cover bg-center bg-no-repeat min-h-screen"
      style={{ backgroundImage: `url(${img3})` }}
    >
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-10 text-white drop-shadow-lg">
        Our Services
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {services.map((service, i) => (
          <div
            key={i}
            className="bg-white/80 p-6 shadow rounded-xl hover:shadow-xl transition"
          >
            <h3 className="text-lg md:text-xl font-semibold text-blue-600">
              {service}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
