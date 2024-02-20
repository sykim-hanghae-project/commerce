import { Route, Routes } from "react-router-dom"
import Home from '../pages/Home'
import ProductDetail from '../pages/ProductDetail'
import Search from '../pages/Search'
import ListProductByCategory from '../pages/ListProductByCategory'
import Order from '../pages/Order'
import MyOrder from '../pages/MyOrder'
import AddProduct from '../pages/AddProduct'
import EditProduct from '../pages/EditProduct'
import ViewAllProducts from '../pages/ViewAllProducts'
import ManageOrder from '../pages/ManageOrder'
import EditInfo from '../pages/EditInfo'
import Signin from '../pages/Signin'
import Signup from '../pages/Signup'


const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:productId" element={<ProductDetail />} />
      <Route path="/product/search" element={<Search />} />
      <Route path="/product/list" element={<ListProductByCategory />} />
      <Route path="/order" element={<Order />} />
      <Route path="/mypage/myorder" element={<MyOrder />} />
      <Route path="/mypage/add-product" element={<AddProduct />} />
      <Route path="/mypage/edit-product" element={<EditProduct />} />
      <Route path="/mypage/view-allproducts" element={<ViewAllProducts />} />
      <Route path="/mypage/manage-order" element={<ManageOrder />} />
      <Route path="/mypage/edit-info" element={<EditInfo />} />
      <Route path="/login" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  )
}

export default MyRoutes