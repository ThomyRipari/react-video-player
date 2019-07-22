import React from 'react';

/* Import Components */
import Nightmode from '../Nightmode';
import PlaylistHeader from '../PlaylistHeader';
import PlaylistItems from './PlaylistItems';

/* Import Styled Components */
import StyledPlaylist from '../../styles/StyledPlaylist';

const Playlist = () => (
  <StyledPlaylist>
  	<Nightmode />
  	<PlaylistHeader />
  	<PlaylistItems />
  </StyledPlaylist>
)

export default Playlist;
