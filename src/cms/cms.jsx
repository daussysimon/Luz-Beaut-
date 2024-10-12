import CMS from "@staticcms/core";
import React, { useEffect } from "react";
import config from "./config";

import "@staticcms/core/dist/main.css";

const CMSView = () => {
  useEffect(() => {
    if (typeof window !== `undefined`) {
      CMS.init({ config });
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
