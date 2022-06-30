import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './Pages/NavBar';
import Home from './Pages/Home';
import About from './Pages/About';
import EmpProfile from './Components/Project1/EmpProfile';
import AddEdit from './Components/Project1/AddEdit';
import View from './Components/Project1/View';
import Search from './Components/Project1/Search';
import Project1About from './Components/Project1/Project1About';
import Instashare from './Components/Project2/Instashare';

function App() {
  return (
    <div>
      <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />

        {/* Project1 start */}

        <Route path='/emprofile' element={<EmpProfile />} />
        <Route path="/emprofile/add" element={<AddEdit />} />
        <Route path="/emprofile/update/:id" element={<AddEdit />} />
        <Route path="/emprofile/view/:id" element={<View />} />
        <Route path="/pro1About" element={<Project1About />} />
        <Route path="/search" element={<Search />} />


        {/* Project2 start */}

        <Route path='/instashare' element={<Instashare />} />







      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
