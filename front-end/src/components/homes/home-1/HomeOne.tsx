import ProgressAreaAbout from "../../progress/ProgressAreaAbout";
import FooterTwo from "../../../layouts/footers/FooterTwo";
import HeaderOne from "../../../layouts/headers/HeaderOne";
import Wrapper from "../../../layouts/Wrapper";
import ChooseAreaOne from "../../choose/ChooseAreaOne";
import BackToTop from "../../common/BackToTop";
import HeroAreaThree from "../../hero/HeroAreaThree";
import TestimonialAreaOne from "../../testimonial/TestimonialAreaOne";
import NewsletterAreaTwo from "../../Newsletter/NewsletterAreaTwo";
// import ServiceAreaThree from "../../service/ServiceAreaThree";
import StudentLife from "../../studentlife/Studentlife";
import ExperienceArea from "../../experience/ExperienceArea";
import WhyLibrHighlights from "../../herobottom/Herobottom";
import CampusSection from "../../campus/Campus";

export default function HomeOne() {
  return (
    <Wrapper>
      <HeaderOne />
      <HeroAreaThree />
      <WhyLibrHighlights />
      <CampusSection />
      <ExperienceArea />
      {/* <ProgramAreaOne /> */}
      <ChooseAreaOne />
    <ProgressAreaAbout />
    <StudentLife />
    {/* <ServiceAreaThree /> */}
      <TestimonialAreaOne />
       <NewsletterAreaTwo />
      <FooterTwo />
       <BackToTop />
    </Wrapper>
  )
}
