import React from "react";
import ProfilePicture from "../../base/ProfilePicture";
import {
  HomeIcon,
  UserIcon,
  DocumentIcon,
  ChartBarIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/solid";

const Sidebar = () => {
  return (
    <aside className="flex flex-col items-center w-16 h-screen py-8 overflow-y-auto bg-gray-900 border-r rtl:border-l rtl:border-r-0 border-gray-700">
      <div className="mb-6">
        <a href="/">
          <ProfilePicture name="Hari" color="a18aff" size="45" />
        </a>
      </div>

      <nav className="flex flex-col flex-1 space-y-6">
        <a
          href="/"
          className="p-1.5 focus:outline-none transition-colors duration-200 rounded-lg text-gray-200 hover:bg-gray-800"
        >
          <HomeIcon className="w-6 h-6" />
        </a>

        <a
          href="/profile"
          className="p-1.5 focus:outline-none transition-colors duration-200 rounded-lg text-gray-200 hover:bg-gray-800"
        >
          <UserIcon className="w-6 h-6" />
        </a>

        <a
          href="/add-status"
          className="p-1.5 focus:outline-none transition-colors duration-200 rounded-lg text-gray-200 hover:bg-gray-800"
        >
          <DocumentIcon className="w-6 h-6" />
        </a>

        <a
          href="/dashboard"
          className="p-1.5 focus:outline-none transition-colors duration-200 rounded-lg text-gray-200 hover:bg-gray-800"
        >
          <ChartBarIcon className="w-6 h-6" />
        </a>
      </nav>

      <div className="flex flex-col space-y-6">
        <a
          href="/"
          className="transition-colors duration-200 rotate-180 text-gray-400 rtl:rotate-0 hover:text-blue-400"
        >
          <ArrowRightIcon className="w-6 h-6" />
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
