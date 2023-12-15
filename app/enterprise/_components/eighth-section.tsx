import { Link, PlayCircle, Zap } from "lucide-react";

const EighthSection = () => {
  return (
    <div className="py-40 bg-[#e3f3ff]">
      <div className="md:w-5/6 md:rounded-[80px] bg-[#1b224b] mx-auto">
        <div className="py-16 px-10 pb-32">
          <div className="md:flex md:px-20 md:space-x-20 md:space-y-0 items-center justify-center">
            <div className="text-[#e3f3ff] flex space-y-10">
              <div className="space-y-10 flex flex-col items-center justify-center">
                <div className="text-4xl md:text-7xl md:text-center md:w-2/3 pt-20">
                  Bird meets your teams where they&apos;re at
                </div>
              </div>
            </div>
          </div>

          <div className="md:flex items-center justify-center text-white md:space-x-20 md:pt-20">
            <div className="py-4">
                <div className="flex items-center pb-4 gap-4">
                    <div className="bg-[#f1f0f3] h-12 w-12 items-center justify-center hidden md:flex rounded-full">
                        <Link className="text-4xl text-[#1b224b]" />
                    </div>
                    <div className="md:text-4xl text-md text-[#eff0ff]">Team Updates</div>
                </div>
                <div className="text-[#d1d1f7] text-lg font-light leading-10 w-5/6">
                Send a pitch video screen capture to showcase a product or service 
                and keep yourself
                 front and center with a picture-in-picture presentation format.

                </div>
            </div>

            <div className="py-4">
                <div className="flex items-center pb-4 gap-4">
                    <div className="bg-[#f1f0f3] h-12 w-12 items-center justify-center hidden md:flex rounded-full">
                        <PlayCircle className="text-4xl text-[#1b224b]" />
                    </div>
                    <div className="md:text-4xl text-md text-[#eff0ff]">Team Updates</div>
                </div>
                <div className="text-[#d1d1f7] text-lg font-light leading-10 w-5/6">
                Send a pitch video screen capture to showcase a product or service 
                and keep yourself
                 front and center with a picture-in-picture presentation format.

                </div>
            </div>

            <div className="py-4">
                <div className="flex items-center pb-4 gap-4">
                    <div className="bg-[#f1f0f3] h-12 w-12 items-center justify-center hidden md:flex rounded-full">
                        <Zap className="text-4xl text-[#1b224b]" />
                    </div>
                    <div className="md:text-4xl text-md text-[#eff0ff]">Team Updates</div>
                </div>
                <div className="text-[#d1d1f7] text-lg font-light leading-10 w-5/6">
                Send a pitch video screen capture to showcase a product or service 
                and keep yourself
                 front and center with a picture-in-picture presentation format.

                </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default EighthSection;
