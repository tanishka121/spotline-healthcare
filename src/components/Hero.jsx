import img1 from "../assets/img1.jpg";

export default function Hero() {
  return (
    <section
      className="text-center py-20 bg-cover bg-center h-[70vh] md:h-screen text-white flex flex-col justify-center items-center px-4"
      style={{ backgroundImage: `url(${img1})` }}
    >
      <h2 className="text-3xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">
        Your Health, Our Priority
      </h2>

      <p className="text-base md:text-lg max-w-lg md:max-w-xl mx-auto">
        <b className="text-xl md:text-2xl font-medium">
          Spotline Healthcare brings quality digital healthcare services to your doorstep.
        </b>
      </p>
    </section>
  );
}
