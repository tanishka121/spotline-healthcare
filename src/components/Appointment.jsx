import { useState } from "react";

export default function Appointment() {
  const [form, setForm] = useState({ name: "", doctor: "", date: "" });
  const [appointments, setAppointments] = useState(
    JSON.parse(localStorage.getItem("appointments")) || []
  );

  const doctors = [
    "Dr. Aditi Sharma",
    "Dr. Rahul Verma",
    "Dr. Sneha Kapoor",
    "Dr. Manish Rao",
  ];

  const submitForm = (e) => {
    e.preventDefault();
    if (!form.name || !form.doctor || !form.date) return;

    const updated = [...appointments, form];
    setAppointments(updated);
    localStorage.setItem("appointments", JSON.stringify(updated));

    setForm({ name: "", doctor: "", date: "" });
  };

  return (
    <section id="appointment" className="py-16 px-4 md:px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
        Book Appointment
      </h2>

      <form
        onSubmit={submitForm}
        className="bg-white p-6 max-w-xl mx-auto rounded-xl shadow space-y-4"
      >
        <input
          type="text"
          placeholder="Your Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full p-3 border rounded"
        />

        <select
          value={form.doctor}
          onChange={(e) => setForm({ ...form, doctor: e.target.value })}
          className="w-full p-3 border rounded"
        >
          <option value="">Select Doctor</option>
          {doctors.map((d) => (
            <option key={d} value={d}>
              {d}
            </option>
          ))}
        </select>

        <input
          type="date"
          value={form.date}
          onChange={(e) => setForm({ ...form, date: e.target.value })}
          className="w-full p-3 border rounded"
        />

        <button
          type="submit"
          className="w-full bg-black text-white py-3 rounded-lg hover:bg-blue-700"
        >
          Submit
        </button>
      </form>

      <div className="max-w-xl mx-auto mt-10">
        <h3 className="text-xl font-bold mb-4">Upcoming Appointments</h3>
        {appointments.map((a, i) => (
          <div key={i} className="bg-gray-100 p-4 rounded mb-3 shadow">
            <p><strong>Name:</strong> {a.name}</p>
            <p><strong>Doctor:</strong> {a.doctor}</p>
            <p><strong>Date:</strong> {a.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
