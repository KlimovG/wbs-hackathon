import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import CssBaseline from '@mui/material/CssBaseline';
import MainPage from './Pages/Home'
import MessagePage from './Pages/Message-page'
import Users from './Pages/Users'
import UserPage from './Pages/UserPage'



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
      <Route path="/messages=:id">
        <MessagePage />

      </Route>
      <Route path="/users/:id">
        <UserPage />
      </Route>
      <Route exact path="/users/">
        <Users />
      </Route>
    </Router>
  );
}

export default App;
