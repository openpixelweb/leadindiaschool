import { Link } from "react-router-dom";


export default function LearningAreaThree() {
  return (
    <>
      {/* <!-- learning Section Start --> */}
      <section className="learning-section-02 fix">
        <div className="container">
          <div className="row g-3 align-items-end">
            <div className="col-lg-12">
              <div className="learning-box-skill position-relative z-1">
                <div className="thumb1">
                  <img src="assets/img/thumbnail/skill-thumbs1.png" alt="img" />
                </div>
                <div className="section-title section-title-white text-center">
                  <div className="sub__warning mb-3 wow fadeInUp" data-wow-delay=".3s">
                    Get your Quality
                  </div>
                  <h2 className="mb-sm-4 mb-3 pb-lg-3 pb-md-1 black visible-slowly-bottom fw-bold d-block">
                    Certified Skills Recognized by Kinez
                  </h2>
                  <div
                    className="d-flex justify-content-center align-items-center flex-wrap gap-xxl-4 gap-xl-3 gap-2">
                    <Link to="/contact" className="common_btn text-nowrap">
                      Apply nOW
                      <span className="icon_wrapper">
                        <i className="fas fa-long-arrow-alt-right"></i>
                      </span>
                    </Link>
                  </div>
                </div>
                <div className="thumb2">
                  <img src="assets/img/thumbnail/skill-thumbs2.png" alt="img" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <img src="assets/img/element/skill-shape-right.png" alt="img"
          className="skill-shape-right d-xl-block d-none position-absolute end-0 bottom-0 updowns" />
        <img src="assets/img/element/skill-shpae-left.png" alt="img"
          className="skill-shape-left d-xl-block d-none position-absolute start-0 bottom-0 updowns" />
        <img src="assets/img/element/skill-plo.png" alt="img" className="skill-plo" />
        <img src="assets/img/element/skill-follower.png" alt="img" className="skill-flowwer cir36" />
      </section>
    </>
  )
}
