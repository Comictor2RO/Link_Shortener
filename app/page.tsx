import Image from "next/image";
import NavBar from "./components/Navbar/NavBar";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
import HomeClient from "./components/Cards/HomeClient";

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <HomeClient/>
      <Footer />
    </>
  );
}
