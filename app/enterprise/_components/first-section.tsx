
import { MessageCircle } from "lucide-react";

const FirstSection = () => {
    return ( 
    <div className="md:py-20 py-10 bg-[#111019] px-10">
        <div className="
        md:text-center
        md:justify-center
        items-center
        flex
        flex-col

        ">
            <div className="
            text-5xl
            md:text-7xl
            md:justify-center
            flex
            font-medium
            pt-16
            pb-10
            text-[#f1f0f3]
            ">
                Companies work smarter with Bird
            </div>
            <p className="
            text-xl
            md:text-3xl
            font-light
            md:w-1/2
            md:mx-auto
            text-[#bbb6c6]
            leading-normal
            ">
                Bird&apos;s enterprise-grade platform lets 
                organizations securely communicate using async video.
            </p>

            <div className="
            mt-20
            flex
            items-center
            justify-between
            gap-4
            bg-[#565add]
            text-white
            px-6
            py-4
            rounded-full
            
            ">
                <MessageCircle className="w-6 h-6" />
                <div className="text-lg">Contact Sales</div>
            </div>

            <div className="pt-28">
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