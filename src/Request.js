const  key = 'd88c1ee36d555b37748bc16257e7d400'

const requests = {
    requestPopular : `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US`,
    requestTopRated : `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}`,
    requestHorror :   `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=27`,
    requestRomance :   `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=10749`,
    requestAction :   `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=28`,
    requestComedy :   `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=35`,
    requestTrending : `https://api.themoviedb.org/3/trending/all/week?api_key=${key}&language=en-US`,
    requestUpcoming : `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US`,

}
export default requests