export type MovieItemResponse = {
  id: number
  title: string
  year: number
  director: any
  actors: any[]
}

export type MoviesListResponse = MovieItemResponse[]

export type MoviesInitialState = {
  movies: {
    moviesLoading: boolean
    moviesList?: MoviesListResponse
  }
  movieDetail: {
    movieDetailLoading: boolean
    movieDetailData?: MovieItemResponse
  }
}
