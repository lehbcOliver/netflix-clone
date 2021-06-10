import axios from 'axios';
const API_KEY = 'fe6d7744b6c830ca49fe5776e633b583';
const BASE_URL = 'https://api.themoviedb.org/3';

const baseUrl = async (endPoint) => {
    const response = await axios.get(`${BASE_URL}${endPoint}`);
    return response;
}

export default {
    getHomeList: async () => {
        return [
            {
                slug: 'originals',
                title: 'Originais do Netflix',
                items: await baseUrl(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
            },{
                slug: 'trending',
                title: 'Recomendados para você',
                items: await baseUrl(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
            },{
                slug: 'toprated',
                title: 'Em Alta',
                items: await baseUrl(`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'action',
                title: 'Ação',
                items: await baseUrl(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'comedy',
                title: 'Comédia',
                items: await baseUrl(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'horror',
                title: 'Terror',
                items: await baseUrl(`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: await baseUrl(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'documentary',
                title: 'Documentários',
                items: await baseUrl(`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
            }
        ]
    },
    getMovieInfo: async (movieId, typeMovie) => {
        let info = {}
            if(movieId){
                info = await baseUrl(`/${typeMovie}/${movieId}?language=pt-BR&api_key=${API_KEY}`);
            }
        return info;
    }
}