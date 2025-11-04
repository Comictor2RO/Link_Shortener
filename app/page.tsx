import Image from "next/image";
import NavBar from "./components/Navbar/NavBar";
import CardUrl from "./components/URLCard/CardUrl";

export default function Home() {
  return (
    <>
      <NavBar />
      <CardUrl/>
    </>
  );
}
