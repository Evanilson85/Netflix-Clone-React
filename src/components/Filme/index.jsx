import Nav from "../Button";
import { useState, useEffect } from "react";
import Footer from "../Footer";
import "./homeFilme.css";
export default () => {
  const [headerBlack, setHeaderBlack] = useState(false);
  const [min, setMin] = useState(1200);
  const [size, setSize] = useState("cover");

  useEffect(() => {
    let largura = () => {
      if (window.innerWidth > 1200) {
        setMin(
          `url(https://image.tmdb.org/t/p/original${sessionStorage.banner})`
        );
      } else {
        setMin(`url(https://image.tmdb.org/t/p/original${sessionStorage.img})`);
        setSize("contain");
      }
    };

    largura();

    const scroll = () => {
      if (window.scrollY > 10) {
        setHeaderBlack(true);
      } else {
        setHeaderBlack(false);
      }
    };

    window.addEventListener("scroll", scroll);

    return () => {
      window.removeEventListener("scroll", scroll);
    };
  }, []);

  const newCarac = () => {
    let letra = sessionStorage.info;

    if (window.innerWidth < 1200) {
      if (letra.length > 200) {
        letra = letra.substring(0, 200) + "...";
      }
    }

    return letra;
  };

  return (
    <div>
      <main
        id="init"
        className="main"
        style={{
          backgroundSize: size,
          backgroundPosition: "center center",
          backgroundImage: min,
          backgroundRepeat: "no-repeat",
        }}
      >
        <header className={headerBlack ? "homeBlack" : ""}>
          <Nav />
        </header>

        <div className="mainInfo">
          <div className="flex">
            <h1>
              {sessionStorage.title == "undefined"
                ? sessionStorage.nome
                : sessionStorage.title}
            </h1>
            <p>{newCarac()}</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
