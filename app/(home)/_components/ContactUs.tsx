const ContactUs = () => {
  return (
    <section className="py-10 xl:py-20 container relative overflow-hidden ">
      <div className="h-[350px] lg:h-[398px] overflow-hidden bg-[url('/images/contact-us.png')] bg-cover bg-full bg-no-repeat bg-center w-full rounded-[20px] lg:rounded-[50px] flex-col  flex items-center justify-center gap-y-4">
        <div>
          <h2 className="text-4xl text-center xl:text-6xl text-[#E2E5E7] font-overlock font-bold">
            CHARTING A GREENER COURSE
          </h2>
        </div>
        <button
          style={{
            boxShadow: "0px 20px 35px 0px rgba(241, 165, 1, 0.15)",
            background: "rgba(128, 128, 128, 0.55)",
          }}
          className="px-6 text-base xl:text-3xl border border-white font-sans font-normal  hover:bg-[#ECEFF1]/80 rounded-[10px] h-[60px] text-white"
        >
          Contact Us
        </button>
      </div>
    </section>
  );
};

export default ContactUs;
