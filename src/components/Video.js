import React from 'react';
import ReactPlayer from 'react-player';

/* Import Styled Components */
import StyledVideo from '../styles/StyledVideo';
import StyledVideoWrapper from '../styles/StyledVideoWrapper';

const Video = ({active, autoplay, endCallback, progressCallback}) => (
	<StyledVideo>
		<StyledVideoWrapper>
			<ReactPlayer
				width="100%"
				height="100%"
				style={{position: "absolute", top: "0"}}
				controls={true}
				playing={autoplay}
				url={active.video}
				onEnded={endCallback}
				onProgress={progressCallback}
			 />
		</StyledVideoWrapper>
	</StyledVideo>
)

export default Video;
