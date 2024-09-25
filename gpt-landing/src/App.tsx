import Blog from "./components/blog/Blog";
import Brand from "./components/brand/Brand";
import CTA from "./components/cta/CTA";
import Features from "./components/features/Features";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Possibility from "./components/possibility/Possibility";
import What from "./components/what/What";

export function App() {
  return (
    <>
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <What />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </>
  )
}