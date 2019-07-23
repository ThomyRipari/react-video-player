import React from 'react';
import ReactPlayer from 'react-player';

/* Import Styled Components */
import StyledVideo from '../styles/StyledVideo';
import StyledVideoWrapper from '../styles/StyledVideoWrapper';

const Video = ({active, autoplay, endCallback, progessCallback}) => (
	<StyledVideo>
		<StyledVideoWrapper>
			<ReactPlayer
				width="100%"
				height="100%"
				style={{position: "absolute", top: "0"}}
				playing={autoplay}
				controls={true}
				url={active.video}
				onEnded={endCallback}
				onProgress={progessCallback}

			 />
		</StyledVideoWrapper>
	</StyledVideo>
)

export default Video;
