import qs from 'qs';

const baseUrl = 'http://www.omdbapi.com/'

enum Type {
  Movie = 'movie',
  Series = 'series',
  Episode = 'episode',
}

interface Params {
  s?: string;
  type?: Type;
}

interface Movie {
  Poster: string,
  Title: string;
  Type: Type;
  Year: string;
  imdbID: string;
}

interface SearchResponse {
  Search: Movie[];
  totalResults: string;
}

class OMDBApi {
  constructor(private apiKey = process.env.REACT_APP_OMDB_API_KEY) {

  }

  private request(params: Params) {
    const queryString = qs.stringify({
      ...params,
      apiKey: this.apiKey,
    });

    return fetch(`${baseUrl}?${queryString}`)
      .then(response => {
        if (response.status >= 200 && response.status < 300) {
          return response.json();
        }

        throw new Error(`Response status ${response.statusText}`);
      });
  }

  public searchMovie(term: string): Promise<SearchResponse> {
    return this.request({ s: term });
  }
}

export default OMDBApi;
