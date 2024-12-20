import React, { useMemo, useState } from "react";
import { graphql, Link } from "gatsby";
import { getImage, GatsbyImage, StaticImage } from "gatsby-plugin-image";
import "../assets/styles/styles.scss";
import "../assets/styles/tablette-styles.scss";
import "../assets/styles/mobile-styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faHouse,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

import { useMobile } from "../hook/useMobile";
import Card from "../components/card";
import PriceModal from "../components/priceModal";
import Menu from "../components/menu";

function IndexPage({ data }) {
  const { allMarkdownRemark } = data;

  const isMobile = useMobile();

  console.log(data);

  const [priceModalOpen, setPriceModalOpen] = useState(false);

  function cleanData(value) {
    let data = {};
    Object.keys(value).forEach((item) => {
      if (value[item] !== null) {
        data = {
          ...data,
          [item]: value[item],
        };
      }
    });
    return data;
  }

  const seoData = useMemo(
    () =>
      cleanData(
        allMarkdownRemark.nodes.find((item) => item.frontmatter.type === "seo")
          .frontmatter
      ),
    [allMarkdownRemark]
  );

  const pageData = useMemo(
    () =>
      cleanData(
        allMarkdownRemark.nodes.find(
          (item) => item.frontmatter.templateKey === "index-page"
        ).frontmatter
      ),
    [allMarkdownRemark]
  );

  const massagesData = useMemo(
    () =>
      allMarkdownRemark.nodes
        .filter((item) => item.frontmatter.type === "massage")
        .map((it) => cleanData(it.frontmatter)),
    [allMarkdownRemark]
  );

  const backgroundImage = getImage(pageData.header.backgroundImage);
  const descriptionImage = getImage(pageData.descriptionSection.image);
  const contactImage = getImage(pageData.contact.image);
  const logo = getImage(seoData.logo.image);
  return (
    <>
      {priceModalOpen && (
        <PriceModal
          data={massagesData}
          setOpen={() => setPriceModalOpen((prev) => !prev)}
          priceInformation={pageData.massage.priceInformation}
        />
      )}
      <header className="header">
        <GatsbyImage
          image={backgroundImage}
          alt="Amandine réalisant un massage"
          className="header-background"
        />
        <span className="header-backgroundFilter" />
        <div className="header-top">
          <Link className="header-top-logo" to="/">
            <GatsbyImage
              image={logo}
              alt="logo de l'entreprise"
              className="header-top-logo-img"
            />
            <p>{seoData.logo.text}</p>
          </Link>
          <Menu setPriceModalOpen={setPriceModalOpen} />
        </div>
        <div className="header-title-container">
          <h1 className="header-title">{seoData.title}</h1>
          {pageData.header.headerButton.visible && (
            <a
              className="header-button"
              href={pageData.header.headerButton.link}
            >
              {pageData.header.headerButton.title}
            </a>
          )}
        </div>
      </header>

      <main
        className="main"
        style={{
          background: `url(/img/mainBackground-large.webp)`,
        }}
      >
        <div className="main-container">
          <div className="main-parallax">
            <section className="main-description">
              <div className="main-description-container">
                <h2>{pageData.descriptionSection.title}</h2>
                <p className="main-description-container-text">
                  {pageData.descriptionSection.text}
                </p>
              </div>
              <GatsbyImage
                className="main-description-container-image"
                image={descriptionImage}
                alt="personne entrain de réaliser un massage"
              />
            </section>
            <section className="main-massages" id="massage">
              <h2 className="main-massages-title">{pageData.massage.title}</h2>
              <ul className="main-massages-list">
                {massagesData.map((item, key) => (
                  <li className="card" key={key}>
                    <Card
                      data={item}
                      information={pageData.massage.priceInformation}
                    />
                  </li>
                ))}
              </ul>
              <p className="main-massages-asterisque">
                {pageData.massage.asterisque}
              </p>
            </section>
            <section className="main-contact" id="contact">
              <div className="main-contact-container">
                <GatsbyImage
                  className="main-contact-image"
                  image={contactImage}
                  alt="photo représentant un salon de massage fleuri"
                />
                <div className="main-contact-details">
                  <h2 className="main-contact-title">Contact</h2>

                  <p className="main-contact-details-item">
                    <FontAwesomeIcon
                      className="main-contact-details-item-icon"
                      icon={faHouse}
                    />{" "}
                    <span className="main-contact-details-item-value">
                      <span>A domicile: </span>
                      <span className="main-contact-details-item-value-dat">
                        {pageData.contact.adresse}
                      </span>
                    </span>
                  </p>

                  <a
                    className="main-contact-details-item"
                    href={`mailto:${pageData.contact.email}?subject:Prise de contact`}
                  >
                    <FontAwesomeIcon
                      className="main-contact-details-item-icon"
                      icon={faEnvelope}
                    />

                    <span className="main-contact-details-item-value">
                      <span>Adresse email: </span>
                      <span className="main-contact-details-item-value-dat">
                        {" "}
                        {pageData.contact.email}
                      </span>
                    </span>
                  </a>
                  <a
                    className="main-contact-details-item"
                    href={`tel:${pageData.contact.phone}`}
                  >
                    <span>
                      <FontAwesomeIcon
                        className="main-contact-details-item-icon"
                        icon={faPhone}
                      />
                    </span>

                    <span className="main-contact-details-item-value">
                      <span>Numéro de téléphone: </span>
                      <span className="main-contact-details-item-value-dat">
                        {pageData.contact.phone}
                      </span>
                    </span>
                  </a>
                  <div className="main-contact-details-socialMedia">
                    {pageData.contact.instagram.visible && (
                      <a
                        className="main-contact-details-item"
                        href={
                          isMobile
                            ? `instagram://user?username=${pageData.contact.instagram.link}`
                            : `https://www.instagram.com/${pageData.contact.instagram.link}`
                        }
                      >
                        <StaticImage
                          src="../assets/images/instagram.png"
                          alt="logo instagram"
                        />
                      </a>
                    )}
                    {pageData.contact.facebook.visible && (
                      <a
                        className="main-contact-details-item"
                        href={
                          isMobile
                            ? `fb://profile/${pageData.contact.facebook.link}`
                            : `https://www.facebook.com/${pageData.contact.facebook.link}`
                        }
                      >
                        <StaticImage
                          src="../assets/images/facebook.png"
                          alt="logo facebook"
                        />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
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

export default function IndexPageContainer({ data }) {
  return <IndexPage data={data} />;
}

export function Head({ data }) {
  const { allMarkdownRemark } = data;
  function cleanData(value) {
    let data = {};
    Object.keys(value).forEach((item) => {
      if (value[item] !== null) {
        data = {
          ...data,
          [item]: value[item],
        };
      }
    });
    return data;
  }

  const seoData = useMemo(
    () =>
      cleanData(
        allMarkdownRemark.nodes.find((item) => item.frontmatter.type === "seo")
          .frontmatter
      ),
    [allMarkdownRemark]
  );

  return (
    <>
      <title>{seoData.title}</title>
      <meta name="description" content={seoData.description}></meta>
      <link rel="icon" href="/img/logo.png" />
    </>
  );
}

export const query = graphql`
  {
    allMarkdownRemark(limit: 15) {
      nodes {
        html
        frontmatter {
          templateKey
          description
          title

          image {
            childImageSharp {
              gatsbyImageData(
                formats: WEBP
                placeholder: TRACED_SVG
                breakpoints: [700, 1300]
                height: 300
                width: 350
              )
            }
          }
          prix {
            price
            time
          }
          massage {
            title
            asterisque
            priceInformation
          }
          type
          contact {
            adresse
            email
            phone
            facebook {
              link
              visible
            }
            instagram {
              link
              visible
            }
            image {
              childImageSharp {
                gatsbyImageData(
                  formats: WEBP
                  placeholder: TRACED_SVG
                  breakpoints: [700, 1300]
                  height: 450
                  width: 300
                )
              }
            }
          }
          descriptionSection {
            image {
              childImageSharp {
                gatsbyImageData(
                  formats: WEBP
                  placeholder: TRACED_SVG
                  breakpoints: [700, 1300]
                  height: 450
                  width: 300
                )
              }
            }
            title
            text
          }
          header {
            headerButton {
              link
              title
              visible
            }
            backgroundImage {
              childImageSharp {
                gatsbyImageData(
                  formats: WEBP
                  placeholder: BLURRED
                  quality: 80
                  height: 800
                  width: 1200
                )
              }
            }
          }
          logo {
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
            text
          }
        }
      }
    }
  }
`;
