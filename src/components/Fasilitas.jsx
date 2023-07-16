import React from "react";

function Fasilitas() {
  return (
    <div>
      <div className="w-96 h-72 relative top-[70px] left-[80px] bg-white rounded-2xl">
        <p className="text-slate-800 text-3xl font-bold leading-tight">
          Fasilitas
        </p>
        <div className="font-semibold text-xl font-sans  flex">
          <img
            src="../img/Vector.png"
            alt="Button"
            className="w-5 h-5 mt-2 mr-4"
          />
          <p>E-Sertifikat</p>
        </div>
        <div className="font-semibold text-xl font-sans  flex">
          <img
            src="../img/Vector.png"
            alt="Button"
            className="w-5 h-5 mt-2 mr-4"
          />
          <p>Portofolio</p>
        </div>
        <div className="font-semibold text-xl font-sans  flex">
          <img
            src="../img/Vector.png"
            alt="Button"
            className="w-5 h-5 mt-2 mr-4"
          />
          <p>Job Connector</p>
        </div>
        <div className="font-semibold text-xl font-sans  flex">
          <img
            src="../img/Vector.png"
            alt="Button"
            className="w-5 h-5 mt-2 mr-4"
          />
          <p>Carrer Development</p>
        </div>
      </div>
    </div>
  );
}

export default Fasilitas;
