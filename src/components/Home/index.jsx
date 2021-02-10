import { useState, useEffect } from "react";
import Header from "../Header";
import ButtonOpen from "../Button";
import Movie from "../Movies";
import Api from "../Api";
import img from "./../../assets/logo.svg";
import Footer from "../Footer";
import "../../App.css";

function App() {
  const [movie, setMovie] = useState([]);
  const [data, setData] = useState(null);
  const [headerBlack, setHeaderBlack] = useState(false);

  useEffect(() => {
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

  useEffect(() => {
    const list = async () => {
      let list = await Api.getHomeList();
      setMovie(list);

      // console.log(list);
      let original = list.filter((i) => i.slug === "originals");

      //! aleatorio

      let aleatorio = Math.floor(
        Math.random() * (original[0].items.results.length - 1)
      );

      let escolhido = original[0].items.results[aleatorio];
      let escolhidoInfo = await Api.getMovieinfo(escolhido.id, "tv");
      setData(escolhidoInfo);

      setData(escolhidoInfo);
    };
    list();
    setInterval(() => {
      list();
    }, 600000);

    return;
  }, []);

  return (
    <div className="App">
      <header className={headerBlack ? "black" : ""}>
        <ButtonOpen />

        <img className="imgsLogo" src={img} alt="" />
      </header>
      {data && <Header item={data} />}
      {data && (
        <main className="list">
          {movie.map((item, key) => (
            <Movie
              key={key}
              // position={() => index()}
              id={item.id}
              title={item.title}
              item={item.items}
            />
          ))}
        </main>
      )}
      {data && <Footer />}
      {!data && (
        <div className="load">
          <div className="loader"></div>
        </div>
      )}
    </div>
  );
}

export default App;
