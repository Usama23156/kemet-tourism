import React from "react";
import NextTrip from "../../_component/home/nextTrip/page";
import FooterHome from "@/_component/home/FooterHome/page";

function page() {
  return (
    <>
      <div className="bg-fixed bg-no-repeat bg-cover bg-center pt-20">
        <div className="About-Us pt-8 pb-10 top-[89px] ">
          <div className="Main top-[257.5px] gap-[55px]">
            <div className="Header flex flex-col relative">
              <div className="bg-neutral-900">
                <img
                  loading="lazy"
                  alt=""
                  className=" w-full h-96 bg-center bg-cover opacity-50"
                  style={{ backgroundImage: `url(/our-client.JPG)` }}
                />
              </div>
              <div className=" absolute max-w-[1200px] gap-[7px] pt-36 pl-12 pr-7 md:pt-[160px] pb-[268px] md:pl-[450px] flex flex-col">
                <div className=" flex flex-col">
                  <h1 className="font-semibold text-5xl leading-[72px] tracking-[0%] text-center align-middle text-[#FFFFFF]">
                    About for kemet
                  </h1>
                </div>
                <div className=" flex flex-col">
                  <p className="font-semibold text-[12px] leading-[14.4px] tracking-[4px] text-center align-middle uppercase text-[#FFFFFF]">
                    We can do more for you
                  </p>
                </div>
              </div>
            </div>
            <div className="body md:pr-[145px] md:pl-[145px] pl-8 pr-8 flex flex-col relative pt-10 ">
              <div className=" left-[15px]">
                <p className="font-normal text-[14px] leading-[24px] tracking-[0%] align-middle ">
                  Kemet Escapes is a premier travel agency dedicated to crafting
                  remarkable journeys across the captivating land of Egypt. Our
                  passion for exploration and commitment to excellence guide us
                  in designing bespoke itineraries that reveal the rich heritage
                  and stunning landscapes of this ancient land.
                </p>
              </div>
              <div className=" lg:pr-96 pt-10 pl-10">
                <p className=" font-semibold text-[32px] leading-[38.4px] tracking-[0%] align-middle">
                  Quisque erat urna, congue et libero ineleifend euismod velit.
                </p>
              </div>
              <div className="  pt-10 md:pl-10">
                <p className="font-normal text-[14px] leading-[24px] tracking-[0%] align-middle">

                   Choose Kemet Escapes for a memorable journey that captures the
                  essence of Egypt. Let us guide you through this timeless land,
                  creating experiences and memories that will stay with you
                  forever.
                </p>
              </div>
              <div className=" lg:flex ">
                <div className=" pt-[40px] lg:max-w-[45%] ">
                  <img loading="lazy" src="/welcome.jpg" alt="" />
                </div>
                <div className="  flex items-center justify-center pt-[40px] lg:px-7 lg:max-w-[55%] ">
                <p className="font-bold text-xl leading-[24px] tracking-[0%] align-middle ">
                 Our team consists of experienced professionals with a profound
                  understanding of Egypt’s history, culture, and natural beauty.
                  We offer a range of travel experiences, from iconic landmarks
                  to serene retreats, catering to a variety of interests.
                  Whether you’re seeking adventure, tranquillity, or a cultural
                  deep dive, Kemet Escapes promises a journey marked by
                  authenticity and warm hospitality.
                </p>
              </div>
              </div>
               <div className="  pt-[60px] pr-[15px] pb-10 pl-[15px]">
                  <div className=" pl-[40px]">
                    <p className="font-normal text-[16px] leading-[24px] tracking-[-0.1px] align-middle ">
                      Rachel Leonard - Bacola CEO
                    </p>
                  </div>
                  <div className="pt-4 ">
                    <p className=" font-semibold text-[28px] leading-[33.6px] tracking-[0%] align-middle ">
                      Why Kemet?
                    </p>
                  </div>
                  <div className=" gap-[16px] pt-5 pl-[40px]">
                    <div>
                      <p className="font-normal text-[14px]  tracking-[0%] align-middle  md:pr-14 pb-6">
                        Choosing Kemet Escapes means embarking on a thoughtfully
                        curated journey through Egypt’s wonders. Our name,
                        “Kemet,” harks back to the ancient Egyptian term for
                        their homeland, symbolising the fertile land along the
                        Nile and the deep cultural roots of this storied
                        country.
                      </p>
                    </div>
                    <div className="md:pt-1 pt-3">
                      <p className=" font-normal  text-[14px] tracking-[-0.4px] align-middle  md:pr-12 pb-3">
                        1.Expertise and Experience: Our team comprises seasoned
                        experts who possess a deep knowledge of Egypt’s
                        landscapes and history. Their insights enrich your
                        experience, offering a meaningful connection to the
                        places you visit.
                      </p>
                      <p className=" font-normal  text-[14px] tracking-[-0.4px] align-middle  md:pr-12 pb-3">
                        2.Tailored Itineraries: We recognize that each traveller
                        has unique interests. Our custom travel packages, known
                        as ‘Escapes,’ cater to a variety of preferences. From
                        exploring the Nile and historic sites to seeking
                        tranquillity and adventure, we design journeys that
                        resonate with your desires .
                      </p>
                      <p className=" font-normal  text-[14px] tracking-[-0.4px] align-middle  md:pr-12 pb-3">
                        3.Authentic Experiences: As a trusted local company, we
                        provide genuine experiences that go beyond typical
                        tourist paths. Our connections with local communities
                        and knowledge of lesser-known sites allow us to offer
                        exclusive access to Egypt’s treasures.
                      </p>
                      <p className=" font-normal  text-[14px] tracking-[-0.4px] align-middle  md:pr-12 pb-3">
                        4.Quality and Care: At Kemet Escapes, we prioritise your
                        comfort and well-being. Our dedication to high standards
                        ensures that every aspect of your journey, from
                        accommodations to guided tours, meets your expectations.
                      </p>
                        <p className=" font-normal  text-[14px] tracking-[-0.4px] align-middle  md:pr-12">
                          5.Warm Hospitality: We believe in the importance of
                          personalised service. Our team is committed to making
                          you feel welcomed and valued, ensuring that your
                          journey with us is seamless and enjoyable.
                        </p>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
