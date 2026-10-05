import FooterFour from "../../../layouts/footers/FooterFour";
import HeaderFour from "../../../layouts/headers/HeaderFour";
import Wrapper from "../../../layouts/Wrapper";
import BlogDetailsArea from "../../blog/BlogDetailsArea";
import BackToTop from "../../common/BackToTop";
import Breadcrumb from "../../common/Breadcrumb";


export default function BlogDetails() {
  return (
    <Wrapper>
      <HeaderFour />
      <Breadcrumb title="Blog Details" subtitle="Blog Details" />
      <BlogDetailsArea />
      <FooterFour />
       <BackToTop />
    </Wrapper>
  )
}
