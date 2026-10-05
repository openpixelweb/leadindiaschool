import { Link } from "react-router-dom";


export default function LearningAreaTwo() {
  return (
    <>
      {/* <!-- learning Section Start --> */}
      <section className="learning-section fix">
        <div className="container">
          <div className="row g-3 align-items-end">
            <div className="col-lg-6">
              <div className="learning-box-left position-relative z-1">
                <div className="section-title mb-lg-4 pb-lg-3 section-title-white">
                  <div className="sub__warning mb-2 wow fadeInUp" data-wow-delay=".3s">
                    Start Learning
                  </div>
                  <h2 className="mb-sm-4 mb-3 pb-lg-3 pb-md-1 black visible-slowly-bottom fw-bold d-block">
                    Where Every Little Step Leads to Big Discoveries
                  </h2>
                  <div className="d-flex align-items-center flex-wrap gap-xxl-4 gap-xl-3 gap-2">
                    <Link to="/testimonial" className="common_btn text-nowrap">
                      Read More Reviews
                      <span className="icon_wrapper">
                        <i className="fas fa-long-arrow-alt-right"></i>
                      </span>
                    </Link>
                    <Link to="/contact"
                      className="common_btn ps-1 pe-3 common_btn_outline common_btn__outline-white text-nowrap">
                      <span className="icon_wrapper ms-0 me-2">
                        <i className="fas fa-long-arrow-alt-right"></i>
                      </span>
                      +065 345 939 -3909
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="learning-thumb reveal-left">
                <img src="assets/img/about/learning-thumb.png" alt="img" className="w-100" />
              </div>
            </div>
          </div>
        </div>
        <img src="assets/img/element/learn-bg.png" alt="img"
          className="position-absolute bottom-0 start-0 w-100 learning-bg" />
        <img src="assets/img/element/learning-shape.png" alt="img" className="position-absolute bottom-0 start-0 w-100" />
        <img src="assets/img/element/learn-multiple-pen.png" alt="img"
          className="position-absolute bottom-0 start-0 z-n1 mb-5 d-xxl-block d-none" />
        <img src="assets/img/element/learn-pen.png" alt="img"
          className="position-absolute z-n1 learn-pen updowns d-md-block d-none" />
        <img src="assets/img/element/learn-flower.png" alt="img"
          className="position-absolute z-n1 learn-flower bob-x d-xxl-block d-none" />
      </section>
    </>
  )
}
