import Image from "next/image";


const ThirdSection = () => {
  return (
    <div className="bg-[#e3f2ff] mx-auto">
      <div className="py-10 md:p-40">
        <div className="md:flex px-10 md:space-y-0 md:space-x-20 items-center">
          <div className="flex space-x-10">
            <div className="space-y-10">
              <div className="space-y-1 text-md">
                <div className="text-[#1c2850] font-medium leading-normal text-3xl md:text-4xl pb-4">
                  Get your message across
                </div>
                <div className="text-xl text-[#1f3575] leading-8 font-light">
                  Keep everyone on track and in the loop using streamlined
                  communication that scales.
                </div>
              </div>

              <div className="space-y-1">
                <div className="text-xl text-[#1f3575] font-medium leading-normal">
                  Share ideas in high resolution
                </div>
                <div className="text-sm md:text-md text-[#1f3575] leading-6 md:leading-10 font-light">
                  Speak to your vision while sharing your design as you record
                  your screen, camera or both with Bird.
                </div>
              </div>

              <div className="space-y-1">
                <div className="text-xl text-[#1f3575] font-medium leading-normal">
                  Add context to your concept
                </div>
                <div className="text-sm md:text-md text-[#1f3575] leading-6 md:leading-10 font-light">
                  Use video to document the thinking behind your ideas and loop
                  in the right people at the right time, with the right context.
                </div>
              </div>

              <div className="space-y-1">
                <div className="text-xl text-[#1f3575] font-medium leading-normal">
                  Send your video with a link
                </div>
                <div className="text-sm md:text-md text-[#1f3575] leading-6 md:leading-10 font-light">
                  Use Bird&apos;s instantly-generated links to share your video in
                  Slack, Figma, Sketch, and anywhere else your team works.
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 pt-10 md:pt-0">
         
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
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
