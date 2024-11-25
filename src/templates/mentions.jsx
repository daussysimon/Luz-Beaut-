import React from "react";
import { graphql, Link } from "gatsby";
import { HTMLContent } from "../components/content";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import "../assets/styles/style.scss";

export default function Mentions({ data }) {
  const seoData = data.allMarkdownRemark.nodes.find(
    (it) => it.frontmatter.logo
  ).frontmatter;

  const logo = getImage(seoData.logo.image);

  const html = data.allMarkdownRemark.nodes.find((it) => it.html).html;

  return (
    <>
      <header className="header-mentions">
        <div className="header-mentions-top">
          <Link className="header-top-logo" to="/">
            <GatsbyImage
              image={logo}
              alt="logo de l'entreprise"
              className="header-top-logo-img"
            />
            <p>{seoData.logo.text}</p>
          </Link>
        </div>
        <h1>Mentions légales</h1>
      </header>
      <main className="mentions">
        <HTMLContent content={html} className="mentions-content" />
      </main>
      <footer className="footer">
        <p>
          Copyright 2024 - Tous droits reservés{" "}
          <a href="https://tropicwavestudio.com/">by Tropicwave Studio</a>
        </p>
        <nav className="footer-nav">
          <a
            className="footer-link"
            href="https://sejaluzbeaute.fr/mentionslegales"
            target="__blank"
          >
            Mentions légales
          </a>
          <a
            className="footer-link"
            href="https://sejaluzbeaute.fr/cgv"
            target="__blank"
          >
            CGV
          </a>
        </nav>
      </footer>
    </>
  );
}

export const query = graphql`
  {
    allMarkdownRemark(
      filter: { frontmatter: { type: { in: ["seo", "mentions"] } } }
    ) {
      nodes {
        html
        frontmatter {
          logo {
            text
            image {
              childImageSharp {
                gatsbyImageData(
                  formats: WEBP
                  placeholder: TRACED_SVG
                  breakpoints: [700, 1300]
                  height: 80
                  width: 80
                )
              }
            }
          }
        }
      }
    }
  }
`;
