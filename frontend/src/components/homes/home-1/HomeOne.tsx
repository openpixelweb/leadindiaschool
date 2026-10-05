import ProgressAreaAbout from "../../progress/ProgressAreaAbout";
import FooterTwo from "../../../layouts/footers/FooterTwo";
import HeaderOne from "../../../layouts/headers/HeaderOne";
import Wrapper from "../../../layouts/Wrapper";
import ChooseAreaOne from "../../choose/ChooseAreaOne";
import BackToTop from "../../common/BackToTop";
import HeroAreaThree from "../../hero/HeroAreaThree";
import TestimonialAreaTwo from "../../testimonial/TestimonialAreaTwo";
import NewsletterAreaTwo from "../../Newsletter/NewsletterAreaTwo";
import ServiceAreaThree from "../../service/ServiceAreaThree";
import ExperienceArea from "../../experience/ExperienceArea";

export default function HomeOne() {
  return (
    <Wrapper>
      <HeaderOne />
      <HeroAreaThree />
      <ExperienceArea />
      {/* <ProgramAreaOne /> */}
      <ChooseAreaOne />
    <ProgressAreaAbout />
    <ServiceAreaThree />
      <TestimonialAreaTwo />
       <NewsletterAreaTwo />
      <FooterTwo />
       <BackToTop />
    </Wrapper>
  )
}
