import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

const OngoingResearch = () => {
  return (
    <div id="ongoing_research" className="py-10 xl:py-20 container">
      <div>
        <h2 className="text-4xl lg:text-5xl font-bold font-overlock text-center">
          Ongoing Research
        </h2>
      </div>
      <div className="grid pt-10 xl:pt-20 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        <Card className="relative pt-8 bg-[#ECEFF1]">
          <CardContent>
            <Image
              className=" block max-w-[172px] max-h-[111px] w-full object-cover mx-auto"
              src={"/images/Data Driven AI Modelling.png"}
              alt="sdsd"
              width={172}
              height={111}
              style={{
                borderRadius: "18px 5px 10px 5px",
              }}
            />
          </CardContent>
          <CardHeader className="space-y-4">
            <CardTitle className="text-center font-overlock xl:text-xl font-normal">
              Data Driven AI Modelling
            </CardTitle>
            <CardDescription className="t text-black xl:text-base font-normal leading-[162.5%] font-sans">
              we are leveraging the power of data by utilizing advanced machine
              learning models to uncover valuable insights, predict trends, and
              facilitate more informed decision-making. These models analyze
              large datasets with remarkable precision, turning raw information
              into actionable intelligence that drives impactful outcomes.
            </CardDescription>
          </CardHeader>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="74"
            height="108"
            viewBox="0 0 74 108"
            className="absolute top-4 hidden xl:block -left-8"
            fill="none"
          >
            <path d="M74 54L0.5 107.694L0.5 0.306423L74 54Z" fill="#EF3D38" />
          </svg>
        </Card>
        <Card className="relative pt-8 bg-[#ECEFF1]">
          <CardContent>
            <Image
              className=" block max-w-[172px] max-h-[111px] w-full object-cover mx-auto"
              src={"/images/Engine - Vessel Physics Modelling.png"}
              alt="sdsd"
              width={172}
              height={111}
              style={{
                borderRadius: "18px 5px 10px 5px",
              }}
            />
          </CardContent>
          <CardHeader className="space-y-4">
            <CardTitle className="text-center font-overlock xl:text-xl font-normal">
              Engine - Vessel Physics Modelling
            </CardTitle>
            <CardDescription className="t text-black xl:text-base font-normal leading-[162.5%] font-sans">
              we are developing a precise framework that simulates the complex
              interactions between maritime engines and vessels. By
              incorporating physics-based principles, this approach provides
              deeper insights into the dynamic behaviors, efficiencies, and
              interdependencies of marine propulsion systems, pushing forward
              our understanding of maritime engineering.
            </CardDescription>
          </CardHeader>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="74"
            height="108"
            viewBox="0 0 74 108"
            className="absolute top-4 hidden xl:block -left-8"
            fill="none"
          >
            <path d="M74 54L0.5 107.694L0.5 0.306423L74 54Z" fill="#EF3D38" />
          </svg>
        </Card>
        <Card className="relative pt-8 bg-[#ECEFF1]">
          <CardContent>
            <Image
              className=" block max-w-[172px] max-h-[111px] w-full object-cover mx-auto"
              src={"/images/Emission Estimation Methodology.png"}
              alt="Emission Estimation Methodology"
              width={172}
              height={111}
              style={{
                borderRadius: "18px 5px 10px 5px",
              }}
            />
          </CardContent>
          <CardHeader className="space-y-4">
            <CardTitle className="text-center font-overlock xl:text-xl font-normal">
              Emission Estimation Methodology
            </CardTitle>
            <CardDescription className="t text-black xl:text-base font-normal leading-[162.5%] font-sans">
              we are working towards a systematic approach that combines
              scientific principles and data analysis to quantify the
              environmental impact of various activities. This methodology
              employs data-driven models and factors to provide accurate
              assessments of carbon emissions, aiding in the pursuit of
              sustainable practices.
            </CardDescription>
          </CardHeader>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="74"
            height="108"
            viewBox="0 0 74 108"
            className="absolute top-4 hidden xl:block -left-8"
            fill="none"
          >
            <path d="M74 54L0.5 107.694L0.5 0.306423L74 54Z" fill="#EF3D38" />
          </svg>
        </Card>
      </div>
    </div>
  );
};

export default OngoingResearch;
