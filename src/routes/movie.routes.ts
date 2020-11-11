import { Router } from 'express';
import { v4 } from 'uuid';

const movieRouter = Router();

interface Movies {
  id: string;
  title: string;
  director: string;
}

const movies: Movies[] = [];

movieRouter.get('/',  (request, response) => {
    try {
      return response.status(200).json(movies);
    } catch (err) {
      return response.status(500).json({ error: err.message });
    }
  });

movieRouter.post('/', (request, response) => {
  const { title, director } = request.body;

  const newMovie = {
    title,
    director,
    id: v4(),
  };

  movies.push(newMovie);

  return response.status(200).json(newMovie);
});

movieRouter.put('/:id', (request, response) => {
  const { id } = request.params;
  const { title, director } = request.body;

  const movieIndex = movies.findIndex(movie => {
    if (movie.id === id) return movie;
  });
  const oldMovie = movies[movieIndex];
  if(movieIndex===-1){
    return response.send({error:`invalid id ${id}`})
  }

  oldMovie.director = (!director) ? oldMovie.director : director;
  oldMovie.title = (!title)? oldMovie.title : title;

  console.log(movies);
  return response.status(200).json(oldMovie);
});

export default movieRouter;