import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function HeroAreaThree() {
 const slides = [
  {
    id: 1,
    animation: "slide-from-right",
    smallTitle: "What Could Your Child Become?",
    title: (
      <>
        A thinker. A creator. A teammate. A leader.
        <br />
        Most importantly - their own remarkable self.
      </>
    ),
    description: (
      <>
        At <strong>Lead India Bharat Ratnas School</strong>, education is a journey
        of discovering possibilities. Through academics, experiences, creativity,
        sports and values, we create opportunities for every learner to explore
        their strengths and grow with confidence.
      </>
    ),
    buttonText: "Begin Your LIBR Journey",
    buttonLink: "/",
  },

  {
    id: 2,
    animation: "slide-from-left",
    smallTitle: "Learning Today. Leading Tomorrow.",
    title: (
      <>
        Discover. Learn. Create. Grow.
        <br />
        Every child has the potential to shine.
      </>
    ),
    description:
      "We create a learning environment where students are encouraged to think independently, explore new ideas and develop the confidence needed to face tomorrow's opportunities.",
    buttonText: "Explore Our School",
    buttonLink: "/",
  },

  {
    id: 3,
    animation: "slide-from-bottom",
    smallTitle: "Where Every Child Finds Their Strength",
    title: (
      <>
        Knowledge builds minds.
        <br />
        Values build remarkable people.
      </>
    ),
    description:
      "From academics and creativity to sports, teamwork and leadership, every experience at Lead India Bharat Ratnas School helps students discover who they are and what they can become.",
    buttonText: "Contact Us",
    buttonLink: "/",
  },
];

const [currentSlide, setCurrentSlide] = useState(0);

useEffect(() => {
  const slider = setInterval(() => {
    setCurrentSlide((prev) =>
      prev === slides.length - 1 ? 0 : prev + 1
    );
  }, 5000);

  return () => clearInterval(slider);
}, [slides.length]);
  const slide = slides[currentSlide];

  return (
    <>
      <section className="banner-section banner-section03 fix position-relative">
        <div className="container">
          <div className="banner-content3">

            {/* TEXT SLIDER START */}
            <div
              key={slide.id}
              className={`hero-text-slider ${slide.animation}`}
            >
              <div className="section-title mx-auto mb-40">
                <div className="sub__text-p1 mb-3">
                  <img
                    src="/assets/img/banner/book.png"
                    alt="Book with student"
                  />

                  <span className="mt-0">
                    {slide.smallTitle}
                  </span>
                </div>

                <h1 className="text-dark mb-3 black fw-bold d-block">
                  {slide.title}
                </h1>

                <p className="border-0 mb-0">
                  {slide.description}
                </p>
              </div>

              <div className="d-flex justify-content-center flex-sm-nowrap flex-wrap align-items-center gap-md-4 gap-3">
    <Link to={slide.buttonLink} className="common_btn text-nowrap">
  {slide.buttonText}

  <span className="icon_wrapper">
    <i className="fas fa-long-arrow-alt-right"></i>
  </span>
</Link>
              </div>
            </div>
            {/* TEXT SLIDER END */}

            {/* Slider Dots */}
            <div className="hero-slider-dots">
              {slides.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  aria-label={`Go to slide ${index + 1}`}
                  className={`hero-dot ${
                    currentSlide === index ? "active" : ""
                  }`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* FIXED RIGHT IMAGE */}
        <div className="hero-thumb-right">
          <img
            src="assets/img/banner/scoolkids.png"
            alt="Education at LIBR"
          />
        </div>

        <img
          src="assets/img/banner/rounded-shape-hero.png"
          alt=""
          className="round-hero-shape"
        />

        <img
          src="assets/img/banner/hero-shot3.png"
          alt=""
          className="shot-3 d-lg-block d-none updowns"
        />
      </section>

      <style>{`

        /* ======================================
           HERO TEXT SLIDER
        ====================================== */

        .banner-section03 {
          overflow: hidden;
        }

        .banner-content3 {
          position: relative;
          z-index: 5;
        }

        .hero-text-slider {
          position: relative;
          z-index: 4;
          will-change: transform, opacity;
        }


        /* --------------------------------------
           SLIDE 1 - RIGHT TO LEFT
        -------------------------------------- */

        .slide-from-right {
          animation: heroSlideRight 0.9s ease forwards;
        }

        @keyframes heroSlideRight {
          0% {
            opacity: 0;
            transform: translateX(100px);
          }

          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }


        /* --------------------------------------
           SLIDE 2 - LEFT TO RIGHT
        -------------------------------------- */

        .slide-from-left {
          animation: heroSlideLeft 0.9s ease forwards;
        }

        @keyframes heroSlideLeft {
          0% {
            opacity: 0;
            transform: translateX(-100px);
          }

          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }


        /* --------------------------------------
           SLIDE 3 - BOTTOM TO TOP
        -------------------------------------- */

        .slide-from-bottom {
          animation: heroSlideBottom 0.9s ease forwards;
        }

        @keyframes heroSlideBottom {
          0% {
            opacity: 0;
            transform: translateY(80px);
          }

          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }


        /* ======================================
           SMALL TITLE
        ====================================== */

        .sub__text-p1 {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
        }

        .sub__text-p1 img {
          max-width: 45px;
          height: auto;
          object-fit: contain;
        }


        /* ======================================
           SLIDER DOTS
        ====================================== */

        .hero-slider-dots {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          margin-top: 28px;
          position: relative;
          z-index: 10;
        }

        .hero-dot {
          width: 9px;
          height: 9px;
          border-radius: 50%;
          border: 0;
          padding: 0;
          background: #d4d4d4;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .hero-dot.active {
          width: 28px;
          border-radius: 20px;
          background: #5f2e74;
        }

        .hero-dot:hover {
          background: #f50963;
        }


        /* ======================================
           FIXED IMAGE
        ====================================== */

        .hero-thumb-right {
          position: absolute;
          z-index: 2;
        }

        .hero-thumb-right img {
          max-width: 100%;
          height: auto;
        }


        /* ======================================
           SMOOTH TEXT
        ====================================== */

        .hero-text-slider h1 {
          transition: all 0.4s ease;
        }

        .hero-text-slider p {
          transition: all 0.4s ease;
        }


        /* ======================================
           TABLET
        ====================================== */

        @media (max-width: 991px) {

          .hero-text-slider {
            padding-left: 15px;
            padding-right: 15px;
          }

          .hero-text-slider h1 {
            font-size: 42px;
            line-height: 1.2;
          }

          .slide-from-right {
            animation: heroSlideRightTablet 0.8s ease forwards;
          }

          .slide-from-left {
            animation: heroSlideLeftTablet 0.8s ease forwards;
          }

          @keyframes heroSlideRightTablet {
            0% {
              opacity: 0;
              transform: translateX(50px);
            }

            100% {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes heroSlideLeftTablet {
            0% {
              opacity: 0;
              transform: translateX(-50px);
            }

            100% {
              opacity: 1;
              transform: translateX(0);
            }
          }
        }


        /* ======================================
           MOBILE
        ====================================== */

        @media (max-width: 767px) {

          .hero-text-slider {
            text-align: center;
          }

          .hero-text-slider h1 {
            font-size: 32px;
            line-height: 1.25;
          }

          .hero-text-slider p {
            font-size: 15px;
            line-height: 1.7;
          }

          .sub__text-p1 {
            justify-content: center;
          }

          .sub__text-p1 img {
            max-width: 35px;
          }

          .hero-slider-dots {
            margin-top: 20px;
          }
        }


        /* ======================================
           SMALL MOBILE
        ====================================== */

        @media (max-width: 480px) {

          .hero-text-slider h1 {
            font-size: 27px;
          }

          .hero-text-slider p {
            font-size: 14px;
          }

          .sub__text-p1 span {
            font-size: 14px;
          }

          .slide-from-right {
            animation: heroMobileRight 0.7s ease forwards;
          }

          .slide-from-left {
            animation: heroMobileLeft 0.7s ease forwards;
          }

          .slide-from-bottom {
            animation: heroMobileBottom 0.7s ease forwards;
          }

          @keyframes heroMobileRight {
            0% {
              opacity: 0;
              transform: translateX(30px);
            }

            100% {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes heroMobileLeft {
            0% {
              opacity: 0;
              transform: translateX(-30px);
            }

            100% {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes heroMobileBottom {
            0% {
              opacity: 0;
              transform: translateY(30px);
            }

            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
        }

      `}</style>
    </>
  );
}