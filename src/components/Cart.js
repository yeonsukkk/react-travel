import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { BsFillCartPlusFill } from 'react-icons/bs';
import { FiArrowDown } from 'react-icons/fi';
import { MdDeleteForever } from 'react-icons/md';
import { AiFillHeart } from 'react-icons/ai';

import { fetchAllProduct } from '../redux/list';
import {removeFromCart, removeAll} from '../redux/cart';
import { category } from '../api/api';
import './Cart.css'

const Cart = () => {
    let state = useSelector(state => state)
    let {cart, productData} = state
    let dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchAllProduct())
    },[dispatch])

    let cartProduct = productData.data.filter(item => cart.cartProductId.includes(item.id))

    //console.log(cart.cartProductId, productData.data)
    if(cart.cartProductId.length < 1){
        return (
            <div className="cartWrap noItems">
                <div>
                    <BsFillCartPlusFill />
                    <p>상품을 담아주세요!</p>
                </div>
            </div>
        )
    }
    return(
        <div className="cartWrap">
            <h3>나의 관심 상품<AiFillHeart /></h3>
            <ul className="cnt">
                {
                    cartProduct?.map(item => {
                        console.log(item)
                        return(
                            <li key={item.id}>
                                <figure>
                                    <img src={item.img} alt={item.title} />
                                    <figcaption>
                                        <dl>
                                            <dt className="title">{item.title}</dt>
                                            <dd className="category">{category[item.category]}</dd>
                                            <dd className="price">
                                                <p className={item.discount === 0 ? "bold" : undefined}>
                                                    {
                                                        (item.discount === 0)
                                                        ?
                                                        `${item.price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}원`
                                                        :
                                                        <del>{item.price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}원</del>

                                                    }
                                                </p>
                                                <p className="discount">
                                                    {
                                                      item.discount !== 0 && `${item.discount}%`
                                                    }
                                                    {
                                                        item.discount !== 0 && <FiArrowDown />
                                                    }
                                                    
                                                </p>
                                            </dd>
                                            <dd className="total">
                                                <p>
                                                    {
                                                        item.discount !== 0 && `${(item.price - Math.ceil(item.price * (item.discount / 100))).toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}원`
                                                    }
                                                </p>
                                            </dd>
                                            <dd className="delete">
                                                <button type="button"
                                                    onClick={() => {
                                                        dispatch(removeFromCart(item.id))
                                                    }}
                                                ><MdDeleteForever /></button>
                                            </dd>
                                        </dl>
                                    </figcaption>
                                </figure>
                            </li>
                        )
                    })
                }
            </ul>
            <button type="button" className="deleteAll"
                onClick={() => {dispatch(removeAll())}}
            >전체삭제</button>
        </div>
    )
}

export default Cart;