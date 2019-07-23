import React, { Fragment } from 'react';
import { ThemeProvider } from 'styled-components';

/* Import Components */
import Playlist from './Playlist';
import Video from '../Video';

/* Import Styled Components */
import StyledWebPlayer from '../../styles/StyledWebPlayer';

const themeNight = {
  bgcolor: '#353535',
  bgcolorItem: '#414141',
  bgcolorItemActive: '#405c63',
  bgcolorPlayed: '#526d4e',
  border: 'none',
  borderPlayed: 'none',
  color: '#fff',
};

const themeLight = {
  bgcolor: '#fff',
  bgcolorItem: '#fff',
  bgcolorItemActive: '#80a7b1',
  bgcolorPlayed: '#7d9979',
  border: '1px solid #353535',
  borderPlayed: 'none',
  color: '#353535',
};

const WebPlayer = () => {
	return (
		<ThemeProvider theme={state.nightMode ? themeNight : themeLight}>
			<StyledWebPlayer>
				<Video />
				<Playlist />
			</StyledWebPlayer>
		</ThemeProvider>
	)
}

export default WebPlayer;
