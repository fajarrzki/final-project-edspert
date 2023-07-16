import React from "react";
import { useNavigate } from "react-router-dom";

function navBar() {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex bg-slate-800 text-white justify-between items-center p-10">
        <h1
          className="text-xl font-bold cursor-pointer"
          onClick={() => navigate("/")}
        >
          logo
        </h1>
        <div className="flex space-x-5 items-center">
          <ul className="flex space-x-8 text-[14px] font-bold">
            <li>
              <a className="cursor-pointer">Program v</a>
            </li>
            <li>
              <a className="cursor-pointer">Bidang ilmu ^</a>
            </li>
            <li>
              <a className="cursor-pointer">Tentang edspert</a>
            </li>
          </ul>

          <div className="">
            <button className="bg-red-400 w-[148px] h-[48px] rounded-[50px] font-semibold text-[14px]">
              Masuk/Daftar
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default navBar;
