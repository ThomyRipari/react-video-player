import React from 'react';

/* Import Components */
import PlaylistItem from '../PlaylistItem';
import withLink from '../hoc/withLink';

/* Import Styled Components */
import StyledPlaylistItems from '../../styles/StyledPlaylistItems';

const PlayListItemWithLink = withLink(PlaylistItem);

const PlaylistItems = ({videos, active}) => (
  <StyledPlaylistItems>
  	{videos.map(video => (
  		<PlayListItemWithLink
  			key={video.id}
  			video={video}
  			active={video.id === active.id ? true : false}
  		/>
  	))}
  </StyledPlaylistItems>
)

export default PlaylistItems;
