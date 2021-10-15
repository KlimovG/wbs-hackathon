import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import CssBaseline from '@mui/material/CssBaseline';
import MainPage from './Pages/Home'
import MessagePage from './Pages/Message-page'



function App() {
  return (
    <Router>
      <CssBaseline />
      <Route>
        {/* <Navigation path="/navigation" /> */}

      </Route>
      <Route exact path="/">
        <MainPage />

      </Route>
      <Route path="/:id">
        <MessagePage />

      </Route>
    </Router>
  );
}

export default App;
