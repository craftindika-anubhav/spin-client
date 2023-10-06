"use client";
import React, { useState } from "react";
import Spin from "./Spin";
import { useRouter } from "next/navigation";
import Link from "next/link";
const EnterEmail = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [check, setCheck] = useState(false);
  const [emptyEmail, setEmptyEmail] = useState(false);
  const [emptycheck, setEmptyCheck] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const checkBox = document.getElementById("myCheck");
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
      router.push("/quiz");
    }
  };
  return (
    <div className=" w-[960px]  max-lg:w-[90%] m-auto flex justify-between items-center  max-[800px]:flex-col max-[800px]:w-full ">
      <div className=" flex justify-start  w-[600px] max-[800px]:w-[93%] max-[800px]:justify-center ">
        <div className="w-[350px] max-[380px]:w-[90%] relative  flexCenter  max-[800px]:justify-center flex-col mt-[90px] ">
          <h2 className=" uppercase text-[#D9B36D] text-[32px] font-semibold">
            Teste de personalidade!
          </h2>
          <div className=" font-serif text-xs mt-5 mb-5 tracking-wider text-white text-center">
            <p>Isso é sobre você.</p>
            <p className=" leading-6">
              Não há respostas certas ou erradas, então siga a sua intuição!
            </p>
          </div>
          <form onSubmit={handleSubmit} className=" w-full flexCenter flex-col">
            <input
              type="email"
              name="Email"
              placeholder="Digite Seu E-mail"
              className=" w-[350px] max-[380px]:w-full m-auto mt-5 -ml-1  text-lg placeholder:text-white font-sans p-3 px-4 text-white  outline-none border-4 border-[#D9B36D] bg-[rgba(35,31,32,1)] "
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setEmptyEmail(false);
              }}
            />
            {emptyEmail && (
              <div className=" font-sans text-xs tracking-wide text-white flex items-center justify-start w-full">
                <span className="text-red-500 text-lg pr-1">*</span> Email is
                required
              </div>
            )}
            <div className=" mt-4 text-[#D9B36D] flex items-center text-xs  justify-start w-full ">
              <input
                id="myCheck"
                type="checkbox"
                className=" cursor-pointer "
                onChange={(e) => {
                  setCheck(!check);
                  setEmptyCheck(false);
                }}
              />
              <p className=" ml-2 capitalize font-serif text-[11px] ">
                Eu aceito os termos e condições
              </p>
            </div>
            {emptycheck && (
              <div className=" font-sans mt-1 text-xs tracking-wide text-white flex items-center justify-start w-full">
                <span className="text-red-500 text-lg pr-1">*</span> Aceite os
                Termos e Condições para participar
              </div>
            )}
            <div>
              <button
                type="submit"
                className=" my-6 font-serif text-white bg-[#D9B36D] px-16 py-1 rounded-full text-sm hover:bg-gray-300 duration-200 shadow-sm shadow-black"
              >
                Enviar
              </button>
            </div>
          </form>
          <div className="border-[#D9B36D] hover:text-gray-300 cursor-pointer hover:border-slate-300 duration-200 text-[10px] font-serif text-[#D9B36D] border-b-[1px]">
            <Link href="https://sementy.store/policies/terms-of-service">
              Termos de serviço
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
