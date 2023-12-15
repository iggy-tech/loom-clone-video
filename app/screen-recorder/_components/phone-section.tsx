import Image from "next/image";

import { Button } from "@/components/ui/button";

const PhoneSection = () => {
    return ( 
    <div className="py-40 flex justify-center flex-col px-10">
        <div className="md:flex justify-center">
       
            <Image
                src="/images/undraw-2.svg"
                alt="image"
                width={1920}
                height={1080}
                className="
                w-3/4
                md:w-1/3
                mx-auto
                md:mx-0
                
                "
              />
              <div className="md:w-1/3 pt-16 md:pt-10">
                <div className="text-[#2b1c50] md:text-6xl text-4xl font-medium text-center">
                    Bird for iOS and Android
                </div>
                <div className="md:text-xl text-center text-[#6c6684] leading-8 md:leading-10 font-light py-10">
                Bird is available for iOS devices (iOS version 15+), 
                and Android devices (8.0 Oreo and above). On both devices, 
                you can easily record your screen and voice. 
                Simply download the Bird screen recorder app for your device.
                </div>

                <Button className="
                items-center
                flex
                font-light
                md:text-lg
                mt-6
                rounded-[40px]
                border-4
                border-indigo-400/90
                py-6
                bg-[#565add]
                hover:scale-110
                hover:shadow-indigo-500
                transition-all
                duration-300
                shadow-md
                mx-auto

                ">
                    Download Now
                    </Button>

              </div>
      

        </div>

    </div> );
}
 
export default PhoneSection;