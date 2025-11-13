import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-screen-xl px-7 mx-auto w-full py-10 md:py-16">
        <div className="grid md:grid-cols-3 gap-7">
          <div>
            <Link href="/" className="mb-6 block">
              {/* <Image
                src="/logo.png"
                alt="logo"
                width={128}
                height={49}
                priority
              /> */}
              <h4 className="text-3xl font-bold text-orange-400 uppercase">
                Jeenios about us
              </h4>
            </Link>
            <p className="text-gray-400 text-justify">
              Jeenios merupakan konsep hunian aktif dan produktif. Selain
              menyediakan kamar kost yang nyaman, kami juga menawarkan penyewaan
              fasilitas olahraga sport center, sehingga penghuni maupun
              pengunjung dapat tetap bugar, bersosialisasi, dan bersantai tanpa
              harus pergi jauh. Dengan suasana ramah, lingkungan terawat, serta
              akses mudah ke berbagai area penting, Jeenios menjadi pilihan
              ideal bagi mahasiswa, pekerja, maupun siapa saja yang mencari
              tempat tinggal dengan nilai lebih.
            </p>
          </div>
          <div>
            <div className="flex gap-20">
              <div className="flex-1 md:flex-none">
                <h4 className="mb-8 text-xl font-semibold text-white">Links</h4>
                <ul className="list-item space-y-5 text-gray-400">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/about">About</Link>
                  </li>
                  <li>
                    <Link href="/room">Rooms</Link>
                  </li>
                  <li>
                    <Link href="/contact">Contact Us</Link>
                  </li>
                </ul>
              </div>
              <div className="flex-1 md:flex-none">
                <h4 className="mb-8 text-xl font-semibold text-white">Legal</h4>
                <ul className="list-item space-y-5 text-gray-400">
                  <li>
                    <Link href="#">Legal</Link>
                  </li>
                  <li>
                    <Link href="#">Term and Condition</Link>
                  </li>
                  <li>
                    <Link href="#">Payment Method</Link>
                  </li>
                  <li>
                    <Link href="#">Privacy Policy</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <h4 className="mb-8 text-xl font-semibold text-white">
              Newsletter
            </h4>
            <p className="text-gray-400 mb-5">
              Lorem ipsum dolor, sit amet consectetur adipisicing.
            </p>
            <form action="">
              <div className="mb-5">
                <input
                  type="text"
                  name="email"
                  className="w-full p-3 rounded-sm bg-white"
                  placeholder="example@gmail.com"
                />
              </div>
              <button className="w-full bg-orange-400 p-3 font-bold text-center text-white rounded-sm hover:bg-orange-500">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto px4 py-8 border-t border-gray-500 text-center text-base text-gray-200">
        &copy; 2025 | Ali Latukau | All Right Reserved
      </div>
    </footer>
  );
};

export default Footer;
