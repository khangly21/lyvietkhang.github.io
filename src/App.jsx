
import './App.css'

//component or page or route
import Header from './components/Header';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Words from './components/Words'; // Assuming Words is another route
import WordDetails from './components/WordDetails';
//đặt tên chữ đầu thường là sai, phải hoa
//import history_Route_BgImageComponent from './components/history_Route_BgImageComponent'; //Cập nhật: react-router-dom v6 trở lên không export useHistory nữa
import Navigate_Route_BgImageComponent from './components/navigate_Route_BgImageComponent';

import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import LogoutButton from './components/auth/LogoutButton';



//routing inside React app
import {Routes, Route} from 'react-router-dom'; //Fatal error: In React Router v6, the <Route> component doesn't accept a "component" prop directly; instead, it uses the "element" prop.
           //Error đó sẽ có lỗi như Matched leaf route at location "/" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page. (Trang rỗng, chỉ có hình nền)
function App() {
  
  return (
    <div className='App'>
      {/* trong main.jsx đã có BrowserRouter wraps app, nên chỗ này không cần cho BrowserRouter wraps Routes */}
      <Navigate_Route_BgImageComponent>
        <Routes>
            <Route exact path='/' element={<Home/>}/> {/* không phải component = {Home} */}
            <Route path='/words' element={<Words/>}/>
            <Route path='/word-Detail' element= {<WordDetails/>} />
        </Routes>
      </Navigate_Route_BgImageComponent>
    </div>
  )
}

export default App
