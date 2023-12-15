import Image from "next/image";

const FourthSection = () => {
  return (
    <div className="pt-10 md:pt-0 pb-32 bg-[#eff0ff]">
      <div className="md:flex items-center justify-center">
        <div
          className="
            px-10
            md:px-0
            md:w-2/5            
            "
        >
          <Image
            src="/images/undraw-2.svg"
            alt="image"
            width={1920}
            height={1080}
            className="p-10"
          />
        </div>

        <div className="pt-10 md:pt-20 px-10 md:ml-20 md:w-1/3">
          <div className=" gap-6">
            <div className="text-[#2b1c50] font-medium leading-normal text-3xl md:text-5xl">
              Filler word removal
            </div>
            <div className="text-xl text-[#3d2e7c] leading-10 font-light pt-6">
              From Google Workspace to Slack, Bird videos seamlessly integrate
              with hundreds of tools you use every day.
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-center px-10">
        <div className="md:ml-20 md:w-1/3">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-96">
              <div className="text-[#2b1c50] font-medium leading-normal text-3xl md:text-5xl">
                Silence removal
              </div>

              <div className="text-xl text-[#3d2e7c] leading-10 font-light pt-6">
                From Google Workspace to Slack, Bird videos seamlessly integrate
                with hundreds of tools you use every day.
              </div>
            </div>
          </div>
        </div>

        <div className="md:w-2/5 bg-[#eff0ff] md:ml-6 py-10">
        <Image
            src="/images/undraw-2.svg"
            alt="image"
            width={1920}
            height={1080}
            className="p-10"
          />

        </div>
      </div>
    </div>
  );
};

export default FourthSection;
