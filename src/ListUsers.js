import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

function ListUsers() {
  const { user, isAuthenticated, isLoading, getAccessTokenSilently } =
    useAuth0();
  const [users, setUsers] = useState([]);
  const [token, setToken] = useState("");

  useEffect(() => {
    const getUserMetadata = async () => {
      const domain = "nagarrotest.us.auth0.com";

      const accessToken = await getAccessTokenSilently({
        authorizationParams: {
          audience: `https://${process.env.REACT_APP_DOMAIN}/api/v2/`,
          scope: "read:current_user read:roles ",
        },
      });

      console.log();
      try {
        const userDetailsByIdUrl = `https://${process.env.REACT_APP_DOMAIN}/api/v2/users`;

        const metadataResponse = await fetch(userDetailsByIdUrl, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const user_metadata = await metadataResponse.json();
        console.log("RESPONSE: " + JSON.stringify(user_metadata));
        setUsers(user_metadata);

        // setUserMetadata(user_metadata);
      } catch (e) {
        console.log("Error -----: " + e.message);
      }
    };

    const getToken = async () => {
      let get_t = await fetch(`${process.env.REACT_APP_MANAGEMENT_API}`);

      const t = await get_t.json();
      setToken(t.token);
    };

    //getUserMetadata();
    //  getToken();
    //  getUserMetadata()
  }, []);

  return (
    <div>
      ListUsers
      <p>
        {users.map((item) => (
          <p>{item.name}</p>
        ))}
      </p>
    </div>
  );
}

export default ListUsers;
