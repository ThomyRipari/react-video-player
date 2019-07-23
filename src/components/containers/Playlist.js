import React from 'react';

/* Import Components */
import Nightmode from '../Nightmode';
import PlaylistHeader from '../PlaylistHeader';
import PlaylistItems from './PlaylistItems';

/* Import Styled Components */
import StyledPlaylist from '../../styles/StyledPlaylist';

const Playlist = ({videos, active, nightModeCallback, nightMode}) => (
  <StyledPlaylist>
  	<Nightmode nightMode={nightMode} nightModeCallback={nightModeCallback} />
  	<PlaylistHeader active={active} total={videos.length}  />
  	<PlaylistItems videos={videos} active={active} />
  </StyledPlaylist>
)

export default Playlist;
