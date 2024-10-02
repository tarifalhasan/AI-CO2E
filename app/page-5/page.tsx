import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const ShipParticulars = () => {
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
        <ul className="flex flex-col pt-4 gap-y-2">
          <li>
            <Link className="flex items-center gap-x-2" href={"/"}>
              <Image
                width={30}
                height={32}
                src={"/images/icons1.svg"}
                alt="Emission using IMO"
              />
              <span className="text-base text-[#1F263E]">
                Emission using IMO
              </span>
            </Link>
          </li>
          <li>
            <Link className="flex items-center gap-x-2" href={"/"}>
              <Image
                width={28}
                height={28}
                src={"/images/icons2.svg"}
                alt="Emission using Ship Details"
              />
              <span className="text-base text-[#1F263E]">
                Emission using Ship Details
              </span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="col-span-12 xl:col-span-9 grid gap-10 lg:grid-cols-12">
        <div className="space-y-2 col-span-12 lg:col-span-4 ">
          <p className="text-xl font-overlock font-semibold text-black">
            IMO <span className="text-red-600">*</span>
          </p>
          <div className="">
            <input
              type="text"
              placeholder="Enter IMO *"
              className=" border-[#A6A8AB]  py-2.5 border-2 rounded-lg px-3 flex justify-between w-full text-lg font-sans font-medium placeholder:text-black focus:outline-none"
            />
          </div>
        </div>
        <div className="space-y-2 col-span-12 lg:col-span-4 ">
          <p className="text-xl font-overlock font-semibold text-black">
            Year Start <span className="text-red-600">*</span>
          </p>
          <div className="">
            <input
              type="text"
              placeholder="Year Start *"
              className=" border-[#A6A8AB]  py-2.5 border-2 rounded-lg px-3 flex justify-between w-full text-lg font-sans font-medium placeholder:text-black focus:outline-none"
            />
          </div>
        </div>
        <div className="space-y-2 col-span-12 lg:col-span-4 ">
          <p className="text-xl font-overlock font-semibold text-black">
            Year End <span className="text-red-600">*</span>
          </p>
          <div className="">
            <input
              type="text"
              placeholder="Year (e.g.,2002)"
              className=" border-[#A6A8AB]  py-2.5 border-2 rounded-lg px-3 flex justify-between w-full text-lg font-sans font-medium placeholder:text-black focus:outline-none"
            />
          </div>
        </div>
        <div className="col-span-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <Card>
            <CardContent className="pt-4 gap-y-5 flex flex-col items-center">
              <Button className="w-full">Estimate TE</Button>
              <div>
                <p className="text-justify font-sans text-base text-black leading-[162%]">
                  The Energy Efficiency Design Index for International Shipping
                  (EIV / EEDI) is a metric that quantifies a vessel&apos;s
                  carbon emissions per unit of transport work, typically
                  measured in grams of CO₂ per tonne-nautical mile. EIV serves
                  as a standardized measure to evaluate the energy efficiency of
                  ships, playing a critical role in promoting sustainable
                  maritime operations and reducing environmental impact.
                </p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-4 gap-y-5 flex flex-col items-center">
              <Button className="w-full">Estimate FC</Button>
              <div>
                <p className="text-justify font-sans text-base text-black leading-[162%]">
                  Fuel consumption (FC) measured in metric tonnes (m tonnes)
                  refers to the quantity of fuel used by a vessel, typically
                  expressed in metric tonnes, providing a standardized measure
                  to evaluate fuel usage over a given period or distance. This
                  metric is crucial for assessing the operational efficiency and
                  environmental impact of maritime transport.
                </p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-4 gap-y-5 flex flex-col items-center">
              <Button className="w-full">Estimate CO</Button>
              <div>
                <p className="text-justify font-sans text-base text-black leading-[162%]">
                  Carbon emissions (CE) measured in metric tonnes (m tonnes)
                  refer to the total amount of carbon dioxide (CO₂) released
                  into the atmosphere as a result of fuel combustion or other
                  industrial processes, quantified in units of metric tonnes for
                  standardization and comparative analysis, essential for
                  assessing environmental impact and regulatory compliance.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ShipParticulars;
