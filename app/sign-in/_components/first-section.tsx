import { UserCircle2 } from "lucide-react";
import Image from "next/image";

const FirstSection = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="px-10 w-full md:w-2/5">
        <div className="text-3xl md:text-4xl font-semibold justify-center flex">
          Sign in to Bird
        </div>

        <div className="py-10 space-y-2">
          <div className="border py-4 rounded-full justify-center flex items-center space-x-2">
            <Image
              src={"/logos/logoipsum-329.svg"}
              alt="facebook"
              width={20}
              height={20}
              className="object-cover
                rounded-full
                w-6
               
                "
            />
            <div className="text-lg font-medium">Sign in with facebook</div>
          </div>

          <div className="border py-4 rounded-full justify-center flex items-center space-x-2">
            <Image
              src={"/logos/logoipsum-327.svg"}
              alt="facebook"
              width={20}
              height={20}
              className="object-cover
                rounded-full
                w-6
               
                "
            />
            <div className="text-lg font-medium">Sign in with facebook</div>
          </div>

          <div className="border py-4 rounded-full justify-center flex items-center space-x-2">
            <Image
              src={"/logos/logoipsum-298.svg"}
              alt="facebook"
              width={20}
              height={20}
              className="object-cover
                rounded-full
                w-6
               
                "
            />
            <div className="text-lg font-medium">Sign in with facebook</div>
          </div>

          <div className="border py-4 rounded-full justify-center flex items-center space-x-2">
            <Image
              src={"/logos/logoipsum-292.svg"}
              alt="facebook"
              width={20}
              height={20}
              className="object-cover
                rounded-full
                w-6
               
                "
            />
            <div className="text-lg font-medium">Sign in with facebook</div>
          </div>

          <div className="border py-4 rounded-full justify-center flex items-center space-x-2">
            <UserCircle2 className="w-8 h-8" />
            <div className="text-lg font-medium">Sign in with SSo</div>
          </div>
        </div>

        <div className="flex items-center">
          <hr className="w-1/2 border-gray-300" />
          <div className="mx-4">OR</div>
          <hr className="w-1/2 border-gray-300" />
        </div>

        <div className="pt-6">
          <div className="text-md font-medium">Work Email</div>
          <input
            className="
                    w-full
                    border 
                    py-2 
                    mt-2 
                    px-4
                   
                    rounded-full 
                    justify-center
                    flex
                    items-center
                    space-x-2
                    text-md
                    "
            type="text"
            placeholder="name@company.com"
          >

          </input>
        </div>

        <div className="
        p-4
        mt-4
        items-center
        justify-center
        flex
        bg-[#ededed]
        rounded-full
        text-[#a19e9e]
        font-semibold
        
        ">
            Continue
        </div>

        <div className="text-center text-sm mt-4">
        By signing up, you ackowledge that you have read 
        and agree to Bird&apos;s Terms of Service and Privacy Policy.
        </div>

      </div>
    </div>
  );
};

export default FirstSection;
