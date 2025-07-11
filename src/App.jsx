import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx";
import AboutUs from "./pages/AboutUs";

// import OurProducts from "./pages/OurProducts.jsx";
// import ForFarmers from "./pages/ForFarmers.jsx";
// import ForBuyers from "./pages/ForBuyers.jsx";
// import ImpactGallery from "./pages/ImpactGallery.jsx";
// import ContactUs from "./pages/ContactUs.jsx";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About-Us" element={<AboutUs />} />
        {/* <Route path="/our-products" element={<OurProducts />} />
        <Route path="/for-farmers" element={<ForFarmers />} />
        <Route path="/for-buyers" element={<ForBuyers />} />
        <Route path="/impact-gallery" element={<ImpactGallery />} />
        <Route path="/contact-us" element={<ContactUs />} /> */}
      </Routes>
    </>
  );
}
