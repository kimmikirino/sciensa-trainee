import filme1 from '../assets/imgs/filme1.jpg' 
import filme2 from '../assets/imgs/filme2.jpg' 

const movie = {
    id: 1,
    title: 'Los Parecidos',
    releaseYear: 2015,
    genres: [{
        id: 1,
        description: 'Ficção científica'
    },
    {
        id: 2,
        description: 'Terror'
    }],
    director: 'Isaac Ezban',
    cast: [{
        id: 1,
        firstName: 'Gustavo',
        lastName: 'Sánchez Parra',
        dateOfBirth: '01-01-1990'
    }],
    image: filme1
}

const movies = [
    movie,
    {
        id: 2,
        title: 'The Square',
        releaseYear: 2018,
        genres: [{
            id: 3,
            description: 'Comédia'
        },
        {
            id: 4,
            description: 'Drama'
        }],
        director: 'Isaac Ezban',
        cast: [{
            id: 2,
            firstName: 'Claes',
            lastName: 'Bang',
            dateOfBirth: '01-01-1990'
        }],
        image: filme2
    }
]

export { movie, movies }