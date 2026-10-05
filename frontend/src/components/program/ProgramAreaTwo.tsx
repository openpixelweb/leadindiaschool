import { Link } from "react-router-dom";
import VideoPopup from "../modals/VideoPopup";


export default function ProgramAreaTwo() {
  return (
    <>
      {/* <!-- program play Section Start --> */}
      <section className="program-play-section fix section-padding">
        <div className="container">
          <div className="section-title mb-xxl-5 mb-4 pb-lg-3 pb-0 text-center section-title-white">
            <div className="sub__warning mb-2 wow fadeInUp" data-wow-delay=".3s">
              Our Programs
            </div>
            <h2 className="black visible-slowly-bottom fw-bold d-block">
              Fun & Engaging Preschool Learning
            </h2>
          </div>
          <div className="row g-4">
            <div className="col-xl-4 col-md-6 wow fadeInUp" data-wow-delay=".3s">
              <div className="cources-single-items">
                <img src="assets/img/element/program-shpae-bg003.png" alt="img" className="cources-bg" />
                <Link to="/program-details" className="c-image mb-3 position-relative overflow-hidden">
                  <img src="assets/img/blog/program-thumb-box1.png" alt="img" className="rounded-3 w-100" />
                </Link>
                <div className="c-content px-1 text-center">
                  <h3 className="mb-2 lh-1">
                    <Link to="/program-details" className="black lh-1 visible-slowly-bottom">
                      Early Learning Basics
                    </Link>
                  </h3>
                  <p className="mb-xl-3 mb-lg-2 mb-1">
                    Foundational lessons in colors, shapes, letters, and numbers through playful.
                  </p>
                  <Link to="/program-details" className="read-more-button justify-content-center">
                    Explore Programs
                    <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 wow fadeInUp" data-wow-delay=".5s">
              <div className="cources-single-items">
                <img src="assets/img/element/program-shpae-bg003.png" alt="img" className="cources-bg" />
                <Link to="/program-details" className="c-image mb-3 position-relative overflow-hidden">
                  <img src="assets/img/blog/program-thumb-box2.png" alt="img" className="rounded-3 w-100" />
                </Link>
                <div className="c-content px-1 text-center">
                  <h3 className="mb-2 lh-1">
                    <Link to="/program-details" className="black lh-1 visible-slowly-bottom">
                      Storytime & Language Skills
                    </Link>
                  </h3>
                  <p className="mb-xl-3 mb-lg-2 mb-1">
                    Daily storytelling, rhymes, and conversations to boost early literacy
                  </p>
                  <Link to="/program-details" className="read-more-button justify-content-center">
                    Explore Programs
                    <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 wow fadeInUp" data-wow-delay=".7s">
              <div className="cources-single-items">
                <img src="assets/img/element/program-shpae-bg003.png" alt="img" className="cources-bg" />
                <Link to="/program-details" className="c-image mb-3 position-relative overflow-hidden">
                  <img src="assets/img/blog/program-thumb-box3.png" alt="img" className="rounded-3 w-100" />
                </Link>
                <div className="c-content px-1 text-center">
                  <h3 className="mb-2 lh-1">
                    <Link to="/program-details" className="black lh-1 visible-slowly-bottom">
                      Movement & Outdoor Play
                    </Link>
                  </h3>
                  <p className="mb-xl-3 mb-lg-2 mb-1">
                    Physical activities, games, and outdoor exploration to improve .
                  </p>
                  <Link to="/program-details" className="read-more-button justify-content-center">
                    Explore Programs
                    <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="space-top">
            <div className="video-wrapper-playground d-center">
              <img src="assets/img/thumbnail/play-bideo-ground.png" alt="img" className="play-ground w-100" />
              <div className="play-grps">
                PLAY
                <VideoPopup>
                    <a style={{cursor: "pointer"}}
                      className="video-style rounded-circle d-center video-popup">
                      <i className="fa-solid fa-play fs-six"></i>
                    </a>
                </VideoPopup>
                VIDEO
              </div>
            </div>
            <img src="assets/img/element/ball-pro.png" alt="img" className="ball-ele cir36 d-xl-block d-none" />
          </div>
        </div>
        <img src="assets/img/element/program-shape-bg3.png" alt="img" className="program-bg-shape" />
        <img src="assets/img/element/pro-cir-golobal.png" alt="img" className="program-global d-md-block d-none" />
        <img src="assets/img/element/pro-graduation.png" alt="img" className="program-education" />
        <img src="assets/img/element/pro-star.png" alt="img" className="program-star d-xl-block d-none cir36" />
      </section>

    </>
  )
}
