import React from 'react';

/* Import Styled Components */
import StyledPlaylistItem from '../styles/StyledPlaylistItem';

const PlaylistItem = ({video, active}) => (
	<StyledPlaylistItem active={active}>
		<div className="wbn-player__video-nr">{video.num}</div>
		<div className="wbn-player__video-name">{video.title}</div>
		<div className="wbn-player__video-time">{video.duration}</div>
	</StyledPlaylistItem>
)

export default PlaylistItem;
