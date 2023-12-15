import Image from "next/image";
import { Button } from "@/components/ui/button";

const Explore = () => {
  return (
    <div>
        <div>
      
  
      <div
        className="
    text-[#252434]
     md:text-center 
     flex
      px-10
      md:justify-center
      items-center
        text-4xl
        md:text-6xl
        font-medium
        pb-20      
      "
      >
        Explore more ways to use Bird
      </div>
     
      

    
      <div
        className="
        
        md:flex
        items-center
        justify-center
        px-10
        space-y-10
        md:space-y-0
        md:space-x-10
        "
      >
        <div
          className="
        bg-[#eff0ff]
        rounded-[20px]
        md:rounded-[80px]
        md:w-1/4
        p-10 
        md:p-20
        hover:scale-105
        hover:shadow-xl
        "
        >
          <Image
            src={"/images/undraw-1.svg"}
            alt="image"
            width={1920}
            height={1080}
            className="
           h-40
                "
          />

          <div
            className="
                text-3xl
                 items-center
                  flex
                   justify-center
                   pt-10
                   text-[#2b1c50]

                   
                   "
          >
            Engineering
          </div>

          <div className="text-[#2b1c50] text-center leading-8 pt-4">
            Add visual context to your code to accelarate your sprints.
          </div>
        </div>

        <div
          className="
        bg-[#eff0ff]
        rounded-[20px]
        md:rounded-[80px]
        md:w-1/4
        p-10 
        md:p-20
        hover:scale-105
        hover:shadow-xl
        "
        >
          <Image
            src={"/images/undraw-1.svg"}
            alt="image"
            width={1920}
            height={1080}
            className="
           h-40
                "
          />

          <div
            className="
                text-3xl
                 items-center
                  flex
                   justify-center
                   pt-10
                   text-[#2b1c50]

                   
                   "
          >
           Customer Support
          </div>

          <div className="text-[#2b1c50] text-center leading-8 pt-4">
          Personalize your pitch with video outreach to close more deals, faster.
          </div>
        </div>

        <div
          className="
        bg-[#eff0ff]
        rounded-[20px]
        md:rounded-[80px]
        md:w-1/4
        p-10 
        md:p-20
        hover:scale-105
        hover:shadow-xl
        "
        >
          <Image
            src={"/images/undraw-1.svg"}
            alt="image"
            width={1920}
            height={1080}
            className="
           h-40
                "
          />

          <div
            className="
                text-3xl
                 items-center
                  flex
                   justify-center
                   pt-10
                   text-[#2b1c50]

                   
                   "
          >
          Design
          </div>

          <div className="text-[#2b1c50] text-center leading-8 pt-4">
          Personalize your pitch with video outreach to close more deals, faster.
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center pt-20">
        <Button className="
    text-lg
    mt-6
    rounded-[40px]
    text-[#4b42ad]
    font-medium
    p-6
    bg-[#eff0ff]
    hover:scale-110
    hover:shadow-indigo-500
    transition-all
    duration-300
    shadow-md

        ">
            See all use cases
            </Button>

      </div>
  

    

       

     </div>

    </div>
  );
};

export default Explore;
