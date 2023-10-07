'use client';
import React, { useState } from 'react';
import Spin from './Spin';
import { sessionState, setA } from './Session';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import axios from 'axios';
import Footer from './Footer';
const EnterEmail = () => {
  const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_DOMAIN;
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [check, setCheck] = useState(true);
  const [emptyEmail, setEmptyEmail] = useState(false);
  const [emptycheck, setEmptyCheck] = useState(false);
  const [btnStyle, setBtn] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = async () => {
    try {
      await axios.post(`${SERVER_URL}/api/email/send-admin`, {
        email,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const checkBox = document.getElementById('myCheck');
    if (email.length === 0) {
      setEmptyEmail(true);
    } else {
      setEmptyEmail(false);
    }
    if (checkBox.checked == false) {
      setEmptyCheck(true);
    } else {
      setEmptyCheck(false);
    }
    if (email.trim().length !== 0 && checkBox.checked == true) {
      setLoading(true);
      localStorage.setItem('email', email);
      await sendEmail();
      setA(true);
      router.push('/quiz');
    }
  };

  return (
    <div className=" w-[960px]   max-lg:w-[90%] m-auto flex justify-center items-center    max-[800px]:flex-col max-[800px]:w-full ">
      <div className=" flex justify-start   w-[600px] max-[800px]:w-[93%] max-[800px]:justify-center ">
        <div className="w-[350px] max-[380px]:w-[90%] relative  flexCenter  max-[800px]:justify-center flex-col mt-[90px] ">
          <h2 className=" uppercase max-[800px]:mt-20 text-[#D9B36D] text-center text-3xl max-sm:text-2xl w-full font-semibold">
            Teste de personalidade!
          </h2>
          <div className="  text-xs mt-5 mb-5 tracking-wider text-white text-center">
            <p>Isso é sobre você.</p>
            <p className=" leading-6">
              Não há respostas certas ou erradas, então siga a sua intuição!
            </p>
          </div>
          <form
            onSubmit={handleSubmit}
            className=" w-full flexCenter flex-col "
          >
            <input
              type="email"
              name="Email"
              placeholder="Digite Seu E-mail"
              className=" w-[350px] max-[380px]:w-full m-auto mt-5   text-lg placeholder:text-white  p-3 px-4 text-white  outline-none border-4 border-[#D9B36D] bg-[rgba(35,31,32,1)] "
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setEmptyEmail(false);
              }}
            />
            {emptyEmail && (
              <div className="  text-xs tracking-wide text-white flex items-center justify-start w-full">
                <span className="text-red-500 text-lg pr-1">*</span> Email is
                required
              </div>
            )}
            <div className=" mt-4 text-[#D9B36D] flex items-center text-xs  justify-start w-full ">
              <input
                id="myCheck"
                type="checkbox"
                className=" cursor-pointer "
                defaultChecked={true}
                onChange={(e) => {
                  setCheck(!check);
                  setEmptyCheck(false);
                }}
              />
              <p className=" ml-2 capitalize  text-[11px] ">
                Eu aceito os termos e condições
              </p>
            </div>
            {emptycheck && (
              <div className="  mt-1 text-xs tracking-wide text-white flex items-center justify-start w-full">
                <span className="text-red-500 text-lg pr-1">*</span> Aceite os
                Termos e Condições para participar
              </div>
            )}
            <div>
              <button
                onClick={() => setBtn(true)}
                type="submit"
                className={` my-6  text-white bg-[#D9B36D] w-[160px] py-1  rounded-full text-sm sm:hover:bg-gray-300 duration-200 shadow-md shadow-black ${
                  btnStyle && 'bg-gray-30 shadow-none duration-300 '
                } `}
              >
                Iniciar
                {loading && (
                  <div
                    style={{ borderTopColor: 'transparent' }}
                    className="w-6 h-6 border-4 border-white rounded-full animate-spin inline-flex ml-2 py-0 my-0 -mb-2"
                  ></div>
                )}
              </button>
            </div>
          </form>
          <div className=" flexCenter   duration-200 text-[10px]  text-[#D9B36D] ">
            <Link
              href="https://sementy.store/policies/terms-of-service"
              className="mx-2 border-[#D9B36D] border-b-[1px] sm:hover:text-gray-300 cursor-pointer sm:hover:border-slate-300"
            >
              Termos de Serviço
            </Link>
            <Link
              href=" https://sementy.store/policies/privacy-policy"
              className="mx-2 border-[#D9B36D] border-b-[1px] sm:hover:text-gray-300 cursor-pointer sm:hover:border-slate-300"
            >
              Política de Privacidade
            </Link>
          </div>
        </div>
      </div>
      <div className=" w-1/2 max-[800px]:w-full flex justify-center items-center max-[800px]:-ml-8  max-[550px]:-ml-0">
        <Spin />
      </div>
    </div>
  );
};

export default EnterEmail;
