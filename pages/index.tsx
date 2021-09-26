import React from "react";

import { NextPage } from "next";
import { Html, Head } from "next/document";
import { NavBar, Footer } from "../components/";
const Home: NextPage = () => {
     return (
          <>
               <NavBar />
               <main>Body</main>
               <Footer />
          </>
     );
};

export default Home;
