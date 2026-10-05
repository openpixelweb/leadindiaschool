
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { animationCreate } from "../utils/utils";

const Wrapper = ({ children }: any) => {
  const { pathname } = useLocation();

  useEffect(() => {
    // animation
    const timer = setTimeout(() => {
      animationCreate();
    }, 100);

    return () => clearTimeout(timer);
  }, [pathname]);



  return <>
    {children}
   
  </>;
};

export default Wrapper;
