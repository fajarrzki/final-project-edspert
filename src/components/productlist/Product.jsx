import React from "react";
import { useNavigate } from "react-router-dom";

function Product() {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-[352px] h-[293px] ml-[72px] mt-20 shadow-xl">
        <div className="h-[129px] bg-slate-800 rounded-t-3xl">
          <div className="flex">
            <img src="../img/card.png" alt="Menu" className="mt-4 ml-7 " />
            <div className="ml-6 my-3 self-center">
              <h3 className="text-base mb-3 font-bold text-amber-400">
                Intensive Bootcamp
              </h3>
              <h1 className=" text-s font-bold text-white">
                Programming Laravel
              </h1>
              <p className=" text-xs text-white font-400 ">
                (Getting Started with Laravel 9)
              </p>
            </div>
          </div>
        </div>
        <button
          className="h-[164px] w-[352px] rounded-b-3xl bg-white"
          onClick={() => navigate("/Kedua")}
        >
          <div>
            <div className="ml-7 text-left">
              <h1 className="font-bold text-base">Programming Laravel </h1>
              <h1 className="font-bold text-base mb-2">
                Getting Started with laravel 9
              </h1>
              <div className="flex font-semibold">
                <div className="mr-2 text-gray-400 text-base">
                  <p>Batch</p>
                  <p>Mentor</p>
                </div>
                <div className=" text-black">
                  <p>September 2022</p>
                  <p>William Hartono, Farel Prayoga</p>
                </div>
              </div>
              <div className="flex justify-end mt-3 ">
                <p className="mr-3 text-sm text-gray-400 font-400 line-through">
                  Rp. 2060.000
                </p>
                <p className="text-xl text-green-400 font-bold mr-4">
                  Rp. 560.000
                </p>
              </div>
            </div>
          </div>
        </button>
      </div>
    </>
  );
}

export default Product;
