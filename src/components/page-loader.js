import React from "react";

function PageLoader() {
  const loadingImg = "https://cdn.auth0.com/blog/hello-auth0/loader.svg";
  return (
    <div className="loader">
      <img src={loadingImg} alt="Loading..." />
    </div>
  );
}

export default PageLoader;
