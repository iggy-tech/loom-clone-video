import Navbar from "@/components/ui/navbar/navbar";
import FirstSection from "./_components/first-section";
import SecondSection from "./_components/second-section";
import ThirdSection from "./_components/third-section";
import FourthSection from "./_components/fourth-section";
import FAQS from "./_components/faqs";
import Testimonials from "./_components/testimonials";
import BottomCard from "@/components/ui/bottom-card";
import BottomSection from "@/components/ui/bottom-section";
import Footer from "@/components/ui/footer";

const BirdAi = () => {
    return ( 
    <div>
      <Navbar />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FAQS />
      <Testimonials />
      <BottomCard />
      <BottomSection />
      <Footer />
    </div> );
}
 
export default BirdAi;