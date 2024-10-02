import { Search } from "lucide-react";
import Image from "next/image";

const ShipParticulars = () => {
  const GeneralInformation = [
    {
      title: "IMO",
      value: "9113745",
    },
    {
      title: "MMSI",
      value: "244170750",
    },
    {
      title: "Length OA",
      value: "101.0 m",
    },
    {
      title: "Breadth",
      value: "18.0 m",
    },
    {
      title: "Average_Draught",
      value: "5.6 m",
    },
    {
      title: "Summer_Deadweight",
      value: "67865",
    },
    {
      title: "Gross_tonnage",
      value: "234234",
    },
    {
      title: "Year of Build",
      value: "2003",
    },
    {
      title: "Engine_Manufacturer",
      value: "MAN B&W",
    },
    {
      title: "Engine_Power",
      value: "3000 KW",
    },
  ];
  return (
    <div className="container pt-10 pb-16  grid grid-cols-12 gap-y-10 xl:gap-x-10">
      <div
        className="col-span-12 p-4 bg-[#ECEFF1] xl:col-span-3"
        style={{
          boxShadow: "0px 8px 30px 0px rgba(9, 33, 57, 0.20)",
        }}
      >
        <div>
          <h4 className="text-lg font-bold">Service</h4>
        </div>
      </div>
      <div className="col-span-12 xl:col-span-9 grid gap-10 lg:grid-cols-2">
        <div className="space-y-5">
          <div className="border-[#A6A8AB]  py-2.5 border-2 rounded-lg px-3 flex justify-between w-full">
            <input
              type="text"
              placeholder="Enter IMO *"
              className="flex-1 text-lg font-sans font-medium placeholder:text-black focus:outline-none"
            />
            <Search />
          </div>
          <div className="rounded-[12px] border border-[#DFE5F9] bg-white py-5 ">
            <div className="flex items-center px-4 gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={12}
                height={12}
                viewBox="0 0 12 12"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 0V12H0L12 0Z"
                  fill="url(#paint0_linear_1_1592)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1_1592"
                    x1="19.6897"
                    y1="9.99721"
                    x2="4.73906"
                    y2="19.4753"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#0043FF" />
                    <stop offset={1} stopColor="#A370F1" />
                  </linearGradient>
                </defs>
              </svg>
              <p className="text-base font-bold">General Information</p>
            </div>
            <ul className="">
              {GeneralInformation.map((item, index) => (
                <li
                  className="flex px-4 items-center border-b py-5 border-[#DFE5F9] justify-between"
                  key={index}
                >
                  <p className="text-sm text-[#1F263E] font-normal">
                    {item.title}
                  </p>
                  <p className="text-sm text-[#0043FF] font-normal">
                    {item.value}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="h-full">
          <div className=" h-full lg:pt-[70px]">
            <Image
              src={"/images/77e6a244ff7e8b85406e5da8919d1e5e.jpeg"}
              alt="sdsds"
              width={481}
              className=" h-full w-full object-cover rounded-[10px] lg:rounded-[30px] a"
              height={650}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShipParticulars;
