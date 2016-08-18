import React from 'react';
import ReactDOM from 'react-dom';
import {cyan500} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

// This replaces the textColor value on the palette
// and then update the keys for each component that depends on it.
// More on Colors: http://www.material-ui.com/#/customization/colors
const muiTheme = getMuiTheme({
  palette: {
    textColor: cyan500,
  },
  appBar: {
    height: 50,
  },
});

class Main extends React.Component {
  render() {
    // MuiThemeProvider takes the theme as a property and passed it down the hierarchy
    // using React's context feature.
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <AppBar title="My AppBar" />
      </MuiThemeProvider>
    );
  }
}

ReactDOM.render(
  <Main/>,
  document.getElementById('app')
)

export default Main;
