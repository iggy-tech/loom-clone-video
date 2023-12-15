import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CheckCircle2, MousePointerSquareDashed } from "lucide-react";

const FourthSection = () => {
  return (
    <div className="md:pt-10 pb-32 px-10">
      <div
        className="
        text-[#111019]
        md:text-center
        flex
        justify-center
        items-center
        md:text-6xl 
        text-4xl
        font-medium
        pb-10
        md:pb-20
        "
      >
        So much more than a screen recorder
      </div>

      <div className="md:flex items-center justify-center">
        <div className="md:w-2/5 bg-[#b2b3f1] rounded-[60px] md:p-20">
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
        <div className="pt-10 md:ml-20 md:w-1/3">
          <div className="flex gap-6">
            <div className="hidden bg-[#d1d1f7] w-14 h-14 rounded-full md:flex items-center justify-center">
              <MousePointerSquareDashed className="text-6xl text-[#2b1c50]" />
            </div>

            <div className="w-full md:w-96">
              <div className="text-[#111019] font-medium leading-normal md:text-4xl text-2xl">
                Share or embed video anywhere you work
              </div>
              <div className="md:text-xl text-[#6c6684] leading-8 md:leading-10 font-light pt-6">
                From Google Workspace to Slack, Bird videos seamlessly integrate
                with hundreds of tools you use every day.
              </div>
              <Button
                className="
                md:text-lg
                mt-6
                rounded-[40px]
                text-[#4b42ad]
                font-medium
                md:py-6
                bg-[#eff0ff]
                hover:scale-110
                hover:shadow-indigo-500
                transition-all
                duration-300
                shadow-md

                
                "
              >
                Start sharing
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center md:w-5/6 md:pl-10 md:mx-auto">
        <div className="flex flex-col-reverse md:flex-row md:mx-auto md:space-x-40 items-center justify-center">
          <div>
            <div className="flex gap-6">
              <div className="bg-[#d1d1f7] w-14 h-14 rounded-full hidden md:flex items-center justify-center">
                <CheckCircle2 className="text-6xl text-[#2b1c50]" />
              </div>
              <div className="md:w-96">
                <div className="text-[#111019] font-medium leading-normal text-xl md:text-4xl">
                  Interactive videos improve async collaboration
                </div>
                <div className="md:text-xl text-[#6c6684] leading-8 md:leading-10 font-light pt-6">
                  Achieve your goals faster when you add tasks, CTAs, comments
                  and emojis to your video. Transcripts and captions in 50+
                  languages enable remote teams to connect on their own time.
                </div>

                <Button
                  className="
                            md:text-lg
                            mt-6
                            rounded-[40px]
                            text-[#4b42ad]
                            font-medium
                            md:py-6
                            bg-[#eff0ff]
                            hover:scale-110
                            hover:shadow-indigo-500
                            transition-all
                            duration-300
                            shadow-md


                            
                            "
                >
                  Connect over video
                </Button>
              </div>
            </div>
          </div>

          <div className="mb-10
           md:mb-0 
           order-1
            mt-10 
            p-10
             md:items-center
              bg-[#eff0ff]
               rounded-[60px]">
        
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

        <div className="pt-10 md:flex items-center justify-center">
            <div className="md:w-2/5 bg-[#b2b3f1] rounded-[60px] md:p-20">
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

            <div className="pt-20 md:ml-20 md:w-1/3">
                <div className="flex gap-6">
                    <div className="hidden
                     bg-[#d1d1f7]
                      w-14
                       h-14 
                       rounded-full
                        md:flex
                         items-center 
                         justify-center">
                            <MousePointerSquareDashed className="text-6xl text-[#2b1c50]" />

                    </div>
                    <div className="w-full md:w-96">
                        <div className="text-[#111019] font-medium leading-normal md:text-4xl text-2xl">
                            Add a personal touch to your videos
                        </div>
                        <div className="md:text-xl text-[#6c6684] leading-8 md:leading-10 font-light pt-6">
                            From Google Workspace to Slack, Bird videos seamlessly
                             integrate with hundreds of tools you use every day.

                            </div>

                            <Button className="
                            md:text-lg
                            mt-6
                            rounded-[40px]
                            text-[#4b42ad]
                            font-medium
                            md:py-6
                            bg-[#eff0ff]
                            hover:scale-110
                            hover:shadow-indigo-500
                            transition-all
                            duration-300
                            shadow-md
                            "
                >
                  Start sharing
                </Button>

                    </div>

                </div>

            </div>

        </div>

    </div>
  );
};

export default FourthSection;
