
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
import MyOrders from './pages/Dashboard/MyOrders';
import UserProfile from './pages/Dashboard/UserProfile';
import MyReview from './pages/Dashboard/MyReview';
import RequireAdmin from './pages/Auth/RequireAdmin';
import Allusers from './pages/Dashboard/AllUsers';
import { ToastContainer } from 'react-toastify';
import AddProduct from './pages/Dashboard/AddProduct';
import MangeProduct from './pages/Dashboard/ManageProduct';
import PageNotFound from './pages/Shared/PageNotFound';
import MyPortFolio from './pages/MyPortFolio/MyPortFolio';
import ManageAllOrders from './pages/Dashboard/ManageAllOrders';
import Payment from './pages/Dashboard/Payment';


function App() {
  return (
    <div className='lg:max-w-7xl mx-auto lg:px-12 px-2'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/tools/:toolId' element={
          <RequireAuth>
            <Purchase></Purchase>
          </RequireAuth>}></Route>

        <Route path='dashboard' element={<RequireAuth><Dashboard></Dashboard></RequireAuth>}>
          <Route index element={<UserProfile></UserProfile>}></Route>
          <Route path='myreview' element={<MyReview></MyReview>}></Route>
          <Route path='myorders' element={<MyOrders></MyOrders>}></Route>
          <Route path='payment/:id' element={<Payment></Payment>}></Route>
          <Route path='allusers' element={<RequireAdmin><Allusers></Allusers></RequireAdmin>}></Route>
          <Route path='addproduct' element={<RequireAdmin><AddProduct></AddProduct></RequireAdmin>}></Route>
          <Route path='allproduct' element={<RequireAdmin><MangeProduct></MangeProduct></RequireAdmin>}> </Route>
          <Route path='manageallproducts' element={<RequireAdmin><ManageAllOrders></ManageAllOrders></RequireAdmin>}> </Route>
        </Route>
        <Route path='/myportfolio' element={<MyPortFolio></MyPortFolio>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='*' element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
