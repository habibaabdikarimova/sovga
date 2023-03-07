// import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './page/home';
import Information from './page/information';
import Massage from './page/message';
import Layout from './component/layout';
import User from './page/user';
import Product from './page/product';
import Category from './page/category';


function App() {
  return (
    <div className="App">
      <Layout>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/user' element={<User />} />
      <Route path='/product' element={<Product />} />
      <Route path='/category' element={<Category />} />
      <Route path='/information' element={<Information />} />
      <Route path='/massage' element={<Massage />} />
    </Routes>
    </Layout>
    </div>
  );
}

export default App;
