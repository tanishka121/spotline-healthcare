import { Link } from "react-router-dom";

export default function Navbar() {
return (
<nav className="bg-black shadow p-4 flex justify-between items-center sticky top-0 z-50">
<h1 className="text-2xl font-bold text-green-600">Spotline Healthcare</h1>
<div className="space-x-6 text-white hidden md:flex">
  <ul className="flex gap-6">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/doctors">Doctors</Link></li>
        <li><Link to="/appointment">Appointment</Link></li>
      </ul>
</div>
</nav>
);
}

