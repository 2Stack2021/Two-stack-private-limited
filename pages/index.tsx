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
import Image from "next/image";
import Logo from "../public/logo/favicon.png";
import Location from "../public/png/place.png";
import Email from "../public/png/email.png";
import Phone from "../public/png/phone.png";
import Instagram from "../public/png/instagram.png";
import Facebook from "../public/png/facebook.png";

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
                              id: "#features",
                              name: "features",
                              title: "features",
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
                                             <span className="text-gray-800 font-semibold text-md">
                                                  Your partner for incredible
                                                  mobile and web products,
                                                  finally in great
                                                  <br />
                                                  quality and on time.
                                             </span>
                                        </div>
                                   </div>
                                   <div className="mt-5">
                                        <button className="group p-2 mr-3 bg-secondary-500 hover:bg-secondary-100 rounded-md transition-colors duration-500">
                                             <span className="text-white group-hover:text-primary-500 text-sm font-semibold capitalize font-nunito">
                                                  Request an estimation
                                             </span>
                                        </button>
                                        <a
                                             href="#contact"
                                             className="p-2 group bg-primary-500 text-white hover:bg-primary-400 hover:text-white rounded-md transition-colors duration-500"
                                        >
                                             <button>
                                                  <span className="group-hover:text-white text-sm font-semibold capitalize font-nunito">
                                                       Schedule a call
                                                  </span>
                                             </button>
                                        </a>
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
                                                            MongoDB is a
                                                            source-available
                                                            cross-platform
                                                            document-oriented
                                                            database program.
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
                                                            Node.js is
                                                            open-source,
                                                            cross-platform,
                                                            back-end runtime
                                                            environment web
                                                            browser.
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
                                                            React
                                                       </span>
                                                       <p className="mt-2 text-gray-500">
                                                            React is open-source
                                                            front-end library
                                                            for building UI
                                                            components.
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
                                                            simply Express, is a
                                                            back end web
                                                            application
                                                            framework for
                                                            Node.js.
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
                                                            GitHub is a provider
                                                            of Internet hosting
                                                            for development and
                                                            version control
                                                            using Git.
                                                       </p>
                                                  </div>
                                             </div>
                                        </div>
                                        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl ">
                                             <div className="md:flex items-center">
                                                  <div className="md:flex-shrink-0 relative lg:h-48 lg:w-48">
                                                       <img
                                                            className={`h-48 w-full object-contain md:h-full md:w-48`}
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
                                                            TypeScript is a
                                                            programming language
                                                            developed and
                                                            maintained by
                                                            Microsoft.
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
                         id="features"
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
                                                       also known as business
                                                       automation or digital
                                                       transformation, is the
                                                       technology-enabled
                                                       automation of complex
                                                       business processes.
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
                                                       Once the product vision
                                                       is defined, product
                                                       research. Once the
                                                       product vision is
                                                       defined, product research
                                                       provides the other half
                                                       of the foundation for
                                                       great design.
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
                                                       B2B and B2C use different
                                                       business models. B2B apps
                                                       often offer a
                                                       subscription service to
                                                       the organization.
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
                                                       Legacy modernization is
                                                       the process of updating
                                                       and optimizing business
                                                       systems to gain
                                                       operational efficiencies
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
                                                       System integration is
                                                       defined in engineering as
                                                       the process of bringing
                                                       togethe
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
                                                       Scaling is about ensuring
                                                       that product is robust
                                                       enough to survive and
                                                       then thrive in that
                                                       market.
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
                              <div className="lg:grid lg:grid-cols-2 bg-gradient-to-r from-primary-50 to-white  p-3 my-3">
                                   <div className="lg:flex-1 ">
                                        <div>
                                             <span className="text-md uppercase  text-text font-semibold">
                                                  Construction
                                             </span>
                                        </div>
                                        <div>
                                             <span className="text-2xl font-semibold text-primary-500 capitalize">
                                                  Jeydeep stone art (Surat)
                                             </span>
                                        </div>
                                        <div className="my-3">
                                             <span className="text-gray-800 font-semibold">
                                                  Jaydeep stone art is a
                                                  construction agancy, surat
                                                  based this agancy's website is
                                                  made by us, this is static
                                                  website and uploaded on the on
                                                  time delivery.
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
                              <div className="lg:grid lg:grid-cols-2 my-5 bg-gradient-to-r from-white to-primary-50 p-3 my-3">
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
                                             <span className="text-md uppercase text-text font-semibold">
                                                  Construction
                                             </span>
                                        </div>
                                        <div>
                                             <span className="text-2xl font-semibold text-primary-500 capitalize">
                                                  Pooja Construction (Surat)
                                             </span>
                                        </div>
                                        <div className="my-3">
                                             <span className="text-gray-800 font-semibold">
                                                  Pooja construction is a
                                                  construction agancy, surat
                                                  based this agancy's website is
                                                  made by us, this is static
                                                  website and uploaded on the on
                                                  time delivery.
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
                              <div className="lg:grid lg:grid-cols-2 bg-gradient-to-r from-primary-50 to-white  p-3 my-3">
                                   <div className="lg:flex-1 ">
                                        <div>
                                             <span className="text-md uppercase  text-text font-semibold">
                                                  Shop website
                                             </span>
                                        </div>
                                        <div>
                                             <span className="text-2xl font-semibold text-primary-500 capitalize">
                                                  Om Lite (Mumbai)
                                             </span>
                                        </div>
                                        <div className="my-3">
                                             <span className="text-gray-800 font-semibold">
                                                  Omlite is a mumbai based LED
                                                  lights showroom which is
                                                  managed by their admin, and
                                                  currently they are using this
                                                  website for advertisement of
                                                  their product and share thier
                                                  products information on this
                                                  website.
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
                              <div className="lg:grid lg:grid-cols-2 gap-5 justify-center items-center">
                                   <div className="mt-5 p-3 flex-1">
                                        <div className="mb-5">
                                             <span className="text-4xl font-semibold font-nunito">
                                                  Get in touch
                                             </span>
                                        </div>
                                        <div className="my-5">
                                             <div className="flex flex-row items-center">
                                                  <Image
                                                       src={Location}
                                                       height={25}
                                                       width={25}
                                                       alt="Location"
                                                  />
                                                  <div>
                                                       <span className="text-sm ml-3 text-gray-400 font-semibold">
                                                            C-002, Devi
                                                            park,sainsath nagar,
                                                            nr.saraswati school,
                                                            nallasopara(E) -
                                                            401209
                                                       </span>
                                                  </div>
                                             </div>
                                             <div className="flex flex-row items-center my-3">
                                                  <Image
                                                       src={Email}
                                                       height={25}
                                                       width={25}
                                                       alt="Location"
                                                  />
                                                  <div>
                                                       <span className="text-sm ml-3 text-gray-400 font-semibold">
                                                            2TWOSTACK@GMAIL.COM
                                                       </span>
                                                  </div>
                                             </div>
                                             <div className="flex  mt-2  flex-row items-center font-semibold">
                                                  <Image
                                                       src={Phone}
                                                       height={25}
                                                       width={25}
                                                       alt="Location"
                                                  />
                                                  <div>
                                                       <a href="/tel:+918460763606">
                                                            <span className="text-sm ml-3 text-gray-400 font-semibold">
                                                                 +91 7373080890
                                                            </span>
                                                       </a>
                                                  </div>
                                             </div>
                                             <div className="flex mt-2 flex-row items-center font-semibold">
                                                  <Image
                                                       src={Instagram}
                                                       height={24}
                                                       width={24}
                                                  />
                                                  <div>
                                                       <a href="https://www.instagram.com/twostack2021/">
                                                            <span className="text-sm ml-3 text-gray-400 font-semibold">
                                                                 Instagram
                                                            </span>
                                                       </a>
                                                  </div>
                                             </div>
                                             <div className="flex mt-2 flex-row items-center font-semibold">
                                                  <Image
                                                       src={Facebook}
                                                       height={24}
                                                       width={24}
                                                  />
                                                  <div>
                                                       <a href="https://www.facebook.com/TwoStack2021">
                                                            <span className="text-sm ml-3 text-gray-400 font-semibold">
                                                                 Facebook
                                                            </span>
                                                       </a>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                                   <div className="flex-1">
                                        <div className="mapouter">
                                             <div className="gmap_canvas">
                                                  <div className="mapouter">
                                                       <div className="gmap_canvas">
                                                            <iframe
                                                                 className="h-56 w-full"
                                                                 id="gmap_canvas"
                                                                 src="https://maps.google.com/maps?q=Devi%20park,sainsath%20nagar,%20nallasopara(E)%20-%20401209&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                                            ></iframe>
                                                       </div>
                                                  </div>
                                             </div>
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
