import { ExternalLink } from "lucide-react";

const NinthSection = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="md:w-5/6 md:rounded-[80px] bg-[#111019] items-center justify-center flex">
        <div className="md:py-40 py-20 flex flex-col">
          <div className="flex text-white flex-col justify-center items-center space-y-10">
            <div className="text-4xl md:text-7xl text-center">
              Bird for Enterprise
            </div>
            <div className="text-xl text-[#bbb6c6] md:text-3xl text-center px-10 md:w-1/2 font-light">
              Bird for Enterprise helps teams securely manage and organize async
              video communication at scale
            </div>

            <div>
              <div
                className="
                        flex
                        text-md
                        font-light
                        rounded-[40px]
                        border-4
                        border-indigo-400/90
                        px-8
                        py-4
                        bg-[#565add]
                        hover:scale-110
                        hover:shadow-indigo-500
                        transition-all
                        duration-300
                        shadow-md

                        "
              >
                <div className="flex gap-2">
                  <ExternalLink className="text-sm text-white" />
                  <div>Learn more</div>
                </div>
              </div>
            </div>
          </div>

          <video className="
          w-2/3
          mt-20
          rounded-[40px]
          mx-auto
          shadow-indigo-400
            shadow-2xl
          
          "
          autoPlay
          muted
          loop
          >
          <source src = "/videos/hero-1.mp4" type="video/mp4"/>

          </video>
        </div>
      </div>
    </div>
  );
};

export default NinthSection;
