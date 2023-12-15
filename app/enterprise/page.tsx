import Navbar from "@/components/ui/navbar/navbar";
import FirstSection from "./_components/first-section";
import SecondSection from "./_components/second-section";
import ThirdSection from "./_components/third-section";
import FourthSection from "./_components/fourth-section";
import Quote from "./_components/quote";
import FifthSection from "./_components/fifth-section";
import SixthSection from "./_components/sixth-section";
import SeventhSection from "./_components/seventh-section";
import EighthSection from "./_components/eighth-section";
import NinthSection from "./_components/ninth-section";
import TenthSection from "./_components/testimonials";
import BottomCard from "@/components/ui/bottom-card";
import BottomSection from "@/components/ui/bottom-section";
import Footer from "@/components/ui/footer";
import BottomCardBlue from "./_components/bottom-card-blue";


const Enterprise = () => {
    return ( 
    <div
    style={{
        width: "100%",
        position: "relative",

    }}
    >
     <Navbar />
     <FirstSection />
     <SecondSection />
     <ThirdSection />
     <FourthSection />
     <Quote />
     <FifthSection />
     <SixthSection />
     <SeventhSection />
     <EighthSection />
     <NinthSection />
     <TenthSection />
     <BottomCardBlue />
     <BottomSection />
     <Footer />


    </div> );
}
 
export default Enterprise;