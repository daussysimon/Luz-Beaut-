import Cms from "../cms/cms";
import React from "react";
import netlifyIdentityWidget from "netlify-identity-widget";

const Admin = () => {
  netlifyIdentityWidget.init();
  return (
    <>
      <Cms />
    </>
  );
};

export default Admin;
