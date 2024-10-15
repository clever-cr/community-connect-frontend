/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { useEffect, useState } from "react";
import ServicesCard from "../../components/cards/ServicesCard";
import { Modal } from "antd";
import CreateServicesForm from "../../components/forms/CreateServicesForm";
import { useDispatch, useSelector } from "react-redux";
import { getServices } from "../../services/businessServices/action";
// interface Location {
//   label: string;
//   value: string;
// }

const ServicesOverview = () => {
  const [serviceType, setServiceType] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const dispatch = useDispatch();
  const { service } = useSelector((state: any) => state);
  const allServices = service?.all?.service;
  console.log("all servicess", allServices);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    getServices(
      `?name=${serviceType}&location=${location}&availableStatus=available`
    )(dispatch);
  };
  useEffect(() => {
    getServices(
      `?`
    )(dispatch);
  }, []);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
const options=allServices?.map((el:any)=>{
  return{label: el?.name, value: el?.name}
})
  return (
    <div className="bg-white">
      <Modal
        title={
          <h1 className="text-[#030229] text-xl font-semibold text-center py-3">
            Book Services
          </h1>
        }
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <div>
          <CreateServicesForm />
        </div>
      </Modal>
      <div className="flex items-center justify-center mt-10">
        <form onSubmit={handleSubmit} className="w-[91%] m-auto">
          <div className="mb-4 flex gap-5 w-full">
            <div className="w-[30%]">
              <label
                htmlFor="location"
                className="text-[#030229] text-xl font-normal"
              >
                Service Type:
              </label>
              <select
                id="service"
                value={serviceType}
                onChange={(e) => setServiceType(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded h-12"
              >
                <option value="" disabled>
                  Select Service Type
                </option>
                {options?.map((loc:any) => (
                  <option key={loc.value} value={loc.value}>
                    {loc.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-4 w-[30%]">
              <label
                htmlFor="email"
                className="text-[#030229] text-xl font-normal"
              >
                Location:
              </label>
              <input
                type="location"
                id="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded h-12"
                placeholder="Enter your location"
              />
            </div>
            <div className="w-[20%] mt-[3px]">
              <div>.</div>
              <button
                type="submit"
                className=" bg-blue-500 text-white py-2 px-4 rounded h-12 w-full"
              >
              {service?.isLoading? "Searching" :'Search'}
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5 mt-5 ml-20">

        {allServices?.map((el: any) => {
          return (
            <ServicesCard
              onClick={showModal}
              title={el?.name}
              decription={el?.description}
              slot={el?.availableSlots?.map((el: any) => {
                return (
                  // <p className="flex">
                    <p className="flex">{el?.slice(0, 10)}</p>
                  // </p>
                );
              })}
              price={`${el?.price ?? 0} $`}
            />
          );
        })}
      </div>
    </div>
  );
};
export default ServicesOverview;