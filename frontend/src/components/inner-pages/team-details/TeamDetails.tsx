import FooterFour from "../../../layouts/footers/FooterFour";
import HeaderFour from "../../../layouts/headers/HeaderFour";
import Wrapper from "../../../layouts/Wrapper";
import BackToTop from "../../common/BackToTop";
import Breadcrumb from "../../common/Breadcrumb";
import TeamDetailsArea from "../../team/TeamDetailsArea";


export default function TeamDetails() {
  return (
    <Wrapper>
      <HeaderFour />
      <Breadcrumb title="Teacher Details" subtitle="Teacher Details" />
      <TeamDetailsArea />
      <FooterFour />
       <BackToTop />
    </Wrapper>
  )
}
