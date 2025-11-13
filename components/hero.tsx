import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative h-screen text-white overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/background.jpg"
          alt="logo"
          fill
          className="object-cover object-center w-full h-full"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="relative flex flex-col justify-center items-center text-center h-full">
        <h1 className="text-7xl font-extrabold leading-tight mb-3 capitalize">
          Books Your Reservasi
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          Get special offer just for today
        </p>
        <div className="flex gap-5">
          <Link
            href="/room"
            className="text-lg bg-orange-400 text-white hover:bg-orange-500 py-2 px-6 md:px-10 font-semibold hover:scale-105 hover:shadow-lg rounded-sm"
          >
            Book Now
          </Link>
          <Link
            href="/contact"
            className="text-lg bg-transparant border-1 border-orange-400 text-white hover:bg-orange-500 py-2 px-6 md:px-10 font-semibold hover:scale-105 hover:shadow-lg rounded-sm"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
