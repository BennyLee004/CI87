import React from "react";
import { Outlet } from "react-router-dom";
function Profile() {
  return (
    <div className="porfile-app">
      <h2>Profile</h2>
      <Outlet/>
    </div>
  );
}

export default Profile;
