import FooterFour from "../../../layouts/footers/FooterFour";
import HeaderFour from "../../../layouts/headers/HeaderFour";
import Wrapper from "../../../layouts/Wrapper";
import BackToTop from "../../common/BackToTop";
import Breadcrumb from "../../common/Breadcrumb";
import ProgramDetailsArea from "../../program/ProgramDetailsArea";

export default function ProgramDetails() {
  return (
    <Wrapper>
      <HeaderFour />
      <Breadcrumb title="Program Details" subtitle="Program Details" />
      <ProgramDetailsArea />
      <FooterFour />
       <BackToTop />
    </Wrapper>
  )
}
