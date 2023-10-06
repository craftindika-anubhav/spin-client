import Image from "next/image";
import React from "react";
import image from "@/public/shadow.png";
import stack from "@/public/spin_m.png";

import g1 from "@/public/gift/1.png";
import g2 from "@/public/gift/2.png";
const coun = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
const Spin = ({ style }) => {
  return (
    <div className=" relative  h-[450px] w-[450px] max-[550px]:w-[350px] max-[550px]:h-[350px] mian max-[380px]:w-[250px] max-[380px]:h-[250px]  mt-20  max-[380px]:mt-16">
      <Image
        src={stack}
        alt="stack"
        width={100}
        height={50}
        className=" -right-8 max-[550px]:w-[80px] stack max-[380px]:w-[60px] top-[50%] translate-y-[-50%] absolute z-40 max-[550px]:top-3 max-[550px]:right-[40%] max-[550px]:-rotate-90"
      />
      <div
        style={{
          transform: "rotate(" + style + "deg)",
        }}
        className="relative h-full w-full spinWheel "
      >
        <div className="spin w-full h-full bg-white rounded-full relative overflow-hidden ">
          <div className="one h-1/2">
            <Image
              src={g2}
              alt="gift"
              width={80}
              height={80}
              className=" g_image "
            />
          </div>
          <div className="tow  ">
            <Image
              src={g1}
              alt="gift"
              width={80}
              height={80}
              className=" g_image "
            />
          </div>
          <div className="three">
            <Image
              src={g2}
              alt="gift"
              width={80}
              height={80}
              className=" g_image "
            />
          </div>
          <div className="four">
            <Image
              src={g1}
              alt="gift"
              width={80}
              height={80}
              className=" g_image "
            />
          </div>
          <div className="five">
            <Image
              src={g2}
              alt="gift"
              width={80}
              height={80}
              className=" g_image "
            />
          </div>
          <div className="six">
            <Image
              src={g1}
              alt="gift"
              width={80}
              height={80}
              className=" g_image "
            />
          </div>
          <Image
            src={image}
            alt="shadow"
            fill
            sizes="w-full h-full"
            className=" object-fill opacity-60"
          />
        </div>
        <div className=" absolute top-0 dottt  w-full h-full z-20 border-[30px] max-[550px]:border-[24px] max-[380px]:border-[18px] border-[#d9b36d] rounded-full">
          {coun.map((ele, i) => (
            <div
              style={{
                "--i": `${i}`,
              }}
              key={i}
              className={` w-5 h-5 img_dot max-[550px]:w-4 max-[550px]:h-4 max-[380px]:w-3 max-[380px]:h-3 rot absolute top-[85px] max-[550px]:top-[50px] max-[380px]:top-[21px]  left-0 max-[550px]:left-1 max-[380px]:left-[14.3px] rounded-full bg-white   border-2 shadow-md shadow-black border-yellow-200`}
            ></div>
          ))}
        </div>
        <div className=" absolute top-[50%] left-[50%] p-[6px] max-[380px]:p-1 translate-x-[-50%] translate-y-[-50%] w-[86px] h-[86px] cr max-[550px]:w-[70px] max-[550px]:h-[70px] max-[380px]:w-[48px] max-[380px]:h-[48px] z-20  bg-yellow-500 rounded-full">
          <div className="w-full h-full  bg-yellow-400 border-[4px] max-[380px]:border-2  border-yellow-100 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Spin;
