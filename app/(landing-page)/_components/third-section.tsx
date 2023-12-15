import Image from "next/image";

import { Button } from "@/components/ui/button";

const ThirdSection = () => {
  return (
    <div className="py-20 items-center flex flex-col justify-center">
      <div className="px-12">
        <div
          className="
            text-[#2b1c50]
            md:text-center
            flex
            md:justify-center
            items-center
            text-3xl
            md:text-6xl
            font-medium
            "
        >
          The easiest screen recorder you&apos;ll ever use
        </div>

        <div
          className="
            pt-6 
            py-16 
            md:pb-24
             text-[#3d2e7c] 
             text-xl
              md:text-3xl
               font-light
                items-center
                flex
                 justify-center"
        >
          Record in a few clicks. Share anywhere with a link. No download
          required.
        </div>
      </div>

      <div className="items-center justify-center flex space-x-20">
        <div className="w-full md:w-5/6 md:rounded-[80px] bg-[#eff0ff]">
          <div className="md:py-40 py-16">
            <div className="md:flex md:px-20 md:gap-20 md:space-y-0 flex-row-reverse">
              <div className="text-2xl md:text-4xl items-center flex w-full md:w-1/2 order-2 md:order-1">
                <div className="flex space-x-10 w-full">
                  <div className="hidden rounded-full bg-[#ffedec] h-6 w-6 p-4 md:flex justify-center items-center">
                    <div className="bg-rose-500 rounded-full p-2 animate-pulse duration-1000"></div>
                  </div>

                  <div>
                    <div
                      className="
                                        text-[#2b1c50]
                                        font-medium
                                        leading-normal
                                        w-2/3
                                        "
                    >
                      Lightning fast screen recording
                    </div>

                    <div className="text-lg text-[#3d2e7c] md:leading-10 font-light w-5/6 py-4">
                      Easily record your screen and camera. Record on any device
                      using Bird&apos;s Chrome extension, desktop app or mobile
                      app.
                    </div>
                    <Button
                      className="
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
                                        
                                        "
                    >
                      Download Now
                    </Button>
                  </div>
                </div>
              </div>

                <div className="md:w-1/2 mb-10 md:mb-0 order-1 p-10 md:p-0">
                <Image
                src="/images/undraw-2.svg"
                alt="image"
                width={1920}
                height={1080}
                className="
                object-cover
                rounded-md
                w-full
                p-10
                       
                            
                            "
              />

                </div>


            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
