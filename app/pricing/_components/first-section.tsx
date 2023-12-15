import { Check } from "lucide-react";

import { Button } from "@/components/ui/button";

const FirstSection = () => {
  return (
    <div className="px-10">
      <div className="space-y-6 flex flex-col sm:text-center pt-6 md:pt-32 pb-14 md:px-0">
        <div className="text-4xl md:text-7xl font-medium">
          Choose the plan that fits your needs.
        </div>
      </div>
      <div className="md:flex">
        <div className="md:w-1/3 w-full">
          <div className="p-10 pt-16 md:p-20 rounded-[40px] bg-[#eff0ff]">
            <div className="text-3xl md:text-5xl font-medium">Starter</div>
            <div className="text-xl pt-4 pb-8">For Individuals</div>
            <div className="text-2xl md:text-3xl font-semibold">Free</div>

            <Button
              className="
                        my-8
                        text-sm
                        md:text-md
                        font-light
                        rounded-[40px]
                        border-4
                        border-indigo-400/90
                        p-6
                        bg-[#565add]
                        hover:scale-110
                        transition-all
                        duration-300
                        shadow-md
                        hover:shadow-indigo-300

                        "
            >
              Sign Up, It&apos;s Free
            </Button>

            <div className="font-medium text-md md:text-lg pb-4">Includes:</div>
            <div className="flex space-y-4 flex-col text-sm">
                <div className="flex space-x-6">
                <div>
                    <Check className="w-6 h-6" />
                </div>
                <div className="text-gray-500"> Up to 5 mins/video</div>
                </div>

                <div className="flex space-x-6">
                <div>
                    <Check className="w-6 h-6" />
                </div>
                <div className="text-gray-500"> Really fast uploading</div>
                </div>

                <hr className="border-indigo-300" />

                <div className="font-medium text-md">
                    Key Features
                </div>

                <div className="flex space-x-6">
                <div>
                    <Check className="w-6 h-6" />
                </div>
                <div className="text-gray-500"> Really fast uploading</div>
                </div>

                <div className="flex space-x-6">
                <div>
                    <Check className="w-6 h-6" />
                </div>
                <div className="text-gray-500"> Really fast uploading</div>
                </div>

                <div className="flex space-x-6">
                <div>
                    <Check className="w-6 h-6" />
                </div>
                <div className="text-gray-500"> Really fast uploading</div>
                </div>

                <div className="flex space-x-6">
                <div>
                    <Check className="w-6 h-6" />
                </div>
                <div className="text-gray-500"> Really fast uploading</div>
                </div>

                <div className="flex space-x-6">
                <div>
                    <Check className="w-6 h-6" />
                </div>
                <div className="text-gray-500"> Really fast uploading</div>
                </div>

            </div>

            <div className="pt-6 pb-20">
                See all features

            </div>

          </div>
        </div>

        <div className="md:w-1/3 w-full">
          <div className="
          p-10 
          pt-16 
          md:p-20 
          rounded-[40px] 
          bg-[#fff]
          my-[-20px]
          md:my-0
          md:-mx-10
          border
          z-20
          shadow-xl
          
          ">
            <div className="text-3xl md:text-5xl font-medium">Business</div>
            <div className="text-xl pt-4 pb-8">For teams</div>
            <div className="flex gap-4 items-center">
            <div className="text-2xl md:text-3xl font-semibold">12.50</div>
            <div className="text-xs font-light">USD/Creator/mo(annually)</div>

            </div>
          

            <Button
              className="
                        my-8
                        text-sm
                        md:text-md
                        font-light
                        rounded-[40px]
                        border-4
                        border-indigo-400/90
                        p-6
                        bg-[#565add]
                        hover:scale-110
                        transition-all
                        duration-300
                        shadow-md
                        hover:shadow-indigo-300

                        "
            >
              Sign Up, It&apos;s Free
            </Button>

            <div className="font-medium text-md md:text-lg pb-4">Includes:</div>
            <div className="flex space-y-4 flex-col text-sm">
                <div className="flex space-x-6">
                <div>
                    <Check className="w-6 h-6" />
                </div>
                <div className="text-gray-500"> Up to 5 mins/video</div>
                </div>

                <div className="flex space-x-6">
                <div>
                    <Check className="w-6 h-6" />
                </div>
                <div className="text-gray-500"> Really fast uploading</div>
                </div>

                <hr className="border-indigo-300" />

                <div className="font-medium text-md">
                    Key Features
                </div>

                <div className="flex space-x-6">
                <div>
                    <Check className="w-6 h-6" />
                </div>
                <div className="text-gray-500"> Really fast uploading</div>
                </div>

                <div className="flex space-x-6">
                <div>
                    <Check className="w-6 h-6" />
                </div>
                <div className="text-gray-500"> Really fast uploading</div>
                </div>

                <div className="flex space-x-6">
                <div>
                    <Check className="w-6 h-6" />
                </div>
                <div className="text-gray-500"> Really fast uploading</div>
                </div>

                <div className="flex space-x-6">
                <div>
                    <Check className="w-6 h-6" />
                </div>
                <div className="text-gray-500"> Really fast uploading</div>
                </div>

                <div className="flex space-x-6">
                <div>
                    <Check className="w-6 h-6" />
                </div>
                <div className="text-gray-500"> Really fast uploading</div>
                </div>

            </div>

            <div className="pt-6 pb-20">
                See all features

            </div>

          </div>
        </div>

        <div className="md:w-1/3 w-full">
          <div className="p-10 pt-16 md:p-20 rounded-[40px] bg-[#eff0ff]">
            <div className="text-3xl md:text-5xl font-medium">Contact Us</div>
            <div className="text-xl pt-4 pb-8">For Individuals/Teams</div>
            <div className="text-2xl md:text-3xl font-semibold">Let&apos;s chat</div>

            <Button
              className="
                        my-8
                        text-sm
                        md:text-md
                        font-light
                        rounded-[40px]
                        border-4
                        border-indigo-400/90
                        p-6
                        bg-[#565add]
                        hover:scale-110
                        transition-all
                        duration-300
                        shadow-md
                        hover:shadow-indigo-300

                        "
            >
              Sign Up, It&apos;s Free
            </Button>

            <div className="font-medium text-md md:text-lg pb-4">Includes:</div>
            <div className="flex space-y-4 flex-col text-sm">
                <div className="flex space-x-6">
                <div>
                    <Check className="w-6 h-6" />
                </div>
                <div className="text-gray-500"> Up to 5 mins/video</div>
                </div>

                <div className="flex space-x-6">
                <div>
                    <Check className="w-6 h-6" />
                </div>
                <div className="text-gray-500"> Really fast uploading</div>
                </div>

                <hr className="border-indigo-300" />

                <div className="font-medium text-md">
                    Key Features
                </div>

                <div className="flex space-x-6">
                <div>
                    <Check className="w-6 h-6" />
                </div>
                <div className="text-gray-500"> Really fast uploading</div>
                </div>

                <div className="flex space-x-6">
                <div>
                    <Check className="w-6 h-6" />
                </div>
                <div className="text-gray-500"> Really fast uploading</div>
                </div>

                <div className="flex space-x-6">
                <div>
                    <Check className="w-6 h-6" />
                </div>
                <div className="text-gray-500"> Really fast uploading</div>
                </div>

                <div className="flex space-x-6">
                <div>
                    <Check className="w-6 h-6" />
                </div>
                <div className="text-gray-500"> Really fast uploading</div>
                </div>

                <div className="flex space-x-6">
                <div>
                    <Check className="w-6 h-6" />
                </div>
                <div className="text-gray-500"> Really fast uploading</div>
                </div>

            </div>

            <div className="pt-6 pb-20">
                See all features

            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default FirstSection;
