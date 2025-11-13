import Image from "next/image";
import HeaderSection from "@/components/header-section";
import { IoEyeOutline, IoLocateOutline } from "react-icons/io5";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Who we are",
};

const AboutPage = () => {
  return (
    <div>
      <HeaderSection title="About" subtitle="Lorem ipsum dolor sit amet." />
      <div className="max-w-screen-xl mx-auto py-20 px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <Image
            src="/about-image.jpg"
            alt="logo about"
            width={650}
            height={579}
          />
          <div>
            <h1 className="text-5xl font-semibold text-gray-900 mb-4">
              Who We Are
            </h1>
            <p className="text-gray-700 py-5">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis placeat quo unde adipisci eligendi non quisquam.
              Perspiciatis omnis adipisci eos!
            </p>
            <ul className="list-item space-y-6 py-8">
              <li className="flex gap-5">
                <div className="flex-none mt-1">
                  <IoEyeOutline className="size-7" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold mb-1 mt-1">Vision</h4>
                  <p className="text-gray-600">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eaque adipisci repellat eius quaerat culpa possimus?
                  </p>
                </div>
              </li>
              <li className="flex gap-5">
                <div className="flex-none mt-1">
                  <IoLocateOutline className="size-7" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold mb-1 mt-1">Mission</h4>
                  <p className="text-gray-600">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Quos fugiat est nesciunt illo eos officiis eaque molestiae
                    qui esse labore.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
