import { Link } from "react-router-dom";


export default function EventDetailsArea() {
  return (
    <>
      {/* <!-- event Section Start --> */}
      <section className="our-event-section pt-5 section-padding fix">
        <div className="container">
          <div className="event-details-head-box">
            <div className="thumb w-100 wow fadeInUp mb-4" data-wow-delay="0.4s">
              <img src="assets/img/blog/event-details-big.png" alt="img" className="w-100" />
            </div>
            <h2 className="wow fadeInUp" data-wow-delay="0.5s">Creative Art & Craft Day</h2>
            <p className="mb-xxl-4 mb-lg-3 mb-2 wow fadeInUp" data-wow-delay="0.6s">
              Creative Art & Craft Day is a fun-filled, immersive experience designed to spark imagination and
              creativity in young
              children. During this exciting event, kids will engage in a variety of hands-on activities,
              including painting,
              coloring, paper crafts, clay modeling, and simple DIY projects.
            </p>
            <p className="wow fadeInUp" data-wow-delay="0.7s">
              Each activity is carefully designed to encourage self-expression, improve fine motor skills, and
              foster problem-solving
              abilities. Beyond learning, children will enjoy collaborating with peers, sharing ideas, and
              building confidence through
              creative play. Our caring teachers guide every child, ensuring a safe and supportive environment
              where curiosity
              thrives. This special day not only nurtures artistic skills but also creates joyful memories,
              helping children develop a
              lifelong love for creativity and exploration.
            </p>
          </div>
          <div className="row g-4">
            <div className="col-lg-8">
              <div className="activites-top mb-4 wow fadeInUp" data-wow-delay="0.4s">
                <h3 className="fs-24px mb-3">
                  Activities Include
                </h3>
                <div className="list-of-admission pe-5">
                  <div className="row g-1">
                    <div className="col-sm-6">
                      <div className="d-flex gap-2 align-items-center">
                        <img src="assets/img/icon/check-badge.png" alt="img" />
                        Painting & Coloring Fun
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="d-flex gap-2 align-items-center">
                        <img src="assets/img/icon/check-badge.png" alt="img" />
                        Paper Craft & DIY Creations
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="d-flex gap-2 align-items-center">
                        <img src="assets/img/icon/check-badge.png" alt="img" />
                        Clay & Sensory Art
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="d-flex gap-2 align-items-center">
                        <img src="assets/img/icon/check-badge.png" alt="img" />
                        Group Art Play
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="activites-top mb-4 wow fadeInUp" data-wow-delay="0.5s">
                <h3 className="fs-24px mb-3">
                  Benefits for Children
                </h3>
                <div className="list-of-admission mb-4 wow fadeInUp" data-wow-delay="0.6s">
                  <div className="row g-1">
                    <div className="col-sm-6">
                      <div className="d-flex gap-2 align-items-center">
                        <img src="assets/img/icon/check-badge.png" alt="img" />
                        Encourages creativity & self-expression
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="d-flex gap-2 align-items-center">
                        <img src="assets/img/icon/check-badge.png" alt="img" />
                        Improves hand-eye coordination
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="d-flex gap-2 align-items-center">
                        <img src="assets/img/icon/check-badge.png" alt="img" />
                        Builds confidence through creative play
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="d-flex gap-2 align-items-center">
                        <img src="assets/img/icon/check-badge.png" alt="img" />
                        Promotes teamwork and social interaction
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="activites-top mb-4 wow fadeInUp" data-wow-delay="0.7s">
                <h3 className="fs-24px mb-2">
                  About the Event
                </h3>
                <p className="fw-medium">
                  Creative Art & Craft Day is a joyful, hands-on event designed to encourage imagination,
                  creativity, and self-expression
                  in young children. Through guided art activities, kids explore colors, textures, and shapes
                  in a fun, supportive
                  environment.
                </p>
              </div>
              <div className="d-flex align-items-center gap-lg-4 gap-3 mb-3 wow fadeInUp" data-wow-delay="0.8s">
                <div className="thumb w-100 wow fadeInUp" data-wow-delay="0.4s">
                  <img src="assets/img/blog/event-middle1.png" alt="img" className="w-100" />
                </div>
                <div className="thumb w-100 wow fadeInUp" data-wow-delay="0.5s">
                  <img src="assets/img/blog/event-middle2.png" alt="img" className="w-100" />
                </div>
              </div>
              <div className="activites-top mb-4 pb-xxl-2 wow fadeInUp" data-wow-delay="0.7s">
                <h3 className="fs-24px mb-2">
                  Parent Information
                </h3>
                <p className="fw-medium">
                  Parents are warmly invited to join and observe their child’s creative experience throughout
                  the event. Our teachers
                  ensure a safe, well-supervised environment at all times. Photos and activity highlights will
                  be shared after the event
                  so families can relive these joyful moments together .
                </p>
              </div>
              <div className="activites-top mb-48 wow fadeInUp" data-wow-delay="0.5s">
                <h3 className="fs-24px mb-3">
                  Registration Info
                </h3>
                <div className="list-of-admission">
                  <div className="row g-1">
                    <div className="col-sm-6">
                      <div className="d-flex gap-2 align-items-center">
                        <img src="assets/img/icon/check-badge.png" alt="img" />
                        Registration Deadline: <small className="pra-clr fw-normal">July 05, 2026</small>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="d-flex gap-2 align-items-center">
                        <img src="assets/img/icon/check-badge.png" alt="img" />
                        Entry Fee: <small className="pra-clr fw-normal">Free / Included in program</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-start wow fadeInUp" data-wow-delay="0.8s">
                <Link to="/contact" className="common_btn text-nowrap">
                  REGISTER YOURSELF
                  <span className="icon_wrapper">
                    <i className="fas fa-long-arrow-alt-right"></i>
                  </span>
                </Link>
              </div>
            </div>
            <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
              <div className="evento-info">
                <img src="assets/img/element/event-info-shape.png" alt="img" className="even-ele" />
                <h3 className="border-bottom pb-xxl-4 pb-3 mb-xxl-4 mb-3">Event Information:</h3>
                <ul className="liting d-flex flex-column gap-xxl-3 gap-2 mb-4 pb-xxl-2">
                  <li>
                    <span className="start d-flex align-items-center justify-content-between">Start Time
                      :</span>
                    <span className="ending">November 08, 2026</span>
                  </li>
                  <li>
                    <span className="start d-flex align-items-center justify-content-between">Date :</span>
                    <span className="ending">10:00 AM – 1:00 PM</span>
                  </li>
                  <li>
                    <span className="start d-flex align-items-center justify-content-between">Location :</span>
                    <span className="ending">10:00 AM – 1:00 PM</span>
                  </li>
                  <li>
                    <span className="start d-flex align-items-center justify-content-between">Age Group :</span>
                    <span className="ending">Hall, Kinez Campus</span>
                  </li>
                  <li>
                    <span className="start d-flex align-items-center justify-content-between">Email :</span>
                    <span className="ending">3 – 6 Years</span>
                  </li>
                  <li>
                    <span className="start d-flex align-items-center justify-content-between">Phone :</span>
                    <span className="ending text-break">info@kinezpschool.com</span>
                  </li>
                  <li>
                    <span className="start d-flex align-items-center justify-content-between">Language :</span>
                    <span className="ending">346 - 493 - 4559</span>
                  </li>
                </ul>
                <div className="text-center">
                  <a href="#" className="common_btn text-nowrap">
                    Get tickets now
                    <span className="icon_wrapper">
                      <i className="fas fa-long-arrow-alt-right"></i>
                    </span>
                  </a>
                </div>
                <div className="header-top-social mt-4 justify-content-center d-flex align-items-center">
                  <a href="#" className="fw-semibold text-dark">
                    Follow On:
                  </a>
                  <a href="#" className="icon sub-font"><i className="fa-brands fa-linkedin"></i></a>
                  <a href="#" className="icon sub-font"><i className="fa-brands fa-twitter"></i> </a>
                  <a href="#" className="icon sub-font"><i className="fa-brands fa-instagram"></i>
                  </a>
                  <a href="#" className="icon sub-font"><i className="fa-brands fa-facebook"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
