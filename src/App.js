
import './App.css';
import Home from './components/Home/Home';
import FavList from './components/FavList/FavList'
import Header from './components/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
      <main>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/favList' element={<FavList/>}/>
      </Routes>
      </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
