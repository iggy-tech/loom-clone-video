import { Dot } from "lucide-react";
import { Button } from "@/components/ui/button";

const NinthSection = () => {
    return (   
    <div className="bg-[#e3f3ff]">
        <div className="text-center items-center justify-center flex flex-col">
            <div className="text-4xl md:text-6xl flex justify-center font-medium pb-20 text-[#1b224b] px-10">
                Choose the plan that&apos;s right for your team
            </div>
        </div>

        <div className="
        px-10
        md:flex
        items-center
        justify-center
        ">
            <div className="
            bg-[#c4d4ff]
            rounded-[40px]
            ">
                <div className="p-10 md:p-20">
                    <div className="text-2xl font-medium md:text-6xl text-[#1b224b]">
                        Business
                    </div>
                    <div className="text-xl font-light md:text-3xl py-6 text-[#1f357f]">
                       Advanced recordings & analytics 
                    </div>

                    <div className="space-y-3">
                        <div className="
                        flex
                        items-center
                        gap-4
                        text-2xl
                        text-[#1f357f]
                        ">
                            <div>
                                <Dot className="text-[#565add]" />
                            </div>
                            <div className="text-sm"> Transcriptions & Captions</div>

                        </div>

                        <div className="
                        flex
                        items-center
                        gap-4
                        text-2xl
                        text-[#1f357f]
                        ">
                            <div>
                                <Dot className="text-[#565add]" />
                            </div>
                            <div className="text-sm"> Transcriptions & Captions</div>

                        </div>

                        <div className="
                        flex
                        items-center
                        gap-4
                        text-2xl
                        text-[#1f357f]
                        ">
                            <div>
                                <Dot className="text-[#565add]" />
                            </div>
                            <div className="text-sm"> Transcriptions & Captions</div>

                        </div>

                        <div className="
                        flex
                        items-center
                        gap-4
                        text-2xl
                        text-[#1f357f]
                        ">
                            <div>
                                <Dot className="text-[#565add]" />
                            </div>
                            <div className="text-sm"> Transcriptions & Captions</div>

                        </div>

                    </div>

                    <Button className="
                    mt-10
                    md:text-lg
                    font-light
                    rounded-[40px]
                    border-4
                    border-indigo-400/90
                    py-6
                    md:p-8
                    bg-[#565add]
                    hover:scale-110
                    transition-all
                    duration-300
                    shadow-md
                    hover:shadow-indigo-300

                    
                    ">
                        Get Started
                    </Button>

                </div>

            </div>

            <div className="
            position-relative
            z-10
            -mt-5
            md:-mx-10
            md:mt-0
            bg-[#fff]
            rounded-[40px]
            ">

<div className="p-10 md:p-20">
                    <div className="text-2xl font-medium md:text-6xl text-[#1b224b]">
                       Enteprise
                    </div>
                    <div className="text-xl font-light md:text-3xl py-6 text-[#1f357f]">
                    Advanced admin & security
                    </div>

                    <div className="space-y-3">
                        <div className="
                        flex
                        items-center
                        gap-4
                        text-2xl
                        text-[#1f357f]
                        ">
                            <div>
                                <Dot className="text-[#565add]" />
                            </div>
                            <div className="text-sm"> Transcriptions & Captions</div>

                        </div>

                        <div className="
                        flex
                        items-center
                        gap-4
                        text-2xl
                        text-[#1f357f]
                        ">
                            <div>
                                <Dot className="text-[#565add]" />
                            </div>
                            <div className="text-sm"> Transcriptions & Captions</div>

                        </div>

                        <div className="
                        flex
                        items-center
                        gap-4
                        text-2xl
                        text-[#1f357f]
                        ">
                            <div>
                                <Dot className="text-[#565add]" />
                            </div>
                            <div className="text-sm"> Transcriptions & Captions</div>

                        </div>

                        <div className="
                        flex
                        items-center
                        gap-4
                        text-2xl
                        text-[#1f357f]
                        ">
                            <div>
                                <Dot className="text-[#565add]" />
                            </div>
                            <div className="text-sm"> Transcriptions & Captions</div>

                        </div>

                    </div>

                    <Button className="
                    mt-10
                    md:text-lg
                    font-light
                    rounded-[40px]
                    border-4
                    border-indigo-400/90
                    py-6
                    md:p-8
                    bg-[#565add]
                    hover:scale-110
                    transition-all
                    duration-300
                    shadow-md
                    hover:shadow-indigo-300

                    
                    ">
                        Get Started
                    </Button>

                </div>


            </div>

        </div>
    </div> );
}
 
export default NinthSection;