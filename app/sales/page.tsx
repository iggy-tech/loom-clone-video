import Navbar from "@/components/ui/navbar/navbar";
import FirstSection from "./_components/first-section";
import SecondSection from "./_components/second-section";
import ThirdSection from "./_components/third-section";
import FourthSection from "./_components/fourth-section";
import Features from "./_components/features";
import FifthSection from "./_components/fifth-section";
import Quote from "./_components/quote";
import Explore from "./_components/explore";
import Slider from "./_components/slider";
import TenthSection from "../(landing-page)/_components/tenth-section";
import BottomCard from "@/components/ui/bottom-card";
import BottomSection from "@/components/ui/bottom-section";
import Footer from "@/components/ui/footer";

const TeamAlignment = () => {
    return ( 
    
    
    <div>
        <Navbar />
        <FirstSection />
        <SecondSection />
        <Features />
        <ThirdSection />
        <FourthSection />
        <FifthSection />
        <Quote />
        <Explore />
        <Slider />
        <TenthSection />
        <BottomCard />
        <BottomSection />
        <Footer />
    
        
       
      
        </div>
        
        );
}
 
export default TeamAlignment;