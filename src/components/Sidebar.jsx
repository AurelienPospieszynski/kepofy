import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { RiCloseLine } from 'react-icons/ri';

import { logo } from '../assets';
import { links } from '../assets/constants';

const NavLinks = ({ handleClick }) => {
  return (
    <div className="mt-10 ">
      {links.map((item) => (
        <NavLink
          key={item.name}
          to={item.to}
          className="flex flex-row items-center justify-start my-8 text-sm font-medium text-gray-400 hover:text-cyan-300"
          onClick={() => handleClick && handleClick()}
        >
          <item.icon className="w-6 h-6 mr-2" />
          {item.name}
        </NavLink>
      ))}
    </div>
  );
};

const Sidebar = () => {
  return (
    <div className="md:flex hidden flex-col w-[240px] py-10 px-4 bg-[#191624]">
      <img src={logo} alt="logo" className="object-contain w-full h-14" />
      <NavLinks />
    </div>
  );
};

export default Sidebar;
