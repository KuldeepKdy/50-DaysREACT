import React, { useState } from "react";
import Navbar from "./Navbar";
import HeroImg from "../assets/strawberry.png";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const Hero = () => {
  const [sidebar, setSidebar] = useState(false);
  return (
    <main className="bg-primaryDark md:py-6 md:px-12 ">
      <section className="relative min-h-[650px] bg-gradient-to-r from-primary to-secondary w-full md:rounded-xl shadow-md">
        <div className="container">
          <Navbar setSidebar={setSidebar} sidebar={sidebar} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 min-h-[650px] place-items-center">
            <div className="text-white space-y-4 p-4 mt-[80px] md:mt-0 ">
              <h1 data-aos="fade-up" className="text-3xl pl-6 md:pl-14 ">
                01_______
              </h1>
              <h1
                data-aos="zoom-in"
                className="text-5xl font-bold uppercase text-shadow"
              >
                A healthy fruit
              </h1>
              <p data-aos="fade-up" data-aos-delay="300" className="text-sm">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Explicabo quam reprehenderit esse, voluptates nemo laborum,
                itaque rerum, nam harum porro commodi non eos nostrum ipsum.
              </p>
              <button
                data-aos="fade-up"
                data-aos-delay="600"
                className="border border-white px-4 py-2 rounded-lg"
              >
                Shop Now
              </button>
            </div>
            <div>
              <img
                data-aos="zoom-in"
                src={HeroImg}
                alt="Image"
                className="w-[400px] img-shadow relative z-[1]"
              />
            </div>
            <div className="md:hidden"></div>
          </div>
        </div>
        <h1
          data-aos="zoom-out"
          className="text-center text-white text-[80px] text white uppercase font-bold sm:text-[120px] md:text-[150px] xl:text-[180px]  absolute bottom-0 w-full z-0 text-shadow"
        >
          berries
        </h1>
        {sidebar === true ? (
          <div className="absolute top-0 right-0 w-[120px] h-full bg-gradient-to-b from-primary to-secondary z-10">
            <div className="w-full h-full flex justify-center flex-col items-center gap-6">
              <div className="w-[1px] h-[70px] bg-white"></div>
              {/* social media links */}
              <div className="inline-block p-2 rounded-full cursor-pointer border border-white text-white">
                <FaFacebookF className="text-2xl" />
              </div>
              <div className="inline-block p-2 rounded-full cursor-pointer border border-white text-white">
                <FaLinkedinIn className="text-2xl" />
              </div>
              <div className="inline-block p-2 rounded-full cursor-pointer border border-white text-white">
                <FaInstagram className="text-2xl" />
              </div>
              <div className="w-[1px] h-[70px] bg-white"></div>
            </div>
          </div>
        ) : (
          ""
        )}
      </section>
    </main>
  );
};

export default Hero;
