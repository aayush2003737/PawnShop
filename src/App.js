// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import { Routes , Route } from 'react-router-dom';
import Footer from './components/FooterComponent/Footer';
import Header from './components/HeaderComponent/Header';
import Main from './components/MainComponent/Main';
import About from './components/AboutComponent/About';
import Contact from './components/ContactComponent/Contact';
import Preloader from './components/Preloader/Preloader';
import Service from './components/ServciceComponent/Service';
import Register from './components/RegisterComponent/Register';
import Login from './components/LoginComponent/Login';
import LightDark from './components/LightDarkModeComponent/LightDark';
import Logout from './components/LogoutComponent/Logout';
import AdminHome from './components/AdminHomeComponent/AdminHome';
import UserHome from './components/UserHomeComponent/UserHome';
import ManageUsers from './components/ManageUsersComponent/ManageUsers';
import Setting from './components/AdminSettingComponent/Setting';
import EditUser from './components/EditUserProfileComponent/EditUser';
import Forget from './components/ForgetPasswordComponenet/Forget';
import Verifyuser from './components/VerifyuserComponent/Verifyuser';
import Forgetpassword from './components/ForgetPasswordComponenet/Forget';
import AdddCategory from './components/AdddCategoryComponent/AdddCategory';
import AddSubCategory from './components/AddSubCategoryComponent/AddSubCategory';
import ViewCategory from './components/ViewCategoryComponent/ViewCategory';
import ViewSubCategory from './components/ViewSubCategoryComponent/ViewSubCategory';
import AddProduct from './components/AddProductComponent/AddProduct';
import AIClient from './components/AIClientComponent/AIClient'
import Charity from './components/CharityComponent/Charity'
import Success from './components/SuccessComponent/Success';
import Payment from './components/PaymentComponent/Payment';
import Cancel from './components/CancelComponent/Cancel';
import ViewAddedProduct from './components/ViewAddedProductComponent/ViewAddedProduct'

function App() {

  return (
  <>    
    <Preloader />

    <LightDark />  

    <Header />

    <Routes>
      <Route path='' element={<Main />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/service' element={<Service />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} /> 
      <Route path='/aiclient' element={<AIClient />} /> 
      <Route path='/logout' element={<Logout />} />
      <Route path='/forgetpassword' element={<Forgetpassword />} />
      <Route path='/vemail/:email' element={<Verifyuser />} ></Route>
      <Route path='/user' element={<UserHome />} /> 
      <Route path='/Charity' element={<Charity />} /> 
      <Route path='/admin' element={<AdminHome />} /> 
      <Route path='/manageusers' element={<ManageUsers />} /> 
      <Route path='/adddcategory' element={<AdddCategory />} /> 
      <Route path='/addSubcategory' element={<AddSubCategory />} /> 
      <Route path='/setting' element={<Setting />} /> 
      <Route path='/edituser' element={<EditUser />} /> 
      <Route path='/forget' element={<Forget />} />
      <Route path='/viewcategory' element={<ViewCategory />} />
      <Route path='/viewsubcategory/:cnm' element={<ViewSubCategory />} ></Route>
      <Route path='/addproduct' element={<AddProduct />} />
      <Route path="/payment/:uid/:amt" element={<Payment />} ></Route>
      <Route path="/success" element={<Success />} ></Route>
      <Route path="/cancel" element={<Cancel />} ></Route>
      <Route path="/viewaddedproduct" element={<ViewAddedProduct />} ></Route>


    </Routes>

    <Footer />
  </>
  );
}

export default App;