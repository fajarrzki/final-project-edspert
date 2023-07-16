import React from "react";

function Hero() {
  return (
    <div>
      <div className="w-full h-[600px]  relative bg-slate-800 font-sans flex">
        <div className=" inline-block mt-[100px] mx-28">
          <h1 className="text-6xl text-white font-bold">Programming Laravel</h1>
          <h1 className="text-[42px] text-white">
            Getting Started with Laravel 9
          </h1>
          <p className="text-xl text-white mt-6">Mentor</p>
          <div className="flex">
            <div className="mr-12">
              <h2 className="text-white font-bold text-[25px] mt-2">
                William Hartono
              </h2>
              <p className="text-xl text-white">Developer at Widya Edu</p>
            </div>
            <div>
              <h2 className="text-white font-bold text-[25px] mt-2">
                Farel Prayoga
              </h2>
              <p className="text-xl text-white mt-9">Developer at Widya Edu</p>
            </div>
          </div>
        </div>
        <div className="self-end ml-20">
          <img src="../img/content.png" alt="image" className="w-5/4 h-5/6" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
