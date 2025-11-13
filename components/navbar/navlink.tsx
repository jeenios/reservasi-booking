"use client";
import { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import Link from "next/link";
import clsx from "clsx";

const Navlink = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-center text-sm text-gray-600 bg-white p-2 rounded-md md:hidden hover:bg-gray-200 hover:cursor-pointer"
      >
        {!open ? <IoMenu size={30} /> : <IoClose size={30} />}
      </button>
      <div
        className={clsx(
          "w-full md:block md:w-auto transition-all duration-500 ease-in-out transform origin-top",
          {
            hidden: !open,
          }
        )}
      >
        <ul className="flex flex-col font-semibold text-sm uppercase p-4 mt-4 rounded-sm md:flex md:flex-row md:items-center md:space-x-10 md:p-0 md:mt-0 md:border-0 md:bg-white">
          <li>
            <Link
              href="/"
              className="block py-2 px-3 text-gray-800 hover:bg-gray-100 rounded-sm md:hover:bg-transparent md:p-0"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="block py-2 px-3 text-gray-800 hover:bg-gray-100 rounded-sm md:hover:bg-transparent md:p-0"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/room"
              className="block py-2 px-3 text-gray-800 hover:bg-gray-100 rounded-sm md:hover:bg-transparent md:p-0"
            >
              Rooms
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="block py-2 px-3 text-gray-800 hover:bg-gray-100 rounded-sm md:hover:bg-transparent md:p-0"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              href="/myreservation"
              className="block py-2 px-3 text-gray-800 hover:bg-gray-100 rounded-sm md:hover:bg-transparent md:p-0"
            >
              My Reservation
            </Link>
          </li>
          <li>
            <Link
              href="/admin/dashboard"
              className="block py-2 px-3 text-gray-800 hover:bg-gray-100 rounded-sm md:hover:bg-transparent md:p-0"
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              href="/admin/room"
              className="block py-2 px-3 text-gray-800 hover:bg-gray-100 rounded-sm md:hover:bg-transparent md:p-0"
            >
              Manage Room
            </Link>
          </li>
          <li className="pt-5 md:pt-0">
            <Link
              href="/signin"
              className="ml-3 py-2.5 px-6 bg-orange-400 hover:bg-orange-600 rounded-sm text-white"
            >
              Sign in
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navlink;
