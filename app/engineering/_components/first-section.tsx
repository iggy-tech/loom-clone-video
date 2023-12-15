import { Check, Download } from "lucide-react";

const FirstSection = () => {
  return (
    <div className="md:py-20">
      <div className="md:text-center space-y-4 px-10">
        <div className="md:text-3xl text-xl text-[#3d2e7c] font-medium">
          Bird for Team Alignment
        </div>
        <div className="text-5xl md:text-7xl flex md:justify-center font-medium md:py-2">
          Move fast and stay connected
        </div>
        <p
          className="
            text-xl
            md:text-3xl
            font-light
            md:w-1/2
            
            md:mx-auto
            text-[#3b394e]
            leading-normal
            "
        >
          Use Bird to record asynchronous videos that help your team stay
          aligned and move faster.
        </p>

        <div className="flex gap-4 md:justify-center pt-10">
          <div className="flex">
            <div
              className="
                    text-white
                    md:w-60
                    justify-between
                    text-md
                    font-light
                    rounded-[40px]
                    border-4
                    border-indigo-400/90
                    py-4
                    md:py-6
                    bg-[#565add]
                    hover:scale-110
                    transition-all
                    duration-300
                    shadow-md
                    hover:shadow-indigo-300


                    "
            >
              <div className="flex items-center justify-center gap-4 md:justify-between px-6">
                <Download className="md:w-6 md:h-6 h-4 w-4" />
                <div className="md:text-lg text-sm">Get bird for free</div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-10 md:pt-20">
          <video
            className="
                rounded-[20px]
                md:rounded-[80px]
                shadow-indigo-400
                shadow-xl
                md:w-2/3
                mx-auto
                  
                  "
            autoPlay
            muted
            loop
          >
            <source src="/videos/hero-1.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="text-4xl md:text-7xl flex md:justify-center font-medium pt-20 md:pt-28 pb-10 md:pb-20">
            Why Teams Align with Bird

        </div>

        <div className="md:justify-center flex">
            <div className="flex flex-col space-y-6 pb-20">


                <div className="flex gap-6 items-center">
                    <div className="bg-[#e8f5e3] w-12 h-12 items-center justify-center flex rounded-full">
                        <Check className="text-4xl" />
                        </div>
                        <div className="text-xl text-[#224229] font-light">To record presentations</div>
                </div>

                <div className="flex gap-6 items-center">
                    <div className="bg-[#e8f5e3] w-12 h-12 items-center justify-center flex rounded-full">
                        <Check className="text-4xl" />
                        </div>
                        <div className="text-xl text-[#224229] font-light">To deliver better feedback</div>
                </div>

                <div className="flex gap-6 items-center">
                    <div className="bg-[#e8f5e3] w-12 h-12 items-center justify-center flex rounded-full">
                        <Check className="text-4xl" />
                        </div>
                        <div className="text-xl text-[#224229] font-light">To share knowledge</div>
                </div>

            </div>

        </div>
      </div>
    </div>
  );
};

export default FirstSection;
