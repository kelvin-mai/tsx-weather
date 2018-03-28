import * as React from 'react';
import { render } from 'react-dom';

import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

render(<App />, document.getElementById('root') as HTMLElement);
registerServiceWorker();
