import FooterTwo from "../../../layouts/footers/FooterTwo";
import HeaderTwo from "../../../layouts/headers/HeaderTwo";
import Wrapper from "../../../layouts/Wrapper";
import AboutAreaTwo from "../../about/AboutAreaTwo";
import AboutAreaTwo2 from "../../about/AboutAreaTwo2";
import BlogAreaTwo from "../../blog/BlogAreaTwo";
import BrandAreaTwo from "../../brand/BrandAreaTwo";
import BackToTop from "../../common/BackToTop";
import GalleryAreaTwo from "../../gallery/GalleryAreaTwo";
import HeroAreaTwo from "../../hero/HeroAreaTwo";
import LearningAreaTwo from "../../learning/LearningAreaTwo";
import NewsletterAreaTwo from "../../Newsletter/NewsletterAreaTwo";
import PricingAreaTwo from "../../pricing/PricingAreaTwo";
import ProgramAreaTwo from "../../program/ProgramAreaTwo";
import TestimonialAreaTwo from "../../testimonial/TestimonialAreaTwo";


export default function HomeTwo() {
  return (
    <Wrapper>
      <HeaderTwo />
      <HeroAreaTwo />
      <AboutAreaTwo />
      <AboutAreaTwo2 />
      <ProgramAreaTwo />
      <PricingAreaTwo />
      <BrandAreaTwo />
      <TestimonialAreaTwo />
      <GalleryAreaTwo />
      <LearningAreaTwo />
      <BlogAreaTwo />
      <NewsletterAreaTwo />
      <FooterTwo /> 
       <BackToTop />   
    </Wrapper>
  )
}
