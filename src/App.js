
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Blogs from './pages/Blogs/Blogs';
import Navbar from './pages/Shared/Navbar';
import Login from './pages/Auth/login';
import Signup from './pages/Auth/Signup';
import Dashboard from './pages/Dashboard/Dashboard';
import Purchase from './pages/Purchase/Purchase';
import Footer from './pages/Shared/Footer/Footer';
import RequireAuth from './pages/Auth/RequireAuth';
function App() {
  return (
    <div className='max-w-7xl mx-auto px-12'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/tool/:toolId' element={
          <RequireAuth>
            <Purchase></Purchase>
          </RequireAuth>}></Route>

        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
