import React from "react";

function footer() {
  return (
    <div>
      <div className=" flex text-center h-[576px] ml-10">
        <div className="my-auto text-left text-font text-base text-abu w-[411px] h-[300px] ml-12">
          <h1 className="font-bold mb-5 text-gray-400">
            TAGLINE edspert disini
          </h1>
          <p className="font-bold text-gray-400">
            Jl. Watigede No.58, Wonorejo, Sariharjo, Kec. Ngaglik, Kabupaten
            Sleman, Daerah Istimewa Yogyakarta 55581
          </p>
        </div>
        <div className="self-center ml-64">
          <button className="flex">
            <div className="text-left font-bold">
              <h3 className="text-base text-black">Program</h3>
              <p className="text-gray-400 my-4">Online Course</p>
              <p className="text-gray-400">Mini bootcamp</p>
              <p className="text-gray-400 my-4">Bootcamp</p>
            </div>
            <div className="text-left font-bold mx-10">
              <h3 className="text-base text-black">Bidang Ilmu</h3>
              <p className="text-gray-400 my-4 ">Digital Marketing</p>
              <p className="text-gray-400">Product management</p>
              <p className="text-gray-400 my-4">English</p>
              <p className="text-gray-400">Programming</p>
            </div>
            <div className="text-left font-bold">
              <h3 className="text-base text-black">Tentang edspert</h3>
              <p className="text-gray-400 my-4">Bantuan</p>
              <p className="text-gray-400">Kontak kami</p>
              <p className="text-gray-400 my-4">Media sosial</p>
            </div>
          </button>
          <p class="text-base text-gray-400 font-bold text-center mb-12 mt-36">
            &copy; Edspert, Copyright. Alamat boleh ditaruh disini apabila
            diinginkan.
          </p>
        </div>
      </div>
    </div>
  );
}

export default footer;
