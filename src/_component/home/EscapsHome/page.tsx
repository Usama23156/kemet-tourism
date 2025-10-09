import React from "react";
import { OurEscapes } from "@/data/data";
import Link from "next/link";

const Escapes: {
  id: number;
  img: string[];
  name: string;
  price: string;
  features: string[];
  discrption: string;
}[] = OurEscapes;

function page() {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-y-6 pt-12 ">
        <h4 data-aos="fade-up" className="md:text-4xl text-2xl">Discover Egypt like never before ...</h4>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 lg:gap-12 p-6 lg:p-12">
          {Escapes.map((escape) => (
            <div  data-aos="fade-right"
              key={escape.id}
              className="flex flex-col justify-center items-center gap-y-6 gap-x-6 "
            >
              <div className="flex flex-col justify-center items-center gap-y-3 gap-x-6 relative opacity-75 hover:opacity-100 hover:scale-105 transition-all duration-300">
                <div>
                <img
                  src={escape.img[0]}
                  alt=""
                  className=" lg:max-w-64 md:max-w-80 rounded-2xl max-w-96"
                  />
                  </div>
                <div className="max-w-md flex flex-col left-2 gap-y-3 absolute bottom-0 w-full py-3 ">
                  <h3 className="md:text-sm text-2xl font-bold ">{escape.name}</h3>
                  <p className="md:text-sm text-2xl font-bold">{escape.price}</p>
                </div>
              </div>
              {escape.features.map((feature, index) => (
                  <p key={index} className="text-center lg:text-sm text-2xl h-3 lg:h-0">{feature}</p>
                ))}
                <Link href={`/Escapes/EscapesDetails?id=${escape.id}`}>
                <button className="text-[#b49e09] bg-white px-16 md:px-10 py-1.5 rounded-4xl border-white border-4 hover:border-4 hover:border-[#a8870a] transition-colors duration-300 text-xl cursor-pointer mt-3">
                BOOK NOW    
            </button>
                </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default page;