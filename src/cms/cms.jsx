import CMS from "@staticcms/core";
import React, { useEffect } from "react";
import config from "./config";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpa, faEye } from "@fortawesome/free-solid-svg-icons";

import "@staticcms/core/dist/main.css";

const CMSView = () => {
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
    </>
  );
};

export default CMSView;
