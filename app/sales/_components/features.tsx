import {
  Lock,
  MessageCircle,
  MousePointerSquare,
  PencilLine,
} from "lucide-react";

const Features = () => {
  return (
    <div className="py-20">
      <div className="text-center text-4xl md:text-6xl font-medium pb-16">
        Features
      </div>
      <div className="md:flex px-10 md:px-0 md:space-y-0 items-center justify-center md:space-x-10">


        <div className="md:w-1/6 space-y-4">
          <div className="flex items-center gap-6">
            <div className="bg-black h-12 w-12 rounded-full items-center justify-center flex">
              <MousePointerSquare className="text-white h-6 w-6" />
            </div>
            <div className="text-xl font-medium">Calls - to - action</div>
          </div>
          <div className="w-full h-20">
            Add links to design files and other resources for viewers to
            reference
          </div>
        </div>


        <div className="md:w-1/6 space-y-4">
          <div className="flex items-center gap-6">
            <div className="bg-black h-12 w-12 rounded-full items-center justify-center flex">
              <PencilLine className="text-white h-6 w-6" />
            </div>
            <div className="text-xl font-medium">Drawing Tools</div>
          </div>
          <div className="w-full h-20">
          Emphasize mouse clicks and draw on your screen as you record
          </div>
        </div>


        <div className="md:w-1/6 space-y-4">
          <div className="flex items-center gap-6">
            <div className="bg-black h-12 w-12 rounded-full items-center justify-center flex">
              <MessageCircle className="text-white h-6 w-6" />
            </div>
            <div className="text-xl font-medium">Rich reactions</div>
          </div>
          <div className="w-full h-20">
            Add links to design files and other resources for viewers to
            reference
          </div>
        </div>


        <div className="md:w-1/6 space-y-4">
          <div className="flex items-center gap-6">
            <div className="bg-black h-12 w-12 rounded-full items-center justify-center flex">
              <Lock className="text-white h-6 w-6" />
            </div>
            <div className="text-xl font-medium">Content security</div>
          </div>
          <div className="w-full h-20">
          Restrict viewing by email address and add password protection.
          </div>
        </div>


      </div>
    </div>
  );
};

export default Features;
