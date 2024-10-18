import CMS from "@staticcms/core";
import React, { useEffect } from "react";
import config from "./config";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpa, faEye } from "@fortawesome/free-solid-svg-icons";

import "@staticcms/core/dist/main.css";

const CMSView = () => {
  const script = () => {
    const isBrowser = typeof window !== "undefined";
    if (isBrowser) {
      if (window?.netlifyIdentity) {
      }
      {
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
  useEffect(() => {
    if (typeof window !== `undefined`) {
      CMS.init({ config });

      CMS.registerIcon("massageIcon", () => (
        <FontAwesomeIcon icon={faSpa} size="lg" />
      ));

      CMS.registerIcon("seo", () => <FontAwesomeIcon icon={faEye} size="lg" />);
    }
  }, []);

  return (
    <>
      <head>
        <script
          type="text/javascript"
          src="https://identity.netlify.com/v1/netlify-identity-widget.js"
        ></script>
      </head>
      <style jsx="true" global="true">{`
        html,
        body {
          height: 100%;
        }
        .CMS_Editor_content-wrapper {
          margin: 60px;
        }
        .CMS_WidgetObject_summary {
          font-size: 0.9rem;
        }

        a:active,
        a:hover {
          color: unset;
        }
      `}</style>
      <script>{script()}</script>
    </>
  );
};

export default CMSView;
