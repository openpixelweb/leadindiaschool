import FooterFour from "../../../layouts/footers/FooterFour";
import HeaderFour from "../../../layouts/headers/HeaderFour";
import Wrapper from "../../../layouts/Wrapper";
import BackToTop from "../../common/BackToTop";
import Breadcrumb from "../../common/Breadcrumb";
import ContactArea from "../../contact/ContactArea";


export default function Contact() {
  return (
    <Wrapper>
      <HeaderFour />
      <Breadcrumb title="Contact Us" subtitle="Contact Us" />
      <ContactArea />
      <FooterFour />
       <BackToTop />
    </Wrapper>
  )
}
