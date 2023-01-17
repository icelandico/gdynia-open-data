import React, { useEffect, useState } from "react";

const useMobileWidth = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      const isWidthMobile = window.innerWidth < 768;
      setIsMobile(isWidthMobile);
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
};

export default useMobileWidth;
