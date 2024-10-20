import Cms from "../cms/cms";
import React from "react";

const Admin = () => {
  return (
    <>
      <Cms />
    </>
  );
};

export default Admin;

export function Head() {
  return (
    <script
      type="text/javascript"
      src="https://identity.netlify.com/v1/netlify-identity-widget.js"
    ></script>
  );
}
