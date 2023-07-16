import React from "react";
import Hero from "./Hero";
import NavBar from "./hero/NavBar";
import CheckOut from "./CheckOut";
import Materi from "./Materi";
import Fasilitas from "./Fasilitas";
import Join from "./Join";
import Footer from "./footer";

function ProductDetail() {
  return (
    <div>
      <NavBar />
      <Hero />
      <div className="flex w-full h-full bg-white">
        <CheckOut />
        <div>
          <Materi />
          <Fasilitas />
        </div>
      </div>
      <Join />
      <Footer />
    </div>
  );
}

export default ProductDetail;
