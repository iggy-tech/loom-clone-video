import Image from "next/image";

const FourthSection = () => {
    return ( 
    <div className="bg-[#111019]">
        <div className="md:text-center items-center flex flex-col py-20 md:py-0 px-10">
            <div className="text-3xl md:text-6xl flex md:justify-center font-medium pb-10 text-[#f1f0f3]">
            Drive community and engagement at scale
            </div>
            <div className="md:flex items-center justify-center md:space-x-16 pt-10 md:pt-20">
            <Image
                src={"/images/undraw-1.svg"}
                alt="image"
                width={600}
                height={600}
                className="
         
                p-20
                "
                />

<Image
                src={"/images/undraw-1.svg"}
                alt="image"
                width={600}
                height={600}
                className="
                hidden
                md:block
                p-20
                "
                />

<Image
                src={"/images/undraw-1.svg"}
                alt="image"
                width={600}
                height={600}
                className="
            hidden
                md:block
                p-20
                "
                />

            </div>
        </div>

        <div className="
        px-10
        space-y-10 
        md:space-y-0 
        md:flex 
        justify-evenly
   
        md:pt-20
    
        mx-auto
        
        ">
            <div>
                <div className="md:text-3xl pb-4 text-lg text-[#f1f0f3] font-medium">
                    Scale knowledge with video
                </div>
                <div className="text-[#bbb6c6] text-lg leading-8 w-96">
                Connect pockets of institutional knowledge by making 
                video messages searchable and discoverable.
                </div>
            </div>

            <div>
                <div className="md:text-3xl pb-4 text-lg text-[#f1f0f3] font-medium">
                Create a culture of sharing
                </div>
                <div className="text-[#bbb6c6] text-lg leading-8 w-96">
                Video messaging encourages your team to share early and often 
                so projects are visible and driven to completion quicker.
                </div>
            </div>

            <div>
                <div className="md:text-3xl pb-4 text-lg text-[#f1f0f3] font-medium">
                Build community at scale
                </div>
                <div className="text-[#bbb6c6] text-lg leading-8 w-96">
                Magnify people&apos;s voices so the whole company 
                can feel connected and heard beyond the boundaries of their team.

                </div>
            </div>
        </div>
    </div> );
}
 
export default FourthSection;