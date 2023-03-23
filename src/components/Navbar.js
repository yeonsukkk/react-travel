import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from 'react-icons/ai';


const Navbar = () => {
    return(
        <>
            <nav>
                <h2 className="hide">메인메뉴</h2>
                <h1><Link to="/">Travel</Link></h1>
                <ul>
                    <li><Link to="/myCart"><AiOutlineShoppingCart /><span className="cartNum">3</span></Link></li>
                </ul>
            </nav>
        </>
    )
}
export default Navbar;