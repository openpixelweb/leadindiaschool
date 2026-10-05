import FooterFour from "../../../layouts/footers/FooterFour";
import HeaderFour from "../../../layouts/headers/HeaderFour";
import Wrapper from "../../../layouts/Wrapper";
import BackToTop from "../../common/BackToTop";
import Breadcrumb from "../../common/Breadcrumb";
import EventArea from "../../event/EventArea";

export default function Event() {
  return (
    <Wrapper>
      <HeaderFour />
      <Breadcrumb title="Our Event" subtitle="Our Event" />
      <EventArea />
      <FooterFour />
       <BackToTop />
    </Wrapper>
  )
}
