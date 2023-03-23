import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux"

import Home from './components/Home'
import Cart from './components/Cart'
import store from './redux/store'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import './index.css'
import './media.css'

const App = () => {
    return(
        <Provider store={store}>
            <BrowserRouter>
                <div id="mainWrap">
                    <div id="mWrap">
                        <Navbar />
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/myCart" element={<Cart />} />
                            <Route path="*" element={<Home />} />
                        </Routes>
                        <Footer />
                    </div>
                </div>
            </BrowserRouter>
        </Provider>
    )
}

export default App;