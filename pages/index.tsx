import React from "react";

import { NextPage } from "next";
import {
     NavBar,
     Footer,
     Automative,
     Earth,
     Finance,
     HealthCare,
     Integration,
     Lab,
     Legal,
     Modern,
     RealEstate,
     Scaling,
     Tranvel,
     Web,
} from "../components/";
import Logo from "../public/logo/favicon.png";

const Home: NextPage = () => {
     return (
          <>
               <NavBar
                    links={[
                         { id: "#home", name: "Home", title: "Home" },
                         {
                              id: "#techstack",
                              name: "TechStack",
                              title: "Tech Stack",
                         },
                         {
                              id: "#technologies",
                              name: "technologies",
                              title: "Technologies",
                         },
                         {
                              id: "#industries",
                              name: "Industries",
                              title: "Industries",
                         },
                         {
                              id: "#showcase",
                              name: "Showcase",
                              title: "Showcase",
                         },
                         { id: "#contact", name: "Contact", title: "Contact" },
                    ]}
                    logo={Logo}
               />
               <main>
                    {/* First Section */}
                    <section
                         id="home"
                         className="h-screen px-3 border-primary-500 flex flex-row justify-center items-center"
                    >
                         <div className="container mx-auto grid lg:grid-row-2 gap-10 flex-col-reverse">
                              <div>
                                   <div className="my-3 w-full">
                                        <div className="">
                                             <span className="text-6xl capitalize font-nunito font-semibold text-text">
                                                  We built teams <br /> that
                                                  build
                                                  <br />
                                                  your software
                                             </span>
                                        </div>
                                        <div className="my-3 w-full">
                                             <span className="text-gray-400">
                                                  Lorem ipsum dolor, sit amet
                                                  consectetur adipisicing elit.
                                                  Nostrum tempora tenetur illo
                                                  itaque, rem beatae voluptatum
                                                  repellendus earum asperiores
                                                  at!
                                             </span>
                                        </div>
                                   </div>
                                   <div className="mt-5">
                                        <button className="group p-2 mr-3 bg-secondary-500 hover:bg-secondary-100 rounded-md transition-colors duration-500">
                                             <span className="text-white group-hover:text-primary-500 text-sm font-semibold capitalize font-nunito">
                                                  Request an estimation
                                             </span>
                                        </button>
                                        <button className="p-2 group bg-primary-500 hover:bg-primary-100 rounded-md transition-colors duration-500">
                                             <span className="group-hover:text-primary-500 text-white text-sm font-semibold capitalize font-nunito">
                                                  Schedule a call
                                             </span>
                                        </button>
                                   </div>
                              </div>
                         </div>
                    </section>
                    {/* Second Section */}
                    <section
                         id="techstack"
                         className="mt-10 lg:h-screen lg:flex lg:justify-center lg:items-center"
                    >
                         <div className="container mx-auto">
                              <div className="w-full">
                                   <div className="text-center">
                                        <span className="font-semibold uppercase text-3xl font-nunito text-text">
                                             Here is our tech stack!
                                        </span>
                                   </div>
                                   <div className="lg:grid lg:grid-cols-3 gap-10">
                                        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl ">
                                             <div className="md:flex items-center">
                                                  <div className="md:flex-shrink-0 relative lg:h-48 lg:w-48">
                                                       <img
                                                            className={`h-40 w-full object-contain md:h-full md:w-40`}
                                                            src="tech-stack/mongo.png"
                                                            alt="Mongodb"
                                                       />
                                                  </div>
                                                  <div className="p-8">
                                                       <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                                                            Database
                                                       </div>
                                                       <span className="block mt-1 text-xl leading-tight font-medium text-black hover:underline">
                                                            Mongo DB
                                                       </span>
                                                       <p className="mt-2 text-gray-500">
                                                            Lorem ipsum dolor
                                                            sit amet consectetur
                                                            adipisicing elit.
                                                            Ullam nobis est amet
                                                            cum error.
                                                            Recusandae.
                                                       </p>
                                                  </div>
                                             </div>
                                        </div>
                                        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl ">
                                             <div className="md:flex items-center">
                                                  <div className="md:flex-shrink-0 relative lg:h-48 lg:w-48">
                                                       <img
                                                            className={`h-40 w-full object-contain md:h-full md:w-40`}
                                                            src="tech-stack/node.png"
                                                            alt="node"
                                                       />
                                                  </div>
                                                  <div className="p-8">
                                                       <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                                                            Backend
                                                       </div>
                                                       <span className="block mt-1 text-xl leading-tight font-medium text-black hover:underline">
                                                            Node
                                                       </span>
                                                       <p className="mt-2 text-gray-500">
                                                            Lorem ipsum dolor
                                                            sit amet consectetur
                                                            adipisicing elit.
                                                            Ullam nobis est amet
                                                            cum error.
                                                            Recusandae.
                                                       </p>
                                                  </div>
                                             </div>
                                        </div>
                                        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl ">
                                             <div className="md:flex items-center">
                                                  <div className="md:flex-shrink-0 relative lg:h-48 lg:w-48">
                                                       <img
                                                            className={`h-40 w-full object-contain md:h-full md:w-40`}
                                                            src="tech-stack/react.png"
                                                            alt="react"
                                                       />
                                                  </div>
                                                  <div className="p-8">
                                                       <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                                                            Frontend
                                                       </div>
                                                       <span className="block mt-1 text-xl leading-tight font-medium text-black hover:underline">
                                                            Node
                                                       </span>
                                                       <p className="mt-2 text-gray-500">
                                                            Lorem ipsum dolor
                                                            sit amet consectetur
                                                            adipisicing elit.
                                                            Ullam nobis est amet
                                                            cum error.
                                                            Recusandae.
                                                       </p>
                                                  </div>
                                             </div>
                                        </div>
                                        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl ">
                                             <div className="md:flex items-center">
                                                  <div className="md:flex-shrink-0 relative lg:h-52 lg:w-52">
                                                       <img
                                                            className={`h-40 w-full object-contain md:h-full md:w-40`}
                                                            src="tech-stack/express.png"
                                                            alt="react"
                                                       />
                                                  </div>
                                                  <div className="p-8">
                                                       <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                                                            Server
                                                       </div>
                                                       <span className="block mt-1 text-xl leading-tight font-medium text-black hover:underline">
                                                            Express
                                                       </span>
                                                       <p className="mt-2 text-gray-500">
                                                            Lorem ipsum dolor
                                                            sit amet consectetur
                                                            adipisicing elit.
                                                            Ullam nobis est amet
                                                            cum error.
                                                            Recusandae.
                                                       </p>
                                                  </div>
                                             </div>
                                        </div>
                                        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl ">
                                             <div className="md:flex items-center">
                                                  <div className="md:flex-shrink-0 relative lg:h-52 lg:w-52">
                                                       <img
                                                            className={`h-40 w-full object-contain md:h-full md:w-40`}
                                                            src="tech-stack/github.png"
                                                            alt="react"
                                                       />
                                                  </div>
                                                  <div className="p-8">
                                                       <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                                                            Source code
                                                       </div>
                                                       <span className="block mt-1 text-xl leading-tight font-medium text-black hover:underline">
                                                            Github
                                                       </span>
                                                       <p className="mt-2 text-gray-500">
                                                            Lorem ipsum dolor
                                                            sit amet consectetur
                                                            adipisicing elit.
                                                            Ullam nobis est amet
                                                            cum error.
                                                            Recusandae.
                                                       </p>
                                                  </div>
                                             </div>
                                        </div>
                                        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl ">
                                             <div className="md:flex items-center">
                                                  <div className="md:flex-shrink-0 relative lg:h-48 lg:w-48">
                                                       <img
                                                            className={`h-52 w-full object-contain md:h-full md:w-52`}
                                                            src="tech-stack/typescript.png"
                                                            alt="react"
                                                       />
                                                  </div>
                                                  <div className="p-8">
                                                       <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                                                            Programming Lang.
                                                       </div>
                                                       <span className="block mt-1 text-xl leading-tight font-medium text-black hover:underline">
                                                            Typescript
                                                       </span>
                                                       <p className="mt-2 text-gray-500">
                                                            Lorem ipsum dolor
                                                            sit amet consectetur
                                                            adipisicing elit.
                                                            Ullam nobis est amet
                                                            cum error.
                                                            Recusandae.
                                                       </p>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </section>
                    {/* Third Section */}
                    <section
                         id="technologies"
                         className="lg:h-screen mt-10 px-3 border-primary-500 flex flex-row items-center"
                    >
                         <div className="container mx-auto">
                              <div className="text-left">
                                   <span className="font-semibold uppercase text-3xl font-nunito text-text">
                                        Solution we deliver
                                   </span>
                              </div>
                              <div className="lg:grid lg:grid-cols-2 p-3">
                                   <div className="max-w-md mx-auto hover:bg-primary-50  overflow-hidden md:max-w-2xl ">
                                        <div className="md:flex items-center">
                                             <div className="md:flex-shrink-0 relative flex justify-center items-center lg:h-48 lg:w-48">
                                                  <Earth
                                                       height={150}
                                                       width={150}
                                                  />
                                             </div>
                                             <div className="p-8">
                                                  <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                                                       Business Process
                                                       Automation
                                                  </div>
                                                  <p className="mt-2 text-gray-500">
                                                       Lorem ipsum dolor sit
                                                       amet consectetur
                                                       adipisicing elit. Ratione
                                                       amet tempora ad voluptas?
                                                  </p>
                                             </div>
                                        </div>
                                   </div>
                                   <div className="max-w-md mx-auto hover:bg-primary-50 overflow-hidden md:max-w-2xl ">
                                        <div className="md:flex items-center">
                                             <div className="md:flex-shrink-0 relative flex justify-center items-center lg:h-48 lg:w-48">
                                                  <Lab
                                                       height={150}
                                                       width={150}
                                                  />
                                             </div>
                                             <div className="p-8">
                                                  <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                                                       Product Research and
                                                       Design
                                                  </div>
                                                  <p className="mt-2 text-gray-500">
                                                       Lorem ipsum dolor sit
                                                       amet consectetur
                                                       adipisicing elit. Ratione
                                                       amet tempora ad voluptas?
                                                  </p>
                                             </div>
                                        </div>
                                   </div>
                                   <div className="max-w-md mx-auto hover:bg-primary-50 overflow-hidden md:max-w-2xl ">
                                        <div className="md:flex items-center">
                                             <div className="md:flex-shrink-0 relative flex justify-center items-center lg:h-48 lg:w-48">
                                                  <Web
                                                       height={150}
                                                       width={150}
                                                  />
                                             </div>
                                             <div className="p-8">
                                                  <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                                                       Web & mobile applications
                                                       for B2B and B2C
                                                  </div>
                                                  <p className="mt-2 text-gray-500">
                                                       Lorem ipsum dolor sit
                                                       amet consectetur
                                                       adipisicing elit. Ratione
                                                       amet tempora ad voluptas?
                                                  </p>
                                             </div>
                                        </div>
                                   </div>
                                   <div className="max-w-md mx-auto hover:bg-primary-50 overflow-hidden md:max-w-2xl ">
                                        <div className="md:flex items-center">
                                             <div className="md:flex-shrink-0 relative flex justify-center items-center lg:h-48 lg:w-48">
                                                  <Modern
                                                       height={150}
                                                       width={150}
                                                  />
                                             </div>
                                             <div className="p-8">
                                                  <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                                                       Legacy software
                                                       Modernization
                                                  </div>
                                                  <p className="mt-2 text-gray-500">
                                                       Lorem ipsum dolor sit
                                                       amet consectetur
                                                       adipisicing elit. Ratione
                                                       amet tempora ad voluptas?
                                                  </p>
                                             </div>
                                        </div>
                                   </div>
                                   <div className="max-w-md mx-auto hover:bg-primary-50 overflow-hidden md:max-w-2xl ">
                                        <div className="md:flex items-center">
                                             <div className="md:flex-shrink-0 relative flex justify-center items-center lg:h-48 lg:w-48">
                                                  <Integration
                                                       height={150}
                                                       width={150}
                                                  />
                                             </div>
                                             <div className="p-8">
                                                  <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                                                       Integrations
                                                  </div>
                                                  <p className="mt-2 text-gray-500">
                                                       Lorem ipsum dolor sit
                                                       amet consectetur
                                                       adipisicing elit. Ratione
                                                       amet tempora ad voluptas?
                                                  </p>
                                             </div>
                                        </div>
                                   </div>
                                   <div className="max-w-md mx-auto hover:bg-primary-50 overflow-hidden md:max-w-2xl ">
                                        <div className="md:flex items-center">
                                             <div className="md:flex-shrink-0 relative flex justify-center items-center lg:h-48 lg:w-48">
                                                  <Scaling
                                                       height={150}
                                                       width={150}
                                                  />
                                             </div>
                                             <div className="p-8">
                                                  <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                                                       Scaling product delivery
                                                  </div>
                                                  <p className="mt-2 text-gray-500">
                                                       Lorem ipsum dolor sit
                                                       amet consectetur
                                                       adipisicing elit. Ratione
                                                       amet tempora ad voluptas?
                                                  </p>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </section>
                    {/* Forth Section */}
                    <section
                         id="industries"
                         className="lg:h-screen mt-10 px-3 border-primary-500 flex flex-row items-center"
                    >
                         <div className="container mx-auto">
                              <div className="text-left">
                                   <span className="font-semibold uppercase text-3xl font-nunito text-text">
                                        We Deliver to client that evolve
                                   </span>
                              </div>
                              <div className="text-left">
                                   <span className="text-primary-500 text-2xl capitalize font-semibold">
                                        Industries
                                   </span>
                              </div>
                              <div className="my-20 lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 grid grid-cols-1">
                                   <div className="flex flex-row justify-center items-center">
                                        <div>
                                             <RealEstate
                                                  height={75}
                                                  width={75}
                                             />
                                        </div>
                                        <div className="ml-5">
                                             <span className="text-text text-lg">
                                                  Real Estate
                                             </span>
                                        </div>
                                   </div>
                                   <div className="flex flex-row justify-center items-center">
                                        <div>
                                             <Tranvel height={75} width={75} />
                                        </div>
                                        <div className="ml-5">
                                             <span className="text-text text-lg">
                                                  Travel
                                             </span>
                                        </div>
                                   </div>
                                   <div className="flex flex-row justify-center items-center">
                                        <div>
                                             <Finance height={75} width={75} />
                                        </div>
                                        <div className="ml-5">
                                             <span className="text-text text-lg">
                                                  Finance
                                             </span>
                                        </div>
                                   </div>
                                   <div className="flex flex-row justify-center items-center flex-wrap">
                                        <div>
                                             <Legal height={75} width={75} />
                                        </div>
                                        <div className="ml-5">
                                             <span className="text-text text-lg">
                                                  Legal
                                             </span>
                                        </div>
                                   </div>
                                   <div className="flex flex-row justify-center items-center">
                                        <div>
                                             <HealthCare
                                                  height={75}
                                                  width={75}
                                             />
                                        </div>
                                        <div className="ml-5">
                                             <span className="text-text text-lg">
                                                  Healthcare
                                             </span>
                                        </div>
                                   </div>
                                   <div className="flex flex-row justify-center items-center">
                                        <div>
                                             <Automative
                                                  height={75}
                                                  width={75}
                                             />
                                        </div>
                                        <div className="ml-5">
                                             <span className="text-text text-lg">
                                                  Automative
                                             </span>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </section>
                    {/* Fifth Section */}
                    <section id="showcase" className="flex flex-row mt-10">
                         <div className="container mx-auto px-3">
                              <div className="text-left">
                                   <span className="text-3xl font-semibold uppercase text-primary-500">
                                        Showcases
                                   </span>
                              </div>
                              <div className="lg:grid lg:grid-cols-2 bg-primary-100 p-3 my-3">
                                   <div className="lg:flex-1 ">
                                        <div>
                                             <span className="text-md text-text font-semibold">
                                                  Construction
                                             </span>
                                        </div>
                                        <div>
                                             <span className="text-2xl font-semibold text-primary-500 capitalize">
                                                  Jeydeep stone art (Surat)
                                             </span>
                                        </div>
                                        <div>
                                             <span className="text-gray-400">
                                                  Lorem ipsum dolor sit amet
                                                  consectetur adipisicing elit.
                                                  Delectus, autem quia
                                                  asperiores ab voluptatum
                                                  libero vitae quasi, dolor
                                                  consequuntur, numquam illum
                                                  quod totam iste sint!
                                             </span>
                                        </div>
                                        <div>
                                             <a
                                                  href="https://jaydeepstoneart.co.in/"
                                                  className="text-secondary-500 underline"
                                             >
                                                  Jaydeep stone art
                                             </a>
                                        </div>
                                   </div>
                                   <div className="lg:flex-1">
                                        <div className="relative h-full w-full">
                                             <img
                                                  src="clients/jaydeep_stoneart.png"
                                                  alt="jaydeep stone art webpage"
                                             />
                                        </div>
                                   </div>
                              </div>
                              <div className="lg:grid lg:grid-cols-2 bg-primary-100 p-3 my-3">
                                   <div className="lg:flex-1">
                                        <div className="relative h-full w-full">
                                             <img
                                                  src="clients/poojaconstruction.png"
                                                  alt="pooja construction webpage"
                                             />
                                        </div>
                                   </div>
                                   <div className="lg:flex-1 ">
                                        <div>
                                             <span className="text-md text-text font-semibold">
                                                  Construction
                                             </span>
                                        </div>
                                        <div>
                                             <span className="text-2xl font-semibold text-primary-500 capitalize">
                                                  Pooja Construction (Surat)
                                             </span>
                                        </div>
                                        <div>
                                             <span className="text-gray-400">
                                                  Lorem ipsum dolor sit amet
                                                  consectetur adipisicing elit.
                                                  Delectus, autem quia
                                                  asperiores ab voluptatum
                                                  libero vitae quasi, dolor
                                                  consequuntur, numquam illum
                                                  quod totam iste sint!
                                             </span>
                                        </div>
                                        <div>
                                             <a
                                                  href="https://poojaconstruction.co.in"
                                                  className="text-secondary-500 underline"
                                             >
                                                  Pooja construction
                                             </a>
                                        </div>
                                   </div>
                              </div>
                              <div className="lg:grid lg:grid-cols-2 bg-primary-100 p-3 my-3">
                                   <div className="lg:flex-1 ">
                                        <div>
                                             <span className="text-md text-text font-semibold">
                                                  Shop website
                                             </span>
                                        </div>
                                        <div>
                                             <span className="text-2xl font-semibold text-primary-500 capitalize">
                                                  Om Lite (Mumbai)
                                             </span>
                                        </div>
                                        <div>
                                             <span className="text-gray-400">
                                                  Lorem ipsum dolor sit amet
                                                  consectetur adipisicing elit.
                                                  Delectus, autem quia
                                                  asperiores ab voluptatum
                                                  libero vitae quasi, dolor
                                                  consequuntur, numquam illum
                                                  quod totam iste sint!
                                             </span>
                                        </div>
                                        <div>
                                             <a
                                                  href="http://omlights.in/"
                                                  className="text-secondary-500 underline"
                                             >
                                                  Om lite
                                             </a>
                                        </div>
                                   </div>
                                   <div className="lg:flex-1">
                                        <div className="relative h-full w-full">
                                             <img
                                                  src="clients/omlite.png"
                                                  alt="om lite shop web page"
                                             />
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </section>
                    {/* Six Section */}
                    <section
                         id="contact"
                         className="mt-10 lg:h-screen flex flex-row justify-center items-center"
                    >
                         <div className="container mx-auto px-3">
                              <div className="lg:grid lg:grid-cols-2 gap-5">
                                   <div className="mt-5">
                                        <span className="text-5xl text-primary-500 font-semibold">
                                             Need more details?
                                        </span>
                                        <div className="mt-5">
                                             <span className="text-md text-gray-400">
                                                  Address :-
                                                  <address>
                                                       C002, Devi Park,
                                                       Nr.saraswati school,
                                                       saianath nagar,
                                                       nallasopara(E) - 401209.
                                                  </address>
                                             </span>
                                        </div>
                                        <div className="mt-5">
                                             <span className="text-md text-gray-400">
                                                  Social Links :-
                                             </span>
                                             <div>
                                                  <span className="font-bold text-md text-primary-500">
                                                       Phone :-
                                                  </span>{" "}
                                                  <span>+91 7373080890</span>
                                             </div>
                                             <div>
                                                  <span className="font-bold text-md text-primary-500">
                                                       Email :-
                                                  </span>{" "}
                                                  <span>
                                                       2twostack@gmail.com
                                                  </span>
                                             </div>
                                             <div>
                                                  <span className="font-bold text-md text-primary-500">
                                                       Facebook :-
                                                  </span>
                                                  <span>www.facebook.com</span>
                                             </div>
                                             <div>
                                                  <span className="font-bold text-md text-primary-500">
                                                       Instagram :-
                                                  </span>
                                                  <span>www.instagram.com</span>
                                             </div>

                                             <div>
                                                  <span className="font-bold text-md text-primary-500">
                                                       Twitter :-
                                                  </span>
                                                  <span>www.Twitter.com</span>
                                             </div>
                                        </div>
                                   </div>
                                   <div className="mt-5">
                                        <span className="text-3xl text-text font-semibold">
                                             I want to talk with(Direct mail):
                                        </span>
                                        <div className="mt-10">
                                             <form>
                                                  <div className="grid grid-cols-2 gap-5">
                                                       <input
                                                            type="text"
                                                            className="bg-primary-200 focus:bg-primary-100 hover:border hover:border-2 hover:border-primary-300 focus:outline-none w-full px-3 py-2 rounded-md"
                                                            placeholder="Your name"
                                                       />
                                                       <input
                                                            type="email"
                                                            className="bg-primary-200 focus:bg-primary-100 hover:border hover:border-2 hover:border-primary-300 focus:outline-none w-full px-3 py-2 rounded-md"
                                                            placeholder="Your email"
                                                       />
                                                  </div>
                                                  <div className="mt-5">
                                                       <textarea
                                                            name="message"
                                                            placeholder="Enter your query / messages...."
                                                            className="bg-primary-200 focus:bg-primary-100 hover:border hover:border-2 hover:border-primary-300 focus:outline-none w-full px-3 py-2 rounded-md resize-none"
                                                            rows={5}
                                                       ></textarea>
                                                  </div>
                                                  <div className="flex flex-row justify-end">
                                                       <button className="bg-primary-500 p-2 rounded-md">
                                                            <span className="text-white text-sm">
                                                                 Send message
                                                            </span>
                                                       </button>
                                                  </div>
                                             </form>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </section>
               </main>
               <Footer />
          </>
     );
};

export default Home;
