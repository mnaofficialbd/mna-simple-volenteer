import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Volunteers from './Components/Volunteers/Volunteers';
import Main from './Components/Main/Main';
import Header from './Components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
<Routes>
  <Route path='/' element={<Main/>}></Route>
  <Route path='/volunteers' element={<Volunteers/>}></Route>
</Routes>
    </div>
  );
}

export default App;
