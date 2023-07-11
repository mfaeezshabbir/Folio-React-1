import { useState, useEffect } from "react";
import DesktopVer from "./DesktopVer";
import MobileVer from "./MobileVer";
import DynamicTitle from "./components/DynamicTitle";

function App() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 992); // Adjust the breakpoint as per your requirement
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <DynamicTitle />
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
