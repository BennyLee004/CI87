import React from "react";
import { useNavigate } from "react-router-dom";
function AboutMe() {
  const navigate = useNavigate();
  return (
    <div className="about-me">
      <h4>AboutMe</h4>
      <button onClick={() => navigate("/")}>Back Home</button>
    </div>
  );
}

export default AboutMe;
