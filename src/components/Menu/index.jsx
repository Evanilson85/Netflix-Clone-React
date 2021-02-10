import "./menu.css";
import { useState } from "react";
import img from "../../assets/logo.svg";
import user from "../../assets/user1.png";
import { HashLink as Link } from "react-router-hash-link";
//import Ul from "./menu";
const Menu = (props) => {
  const teste = props.eventos;

  return (
    <nav className={props.open}>
      <div className="logo">
        <Link
          className="assitir"
          to="/"
          style={{
            backgroundColor: "transparent",
          }}
        >
          <img src={img} alt="Logo" />
        </Link>
      </div>

      <ul>
        <li>
          <Link smooth to="/#Home" onClick={teste}>
            Home
          </Link>
        </li>
        <li>
          <Link smooth to="/#Recomendados para Você" onClick={teste}>
            Recomendados
          </Link>
        </li>
        <li>
          <Link smooth to="/#Ação" onClick={teste}>
            Filmes
          </Link>
        </li>
        <li>
          <Link smooth to="/#Em Alta" onClick={teste}>
            Alta
          </Link>
        </li>
        <li>
          <Link smooth to="/#Romance" onClick={teste}>
            Destaque
          </Link>
        </li>
        <div className="user">
          <img src={user} alt="" />
        </div>
      </ul>
      {/* <Ul evento={() => alert("Ola mundo")} /> */}
    </nav>
  );
};

export default Menu;
