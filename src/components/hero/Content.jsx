import React from "react";

function content() {
  return (
    <>
      <div className="flex h-96 bg-slate-800 py-8 px-32">
        <div className="flex w-full h-full flex-col space-y-7">
          <p className="text-5xl text-white">Jadi expert bersama edspert.id</p>
          <p className="text-sm text-white text-ellipsis">
            Tingkatkan skill dan pengetahuan bersama para mentor terbaik di
            bidangnya, untuk siapkan karir impian anda.
          </p>
        </div>
        <div className="w-full h-full justify-center hidden lg:flex">
          <img src="../img/content.png" className="h-96 object-contain" />
        </div>
      </div>
    </>
  );
}

export default content;
