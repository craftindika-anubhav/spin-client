'use client';
import React, { useEffect, useState } from 'react';
import Spin from './Spin';
import { data } from './Questions';
import Cong from './Cong';
import axios from 'axios';
const Quiz = () => {
  const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_DOMAIN;
  const [counter, setCounter] = useState(0);
  const [show, setShow] = useState(false);
  const [number, setNumber] = useState(Math.ceil(Math.random() * 4000));
  const [cong, setCong] = useState(false);
  const clickHandler = () => {
    if (counter <= data.length - 2) {
      setCounter((pre) => pre + 1);
    }
    if (counter === data.length - 1) {
      setShow(true);
    }
  };

  const sendEmail = async () => {
    const email = localStorage.getItem('email');
    try {
      await axios.post(`${SERVER_URL}/api/email/send-user`, {
        email,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const spinHandler = async () => {
    setNumber((pre) => pre + Math.ceil(Math.random() * 4000));
    setCong(true);
    await sendEmail();
  };
  return (
    <div className="  h-full pt-14  w-[90%]  max-lg:w-[90%] m-auto flex justify-between   max-[800px]:flex-col max-[800px]:items-center max-[800px]:justify-center max-[800px]:w-full ">
      <div className="w-1/2  max-[800px]:w-[90%]  mb-3 max-[800px]:mb-0 max-[380px]:w-[90%] relative  flex justify-center items-center max-[800px]:justify-center max-[800px]:items-center flex-col mt-[90px] ">
        {!show && (
          <div className="w-full flexCenter flex-col  ">
            <h2 className="text-[rgb(217,179,109)]  text-center w-[90%] max-[400px]:w-[95%] mb-6 text-[32px] max-[400px]:text-2xl max-[400px]:mb-2 font-semibold">
              {data[counter].questions}
            </h2>
            <div className="flexCenter flex-wrap   ">
              {data[counter].answer.map((e, ii) => (
                <div
                  onClick={clickHandler}
                  key={ii * 4}
                  className=" my-2 cursor-pointer mx-1 w-[80%] max-[400px]:w-[95%] max-w-[290px] h-[50px] text-center  text-white bg-[#D9B36D] px-5 flexCenter rounded-md text-sm sm:hover:bg-gray-400 duration-200 shadow-md shadow-black"
                >
                  {e}
                </div>
              ))}
            </div>
          </div>
        )}
        {show && (
          <div className="flexCenter flex-col">
            <h2 className="text-[#D9B36D] text-[32px] font-semibold">
              RODE E GANHE!
            </h2>
            <div className="  w-full  text-xs mt-2 mb-4 tracking-wider text-white text-center">
              <p>Gire a roda e tenha a chance de ganhar um prêmio!</p>
            </div>
            <button
              onClick={spinHandler}
              className=" capitalize my-6  text-white bg-[#D9B36D] px-16 py-1 rounded-full text-sm sm:hover:bg-gray-300 duration-200 shadow-sm shadow-black"
            >
              gire a roda!
            </button>
          </div>
        )}
      </div>
      <div className=" w-1/2 h-screen max-[800px]:h-fit  max-[800px]:w-full flex justify-center items-center -mt-5 max-[800px]:-ml-8  max-[550px]:-ml-0">
        <Spin style={number} />
      </div>
      {cong && (
        <div className=" w-screen h-screen fixed top-0 left-0 z-50">
          <Cong number={number} />
        </div>
      )}
    </div>
  );
};

export default Quiz;
