

import { Button } from "@/components/ui/button";
import { Chrome, Download } from "lucide-react";

const FirstSection = () => {
    return ( 
    <div className="md:py-40 py-10 bg-[#f7c8f7] px-10">
       <div className="md:text-center">
        <div className="
        text-5xl
        md:text-7xl
        flex
        justify-center
        font-medium
        pb-10
        text-[#681b58]
        ">
                The Bird Free Screen Recorder
        </div>
        <p className="
        text-xl
        md:text-3xl
        font-light
        md:w-4/5
        md:mx-auto
        text-[#681b58]
        leading-normal
        ">
            Create, edit, notate, and share videos with anyone 
            using the best screen recorder available. Bird lets 
            anyone create and share virtually any message quickly and professionally.

        </p>

        <div className="flex gap-4 md:justify-center items-center pt-10">
            <Button className="
            text-xl
            font-light
            gap-6
            hidden
            md:flex
            rounded-[60px]
            border-8
            border-indigo-400/90
            py-8
            bg-[#565add]
            hover:scale-110
            transition-all
            duration-300
            shadow-md
            hover:shadow-indigo-300
            ">
                <Chrome className="w-6 h-6" />
                Download to chrome
            </Button>

            <Button className="
            md:text-xl
            text-[#565add]
            font-medium
            md:gap-6
            gap-4
            rounded-[60px]
            border-indigo-400/90
            md:py-8
            md:px-6
            bg-[#eff0ff]
            hover:scale-110
            transition-all
            duration-300
            shadow-md
            hover:shadow-indigo-300

            "   
            >
                <Download className="md:w-6 md:h-6 h-4 w-4" />
                Get Bird for Free

            </Button>
        </div>

        <div className="pt-20 md:pt-28">
            <video
            className="
                rounded-[40px]
                 shadow-indigo-400 
                 shadow-2xl 
                 xl:w-5/6
                  xl:mx-auto"
            autoPlay
            muted
            loop
          >
            <source src="/videos/hero-1.mp4" type="video/mp4" />
          </video>
            </div>

       </div>
    </div> );
}
 
export default FirstSection;