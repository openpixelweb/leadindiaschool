import { Link } from "react-router-dom";
import FooterFour from "../../layouts/footers/FooterFour";
import HeaderFour from "../../layouts/headers/HeaderFour";
import Breadcrumb from "../common/Breadcrumb";

export default function NotFound() {
  return (
    <>
      <HeaderFour />
      <Breadcrumb title='404 Page' subtitle='404 Page' />
      {/* <!-- error Section Start --> */}
      <section className="error-section pt-5 section-padding fix">
        <div className="container">
          <div className="error-thumb wow fadeInUp" data-wow-delay="0.4s">
            <img src="assets/img/thumbnail/error-thumb.png" alt="img" />
          </div>
          <div className="error-content">
            <h2 className="mb-sm-3 mb-2 wow fadeInUp" data-wow-delay="0.5s">
              Oops! Page Not Found
            </h2>
            <p className="mb-48 wow fadeInUp" data-wow-delay="0.6s">
              It looks like the page you’re looking for doesn’t exist. Don’t worry! You can return to the
              homepage, explore our
              programs, or contact us for assistance.
            </p>
            <Link to="/" className="common_btn text-nowrap wow fadeInUp" data-wow-delay="0.7s">
              Go to Homepage
              <span className="icon_wrapper">
                <i className="fas fa-long-arrow-alt-right"></i>
              </span>
            </Link>
          </div>
        </div>
      </section>
      <FooterFour />
    </>
  )
}
