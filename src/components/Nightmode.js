import React from 'react';

/* Import Styled Components */
import StyledNightmode from '../styles/StyledNightmode';

const Nightmode = ({nightMode, nightModeCallback}) => (
	<StyledNightmode>
		<span>Nightmode: </span>

		<label className="switch">
			<input type="checkbox" checked={nightMode} onChange={nightModeCallback} />
			<span className="slider round" />
		</label>
	</StyledNightmode>
)

export default Nightmode;
