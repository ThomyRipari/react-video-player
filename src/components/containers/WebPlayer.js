import React, { Fragment } from 'react';

/* Import Components */
import Playlist from './Playlist';
import Video from '../Video';

const WebPlayer = () => (
  <Fragment>
  	<Video />
  	<Playlist />
  </Fragment>
)

export default WebPlayer;
