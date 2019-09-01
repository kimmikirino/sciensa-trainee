import API from '..'

const getMovies = () => API.get('petfind/')
const getMovieById = (id = '') => API.get(`petfind/${id}`)

export { getMovies, getMovieById }