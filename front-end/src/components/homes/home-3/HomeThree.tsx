import FooterThree from "../../../layouts/footers/FooterThree";
import HeaderThree from "../../../layouts/headers/HeaderThree";
import Wrapper from "../../../layouts/Wrapper";
import AboutAreaThree from "../../about/AboutAreaThree";
import BlogAreaThree from "../../blog/BlogAreaThree";
import BackToTop from "../../common/BackToTop";
import CoursesAreaThree from "../../courses/CoursesAreaThree";
import EventAreaThree from "../../event/EventAreaThree";
import HeroAreaThree from "../../hero/HeroAreaThree";
import LearningAreaThree from "../../learning/LearningAreaThree";
import PricingAreaThree from "../../pricing/PricingAreaThree";
import ServiceAreaThree from "../../service/ServiceAreaThree";
import TestimonialAreaThree from "../../testimonial/TestimonialAreaThree";

export default function HomeThree() {
  return (
    <Wrapper>
      <HeaderThree />
      <HeroAreaThree />
      <AboutAreaThree />
      <CoursesAreaThree />
      <ServiceAreaThree />
      <EventAreaThree />
      <PricingAreaThree />
      <TestimonialAreaThree />
      <BlogAreaThree />
      <LearningAreaThree />
      <FooterThree />
       <BackToTop />
    </Wrapper>
  )
}
