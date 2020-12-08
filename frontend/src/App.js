import React from 'react';
import GlobalStyle from './globalStyles';
import GlobalStyleWhite from './globalStylesWhite';
import Home from './pages/HomePage/Home';
import Services from './pages/Services/Services';
import Products from './pages/Products/Products';
import SignUp from './pages/SignUp/SignUp';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollToTop from './Components/ScrollToTop'
import { Navbar, Footer } from './Components';

function App() {
 const [darkMode,SetDarkmode] = React.useState(true);
  global.darkMode =darkMode;
  return (
    <Router>
      <GlobalStyle/>
     <ScrollToTop/>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/sign-up' component={SignUp} />
      </Switch>
    
    </Router>
  );
}

export default App;
