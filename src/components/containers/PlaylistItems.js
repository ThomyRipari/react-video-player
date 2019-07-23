import React from 'react';

/* Import Components */
import PlaylistItem from '../PlaylistItem';

/* Import Styled Components */
import StyledPlaylistItems from '../../styles/StyledPlaylistItems';

const PlaylistItems = ({videos, active}) => (
  <StyledPlaylistItems>
  	{videos.map(video => (
  		<PlaylistItem
  			key={video.id}
  			video={video}
  			active={video.id === active.id ? true : false}
  		/>
  	))}
  </StyledPlaylistItems>
)

export default PlaylistItems;
