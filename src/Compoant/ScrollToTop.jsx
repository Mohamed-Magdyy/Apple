import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0,0);
 
  }, [pathname]);

  return null;
}


// import { useEffect } from "react";
// import { useLocation } from "react-router";

// const ScrollToTop = (props) => {
//   const location = useLocation();
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [location]);

//   return <>{props.children}</>
// };

// export default ScrollToTop;

//  import { useEffect } from "react";
//  import { useLocation } from "react-router";

//  export default function ScrollToTop() {
//   const { pathname } = useLocation();
//   useEffect(() => {
//         window.scrollTo(0,0);
//       }, [pathname]);
//  }