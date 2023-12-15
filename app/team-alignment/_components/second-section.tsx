import Image from "next/image";

const SecondSection = () => {
  return (
    <div>
      <div className="items-center justify-center flex md:space-x-20">
        <div className="w-full bg-[#eff0ff]">
          <div className="md:py-40 py-16">
            <div className="md:flex px-10 md:px-20 md:gap-20 md:space-y-0 flex-row-reverse">
              <div className="text-2xl md:text-4xl items-center flex w-full md:w-1/2 order-2 md:order-1">
                <div className="flex">
                  <div className="space-y-10">
                    <div className="space-y-1 md:text-md">
                      <div className="text-[#2b1c50] font-medium md:leading-normal md:text-4xl">
                        Keep your team engaged while collaborating
                        asynchronously
                      </div>
                      <div
                        className="
                                        pt-4
                                         text-sm 
                                         md:text-md
                                          text-[#3d2e7c] 
                                          leading-6
                                           md:leading-10
                                           font-light
                                           md:w-4/5
                                           "
                      >
                        Using Bird, you can ask questions, share ideas, and
                        exchange knowledge without time zones or busy calendars
                        getting in the way.
                      </div>
                    </div>

                    <div className="space-y-1">
                      <div className="text-[#2b1c50] text-sm md:text-xl font-medium leading-normal">
                        Share ideas in high resolution
                      </div>
                      <div className="text-sm md:text-md text-[#3d2e7c] pt-1 leading-6 md:leading-10 font-light md:w-4/5">
                        Speak to your vision while sharing your design as you
                        record your screen, camera or both with Bird.
                      </div>
                    </div>

                    <div className="space-y-1">
                      <div className="text-[#2b1c50] text-sm md:text-xl font-medium leading-normal">
                        Add context to your concept
                      </div>
                      <div className="text-sm md:text-md text-[#3d2e7c] pt-1 leading-6 md:leading-10 font-light md:w-4/5">
                        Use video to document the thinking behind your ideas and
                        loop in the right people at the right time, with the
                        right context.
                      </div>
                    </div>

                    <div className="space-y-1">
                      <div className="text-[#2b1c50] text-sm md:text-xl font-medium leading-normal">
                        Send your video with a link
                      </div>
                      <div className="text-sm md:text-md text-[#3d2e7c] pt-1 leading-6 md:leading-10 font-light md:w-4/5">
                        Use Bird&apos;s instantly-generated links to share your video
                        in Slack, Figma, Sketch, and anywhere else your team
                        works.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
       


                <div className="md:w-1/2 mb-10 md:mb-0 order-1 md:p-0 mt-10">
            <Image 
            src="/images/undraw-2.svg"
            alt="image"
            width={1920}
            height={1080}
            className="
                object-cover
                md:rounded-[60px]
                rounded-[40px]
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

export default SecondSection;
