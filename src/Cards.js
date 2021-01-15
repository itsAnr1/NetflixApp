import React from "react";
import sdata from "./Sdata.jsx";

function Cards() {
  return (
    <div className="grid">
      {sdata.map(({ title, imgsrc, link, sname }, index) => (
        <div className="grid__item" key={index}>
          <div className="card">
            <img className="card__img" src={imgsrc} alt="" />
            <div className="card__content">
              <h5 className="card__header">{sname}</h5>
              <p className="card__text">{title}</p>
              <a href={link} target="_blank">
                <button className="card__btn">
                  Watch Now <span>&rarr;</span>
                </button>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cards;
