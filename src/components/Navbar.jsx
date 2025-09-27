import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-black shadow p-4 sticky top-0 z-50">
      <div className="flex justify-between items-center">
        <h1 className="text-xl md:text-2xl font-bold text-green-500">Spotline Healthcare</h1>

        {/* Hamburger Button */}
        <button
          className="text-white md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-white">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/doctors">Doctors</Link></li>
          <li><Link to="/appointment">Appointment</Link></li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="flex flex-col mt-4 gap-4 text-white md:hidden">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/doctors">Doctors</Link></li>
          <li><Link to="/appointment">Appointment</Link></li>
        </ul>
      )}
    </nav>
  );
}
