
import { Link } from "react-router-dom";

const CampusSection = () => {
  return (
    <>
      <section className="campus-section">
        <div className="container">
          <div className="row align-items-center g-4">

            {/* LEFT LARGE IMAGE */}
            <div className="col-12 col-lg-5">
              <div className="campus-main-image">
                <img
                  src="/assets/img/student-life/librcampus.jpg"
                  alt="LIBR Campus"
                  className="img-fluid"
                />
              </div>
            </div>

            {/* CENTER CONTENT */}
            <div className="col-12 col-lg-4">
              <div className="campus-content">


                           <div className="section">
            <div className="section-title mb-35">
              <div className="badge-section wow fadeInUp" data-wow-delay=".3s">
             A Place to Learn, Play and Belong
              </div>
              <h2 className="visible-slowly-bottom align-items-end fw-bold d-block">
                Our Campus
              </h2>
            </div>
          </div>

                <p className="mt-3">
                  A vibrant and child-friendly campus designed to support
                  learning, creativity, safety and holistic development.
                </p>

                <div className="row g-0 campus-stats">
                  <div className="col-4">
                    <div className="campus-stat-item">
                      <h3>20+</h3>
                      <span>Classrooms</span>
                    </div>
                  </div>

                  <div className="col-4">
                    <div className="campus-stat-item campus-stat-border">
                      <h3>5+</h3>
                      <span>Learning Spaces</span>
                    </div>
                  </div>

                  <div className="col-4">
                    <div className="campus-stat-item campus-stat-border">
                      <h3>25+</h3>
                      <span>Activities</span>
                    </div>
                  </div>
                </div>

              <Link to="/" className="common_btn text-nowrap">
                  Explore Our Campus
                  <span className="icon_wrapper">
                    <i className="fas fa-long-arrow-alt-right"></i>
                  </span>
                </Link>

              </div>
            </div>

            {/* RIGHT GALLERY */}
            <div className="col-12 col-lg-3">
              <div className="row g-2 campus-gallery">

                <div className="col-6">
                  <div className="campus-gallery-item">
                    <img
                      src="/assets/img/student-life/library.jpg"
                      alt="LIBR Library"
                      className="img-fluid"
                    />
                  </div>
                </div>

                <div className="col-6">
                  <div className="campus-gallery-item">
                    <img
                      src="/assets/img/student-life/playarea.jpg"
                      alt="LIBR Play Area"
                      className="img-fluid"
                    />
                  </div>
                </div>

                <div className="col-6">
                  <div className="campus-gallery-item">
                    <img
                      src="/assets/img/student-life/activityroom.jpg"
                      alt="Activity Room"
                      className="img-fluid"
                    />
                  </div>
                </div>

                <div className="col-6">
                  <div className="campus-gallery-item">
                    <img
                      src="/assets/img/student-life/classroom.jpg"
                      alt="LIBR Classroom"
                      className="img-fluid"
                    />
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

    </>
  );
};

export default CampusSection;