import { useState, useEffect } from "react";
import DesktopVer from "./DesktopVer";
import MobileVer from "./MobileVer";

function App() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 992 ); // Adjust the breakpoint as per your requirement
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {isSmallScreen ? (
        <MobileVer />
      ) : (
        <>
          <DesktopVer />
        </>
      )}
    </>
  );
}

export default App;
