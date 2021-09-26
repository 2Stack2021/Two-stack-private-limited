import React from "react";
import Image from "next/image";
import { INavbarProps } from "../../../types";

export const NavBar: React.FC<INavbarProps> = ({ links, logo }) => {
     return (
          <nav className="px-2 bg-white sticky top-0 z-50 w-full shadow-2xl">
               <div className="container mx-auto flex flex-row justify-between items-center">
                    <div className="relative h-20 w-20 mt-2">
                         <Image src={logo} alt="Two Stack Private Limited" />
                    </div>
                    <ul className="lg:flex hidden lg:flex-row lg:items-center lg:justify-end lg:w-full">
                         {links.map(({ id, name, title }) => (
                              <a href={id} key={name}>
                                   <li className="text-primary-500 text-md mr-5 uppercase font-semibold">
                                        {title}
                                   </li>
                              </a>
                         ))}
                         <a href="#home">
                              <li className="text-primary-500 text-md mr-5 uppercase font-semibold">
                                   Home
                              </li>
                         </a>
                         <a href="#techs">
                              <li className="text-primary-500 text-md mr-5 uppercase font-semibold">
                                   Tech stack
                              </li>
                         </a>
                         <a href="#technologies">
                              <li className="text-primary-500 text-md mr-5 uppercase font-semibold">
                                   Technologies
                              </li>
                         </a>
                         <a href="#Indus">
                              <li className="text-primary-500 text-md mr-5 uppercase font-semibold">
                                   Industries
                              </li>
                         </a>

                         <a href="#shadow">
                              <li className="text-primary-500 text-md mr-5 uppercase font-semibold">
                                   Showcase
                              </li>
                         </a>
                         <a href="#contact">
                              <li className="text-primary-500 text-md rounded-md uppercase bg-primary-100 p-2">
                                   Contact us
                              </li>
                         </a>
                    </ul>
               </div>
          </nav>
     );
};
