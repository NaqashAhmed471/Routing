import React from "react";
import { Routes, Route, Link, useMatch } from "react-router-dom";
import EditProfile from "../components/EditProfile";
import ViewProfile from "../components/ViewProfile";

const Profile = () => {
    // const { path, uri } = useMatch();
  // console.log(useMatch());
  return (
    <>
      <h1>Profile Page</h1>

      {/* <ul>
        <li>
          <Link to={`${uri}/viewprofile`}>View Profile</Link>
        </li>
        <li>
          <Link to={`${uri}/editprofile`}>Edit Profile</Link>
        </li>
      </ul>

      <Routes>
        <Route path={`${path}/viewprofile`} element={ViewProfile} />
        <Route path={`${path}/editprofile`} element={EditProfile} />
      </Routes> */}
    </>
  );
};

export default Profile;
