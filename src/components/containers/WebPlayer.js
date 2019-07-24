import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';

/* Import Components */
import Playlist from './Playlist';
import Video from '../Video';

/* Import Styled Components */
import StyledWebPlayer from '../../styles/StyledWebPlayer';

/* Import Videos */
import videos from '../../utils/videos';

const themeNight = {
  bgcolor: '#353535',
  bgcolorItem: '#414141',
  bgcolorItemActive: '#405c63',
  bgcolorPlayed: '#526d4e',
  border: 'none',
  borderPlayed: 'none',
  color: '#fff'
};

const themeLight = {
  bgcolor: '#fff',
  bgcolorItem: '#fff',
  bgcolorItemActive: '#80a7b1',
  bgcolorPlayed: '#7d9979',
  border: '1px solid #353535',
  borderPlayed: 'none',
  color: '#353535'
};

const WebPlayer = ({match, location, history}) => {

	const savedState = JSON.parse(localStorage.getItem('playlist_state'));

	const [state, setState] = useState({
		videos: savedState ? savedState.videos : videos,
		activeVideo: savedState ? savedState.activeVideo : videos[0],
		nightMode: savedState ? savedState.nightMode : false,
		autoplay: false
	})


	useEffect(
		() => {
			localStorage.setItem('playlist_state', JSON.stringify(state))
		},

		[state]
	)

	useEffect(() => {
		const activeVideoId = match.params.activeVideo;

		if (activeVideoId !== undefined) {
			const newActiveVideo = state.videos.findIndex(video => video.id === activeVideoId)

			setState(prev => ({
				...prev,
				activeVideo: prev.videos[newActiveVideo],
				autoplay: location.autoplay
			}))

		} else {
			history.push({
				pathname: `/${state.activeVideo.id}`,
				autoplay: false
			})
		}

	}, [match.params.activeVideo])

	const endCallback = () => {
		let activeVideoId = match.params.activeVideo;
		let activeVideoIndex = state.videos.findIndex(video => video.id === activeVideoId)


		let nextVideoIndex = activeVideoIndex === state.videos.length - 1 ? 0 : activeVideoIndex + 1;

		history.push({
			pathname: `/${state.videos[nextVideoIndex].id}`,
			autoplay: false
		})
	}

	const progressCallback = e => {
		if (e.playedSeconds > 10 && e.playedSeconds < 11) {
			setState(prev => ({
				...prev,
				videos: prev.videos.map(video => {
					return video.id === prev.activeVideo.id ? {...video, played: true} : video;
				})
			}))
		}
	}

	const nightModeCallback = () => {
		setState(prev => ({...prev, nightMode: !prev.nightMode}));
	}

	return (
		<ThemeProvider theme={state.nightMode ? themeNight : themeLight}>
			{state.videos !== null ? (
				<StyledWebPlayer>
					<Video 
						active={state.activeVideo}
						autoplay={state.autoplay} 
						endCallback={endCallback} 
						progressCallback={progressCallback} 
					/>
					<Playlist
						videos={state.videos}
						active={state.activeVideo}
						nightModeCallback={nightModeCallback}
						nightMode={state.nightMode}
					/>
				</StyledWebPlayer>

			) : null}
		</ThemeProvider>
	)
}

export default WebPlayer;
