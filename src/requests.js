const API_KEY = "64238175d7152e448c4219208cfe7041";

const requests = {
    fetchTrending        : `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated        : `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies    : `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies    : `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies    : `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies   : `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries   : `/discover/movie?api_key=${API_KEY}&with_genres=99`,
    sampleReq            : `/discover/tv?sort_by=release_date.asc&with_networks=network_string&first_air_date.gte=2017-05-01&include_null_first_air_dates=true&api_key=${API_KEY}`,
    randomReq            : `/trending/all/week?api_key=289efc994215d175967d9c9d972fdbf0&language=en-US`
   }
   export default requests;
