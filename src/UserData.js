import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

function UserData(props) {
  const { user } = useAuth0();

  console.log(JSON.stringify(user));

  return (
    <div>
      UserData
      <p>Hello {user.name}</p>
    </div>
  );
}

export default UserData;
