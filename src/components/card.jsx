import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
export default function Card({ data }) {
  const cardImage = getImage(data.image);
  const [priceOpen, setPriceOpen] = useState(false);
  return (
    <div className="card">
      <div className="card-header">
        <GatsbyImage
          className="card-header-image"
          image={cardImage}
          alt="image représentant un massage"
        />
        <h3 className="card-header-title">{data.title}</h3>
      </div>
      <p className="card-description">{data.description}</p>
      <div
        className={priceOpen ? "card-prices card-prices-open" : "card-prices"}
      >
        <div className="card-prices-title-container">
          <button
            onClick={() => setPriceOpen((prev) => !prev)}
            className="card-prices-title"
          >
            Tarifs
            <span>
              <FontAwesomeIcon
                className="card-prices-title-icon"
                icon={faCaretRight}
                size="lg"
              />
            </span>
          </button>
        </div>
        <div
          className={
            priceOpen
              ? "card-prices-table-container card-prices-table-container-open"
              : "card-prices-table-container"
          }
        >
          <table className="card-prices-table">
            <tbody>
              <tr>
                <th>Durée</th>
                <th>Tarifs</th>
              </tr>
              {data.prix
                .sort((a, b) => (parseInt(a.time) < parseInt(b.time) ? -1 : 1))
                .map((it, key) => (
                  <tr key={key}>
                    <td>
                      {it.time} <span>min</span>
                    </td>
                    <td>
                      {it.price} <span>€</span>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
          <p className="card-prices-information">
            Massage a domicle au dela d 10km de tarnos blabla Lorem ipsum, dolor
            sit amet consectetur adipisicing elit. Minus laboriosam eum vitae
            atque ex, vel dolor totam numquam
          </p>
        </div>
      </div>
    </div>
  );
}
