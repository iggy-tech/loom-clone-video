import SliderOne from "./_components/slider-one";
import SliderTwo from "./_components/slider-second";
import SliderThree from "./_components/slider-third";
const Sliders = () => {
    return ( 
    <div className="py-32">
        <div className="
        text-[#2b1c50]
        px-6
        md:w-3/5
        mx-auto
        text-center
        flex
        justify-center
        items-center
        text-3xl
        md:text-5xl
        font-medium
        
        ">
          More Than 21 Million People Across 120,000 Companies Choose Bird 

        </div>

        <div className="pt-20">
        <SliderOne />
        <SliderTwo />
        <SliderThree />
  
        </div>

      
    </div> );
}
 
export default Sliders;