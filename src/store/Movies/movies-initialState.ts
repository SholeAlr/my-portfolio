export const initMoviesListData: any = [
  {
    id: 0,
    title: 'movie1',
    year: 1994,
    director: {
      id: 1,
      name: 'John Doe',
      country: 'IR',
      birthDate: '1994',
    },
    actors: [
      {
        id: 1,
        name: 'JaneDoe',
        country: 'IR',
        birthDate: '1996',
      },
    ],
  },
]

export const initialState = {
  movies: {
    moviesLoading: false,
    moviesList: initMoviesListData,
  },
  movieDetail: {
    movieDetailLoading: false,
    movieDetailData: initMoviesListData,
  },
}
