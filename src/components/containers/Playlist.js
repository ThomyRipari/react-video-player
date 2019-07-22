import React, { Fragment } from 'react';

/* Import Components */
import Nightmode from '../Nightmode';
import PlaylistHeader from '../PlaylistHeader';
import PlaylistItems from './PlaylistItems';

const Playlist = () => (
  <Fragment>
  	<Nightmode />
  	<PlaylistHeader />
  	<PlaylistItems />
  </Fragment>
)

export default Playlist;
