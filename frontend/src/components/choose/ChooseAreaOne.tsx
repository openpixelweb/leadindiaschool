import { Link } from "react-router-dom";

import Count from "../common/Count";


export default function ChooseAreaOne() {
  return (
    <>
      {/* <!-- choose Section Start --> */}
      <div className="addmissions-section position-relative z-1">
        <div className="container">
          <div className="row g-4 justify-content-between">
       
            <div className="col-lg-6">
              <div className="choose-thumb-wap admission-thumb-wap position-relative me-lg-4">
                <div className="thumb w-100 overflow-hidden">
                  <img src="assets/img/about/homeabout.png" alt="img" className="overflow-hidden" />
                </div>
                <div className="count-box d-center">
                  <img src="assets/img/element/count-box.png" alt="img" className="count-ele" />
                  <div className="boxes position-absolute pt-1">
                    <div className="count-item justify-content-center mb-xxl-3 mb-1 d-flex align-items-center">
                      <span className="count">
                        <Count number={38} text="+" add_style={true} />
                      </span>
                     
                    </div>
                    <p>
                       Academic Experience
                    </p>
                  </div>
                </div>
         
              </div>
            </div>
                 <div className="col-lg-6">
              <div className="sassion-content">
                <div className="section-title-area align-items-end justify-content-center">
                  <div className="section-title mb-3">
                    <div className="badge-section secondary wow fadeInUp" data-wow-delay=".3s">
                      WELCOME TO LIBR
                    </div>
                    <h2 className="black mb-3 visible-slowly-bottom fw-bold d-block">
                      Where Every Child's Potential Finds a Path
                    </h2>
                    <p className="border-0 pb-xl-0 pb-0 mb-3">
                     Education is more than what happens inside a classroom. It is about discovering interests, building confidence, developing character and learning how to make a meaningful contribution to the world.
                    </p>
                    <p>At Lead India Bharat Ratnas School, we aim to create an environment where students feel encouraged to question, explore, participate and grow. Our approach brings together academics, values, creativity, activities and enriching experiences to support the development of every learner.</p>
               
                    <div className="border-bottom"></div>
                  </div>
                </div>
                <Link to="/" className="common_btn text-nowrap">
                  Discover Our Story
                  <span className="icon_wrapper">
                    <i className="fas fa-long-arrow-alt-right"></i>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <img src="/assets/img/element/hat.png" alt="img"
          className="babol-parasut bottom-0 end-0 mb-2 me-4 updowns d-xl-block d-none" />
      
        <img src="/assets/img/element/start-outline.png" alt="img"
          className="starimg position-absolute top-0 end-0 mt-4 pt-2 me-5 pe-xl-5 d-lg-block cir36 d-none" />
      </div>
      {/* <!-- End choose --> */}
    </>
  )
}
