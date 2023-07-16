import React from "react";
import Product from "./Product";

function ListProduct() {
  return (
    <div className="bg-purple-50">
      <div className="flex justify-center items-center flex-wrap grid-cols-3">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
      <div className="font-bold text-end mt-64 p-10">
        <button className="text-gray-400 mr-4 cursor-pointer">
          &lt; Sebelumnya
        </button>
        <span className="mr-6 text-gray-400 cursor-pointer">1</span>
        <span className="mr-6 text-gray-400 cursor-pointer">2</span>
        <span className="mr-6 text-gray-400 cursor-pointer">3</span>
        <span className="mr-6 text-gray-400 cursor-pointer">4</span>
        <span className="mr-6 text-gray-400">...</span>
        <span className="mr-6 text-gray-400 cursor-pointer">10</span>
        <button className="ml-4 text-gray-900 mr-10 cursor-pointer">
          Selanjutnya &gt;
        </button>
      </div>
    </div>
  );
}

export default ListProduct;
