import { Button } from "@/components/ui/button"
import Link from "next/link";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
  } from '@/components/ui/accordion'

import {
 
    BarChart,
    Building2,

    Code,
    Code2Icon,
    DollarSign,
    Download,
    GraduationCap,
    Headphones,
    Home,

    Newspaper,
    PaintBucket,
    Settings,
    Smile,
    Sparkles,
 
    ScreenShare,
    Users,
    UserPlus,
    ArrowRight,
  } from "lucide-react";

interface DropDownMenuProps {
    onClose: () => void;
}

const DropdownMenu : React.FC<DropDownMenuProps> = ({onClose}) => {

    const handleLinkClick = () => {
        onClose();
    }

    return (
        <div className="w-screen h-screen bg-white pt-20 px-4 items-center justify-center absolute top-20 right-0 xl:hidden">
            <Accordion
            className="
            pl-2
            "
            type="single"
            collapsible
            >
                  <AccordionItem 
  className="my-6 border-b"
  
  value="item-1">
    <AccordionTrigger className=''>Use Cases</AccordionTrigger>
    <AccordionContent>
     <Link 
    href={"/team-alignment"}
     className='flex pt-10' 
      onClick={handleLinkClick}
      
      >
        <div>
        <UserPlus className='h-6 w-6 mr-4 text-orange-400' />
        </div>
        <div>
            Team alignment
        </div>
     </Link>
     <Link 
    href={"/sales"}
     
     className='flex pt-10'
     onClick={handleLinkClick}
     
     >
        <div>
        <DollarSign className='h-6 w-6 mr-4 text-green-400' />
        </div>
 
        <div>
            Sales
        </div>

     </Link>
     <Link 
    href={"/engineering"}
     className='flex pt-10'
     onClick={handleLinkClick}
     
     >
        <div>
        <Code className='h-6 w-6 mr-4 text-indigo-400' />
        </div>
 
        <div>
            Engineering
        </div>

     </Link>
     <Link
    href={"/design"} 
      className='flex pt-10'
      onClick={handleLinkClick}
      
      >
        <div>
        <PaintBucket className='h-6 w-6 mr-4 text-blue-400' />
        </div>
 
        <div>
            Design
        </div>

     </Link>
     <Link
     href={"/marketing"}
     className='flex pt-10'
     onClick={handleLinkClick}
     
     >
        <div>
        <BarChart className='h-6 w-6 mr-4 text-rose-400' />
        </div>
 
        <div>
            Marketing
        </div>

     </Link>
     <Link 
     href={"/product-management"}
     className='flex pt-10'
     onClick={handleLinkClick}
     
     >
        <div>
        <Settings className='h-6 w-6 mr-4 text-grey-400' />
        </div>
 
        <div>
            Product Management
        </div>

     </Link>
     <Link 
     href={"/support"}
     
     className='flex pt-10'
     onClick={handleLinkClick}
     
     >
        <div>
        <Headphones className='h-6 w-6 mr-4 text-amber-400' />
        </div>
 
        <div>
            Support
        </div>

     </Link>
    </AccordionContent>
  </AccordionItem>
  <AccordionItem 
    className="my-6 border-b"
  
  value="item-2">
    <AccordionTrigger>For Business</AccordionTrigger>
    <AccordionContent>
     <Link
     href={"/bird-ai"}
     className='flex pt-10'
     onClick={handleLinkClick}
     
     >
        <div>
        <Sparkles className='h-6 w-6 mr-4 text-orange-400' />
        </div>
        <div>
            Bird AI
        </div>
     </Link>
     <Link
     href={"/enterprise"}
     
      className='flex pt-10'
      onClick={handleLinkClick}
      
      >
        <div>
        <Building2 className='h-6 w-6 mr-4 text-green-400' />
        </div>
 
        <div>
            Enterprise
        </div>

     </Link>
     <Link 
     href={"/"}
     
     className='flex pt-10'
     onClick={handleLinkClick}
     >
        <div>
        <Home className='h-6 w-6 mr-4 text-indigo-400' />
        </div>
 
        <div>
            Bird HQ
        </div>

     </Link>
     <Link 
     href={"/design"}
     
     className='flex pt-10'
     onClick={handleLinkClick}
     >
        <div>
        <PaintBucket className='h-6 w-6 mr-4 text-blue-400' />
        </div>
 
        <div>
            Design
        </div>

     </Link>
     <Link
        href={"/marketing"} 
      className='flex pt-10'
      onClick={handleLinkClick}
      
      >
        <div>
        <Smile className='h-6 w-6 mr-4 text-rose-400' />
        </div>
 
        <div>
            Marketing
        </div>

     </Link>
     <Link 
     href={"/product-management"}
     
     className='flex pt-10'
     onClick={handleLinkClick}
     
     >
        <div>
        <Settings className='h-6 w-6 mr-4 text-grey-400' />
        </div>
 
        <div>
            Product Management
        </div>

     </Link>
     <Link 
     href={"/support"}
     
     className='flex pt-10'
     onClick={handleLinkClick}
     >
        <div>
        <Headphones className='h-6 w-6 mr-4 text-amber-400' />
        </div>
 
        <div>
            Support
        </div>

     </Link>
    </AccordionContent>
  </AccordionItem>

  <AccordionItem 
    className="my-6 border-b"
  
  
  value="item-3">
    <AccordionTrigger>Resources</AccordionTrigger>
    <AccordionContent>
     <Link 
        href={"/"}
     className='flex pt-10'
     onClick={handleLinkClick}
     
     >
        <div>
        <Newspaper className='h-6 w-6 mr-4 text-orange-400' />
        </div>
        <div>
           Blog
        </div>
     </Link>
     <Link
     href={"/screen-recorder"}
     className='flex pt-10'
     onClick={handleLinkClick}
     
     >
        <div>
        <ScreenShare className='h-6 w-6 mr-4 text-green-400' />
        </div>
 
        <div>
            Screen Recorder
        </div>

     </Link>
     <Link
     href={"/"}
     
     className='flex pt-10'
     onClick={handleLinkClick}
     
     >
        <div>
        <GraduationCap className='h-6 w-6 mr-4 text-indigo-400' />
        </div>
 
        <div>
            Community
        </div>

     </Link>
     <Link
     href={"/"}
      className='flex pt-10'
      onClick={handleLinkClick}
      
      >
        <div>
        <Code2Icon className='h-6 w-6 mr-4 text-blue-400' />
        </div>
 
        <div>
            Bird SDK
        </div>

     </Link>
     <Link
     href={"/"}
      className='flex pt-10'
      onClick={handleLinkClick}
      
      >
        <div>
        <Download className='h-6 w-6 mr-4 text-rose-400' />
        </div>
 
        <div>
            Download
        </div>

     </Link>

     <Link
     href={"/"}
      className='flex pt-10'
      onClick={handleLinkClick}
      
      >
        <div>
        <Headphones className='h-6 w-6 mr-4 text-amber-400' />
        </div>
 
        <div>
            Support
        </div>

     </Link>
    </AccordionContent>
  </AccordionItem>

  <AccordionItem 
    className="my-6 border-b"
  
  value="item-4">
    <AccordionTrigger>Company</AccordionTrigger>
    <AccordionContent>
     <Link
     href={"/"}
     className='flex pt-10'
     onClick={handleLinkClick}
     
     >
        <div>
        <Users className='h-6 w-6 mr-4 text-orange-400' />
        </div>
        <div>
          About Us
        </div>
     </Link>
     <Link 
        href={"/"}  
     className='flex pt-10'
     
     onClick={handleLinkClick}
     >
        <div>
        <DollarSign className='h-6 w-6 mr-4 text-green-400' />
        </div>
 
        <div>
            Careers
        </div>

     </Link>
     <Link 
        href={"/"}  
     className='flex pt-10'
     onClick={handleLinkClick}
     >
        <div>
        <Code className='h-6 w-6 mr-4 text-indigo-400' />
        </div>
 
        <div>
            Newsroom
        </div>

     </Link>


  
     <div className='flex pt-10'>
   

     </div>
    </AccordionContent>
  </AccordionItem>

            <Link 
            href={"/pricing"}
            className="
            flex
            flex-1
            items-center 
            justify-between
            text-xl
            px-6 
            py-4
            my-6
            border-b
            "
            >
                Pricing
            <div>
                <ArrowRight className='h-6 w-6 ' />
            </div>

            </Link>


            <Link 
            href={"/contact"}
            className="
            flex
            flex-1
            items-center 
            justify-between
            text-xl
            px-6 
            py-4
            my-6
      
            "
            >
                Contact Sales
            <div>
                <ArrowRight className='h-6 w-6 ' />
            </div>

            </Link>


        

            </Accordion>

            <div className="md:pt-32">
                <div className="flex items-center justify-center space-x-4">
                    <Link href={"/sign-in"}>
                        <Button 
                        className="
                        text-[#4b42ad]
                        text-sm
                        font-light
                        bg-[#eff0ff]
                        p-6 
                        rounded-[40px]
                        hover:scale-110
                        transition-all
                        duration-300
                        shadow-md
                        hover:shadow-indigo-300
                        ">
                            Sign in to Bird
                        </Button>
                        </Link>

                        <Link href={"/sign-in"}>
                        <Button 
                        className="
                     text-sm
                     font-light
                     rounded-[40px]
                     border-4
                        border-indigo-400/90    
                        py-6
                        bg-[#565add]
                        hover:scale-110
                        transition-all
                        duration-300
                        shadow-md
                        hover:shadow-indigo-300

                        ">
                           Try Bird for Free
                        </Button>
                        </Link>

                </div>

            </div>


        </div>
    )
}

export default DropdownMenu;