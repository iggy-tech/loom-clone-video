import SliderOne from "@/app/(landing-page)/_components/slider/_components/slider-one";

import { Download } from "lucide-react";

const Slider = () => {
  return (
    <div className="pt-20 md:pt-40">
      <div className="text-[#2b1c50] md:w-3/5 mx-auto text-center flex justify-center items-center md:text-5xl text-2xl px-10 font-medium">
        More than 21 million people across 120,000 companies choose Bird
      </div>

      <div className="pt-10 mb-20 md:pb-0 items-center justify-center flex">
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
                   md:py-6
                   py-4
                   bg-[#565add]
                     hover:scale-110
                        transition-all
                        duration-300
                        shadow-md
                        hover:shadow-indigo-300

                   
                   "
        >
          <div className="flex items-center justify-between px-6 gap-4">
            <Download className="w-4 h-4 md:w-6 md:h-6" />
            <div className="text-lg">Get Bird for free</div>
          </div>
        </div>
      </div>

      <SliderOne />
    </div>
  );
};

export default Slider;
