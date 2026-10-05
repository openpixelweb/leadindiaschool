import FooterFour from "../../../layouts/footers/FooterFour";
import HeaderFour from "../../../layouts/headers/HeaderFour";
import Wrapper from "../../../layouts/Wrapper";
import BackToTop from "../../common/BackToTop";
import Breadcrumb from "../../common/Breadcrumb";
import PricingAreaThree from "../../pricing/PricingAreaThree";
import TestimonialArea from "../../testimonial/TestimonialArea";



export default function Testimonial() {
  return (
    <Wrapper>
      <HeaderFour />
      <Breadcrumb title="Testimonial" subtitle="Testimonial" />
      <TestimonialArea />
       <PricingAreaThree style_2={true} />
      <FooterFour />
       <BackToTop />
    </Wrapper>
  )
}
