
import {
  FaFutbol,
  FaMusic,
  FaLightbulb,
  FaTrophy,
  FaChampagneGlasses,
  FaArrowRight,
  FaMedal, 
} from "react-icons/fa6";

const StudentLife = () => {
  const items = [
    {
      title: "Sports",
      description: "Building teamwork, discipline and an active lifestyle.",
      image: "/assets/img/student-life/sports.jpg",
      icon: FaFutbol,
      color: "#2f80ed",
      softColor: "#eaf4ff",
    },
    {
      title: "Arts & Culture",
      description:
        "Creating opportunities for imagination and self-expression.",
      image: "/assets/img/student-life/arts.jpg",
      icon: FaMusic,
      color: "#ed2f92",
      softColor: "#fff0f7",
    },
    {
      title: "Clubs & Activities",
      description: "Helping students explore interests beyond academics.",
      image: "/assets/img/student-life/clubs.jpg",
      icon: FaLightbulb,
      color: "#10bda5",
      softColor: "#eafbf8",
    },
    {
      title: "Competitions",
      description:
        "Encouraging students to challenge themselves and demonstrate their abilities.",
      image: "/assets/img/student-life/compititions.jpg",
      icon: FaTrophy,
      color: "#ff6b1a",
      softColor: "#fff2e9",
    },
    {
      title: "Celebrations",
      description:
        "Creating memorable experiences that bring our school community together.",
      image: "/assets/img/student-life/celebrations.jpg",
      icon: FaChampagneGlasses,
      color: "#8f35e8",
      softColor: "#f6edff",
    },
    {
      title: "Student Achievements",
      description:
        "Celebrating effort, progress, talent and accomplishment.",
      image: "/assets/img/student-life/studentachievement.jpg",
      icon: FaMedal,
      color: "#2b956b",
      softColor: "#f6edff",
    },
  ];

  return (
    <>
      <section className="student-life-section">
        <div className="container">
          {/* Heading */}
                <div className="section-title-area align-items-end justify-content-center">
            <div className="section-title mb-48 text-center">
              <div className="badge-section wow fadeInUp" data-wow-delay=".3s">
               STUDENT LIFE AT LIBR
              </div>
              <h2 className="visible-slowly-bottom fw-bold d-block">
              Every Day Brings a New Opportunity to Discover
              </h2>
              <p className="mt-2">School life should be filled with opportunities to participate, explore talents, make friends and create memorable experiences.From sports and cultural activities to clubs, competitions, celebrations and student achievements, LIBR encourages children to discover interests beyond academics.</p>
            </div>
          </div>

          {/* Cards */}
          <div className="row justify-content-center student-life-row">
            {items.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  className="col-md-4 col-lg-4"
                  key={index}
                >
                  <div className="student-life-card h-100">
                    <div className="student-image-wrapper">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="img-fluid"
                      />

                      <span
                        className="decor-line decor-line-one"
                        style={{ backgroundColor: item.color }}
                      ></span>

                      <span
                        className="decor-line decor-line-two"
                        style={{ backgroundColor: item.color }}
                      ></span>
                    </div>

                    <div
                      className="student-title-box"
                      style={{
                        backgroundColor: item.softColor,
                        boxShadow: `0 12px 25px ${item.color}22`,
                      }}
                    >
                      <div
                        className="student-icon-circle"
                        style={{ backgroundColor: item.color }}
                      >
                        <Icon />
                      </div>

                      <h3 style={{ color: item.color }}>
                        {item.title}
                      </h3>
                    </div>

                    <p className="student-card-description">
                      {item.description}
                    </p>

                    <a
                      href="#"
                      className="student-read-more"
                      style={{ color: item.color }}
                    >
                      Read More

                      <span
                        className="read-more-arrow"
                        style={{ borderColor: item.color }}
                      >
                        <FaArrowRight />
                      </span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </>
  );
};

export default StudentLife;