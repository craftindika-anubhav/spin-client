"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import ReactConfetti from "react-confetti";
import image from "@/public/gift/2.png";
import Image from "next/image";
import Link from "next/link";
const Cong = ({ number }) => {
  const router = useRouter();
  const [show, setShow] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push(
        "https://sementy.store/cart/47062053257528:1?channel=buy_button"
      );
    }, 5000);
    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, number + 5000);
    return () => clearTimeout(timer);
  }, [number]);
  const [windowD, setD] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const detectSize = () => {
    setD({ width: window.innerWidth, height: window.innerHeight });
  };
  useEffect(() => {
    window.addEventListener("resize", detectSize);
    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, [windowD]);
  return (
    <div>
      {show && (
        <div>
          <div className="w-full h-screen relative flex items-center flex-col ">
            <div className=" fixed bg-black opacity-50  w-screen h-full "></div>
            <div className="relative z-[52] mt-12 text-center">
              <h2 className="text-white tracking-wider title font-bold uppercase text-8xl ">
                Parabéns!
              </h2>
              <p className="text-[#d9b36d] text-4xl mt-5">
                Você ganhou um presente!
              </p>
              <p className="text-[#d9b36d] text-3xl mt-1">
                Resgate seu presente agora
              </p>
            </div>
            <Image
              src={image}
              alt="gift"
              width={150}
              height={150}
              className=" relative mt-10 shadow-xl shadow-black rounded-full p-3 border-dotted border-2 border-[#d9b36d] "
            />
            <Link href="https://sementy.store/cart/47062053257528:1?channel=buy_button">
              <p className=" capitalize relative mt-10 font-serif bg-[#d9b36d] rounded-full duration-200 shadow-md shadow-black px-5 py-2 hover:bg-slate-400 text-sm text-white">
                Receba o presente
              </p>
            </Link>
          </div>
          <ReactConfetti
            width={windowD.width}
            height={windowD.height}
            tweenDuration={1000}
          />
        </div>
      )}
    </div>
  );
};

export default Cong;
