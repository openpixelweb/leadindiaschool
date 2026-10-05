import { Link } from "react-router-dom";

export default function HeroAreaThree() {
  return (
    <>
      {/* <!-- Banner Section Start --> */}
      <section className="banner-section banner-section03 fix position-relative">
        <div className="container">
          <div className="banner-content3">
            <div className="section-title mx-auto mb-40">
              <div className="sub__text-p1 mb-3 wow fadeInUp" data-wow-delay=".3s">
                 <img src="assets/img/banner/book.png" alt="Book with student" /> <span className="mt-5">What Could Your Child Become?</span>
              </div>
              <h1 className="text-dark mb-3 black fw-bold d-block wow fadeInUp" data-wow-delay="0.5s">
               A thinker. A creator. A teammate. A leader.
Most importantly - their own remarkable self.
              </h1>
              <p className="border-0 mb-0">
               At <strong>Lead India Bharat Ratnas School,</strong> education is a journey of discovering possibilities. Through academics, experiences, creativity, sports and values, we create opportunities for every learner to explore their strengths and grow with confidence.
              </p>
            </div>
            <div className="d-flex flex-sm-nowrap flex-wrap align-items-center gap-md-4 gap-3">
              <Link to="/" className="common_btn text-nowrap">
              Begin Your LIBR Journey
                <span className="icon_wrapper">
                  <i className="fas fa-long-arrow-alt-right"></i>
                </span>
              </Link>
         
            </div>
          </div>
        </div>
        {/* <div className="hero-thumb-left">
          <img src="assets/img/banner/banner-2.png" alt="Libr school students" />
        </div> */}
        <div className="hero-thumb-right">
          <img src="assets/img/banner/home-1.png" alt="education at libr" />
        </div>
        {/* <img src="assets/img/banner/rounded-shape-hero.png" alt="img" className="round-hero-shape" /> */}
        {/* <img src="/assets/img/banner/hat.png" alt="img" className="shot-4 d-lg-block d-none updowns" /> */}
        {/* <img src="assets/img/banner/plen.png" alt="img" className="shot-plen d-md-block d-none updowns" /> */}
        {/* <img src="assets/img/banner/hero-shot3.png" alt="img" className="shot-3 d-lg-block d-none updowns" /> */}
      </section>
      {/* <!-- Banner Section Start --> */}
    </>
  )
}
