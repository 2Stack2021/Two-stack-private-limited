import React from "react";
import Image from "next/image";
import { INavbarProps } from "../../../types";

export const NavBar: React.FC<INavbarProps> = ({ links, logo }) => {
     const [isOpen, setisOpen] = React.useState(false);

     return (
          <>
               <nav className="px-2 bg-white sticky top-0 z-50 w-full shadow-2xl">
                    <div className="container mx-auto flex flex-row justify-between items-center">
                         <div className="relative h-20 w-20 mt-5">
                              <Image
                                   src={logo}
                                   alt="Two Stack Private Limited"
                              />
                         </div>
                         <ul className="lg:flex hidden lg:flex-row lg:items-center lg:justify-end lg:w-full">
                              {links.map(({ id, name, title }) => (
                                   <a href={id} key={name}>
                                        <li className="text-primary-500 text-md mr-5 uppercase font-semibold">
                                             {title}
                                        </li>
                                   </a>
                              ))}
                         </ul>
                         <button
                              onClick={() => {
                                   if (!isOpen) {
                                        setisOpen(true);
                                   } else {
                                        setisOpen(false);
                                   }
                              }}
                              className="lg:hidden block bg-primary-500 p-5 rounded-full"
                              type="button"
                         ></button>
                    </div>
                    {isOpen && (
                         <div className="p-3">
                              <ul>
                                   {links.map(({ id, name, title }) => (
                                        <a
                                             href={id}
                                             key={name}
                                             onClick={() => setisOpen(false)}
                                        >
                                             <li className="my-3 text-text text-lg mr-5 capitalize font-semibold">
                                                  {title}
                                             </li>
                                        </a>
                                   ))}
                              </ul>
                         </div>
                    )}
               </nav>
          </>
     );
};
