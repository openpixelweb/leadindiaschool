import { Link } from "react-router-dom";


export default function AboutAreaTwo2() {
  return (
    <>
      {/* <!-- about Section Start --> */}
      <div className="addmissions-section2 section-padding position-relative fix z-1">
        <div className="container">
          <div className="row g-4 justify-content-between">
            <div className="col-lg-6">
              <div className="choose-thumb-wap admission-thumb-wap position-relative">
                <div className="thumb w-100 overflow-hidden">
                  <img src="assets/img/about/about-us02.png" alt="img" className="overflow-hidden" />
                </div>
                <img src="assets/img/element/about-book.png" alt="img"
                  className="position-absolute top-0 start-0 updowns" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="sassion-content sassion-content2 ps-xxl-5">
                <div className="section-title-area align-items-end justify-content-center">
                  <div className="section-title mb-xl-5 mb-4">
                    <div className="badge-sub2 mb-2 wow fadeInUp" data-wow-delay=".3s">
                      About Us
                    </div>
                    <h2 className="black mb-3 visible-slowly-bottom fw-bold d-block">
                      Nurturing Young Minds with Love & Learning
                    </h2>
                    <p className="border-0 pb-xl-1 pb-0 mb-4">
                      Our preschool provides a warm, caring environment where children grow through
                      creativity, exploration, and play
                    </p>
                    <div className="d-flex flex-column gap-lg-4 gap-3 mb-lg-4 mb-3">
                      <div className="user-thumb-area-grop d-flex align-items-center gap-xxl-3 gap-2">
                        <div className="user-img">
                          <img src="assets/img/element/program-abc1.png" alt="img" />
                        </div>
                        <div
                          className="author-info justify-content-start align-items-start text-start flex-column">
                          <div className="name lh-1">Our Mission</div>
                          <span className="designation">
                            Aliquam erat volutpat nullam imperdiet
                          </span>
                        </div>
                      </div>
                      <div className="user-thumb-area-grop d-flex align-items-center gap-xxl-3 gap-2">
                        <div className="user-img">
                          <img src="assets/img/element/program-abc2.png" alt="img" />
                        </div>
                        <div
                          className="author-info justify-content-start align-items-start text-start flex-column">
                          <div className="name lh-1">Our Vision</div>
                          <span className="designation">
                            Ut vehiculadictumst maecenas ante.
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="pb-lg-2">
                      <div className="list-of-admission">
                        <div className="row g-xl-3 g-3">
                          <div className="col-sm-12">
                            <div className="d-flex gap-2 align-items-center">
                              <img src="assets/img/icon/check-badge.png" alt="img" />
                              Play-based learning programs
                            </div>
                          </div>
                          <div className="col-sm-12">
                            <div className="d-flex gap-2 align-items-center">
                              <img src="assets/img/icon/check-badge.png" alt="img" />
                              Friendly, trained preschool teachers
                            </div>
                          </div>
                          <div className="col-sm-12">
                            <div className="d-flex gap-2 align-items-center">
                              <img src="assets/img/icon/check-badge.png" alt="img" />
                              Fun daily routines with music, art & movement
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Link to="/about" className="common_btn text-nowrap">
                  Learn More About Us
                  <span className="icon_wrapper">
                    <i className="fas fa-long-arrow-alt-right"></i>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <img src="assets/img/element/about-sun.png" alt="img"
          className="babol-parasut bottom-0 end-0 me-xxl-5 mb-1 mb-xxl-5 mb-1 updowns d-sm-block d-none" />
        <img src="assets/img/element/ele-bird.png" alt="img"
          className="babol-quit bottom-0 pb-5 mb-xl-5 updowns ms-xxl-5 ms-0 d-lg-block d-none" />
        <img src="assets/img/element/about-suns-follow.png" alt="img" className="babol-suns zoom-in" />
      </div>
    </>
  )
}
