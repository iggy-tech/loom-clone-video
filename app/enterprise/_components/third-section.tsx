import Image from "next/image";

const ThirdSection = () => {
  return (
    <div className="md:py-40 bg-[#111019]">
      <div className="md:w-5/6 md:rounded-[80px] bg-[#2b1c50] md:mx-auto">
        <div className="py-20 md:py-40 px-10">
          <div className="md:flex md:px-20 md:space-x-20 md:space-y-0 items-center justify-center">
            <div className="flex md:w-1/2">
              <div className="flex flex-col text-center">
                <div className="md:text-7xl text-4xl text-[#eff0ff]">
                  Communicate faster with async video
                </div>
                <div className="text-xl md:text-3xl text-[#d1d1f7] py-6">
                    Async video helps organizations communicate faster & build culture
                </div>
              </div>
            </div>

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
          </div>

          <div className="md:flex items-center md:pt-20 justify-center md:justify-evenly space-y-10 md:space-y-0">
            <div>
                <div className="md:text-3xl pb-4 text-lg text-[#eff0ff] font-medium">
                    Save time
                </div>
                <div className="w-96 text-[#d1d1f7] text-sm leading-6">
                Teams can communicate more efficiently without typing long emails, 
                scheduling meetings, or trying to work across time zones.

                </div>
            </div>

            <div>
                <div className="md:text-3xl pb-4 text-lg text-[#eff0ff] font-medium">
                Communicate clearly
                </div>
                <div className="w-96 text-[#d1d1f7] text-sm leading-6">
                Async video captures context, tone, and personality in detail. 
                Distributed teams can preserve the true meaning of their message.

                </div>
            </div>

            <div>
                <div className="md:text-3xl pb-4 text-lg text-[#eff0ff] font-medium">
                Deepen culture
                </div>
                <div className="w-96 text-[#d1d1f7] text-sm leading-6">
                Make it effortless for anyone in your organization to share ideas, 
                introduce themselves, 
                and build community with fellow teammates using async video.

                </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
