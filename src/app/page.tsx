import Home from "./sections/Home";
import Navbar from "../components/navbar";
export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Home />
        {/* <About /> */}
        {/* <Services />
        <Projects />
        <Contact /> */}
      </main>
      {/* <Footer /> */}
    </>
  );
}
