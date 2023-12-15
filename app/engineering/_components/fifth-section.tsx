import Image from "next/image";

const FifthSection = () => {
  return (
    <div className="bg-[#ffedec] mx-auto">
      <div className="py-4">
        <div className="md:flex md:space-y-0 items-center md:p-40">
          <div className="md:order-1 md:pr-0">
            <div className="flex flex-col space-y-10 md:flex-row md:items-center md:space-x-40">
              <div className="order-2 md:order-1 w-full md:w-1/2">
                <Image
                  src={"/images/undraw-2.svg"}
                  alt="image"
                  width={700}
                  height={700}
                  className="
                object-cover
                rounded-md
                w-full
                p-10      
                "
                />
              </div>

              <div className="order-1 md:order-2 md:flex-1 px-10 md:px-0 space-y-10">
                <div className="space-y-1 text-md">
                  <div className="text-[#6f1f1d] font-medium leading-normal text-2xl md:text-4xl pb-4">
                    Get your message across
                  </div>
                  <div className="text-md text-[#6f1f1d] md:leading-8 font-light">
                    Bird helps you develop and build close connections to your
                    team so you can do your best work together.
                  </div>
                </div>

                <div className="space-y-1 text-[#6f1f1d]">
                    <div className="text-xl font-medium leading-normal">
                        Share ideas in high resolution
                    </div>
                    <div className="text-sm md:text-md leading-6 md:leading-10 font-light">
                    Speak to your vision while sharing your design as you record 
                    your screen, camera, or both with Bird.

                    </div>

                </div>

                <div className="space-y-1 text-[#6f1f1d]">
                    <div className="text-xl font-medium leading-normal">
                    Add context to your concept
                    </div>
                    <div className="text-sm md:text-md leading-6 md:leading-10 font-light">
                    Use video to document the thinking behind your ideas 
                    and loop in the right people at the right time, with the right context.

                    </div>

                </div>


              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FifthSection;
