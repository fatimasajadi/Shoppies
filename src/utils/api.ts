import qs from "qs";

const baseUrl = "https://www.omdbapi.com/";

export enum Type {
  Movie = "movie",
  Series = "series",
  Episode = "episode",
}

interface Params {
  s?: string;
  type?: Type;
}

export interface Movie {
  Poster: string;
  Title: string;
  Type: Type;
  Year: string;
  imdbID: string;
}

interface SearchResponse {
  Search: Movie[];
  totalResults: number;
}

class OMDBApi {
  constructor(private apiKey = process.env.REACT_APP_OMDB_API_KEY) {}

  private request(params: Params) {
    const queryString = qs.stringify({
      ...params,
      apiKey: this.apiKey,
    });

    return fetch(`${baseUrl}?${queryString}`).then((response) => {
      if (response.status >= 200 && response.status < 300) {
        return response.json();
      }

      throw new Error(`Response status ${response.statusText}`);
    });
  }

  public async searchMovie(term: string): Promise<SearchResponse> {
    const result = await this.request({ s: term });
    return {
      Search: result.Search ?? [],
      totalResults: result.totalResults ? Number(result.totalResults) : 0,
    };

    // For testing and not exploiting my API key
    /*
    return {
      Search: [
        {
          Title: "Friends",
          Year: "1994–2004",
          imdbID: "tt0108778",
          Type: Type.Series,
          Poster:
            "https://m.media-amazon.com/images/M/MV5BNDVkYjU0MzctMWRmZi00NTkxLTgwZWEtOWVhYjZlYjllYmU4XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg",
        },
        {
          Title: "Friends with Benefits",
          Year: "2011",
          imdbID: "tt1632708",
          Type: Type.Movie,
          Poster:
            "https://m.media-amazon.com/images/M/MV5BMTQ2MzQ0NTk4N15BMl5BanBnXkFtZTcwMDc2NDYzNQ@@._V1_SX300.jpg",
        },
        {
          Title: "Just Friends",
          Year: "2005",
          imdbID: "tt0433400",
          Type: Type.Movie,
          Poster:
            "https://m.media-amazon.com/images/M/MV5BMjA0Mzg2NjUzMl5BMl5BanBnXkFtZTcwNDg2ODUzMQ@@._V1_SX300.jpg",
        },
        {
          Title: "How to Lose Friends & Alienate People",
          Year: "2008",
          imdbID: "tt0455538",
          Type: Type.Movie,
          Poster:
            "https://m.media-amazon.com/images/M/MV5BMjY0MzFmMDgtY2ZiOC00M2QyLWFmOWMtOTBmZWY4OWE2YTYzXkEyXkFqcGdeQXVyMjA5MTIzMjQ@._V1_SX300.jpg",
        },
        {
          Title: "Friends with Kids",
          Year: "2011",
          imdbID: "tt1720616",
          Type: Type.Movie,
          Poster:
            "https://m.media-amazon.com/images/M/MV5BMTcyMDI2NjU2Ml5BMl5BanBnXkFtZTcwNjA4MzQzNw@@._V1_SX300.jpg",
        },
        {
          Title: "We Are Your Friends",
          Year: "2015",
          imdbID: "tt3787590",
          Type: Type.Movie,
          Poster:
            "https://m.media-amazon.com/images/M/MV5BMjE2NjIxODUxNF5BMl5BanBnXkFtZTgwMjI1MzM1NjE@._V1_SX300.jpg",
        },
        {
          Title: "Friends with Money",
          Year: "2006",
          imdbID: "tt0436331",
          Type: Type.Movie,
          Poster:
            "https://m.media-amazon.com/images/M/MV5BMjE3Mjc3NjQ5NV5BMl5BanBnXkFtZTYwMjY5MjE3._V1_SX300.jpg",
        },
        {
          Title: "Foster's Home for Imaginary Friends",
          Year: "2004–2009",
          imdbID: "tt0419326",
          Type: Type.Series,
          Poster:
            "https://m.media-amazon.com/images/M/MV5BNjYyNGFjOTctYzFmNC00NzdmLThhMDgtNjEzZTRmNzA3ODc5XkEyXkFqcGdeQXVyNjk1Njg5NTA@._V1_SX300.jpg",
        },
        {
          Title: "Friends from College",
          Year: "2017–",
          imdbID: "tt5565334",
          Type: Type.Series,
          Poster:
            "https://m.media-amazon.com/images/M/MV5BMjMyNjgxNDc3MV5BMl5BanBnXkFtZTgwNDUyMzQ2NjM@._V1_SX300.jpg",
        },
        {
          Title: "Happy Tree Friends",
          Year: "2000–",
          imdbID: "tt0770762",
          Type: Type.Series,
          Poster:
            "https://m.media-amazon.com/images/M/MV5BMzRiMjRkNDYtNjNmZC00MTQwLThjNGQtZDEzZDA0OWVlOWUxXkEyXkFqcGdeQXVyMjAxODI1Nzk@._V1_SX300.jpg",
        },
      ],
      totalResults: 10,
    };
    */
  }
}

export default OMDBApi;
