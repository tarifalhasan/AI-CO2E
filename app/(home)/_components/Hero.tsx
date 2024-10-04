import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="min-h-screen xl:min-h-[714px] bg-[url('/images/hero.webp')] bg-cover bg-no-repeat bg-center relative overflow-hidden flex items-center">
      <div className="container w-full gap-10 flex flex-col lg:flex-row lg:items-center">
        <div className="w-full lg:w-[30%]">
          <div>
            <h2 className="text-[84px] font-bold font-overlock">PREPARE</h2>
            <Image
              src={"/images/Decore.svg"}
              alt="Decore"
              width={377}
              height={12}
              className=" -mt-4 ml-10"
            />
          </div>
          <div>
            <h3 className="text-2xl font-poppins text-[#EF3D38] font-bold uppercase text-right mr-10 mt-1 xl:text-3xl">
              TO DISCOVER
            </h3>
          </div>
        </div>
        <div className="w-full lg:w-[70%] space-y-8 xl:space-y-12">
          <div className="space-y-4">
            <p className="text-lg lg:text-xl font-sans font-normal text-black">
              We delve into the intricacies of coupling engine-vessel dynamics,
              leveraging real-world data to drive AI-based predictions. Our aim
              is to bridge the gap between traditional engineering models and
              the potential of machine learning, unlocking deeper insights into
              the environmental impact of maritime activities.
            </p>
            <p className="text-lg lg:text-xl font-sans font-normal text-black">
              Join us on this journey as we explore the fusion of engineering
              expertise and AI innovation to revolutionize carbon emissions
              estimation in the maritime domain.
            </p>
          </div>
          <Link passHref legacyBehavior href={"#ongoing_research"}>
            <Button
              style={{
                boxShadow: "0px 20px 35px 0px rgba(241, 165, 1, 0.15)",
              }}
              className="bg-[#ECEFF1] px-11 text-base xl:text-2xl font-overlock  hover:bg-[#ECEFF1]/80 rounded-[10px] h-[60px] text-black"
            >
              Explore
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
