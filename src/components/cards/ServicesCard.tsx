import React from "react";
import { PiCrosshairSimpleThin, PiHairDryer } from "react-icons/pi";
type cardType = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    title?: any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    decription?: any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    slot?: any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onClick?:any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    price?:any
  };
const ServicesCard = ({decription,title,slot,onClick,price}:cardType) => {
  const styles = {
    border: {
      border: "0px 10px 20px 0px rgba(194, 194, 194, 0.16)",
    },
    shadow: {
      boxShadow: "1px 4px 24px 0px rgba(3, 2, 41, 0.06)",
    },
  };
  return (
    <div>
      <div className="bg-white p-5 rounded-md h-[12rem] overflow-y-auto" style={styles.shadow}>
        <div className="flex justify-between">
          <div className="w-[42px] h-[42px] rounded-full border border-[#0302299a] flex justify-center items-center content-center">
            {/* <img src="" alt="" className="w-full h-full rounded-full" />  */}
            <PiHairDryer color="#605BFF" size={30}/>
          </div>
          <div>
            <h1 className="text-[#030229] text-[22px] font-semibold">
              {title}
            </h1>
            <p className="text-[#03022980] text-sm font-normal">owner</p>
          </div>
          <div className="w-[32px] h-[32px] rounded-full  bg-[#03022928] flex justify-center items-center content-center">
            {/* <img src="" alt="" className="w-full h-full rounded-full" /> */}
            <PiCrosshairSimpleThin color=""/>
          </div>
        </div>
        <p className="text-[#030229] text-base font-normal pl-20">{decription}</p>
        <div className="flex justify-between mt-5">
            <div className="flex gap-5">
               <p>{price}</p> <p className="text-[#03022980] text-sm font-normal">slot <span className="text-[#030229] text-base">{slot}</span> </p>
            </div>
            <button className="bg-[#605BFF] text-white px-6 py-1 rounded-md h-8" onClick={onClick}>Book</button>
        </div>
      </div>
    </div>
  );
};
export default ServicesCard









