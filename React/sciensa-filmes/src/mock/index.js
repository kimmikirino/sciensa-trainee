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
    image: filme1,
    description: 'Em uma noite escura e chuvosa, um grupo de oitro estranhos fica preso em uma remota estação de ônibus esperando pela condução até a Cidade do México. Coisas estranhas começam a acontecer e eles ficam presos em uma luta pela sobrevivência e sanidade mental.'
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
        director: 'Ruben Östlund',
        cast: [{
            id: 2,
            firstName: 'Claes',
            lastName: 'Bang',
            dateOfBirth: '01-01-1990'
        }],
        image: filme2,
        description: 'Um gerente de museu está usando de todas as armas possíveis para promover o sucesso de uma nova instalação e decide contratar uma empresa de relações públicas. Porém, isso acaba gerando consequências infelizes e um grande embaraço.'
    }
]

export { movie, movies }