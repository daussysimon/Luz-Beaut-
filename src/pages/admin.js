import Cms from "../cms/cms";
import React from "react";

const Admin = () => {
  const script = () => {
    const isBrowser = typeof window !== "undefined";
    if (isBrowser) {
      if (window?.netlifyIdentity) {
        window?.netlifyIdentity.on("init", (user) => {
          if (!user) {
            window?.netlifyIdentity.on("login", () => {
              document.location.href = "/admin/";
            });
          }
        });
      }
    }
  };
  return (
    <>
      <Cms />
      <script>{script()}</script>
    </>
  );
};

export default Admin;

export function Head() {
  return (
    <script
      type="text/javascript"
      src="https://identity.netlify.com/v1/netlify-identity-widget.js"
    />
  );
}
