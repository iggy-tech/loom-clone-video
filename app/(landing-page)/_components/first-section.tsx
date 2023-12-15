import { Button } from "@/components/ui/button";
import Link from "next/link";

const FirstSection = () => {
    return ( 
    
    <section className="xl:py-36 py-10 px-10 bg-[#d1d1f7]">
        <div className="md:items-center flex flex-col">
            <div className="
            lg:text-5xl
            xl:text-6xl
            text-4xl
            flex
            justify-center
            font-medium
            text-[#2b1c50]
            pt-10
            
            ">
                One video is worth a thousand words

            </div>

            <p className="
            text-xl
            xl:text-3xl
            font-light
            xl:w-1/2
            text-[#3d2e7c]
            lg:pt-6
            pt-4
            md:text-center
            
            
            ">

            Easily record and share
            AI-powered video messages
            with your teammates and
            customers to supercharge productivity

            </p>

            <div className="flex gap-4 py-10 xl:pt-10">
                <Link 
                href="/free"
                >
                    <Button
                    className="
                    xl:text-3xl
                    text-xl
                    md:justify-center
                    md:flex
                    font-light
                    rounded-[60px]
                    border-8
                    border-indigo-400/90
                    py-9
                    px-10
                    xl:py-12
                    xl:px-24
                    bg-[#565add]
                  
                    transition-all
                    duration-300
                    shadow-md
                    hover:shadow-indigo-300
                    hover:scale-110
                    
                    
                    ">
                        Get Bird for Free
                    </Button>
                </Link>

            </div>

            <div className="xl:pt-28">
                <video className="
                rounded-[40px]
                 shadow-indigo-400 
                 shadow-2xl 
                 xl:w-5/6
                  xl:mx-auto" 

                autoPlay
                muted
                loop
                
                
                >
                    <source src = "/videos/hero-1.mp4" type="video/mp4"/>

                </video>

            </div>

        </div>
        
    </section>
    
    );
}
 
export default FirstSection;