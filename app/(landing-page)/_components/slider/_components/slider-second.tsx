'use client'

import Slider from 'react-infinite-logo-slider';

import Image from 'next/image';


const SliderTwo = () => {
    return (
        
        <div>
  <Slider
  width='400px'
  duration={60}
  blurBorders={true}
    >
          <Slider.Slide>
        <Image src="/logos/logoipsum-222.svg" alt="logo" width={100} height={100}  className="w-56 h-56 text-gray-500"  />
        </Slider.Slide>
        <Slider.Slide>
        <Image src="/logos/logoipsum-243.svg" alt="logo" width={100} height={100}  className="w-56 h-56"  />
        </Slider.Slide>
      
        <Slider.Slide>
        <Image src="/logos/logoipsum-258.svg" alt="logo" width={100} height={100}  className="w-36 h-36"  />
        </Slider.Slide>
        <Slider.Slide>
        <Image src="/logos/logoipsum-262.svg" alt="logo" width={100} height={100}  className="w-56 h-56"  />
        </Slider.Slide>
        <Slider.Slide>
        <Image src="/logos/logoipsum-264.svg" alt="logo" width={100} height={100}  className="w-56 h-56"  />
        </Slider.Slide>
        <Slider.Slide>
        <Image src="/logos/logoipsum-285.svg" alt="logo" width={100} height={100}  className="w-56 h-56"  />
        </Slider.Slide>
        <Slider.Slide>
        <Image src="/logos/logoipsum-289.svg" alt="logo" width={100} height={100}  className="w-56 h-56"  />
        </Slider.Slide>
        <Slider.Slide>
        <Image src="/logos/logoipsum-222.svg" alt="logo" width={100} height={100}  className="w-56 h-56 text-gray-500"  />
        </Slider.Slide>
        <Slider.Slide>
        <Image src="/logos/logoipsum-243.svg" alt="logo" width={100} height={100}  className="w-56 h-56"  />
        </Slider.Slide>
      
        <Slider.Slide>
        <Image src="/logos/logoipsum-258.svg" alt="logo" width={100} height={100}  className="w-36 h-36"  />
        </Slider.Slide>
        <Slider.Slide>
        <Image src="/logos/logoipsum-262.svg" alt="logo" width={100} height={100}  className="w-56 h-56"  />
        </Slider.Slide>
        <Slider.Slide>
        <Image src="/logos/logoipsum-264.svg" alt="logo" width={100} height={100}  className="w-56 h-56"  />
        </Slider.Slide>
        <Slider.Slide>
        <Image src="/logos/logoipsum-285.svg" alt="logo" width={100} height={100}  className="w-56 h-56"  />
        </Slider.Slide>
        <Slider.Slide>
        <Image src="/logos/logoipsum-289.svg" alt="logo" width={100} height={100}  className="w-56 h-56"  />
        </Slider.Slide>
    </Slider>
    </div> );
}
 
export default SliderTwo;