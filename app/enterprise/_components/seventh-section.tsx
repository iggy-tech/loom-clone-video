import { ArrowDown, ArrowUp } from 'lucide-react';
import Image from 'next/image';

const SeventhSection = () => {
    return ( 
    <div className='
    bg-[#e3f3ff] 
    mx-auto 
    md:flex
     items-center 
     justify-center
     md:space-x-40
     md:space-y-0   
     '>
      <div className='md:flex md:space-y-0 space-y-10 md:space-x-40'>
      <div className='flex items-center justify-center flex-col'>

    
        <div className='flex items-center justify-center'>
            <div>
                <ArrowDown size={60} />
            </div>
            <div className='text-5xl font-medium md:text-[100px]'>
                50%
            </div>
      
        </div>

        <div className='py-4'>
                fewer meetings
            </div>

            <Image
                src="/logos/logoipsum-222.svg"
                alt="logo"
                width={500}
                height={500}
                className="
                 w-40
                    "
              />

      </div>

      <div className='flex items-center justify-center flex-col'>

    
<div className='flex items-center justify-center'>
    <div>
        <ArrowUp size={60} />
    </div>
    <div className='text-5xl font-medium md:text-[100px]'>
        50%
    </div>

</div>

<div className='py-4'>
Increase in productivity
    </div>

    <Image
        src="/logos/logoipsum-297.svg"
        alt="logo"
        width={500}
        height={500}
        className="
         w-40
            "
      />

</div>

<div className='flex items-center justify-center flex-col'>

    
<div className='flex items-center justify-center'>
    <div>
        <ArrowDown size={60} />
    </div>
    <div className='text-5xl font-medium md:text-[100px]'>
        24%
    </div>

</div>

<div className='py-4'>
Cost savings

    </div>

    <Image
        src="/logos/logoipsum-325.svg"
        alt="logo"
        width={500}
        height={500}
        className="
         w-40
            "
      />

</div>
      </div>
    </div> );
}
 
export default SeventhSection;