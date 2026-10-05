import FooterFour from "../../../layouts/footers/FooterFour";
import HeaderFour from "../../../layouts/headers/HeaderFour";
import Wrapper from "../../../layouts/Wrapper";
import BlogAreaThree from "../../blog/BlogAreaThree";
import ChooseAreaOne from "../../choose/ChooseAreaOne";
import BackToTop from "../../common/BackToTop";
import Breadcrumb from "../../common/Breadcrumb";
import LearningAreaThree from "../../learning/LearningAreaThree";
import PricingAreaThree from "../../pricing/PricingAreaThree";
import ProgramAreaOne from "../../program/ProgramAreaOne";
import ProgressAreaAbout from "../../progress/ProgressAreaAbout";
import TestimonialAreaThree from "../../testimonial/TestimonialAreaThree";

export default function About() {
  return (
    <Wrapper>
      <HeaderFour />
      <Breadcrumb title="About Us" subtitle="About Us" />
      <ProgramAreaOne style_2={true} />
      <ChooseAreaOne />
      <ProgressAreaAbout />
      <PricingAreaThree />
      <TestimonialAreaThree />
      <BlogAreaThree />
      <LearningAreaThree />
      <FooterFour />
       <BackToTop />
    </Wrapper>
  )
}
