import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Provider } from "react-redux"
import Navbar from "./components/index"
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import { store } from "./store/store"

function App() {

  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <div className="bg-slate-800 text-slate-100">
            <Navbar />
            <Routes>
              <Route path='/' element={<Home />}></Route>
              <Route path='/cart' element={<Cart />}></Route>
            </Routes>
          </div>
        </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
