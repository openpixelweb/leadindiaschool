import FooterFour from "../../../layouts/footers/FooterFour";
import HeaderFour from "../../../layouts/headers/HeaderFour";
import Wrapper from "../../../layouts/Wrapper";
import BlogStandardArea from "../../blog/BlogStandardArea";
import BackToTop from "../../common/BackToTop";
import Breadcrumb from "../../common/Breadcrumb";

export default function BlogStandard() {
  return (
    <Wrapper>
      <HeaderFour />
      <Breadcrumb title="Blog Standard" subtitle="Blog Standard" />
      <BlogStandardArea />
      <FooterFour />
       <BackToTop />
    </Wrapper>
  )
}
