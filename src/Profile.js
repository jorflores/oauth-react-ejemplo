import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import RedirectLogin from "./RedirectLogin";
import Logout from "./Logout";
import UserData from "./UserData";
import ListUsers from "./ListUsers";
import axios from "axios";

function Profile() {
  const { user, isAuthenticated, isLoading, getAccessTokenSilently } =
    useAuth0();

  if (isLoading) {
    return <div> Loading... </div>;
  }
  console.log(user);

  if (user && !user.email_verified) {
    return (
      <div>
        <RedirectLogin
          mensaje="Please confirm your email before login. Redirecting to main page in 5
      seconds..."
        />
      </div>
    );
  }

  const userRoles = user["https://nagarro.example.com/roles"];
  console.log(`User roles: ${userRoles}`);

  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>Email: {user.email}</p>
        <p>Email verified: {String(user.email_verified)} </p>
        <p>Roles: {String(userRoles)}</p>
        <Logout />
      </div>
    )
  );
}

export default Profile;
