 
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";




export default function TestimonialAreaOne() {
  return (
    <>
      {/* <!-- Testimonial Section Start --> */}
      <section className="testimonial-section position-relative fix">
        <div className="container">
          <div className="section-title-area align-items-end mb-48">
            <div className="section-title-areas">
              <div className="section-title">
                <div className="badge-section wow fadeInUp" data-wow-delay=".3s">
                   REAL FAMILIES. REAL EXPERIENCES.
                </div>
                <h2 className="black visible-slowly-bottom fw-bold d-block">
                    Ask the People Who Know LIBR Differently - Our Parents.
                </h2>
              </div>
            </div>
            <div className="array-button wow fadeInUp" data-wow-delay=".5s">
              <button className="array-prev position-relative w-auto h-auto p-0 bg-transparent border-0">
                <span className="array-bg d-center">
                  <i className="fa-solid fa-angle-left"></i>
                  <svg width="56" height="56" viewBox="0 0 56 56" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M56 36.986C56 52.45 42.8658 56 27.6147 56C12.3635 56 0 43.464 0 28C0 12.536 12.3635 0 27.6147 0C42.8658 0 56 21.5221 56 36.986Z"
                      fill="#F4F4F4" />
                  </svg>
                </span>
              </button>
              <button className="array-next w-auto h-auto p-0 bg-transparent border-0">
                <span className="array-bg d-center active">
                  <i className="fa-solid fa-angle-right"></i>
                  <svg width="56" height="56" viewBox="0 0 56 56" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M56 36.986C56 52.45 42.8658 56 27.6147 56C12.3635 56 0 43.464 0 28C0 12.536 12.3635 0 27.6147 0C42.8658 0 56 21.5221 56 36.986Z"
                      fill="#F4F4F4" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
        <Swiper
          loop={true}
          speed={1500}
          spaceBetween={30}
          slidesPerView={3}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          pagination={{
            el: ".dot",
            clickable: true,
          }}
          navigation={{
            nextEl: ".array-prev",
            prevEl: ".array-next",
          }}
          modules={[Autoplay, Pagination, Navigation]}
          breakpoints={{
            1199: {
              slidesPerView: 3,
            },
            767: {
              slidesPerView: 2,
            },
            575: {
              slidesPerView: 1,
            },
            0: {
              slidesPerView: 1,
            },
          }}
          className="swiper testimonial-slider">

          <SwiperSlide className="swiper-slide">
            <div className="testimonial-card testimonial_cart-hover">

     
              <div className="testimonial-single-item text-center active">
                <div className="user-thumb-area text-center mx-auto">
                  <div className="user-img mx-auto">
                    <img src="assets/img/thumbnail/parent.png" alt="img" />
                
                  </div>
                </div>
                <div className="ratting-area">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <div className="content">
                  <p>
                    “The teachers are approachable, encouraging and genuinely invested in Advika’s progress. That personal connection gives us great confidence as parents.”
                  </p>
                  <div className="author-info">
                    <div className="name">Kiran Reddy</div>
                    <span className="designation">/ Parent of Advika Reddy</span>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="testimonial-card testimonial_cart-hover">
       
       
              <div className="testimonial-single-item text-center active">
                <div className="user-thumb-area text-center mx-auto">
                  <div className="user-img mx-auto">
                    <img src="assets/img/thumbnail/parent.png" alt="img" />
             
                  </div>
                </div>
                <div className="ratting-area">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <div className="content">
                  <p>
                    “LIBR provides more than classroom learning. Reyansh is developing teamwork, independence and confidence through the many experiences the school offers”
                  </p>
                  <div className="author-info">
                    <div className="name">Meghana Patel</div>
                    <span className="designation">/ Parent of Reyansh Patel</span>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="testimonial-card testimonial_cart-hover">
          
         
              <div className="testimonial-single-item text-center active">
                <div className="user-thumb-area text-center mx-auto">
                  <div className="user-img mx-auto">
                    <img src="assets/img/thumbnail/parent.png" alt="img" />
                  
                  </div>
                </div>
                <div className="ratting-area">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <div className="content">
                  <p>
                    “The balance between academics and activities has been wonderful for Ananya. She is learning well while also exploring her creativity and interests.”
                  </p>
                  <div className="author-info">
                    <div className="name">Priya Sharma</div>
                    <span className="designation">/ Parent of Ananya Sharma</span>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="testimonial-card testimonial_cart-hover">
 
          
              <div className="testimonial-single-item text-center active">
                <div className="user-thumb-area text-center mx-auto">
                  <div className="user-img mx-auto">
                    <img src="assets/img/thumbnail/parent.png" alt="img" />
                 
                  </div>
                </div>
                <div className="ratting-area">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <div className="content">
                  <p>
                    “We have seen a wonderful change in Vihaan’s confidence and communication. LIBR gives him opportunities to learn, participate and discover his strengths.”
                  </p>
                  <div className="author-info">
                    <div className="name">Sneha Rao</div>
                    <span className="designation">/ Parent of Vihaan Rao</span>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>


            <SwiperSlide className="swiper-slide">
            <div className="testimonial-card testimonial_cart-hover">
   
              <div className="testimonial-single-item text-center active">
                <div className="user-thumb-area text-center mx-auto">
                  <div className="user-img mx-auto">
                    <img src="assets/img/thumbnail/parent.png" alt="img" />
                 
                  </div>
                </div>
                <div className="ratting-area">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <div className="content">
                  <p>
                    “What we appreciate most is the supportive environment and the individual attention Ishita receives. She genuinely looks forward to going to school every day.”
                  </p>
                  <div className="author-info">
                    <div className="name">Rajesh Kumar</div>
                    <span className="designation">/ Parent of Ishita Kumar</span>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

        </Swiper>
        {/* <img src="assets/img/element/vector-effect.png" alt="img" className="vector-effect cir36 d-sm-block " /> */}
      </section>
    </>
  )
}
