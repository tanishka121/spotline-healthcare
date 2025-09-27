export default function Doctors() {
  const doctors = [
    { name: "Dr. Aditi Sharma", specialty: "Cardiologist" },
    { name: "Dr. Rahul Verma", specialty: "Dermatologist" },
    { name: "Dr. Sneha Kapoor", specialty: "Pediatrician" },
    { name: "Dr. Manish Rao", specialty: "Orthopedic" },
  ];

  return (
    <section id="doctors" className="py-16 px-4 md:px-6 bg-gray-100">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-10">
        Our Doctors
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {doctors.map((doc, i) => (
          <div
            key={i}
            className="bg-white p-6 shadow rounded-xl text-center hover:shadow-lg"
          >
            <h3 className="text-lg md:text-xl font-bold text-blue-700">{doc.name}</h3>
            <p className="text-gray-600">{doc.specialty}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
