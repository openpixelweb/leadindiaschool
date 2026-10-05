import FooterFour from "../../../layouts/footers/FooterFour";
import HeaderFour from "../../../layouts/headers/HeaderFour";
import Wrapper from "../../../layouts/Wrapper";
import BackToTop from "../../common/BackToTop";
import Breadcrumb from "../../common/Breadcrumb";
import EventDetailsArea from "../../event/EventDetailsArea";

export default function EventDetails() {
  return (
    <Wrapper>
      <HeaderFour />
      <Breadcrumb title="Event Details" subtitle="Event Details" />
      <EventDetailsArea />
      <FooterFour />
       <BackToTop />
    </Wrapper>
  )
}
