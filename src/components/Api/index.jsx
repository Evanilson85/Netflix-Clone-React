const apiKey = "04c35731a5ee918f014970082a0088b1";
const apiUrl = "https://api.themoviedb.org/3";
// https://api.themoviedb.org/3/discover/tv/?with_network=213&language=pt-BR&api_key=04c35731a5ee918f014970082a0088b1
const basicFecth = async (point) => {
  const req = await fetch(`${apiUrl}${point}`);
  const json = await req.json();
  return json;
};

export default {
  getHomeList: async () => {
    return [
      {
        id: 1,
        slug: "originals",
        title: "Originais do Netflix",
        items: await basicFecth(
          `/discover/tv/?with_network=213&language=pt-BR&api_key=${apiKey}`
        ),
      },
      {
        id: 2,
        slug: "trending",
        title: "Recomendados para Você",
        items: await basicFecth(
          `/trending/all/week?language=pt-BR&api_key=${apiKey}`
        ),
      },
      {
        id: 3,
        slug: "toprated",
        title: "Em Alta",
        items: await basicFecth(
          `/movie/top_rated?&language=pt-BR&api_key=${apiKey}`
        ),
      },
      {
        id: 4,
        slug: "action",
        title: "Ação",
        items: await basicFecth(
          `/discover/movie?with_genres=28&language=pt-BR&api_key=${apiKey}`
        ),
      },
      {
        id: 5,
        slug: "comedy",
        title: "Comédia",
        items: await basicFecth(
          `/discover/movie?with_genres=35&language=pt-BR&api_key=${apiKey}`
        ),
      },
      {
        id: 6,
        slug: "horror",
        title: "Terror",
        items: await basicFecth(
          `/discover/movie?with_genres=27&language=pt-BR&api_key=${apiKey}`
        ),
      },
      {
        id: 7,
        slug: "romance",
        title: "Romance",
        items: await basicFecth(
          `/discover/movie?with_genres=10749&language=pt-BR&api_key=${apiKey}`
        ),
      },
      // {
      //   id: 8,
      //   slug: "documentary",
      //   title: "Documentários",
      //   items: await basicFecth(
      //     `/discover/movie?with_genres=99&language=pt-BR&api_key=${apiKey}`
      //   ),
      // },
    ];
  },

  getMovieinfo: async (movieId, type) => {
    let info = {};

    if (movieId) {
      switch (type) {
        case "movie":
          info = await basicFecth(
            `/movie/${movieId}?language=pt-BR&api_key=${apiKey}`
          );
          break;
        case "tv":
          info = await basicFecth(
            `/tv/${movieId}?language=pt-BR&api_key=${apiKey}`
          );
          break;
        default:
          info = null;
          break;
      }
    }

    return info;
  },
};
