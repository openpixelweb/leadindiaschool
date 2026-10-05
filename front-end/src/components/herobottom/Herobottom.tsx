
import {
  FaBookOpen,
  FaUsers,
  FaLightbulb,
  FaStar,
  FaHeart,
} from "react-icons/fa6";

const WhyLibrHighlights = () => {
  const highlights = [
    {
      title: "Strong Academic Foundation",
      icon: FaBookOpen,
      color: "#7b3ff2",
      bg: "#eee4ff",
    },
    {
      title: "Caring & Experienced Teachers",
      icon: FaUsers,
      color: "#f12d68",
      bg: "#ffe4ec",
    },
    {
      title: "Safe & Supportive Environment",
      icon: FaLightbulb,
      color: "#f9b323",
      bg: "#fff2c9",
    },
    {
      title: "Co-curricular Growth",
      icon: FaStar,
      color: "#21b985",
      bg: "#dff8ef",
    },
    {
      title: "Values for Life",
      icon: FaHeart,
      color: "#2f80ed",
      bg: "#e4f0ff",
    },
  ];

  return (
    <>
      <section className="why-libr-strip">
        <div className="container-fluid px-0">
          <div className="row g-0 justify-content-center align-items-stretch">
            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  className="col-12 col-sm-6 col-lg why-libr-col"
                  key={index}
                >
                  <div className="why-libr-item">
                    <div
                      className="why-libr-icon"
                      style={{ backgroundColor: item.bg, color: item.color }}
                    >
                      <Icon />
                    </div>

                    <h3>{item.title}</h3>
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

export default WhyLibrHighlights;