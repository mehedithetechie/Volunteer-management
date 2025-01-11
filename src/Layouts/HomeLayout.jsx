import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import { Helmet } from "react-helmet";
import Footer from "../components/Footer";


const HomeLayout = () => {


  return (
    <div className="overflow-x-hidden">
      <Helmet>
        <title>Home</title>
      </Helmet>
      <header className="mb-16">
        <NavBar/>
      </header>
      <main>
        <Hero/>
        <Outlet/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
};

export default HomeLayout;