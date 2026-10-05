import FooterFour from "../../../layouts/footers/FooterFour";
import HeaderFour from "../../../layouts/headers/HeaderFour";
import Wrapper from "../../../layouts/Wrapper";
import BackToTop from "../../common/BackToTop";
import Breadcrumb from "../../common/Breadcrumb";
import TeamArea from "../../team/TeamArea";


export default function Team() {
  return (
    <Wrapper>
      <HeaderFour />
      <Breadcrumb title=" Our Teachers" subtitle=" Our Teachers" />
      <TeamArea />
      <FooterFour />
       <BackToTop />
    </Wrapper>
  )
}
