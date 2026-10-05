
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";  
import Wrapper from "./layouts/Wrapper";
import HomeOne from "./components/homes/home-1/HomeOne";
import HomeTwo from "./components/homes/home-2/HomeTwo";
import HomeThree from "./components/homes/home-3/HomeThree";
import About from "./components/inner-pages/about/About";
import Team from "./components/inner-pages/team/Team";
import TeamDetails from "./components/inner-pages/team-details/TeamDetails";
import Testimonial from "./components/inner-pages/testimonial/Testimonial";
import ComingSoon from "./components/inner-pages/coming-soon/ComingSoon";
import Program from "./components/inner-pages/program/Program";
import ProgramDetails from "./components/inner-pages/program-details/ProgramDetails";
import Event from "./components/inner-pages/event/Event";
import EventDetails from "./components/inner-pages/event-details/EventDetails";
import Blog from "./components/inner-pages/blog/Blog";
import BlogStandard from "./components/inner-pages/blog-standard/BlogStandard";
import BlogDetails from "./components/inner-pages/blog-details/BlogDetails";
import Contact from "./components/inner-pages/contact/Contact";
import NotFound from "./components/error/not-found";
import AnimationProvider from "./components/common/AnimationProvider";

const RootLayout = () => {
  return (
    <Wrapper> 
      <AnimationProvider />
      <Outlet />
    </Wrapper>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "", element: <HomeOne /> },
      { path: "home-2", element: <HomeTwo /> },
      { path: "home-3", element: <HomeThree /> },
      { path: "about", element: <About /> },
      { path: "team", element: <Team /> },
      { path: "team-details", element: <TeamDetails /> },
      { path: "testimonial", element: <Testimonial /> },
      { path: "coming-soon", element: <ComingSoon /> },
      { path: "program", element: <Program /> },
      { path: "program-details", element: <ProgramDetails /> },
      { path: "event", element: <Event /> },
      { path: "event-details", element: <EventDetails /> },
      { path: "blog", element: <Blog /> },
      { path: "blog-standard", element: <BlogStandard /> },
      { path: "blog-details", element: <BlogDetails /> },
      { path: "contact", element: <Contact /> },
      { path: "*", element: <NotFound /> },
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
