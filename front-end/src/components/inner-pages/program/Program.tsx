import FooterFour from "../../../layouts/footers/FooterFour";
import HeaderFour from "../../../layouts/headers/HeaderFour";
import Wrapper from "../../../layouts/Wrapper";
import BackToTop from "../../common/BackToTop";
import Breadcrumb from "../../common/Breadcrumb";
import ProgramArea from "../../program/ProgramArea";


export default function Program() {
  return (
    <Wrapper>
      <HeaderFour />
      <Breadcrumb title="Our Programs" subtitle="Our Programs" />
      <ProgramArea />
      <FooterFour />
       <BackToTop />
    </Wrapper>
  )
}
