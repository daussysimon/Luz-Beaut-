import * as React from "react";

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      rel="preload"
      href="/fonts/Quicksand.ttf"
      as="font"
      type="font/truetype"
      crossOrigin="anonymous"
      key="Quicksand"
    />,
    <link
      rel="preload"
      href="/fonts/Inconsolata.ttf"
      as="font"
      type="font/ttf"
      crossOrigin="anonymous"
      key="Inconsolata"
    />,
  ]);
};
