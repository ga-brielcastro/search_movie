// Informações importantes para a requisição das informações >>>>>>>>>>>>
const API_KEY = 'f779fc0eaab43f65ae493c08c987c27b'
const API_BASE = 'https://api.themoviedb.org/3'

//  Fazendo requisicao >>>>>>>>>>
const Tmdb = {
    getMovies: async (query) => {
        return await fetch(`${API_BASE}/search/movie?api_key=${API_KEY}&query=${query}`);
    },

    getTopMovies: async () => {
        return await fetch(`${API_BASE}/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
    }

}

export default Tmdb