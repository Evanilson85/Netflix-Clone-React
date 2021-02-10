import React, { useState } from "react";
import "./movieRow.css";
import { HashLink as Link } from "react-router-hash-link";

export default (props) => {
  const [scroolx, setScroolx] = useState(0);

  const setaE = () => {
    let x = scroolx + Math.round(window.innerWidth / 2);
    if (x > 0) {
      x = 0;
    }

    setScroolx(x);
  };
  const setaD = () => {
    let x = scroolx - Math.round(window.innerWidth / 2);
    let list = props.item.results.length * 150;
    if (window.innerWidth - list > x) {
      x = window.innerWidth - list - 60;
    }

    setScroolx(x);
  };

  return (
    <div className="container" id={props.id}>
      <h1 id={props.title}>{props.title}</h1>
      <div className="left" onClick={setaE}>
        ‹
      </div>
      <div className="right" onClick={setaD}>
        ›
      </div>
      <div className="movie">
        <div
          className="movieRow"
          style={{
            marginLeft: scroolx,
            width: props.item.results.length * 150,
          }}
        >
          {props.item.results.length > 0 &&
            props.item.results.map((item, key) => (
              <div className="rowItem" key={key}>
                <div className="newContainer">
                  <img
                    className="img"
                    src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                    alt={item.title}
                  />

                  <button
                    className="btns"
                    onClick={() => {
                      sessionStorage.setItem("banner", item.backdrop_path);
                      sessionStorage.setItem("title", item.title);
                      sessionStorage.setItem("nome", item.name);
                      sessionStorage.setItem("info", item.overview);
                      sessionStorage.setItem("img", item.poster_path);
                    }}
                  >
                    <Link to={`filmes/${props.id}#init`}>►</Link>
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
