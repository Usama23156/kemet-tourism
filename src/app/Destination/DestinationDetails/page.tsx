"use client";
import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { OurDestination } from "@/data/data";
import PoppTemple from "../../../_component/popp/poppTemple/page"; // Adjust the path as necessary
import { Allura } from 'next/font/google';
import { Lato } from 'next/font/google';

const AlluraFont = Allura({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-bokor',
});
const LatoFont = Lato({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-bokor',
});

const page = () => {

  const SearchParams = useSearchParams();
  const id = SearchParams.get("id") || "No ID";
  
  const [DestinationData, setDestinationData] = useState({
    id: 0,
    img: "",
    name: "",
    discrption: "",
    temp: [
      {
        id: 0,
        name: "",
        img: "",
        info: "",
      },
    ],
  });
  
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTemple, setSelectedTemple] = useState<any>(null);

  const openModal = (temple: any) => {
    setSelectedTemple(temple);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedTemple(null);
  };

  useEffect(() => {
    const data = OurDestination.find(
      (destination) => destination.id === parseInt(id)
    );
    if (data) {
      setDestinationData(data as any);
    }
    setLoading(false);
  }, [id]);

  return (
    <>
      <div>
        {loading ? (
          <div className="h-[100vh] flex items-center justify-center">
            <p className="m-auto">Loading...</p>
          </div>
        ) : (
          <div>
            <div className="flex items-center justify-center flex-col gap-y-8 relative pb-10">
              <div
                className="w-full min-h-screen bg-center bg-cover opacity-75"
                style={{ backgroundImage: `url(${DestinationData.img})` }}
              ></div>
              <div className="max-w-[70%] flex items-center flex-col gap-y-4 absolute">
                <h2 className={`text-5xl font-bold ${AlluraFont.className}`}>{DestinationData.name}</h2>
                <p className={`text-lg text-center ${LatoFont.className}`}>{DestinationData.discrption}</p>
              </div>
            </div>
            <div className="pb-10">
              <h2 className="font-medium text-[1.2rem] uppercase border-b-[#b49e09] max-w-[1000px] mx-auto border-b border-solid">
                POINTS
              </h2>
              <div className="grid grid-cols-2 lg:grid-cols-3 mt-5">
                {DestinationData.temp.map((place) => (
                  <div onClick={() => openModal(place)} key={place.id}>
                    <div className="flex flex-col items-center pb-5">
                      <div className="box-img w-[190px] h-[270px]">
                        {place.img ? (
                          <img
                            className="sm:h-60 hover:-translate-y-2.5 w-full h-full object-cover cursor-pointer transition-[0.2s] duration-[all] ease-linear rounded-2xl"
                            src={place.img}
                            alt={place.name} // Use place.name for better accessibility
                          />
                        ) : (
                          <div className="w-full h-full bg-gray-200 flex items-center justify-center rounded-2xl">
                            <span>No Image Available</span>
                          </div>
                        )}
                      </div>
                      <h3 className="text-[0.9rem] font-medium text-[color:var(--main-color)]">
                        {place.name}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
      <PoppTemple isOpen={isModalOpen} onClose={closeModal} Temple={selectedTemple} />
    </>
  );
}

export default page;