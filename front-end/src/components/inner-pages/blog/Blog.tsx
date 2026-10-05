import FooterFour from "../../../layouts/footers/FooterFour";
import HeaderFour from "../../../layouts/headers/HeaderFour";
import Wrapper from "../../../layouts/Wrapper";
import BlogArea from "../../blog/BlogArea";
import BackToTop from "../../common/BackToTop";
import Breadcrumb from "../../common/Breadcrumb";

export default function Blog() {
  return (
    <Wrapper>
      <HeaderFour />
      <Breadcrumb title="Our Blog" subtitle="Our Blog" />
      <BlogArea />
      <FooterFour />
       <BackToTop />
    </Wrapper>
  )
}
