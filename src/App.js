import './App.css';
import {Route, Routes} from 'react-router-dom';
import Home from './pages/Home'
import ExerciseDetail from './pages/ExerciseDetail';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import ExerciseHome from './components/ExerciseHome';

function App() {
  return (
   <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/exercise/:id' element={<ExerciseDetail/>}/>
      <Route path='/exercise' element={<ExerciseHome/>}/>
    </Routes>
    <Footer/>
   </>
  );
}

export default App;

