import Link from "next/link";
import Image from "next/image";
import Navlink from "@/components/navbar/navlink";

const Navbar = () => {
  return (
    <div className="fixed top-0 w-full bg-white shadow-sm z-20">
      <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between p-4">
        <Link href="/">
          <h1 className="text-3xl font-bold uppercase text-orange-400">
            Jeenios
          </h1>
          {/* <Image src="/logo.png" alt="logo" width={128} height={49} priority /> */}
        </Link>
        <Navlink />
      </div>
    </div>
  );
};

export default Navbar;
