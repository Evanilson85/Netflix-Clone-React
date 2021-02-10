import React from "react";
import "./headerMovie.css";
import { HashLink as Link } from "react-router-hash-link";
export default (props) => {
  let primeiraData = new Date(props.item.first_air_date);

  let genero = [];
  for (let i in props.item.genres) {
    genero.push(props.item.genres[i].name);
  }

  let descriton = props.item.overview;

  if (descriton.length > 200) {
    descriton = descriton.substring(0, 200) + "...";
  }

  return (
    <section
      id="Home"
      className="header"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url(https://image.tmdb.org/t/p/original${props.item.backdrop_path})`,
        transition: "all .5s",
      }}
    >
      <div className="gradiente">
        <div className="horiz">
          <div className="name">{props.item.original_name}</div>
          <div className="info">
            <div className="poiter">{props.item.vote_average} pontos</div>
            <div className="year">{primeiraData.getFullYear()}</div>
            <div className="temporadas">
              {props.item.number_of_seasons} temporada{""}
              {props.item.number_of_seasons !== 1 ? "s" : ""}
            </div>
            <div className="descriton">{descriton}</div>
            <div className="btn">
              <Link className="assitir" to={`filmes/${props.id}`}>
                ► Assitir
              </Link>
              {/* <a className="assitir" href={`/watch/${props.item.id}`}>
              </a> */}
              <a className="listBtn" href={`/list/add/${props.item.id}`}>
                + Minha lista
              </a>
            </div>
            <div className="genero">
              <strong>Gêneros:</strong> {genero.join(", ")}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
