import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { locationTitleMap, name } from "../data/utils";

const DynamicTitle: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    const locationTitle = locationTitleMap[path] || "Default Title";

    document.title = `${locationTitle} - ${name}`;
  }, [location]);

  return null;
};

export default DynamicTitle;
