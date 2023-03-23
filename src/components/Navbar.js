import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useSelector } from "react-redux";


const Navbar = () => {
    let state = useSelector(state => state)
    let {cart} = state
    return(
        <>
            <nav>
                <h2 className="hide">메인메뉴</h2>
                <h1><Link to="/">Travel</Link></h1>
                <ul>
                    <li><Link to="/myCart"><AiOutlineShoppingCart /><span className="cartNum">{cart.cartProductId.length}</span></Link></li>
                </ul>
            </nav>
        </>
    )
}
export default Navbar;