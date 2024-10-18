
import { Card, Space } from "antd";
const Booking = () => {
  const BookedData = [
    {
      title: "Salon and Film",
      desrciption: "Find fantastic salon ready products",
      owner: "Clever",
      slot: 5,
      consumer: "Anne",
      status: "pending",
    },
    {
      title: "Salon and Film",
      desrciption: "Find fantastic salon ready products",
      owner: "Clever",
      consumer: "Anne",
      slot: 5,
      status: "completed",
    },
    {
      title: "Salon and Film",
      desrciption: "Find fantastic salon ready products",
      owner: "Clever",
      consumer: "Anne",
      slot: 5,
      status: "cancelled",
    },
    {
      title: "Salon and Film",
      desrciption: "Find fantastic salon ready products",
      owner: "Clever",
      consumer: "Anne",
      slot: 5,
      status: "confirmed",
    },
  ];
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5 mt-5 m-auto w-11/12">
      
      {BookedData?.map((el: any) => {
        return (
          <Space>
            <Card
              title={
                <h1 className="text-[#030229] text-[22px] font-semibold">
                  Intertainment
                </h1>
              }
              extra={
                <p
                  className={`px-4 text-base capitalize py-1 ${
                    el?.status === "pending"
                      ? "bg-[#F19F1D1A]  text-[#F19F1D]"
                      : el?.status === "confirmed"
                      ? "bg-[#0FA91E1A]  text-[#0FA91E]"
                      : el?.status === "cancelled"
                      ? "bg-[#FA36591A]  text-[#FA3659]"
                      : el?.status === "completed"
                      ? "bg-[#605BFF80]  text-[#605BFF]"
                      : "bg-[#0FA91E80] rounded-full text-[#D0FA1E]"
                  } rounded-full`}
                >
                  {el?.status}
                </p>
              }
              style={{ width: 400 }}
            >
              <p className="text-[#030229] text-base font-normal pl-2 pt-3">
                {el?.desrciption}
              </p>
              <div className="flex justify-between">
                <div className="mt-3">
                  <p className="text-[#03022980] text-sm font-normal">
                    Provider :
                    <span className="text-[#030229] text-base pl-2">
                      {el?.owner}
                    </span>
                  </p>
                </div>
                <div className="mt-3">
                  <p className="text-[#03022980] text-sm font-normal">
                    Consumer :
                    <span className="text-[#030229] text-base pl-2">
                      {el?.consumer}
                    </span>
                  </p>
                </div>
              </div>
              <div className="mt-3">
                <p className="text-[#03022980] text-sm font-normal">
                  Date :
                  <span className="text-[#030229] text-base pl-2">
                    12. 12.2024
                  </span>
                </p>
              </div>
            </Card>
          </Space>
        );
      })}
    </div>
  );
};
export default Booking;





