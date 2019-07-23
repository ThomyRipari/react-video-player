import React, { useState } from 'react';
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

const WebPlayer = () => {

	const [state, setState] = useState({
		videos: videos,
		activeVideo: videos[0],
		nightMode: true,
		autoplay: false
	})

	const endCallback = () => {

	}

	const progressCallback = () => {

	}

	const nightModeCallback = () => {
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
