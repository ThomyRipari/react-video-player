import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

/* Import Components */
import WebPlayer from './WebPlayer';

/* Import Styled Components */
import GlobalStyles from '../../styles/GlobalStyles';

const App = () => (
  <BrowserRouter>
  	<Fragment>
	  	<Switch>
	  		<Route exact path="/" component={WebPlayer} />
	  		<Route exact path="/:activeVideo" component={WebPlayer} />
	  	</Switch>
	  	<GlobalStyles />
  	</Fragment>
  </BrowserRouter>
)

export default App;
