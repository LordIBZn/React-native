import React from 'react';
import { ActivityIndicator, Dimensions, ScrollView, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import ImageColors from 'react-native-image-colors'

import Carousel from 'react-native-snap-carousel';

import { MoviePoster } from '../components/MoviePoster';
import { useMovies } from '../hooks/useMovies';
import { HorizontalSlider } from '../components/HorizontalSlider';
import { GradientBackground } from '../components/GradientBackground';


const { width: windowsWidth } = Dimensions.get('window');


export const HomeScreen = () => {

	const { nowPlaying, popular, topRated, upComing, isLoading } =	useMovies();
	const { top } = useSafeAreaInsets();

	const getPosterColor = async ( index : number) => {
		const movie = nowPlaying[index];
		const uri = `https://image.tmdb.org/t/p/w500${ movie.poster_path}`;
		


	}

	if (isLoading) {
		return (
			<View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
				<ActivityIndicator color='red' size={ 100 } />
			</View>
		)
	}

  return (
	<GradientBackground>
	<ScrollView>
	
	{/* carrousel principal */}
		<View style={{ marginTop: top + 20 }} >
		{/* <MoviePoster 
				movie={ peliculasEnCine[1] }
				/> */}
				<View style={{ height: 440 }}>
				
				<Carousel 
					data={ nowPlaying! }
					renderItem={ ({ item }: any) => <MoviePoster movie={ item } />  }
					sliderWidth={ windowsWidth }
					itemWidth={ 300 }
					inactiveSlideOpacity={0.9}
					onSnapToItem={ index => getPosterColor( index ) }
				/>
				</View>

				<HorizontalSlider title='popular' movies={ popular! } />
				<HorizontalSlider title='top Rated' movies={ topRated! } />
				<HorizontalSlider title='Upcoming' movies={ upComing! } />
		</View>
	</ScrollView>
	</GradientBackground>
  )
}
