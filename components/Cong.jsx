'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import ReactConfetti from 'react-confetti';
import Image from 'next/image';
import Link from 'next/link';
// import image from "@/public/gift/gg.jpg";

const Cong = ({ number }) => {
  const router = useRouter();
  const [show, setShow] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, +number + 1000);
    return () => clearTimeout(timer);
  }, [number]);
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push(
        'https://sementy.store/cart/47062053257528:1?channel=buy_button'
      );
    }, +number + 5000);
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
    window.addEventListener('resize', detectSize);
    return () => {
      window.removeEventListener('resize', detectSize);
    };
  }, [windowD]);
  return (
    <div>
      {show && (
        <div>
          <div className="w-full h-screen relative flex items-center flex-col ">
            <div className=" fixed bg-black opacity-80  w-screen h-full "></div>
            <div className="relative z-[52] mt-12 max-sm:mt-20 text-center">
              <h2 className="text-white tracking-wider title font-bold uppercase text-8xl max-sm:text-5xl  ">
                PARABÉNS!
              </h2>
              <p className="text-[#d9b36d]  mt-5 text-3xl max-[330px]:text-2xl">
                Você ganhou um lindo colar com seu signo do zodíaco!
              </p>
              <p className="text-[#d9b36d] text-3xl max-sm:text-2xl max-[330px]:text-xl mt-1">
                Garanta já seu presente
              </p>
            </div>
            <Image
              src={'/gift/gg.jpg'}
              alt="gift"
              width={250}
              height={250}
              className=" relative mt-5 shadow-xl shadow-black rounded-full p-1 border-dotted border-2 border-[#d9b36d] "
            />
            <Link href="https://sementy.store/cart/47062053257528:1?channel=buy_button">
              <p className=" capitalize relative mt-10 font-serif bg-[#d9b36d] rounded-full duration-200 shadow-md shadow-black px-5 py-2 sm:hover:bg-slate-400 text-sm text-white">
                Clique aqui para ir para o formulário de pedido
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
