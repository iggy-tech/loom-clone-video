import { Check } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const SecondSection = () => {
  return (
    <div
      className="
         flex
         items-center
         justify-center
         "
    >
      <div
        className="
            w-full
            md:w-5/6
            md:rounded-[80px]
            bg-[#2b1c50]
            "
      >
        <div className="md:py-40">
          <div className="md:flex md:px-20 px-5 md:space-x-20 md:space-y-0">
            <div className="md:w-1/2">
              <Image
                src="/images/undraw-2.svg"
                alt="image"
                width={1920}
                height={1080}
                className="object-cover
                            rounded-md
                            w-full
                            p-10
                            
                            "
              />
            </div>

            <div
              className="
                        text-white
                        flex
                        space-y-10
                        md:w-1/2
                        
                        
                        "
            >
              <div className="md:space-y-10 flex flex-col px-4 py-10">
                <div className="text-2xl md:text-3xl">NEW!</div>
                <div className="text-5xl md:text-7xl pb-4 md:pb-0">Bird AI</div>
                <div className="text-xl md:text-3xl w-5/6">
                  Record better, faster video messages, without lifting a finger
                </div>
                <div className="md:flex pt-10 md:py-10">
                  <div className="space-y-10">
                    <div className="flex items-center gap-4">
                      <Check className="text-3xl text-indigo-500" />
                      <span className="text-xl">Auto Titles</span>
                    </div>

                    <div className="flex items-center gap-4">
                      <Check className="text-3xl text-indigo-500" />
                      <span className="text-xl">Auto Summaries</span>
                    </div>

                    <div className="flex items-center gap-4">
                      <Check className="text-3xl text-indigo-500" />
                      <span className="text-xl">Auto Chapters</span>
                    </div>
                  </div>

                  <div className="space-y-10 py-10 md:py-0 md:ml-40">
                    <div className="flex items-center gap-4">
                      <Check className="text-3xl text-indigo-500" />
                      <span className="text-xl">Auto Tasks</span>
                    </div>

                    <div className="flex items-center gap-4">
                      <Check className="text-3xl text-indigo-500" />
                      <span className="text-xl">Filler word removal</span>
                    </div>

                    <div className="flex items-center gap-4">
                      <Check className="text-3xl text-indigo-500" />
                      <span className="text-xl">Silence Removal</span>
                    </div>
                  </div>
                </div>

                <Button
                className="
                text-md
                font-light
                w-40
                rounded-[40px]
                border-4
                border-indigo-400/90
                py-6
                bg-[#565add]
                hover:scale-110
                hover:shadow-indigo-300
                transition-all
                duration-300
                shadow-md
                
                ">
                    Get Bird AI
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
