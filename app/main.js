import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { MuiThemeProvider } from 'material-ui';
import Root from './config/Root';

const render = (Component) => {
  ReactDOM.render(
    <MuiThemeProvider>
      <AppContainer>
        <Component />
      </AppContainer>
    </MuiThemeProvider>,
    document.getElementById('root'),
  );
};

render(Root);

if (module.hot) {
  module.hot.accept('./config/Root', () => {
    const newApp = require('./config/Root').default;
    render(newApp);
  });
}
