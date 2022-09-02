import React, { useState } from 'react'
import movieDB from '../api/movieDB';
import { MovieFull } from '../interfaces/movieInterface';
import { useEffect } from 'react';
import { CredistsResponse, Cast } from '../interfaces/creditsInterface';

interface MoviDetails {
  isLoading: boolean;
  movieFull?: MovieFull;
  cast: Cast[];
}

export const useMovieDetails = (movieId: number) => {
  
  const [ state, setState ] =  useState<MoviDetails>({
    isLoading: true,
    movieFull: undefined,
    cast: []
  });

  const getMovieDetails = async() => {

    const movieDetailsPromise = movieDB.get<MovieFull>(`/${movieId}`);
    const castPromise         = movieDB.get<CredistsResponse>(`/${movieId}/credits`);
    
    const [ movieDetailsResp, castPromiseResp ] = await  Promise.all([ movieDetailsPromise, castPromise  ]);
    
    setState({
      isLoading: false,
      movieFull: movieDetailsResp.data,
      cast: castPromiseResp.data.cast
    })
  
  }

  useEffect(() => {
    getMovieDetails();

  }, []);

  return {
    ...state
  }
  
}
