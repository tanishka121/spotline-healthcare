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
      className="py-16 px-6 bg-[url('C:\Users\pc\Desktop\innovwiz\spotline-healthcare\src\assets\img3.jpg')] bg-cover bg-center bg-no-repeat h-screen"
    >
      <h2 className="text-5xl font-bold text-center mb-10 text-white drop-shadow-lg">
        Our Services
      </h2>

      <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {services.map((service, i) => (
          <div
            key={i}
            className="bg-white/80 p-6 shadow rounded-xl hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold text-blue-600">{service}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
