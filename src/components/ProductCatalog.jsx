import React from "react";
import Main from "./hero/Main";
import ListProduct from "./productlist/ListProduct";
import Footer from "./footer";

function hero() {
  return (
    <div>
      <Main />
      <ListProduct />
      <Footer />
    </div>
  );
}

export default hero;
