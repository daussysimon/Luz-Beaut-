import React from "react";
import PropTypes from "prop-types";

export default function HTML(props) {
  const regex = /#invite_token=([a-zA-Z0-9]+)/;
  const regex2 = /#recovery_token=([a-zA-Z0-9]+)/;

  return (
    <html {...props.htmlAttributes} lang="fr">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}

        {/* <script
          type="text/javascript"
          src="https://identity.netlify.com/v1/netlify-identity-widget.js"
        /> */}
      </body>
    </html>
  );
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
};
