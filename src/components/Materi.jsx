import React from "react";

function Materi() {
  const MateriData = [
    {
      id: 1,
      judul: "Pengenalan Programming Laravel",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden.",
    },
    {
      id: 2,
      judul: "Materi Bootcamp Lavarel 2",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden.",
    },
    {
      id: 3,
      judul: "Materi Bootcamp Lavarel 3",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden.",
    },
    {
      id: 4,
      judul: "Materi Bootcamp Lavarel 4",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden.",
    },
    {
      id: 5,
      judul: "Materi Bootcamp Lavarel 5",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden.",
    },
    {
      id: 6,
      judul: "Materi Bootcamp Lavarel 6",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden.",
    },
  ];
  return (
    <div>
      <div className=" w-[825px] h-full bg-white ml-10 mt-12 relative top-[70px] rounded-3xl shadow-xl">
        <div className="container px-10 py-7">
          <h1 className="text-slate-800 font-sans text-3xl font-bold mb-4">
            Materi
          </h1>
          <div className="conatiner">
            {MateriData.map((MateriData) => (
              <ol>
                <div className="flex">
                  <img
                    src="../img/Vector.png"
                    alt="button"
                    className="w-5 h-5 mt-4 mr-4"
                  />
                  <p
                    key={MateriData.id}
                    className="font-sans font-bold text-xl my-3"
                  >
                    {MateriData.judul}
                  </p>
                </div>
                <div className="ml-10 font-sans  text-sm text-grey">
                  <p className="font-semibold">{MateriData.description}</p>
                </div>
              </ol>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Materi;
