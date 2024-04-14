import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.css'
import Layout from "./components/Layout/Layout"
import Home from "./components/pages/Home/Home"
import Shop from "./components/pages/Shop/Shop"
import Featured from "./components/pages/Featured/Featured"
import Pages from "./components/pages/Pages/Pages"
import Blogs from "./components/pages/Blogs/Blogs"
import Chechkout from "./components/pages/Checkout/Checkout"
import Wishlist from "./components/pages/Wishlist/Wishlist"

function App() {

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="shop" element={<Shop />} />
            <Route path="featured" element={<Featured />} />
            <Route path="pages" element={<Pages />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="checkout" element={<Chechkout />} />
            <Route path="wishlist" element={<Wishlist />} />
          </Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
