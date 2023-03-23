import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';

import {addToCart, removeFromCart} from '../redux/cart'

const BtnLike = ({id}) => {
  let state = useSelector(state => state)
  let {cart} = state
  let dispatch = useDispatch()

  return(
    <>
      {
        cart.cartProductId.includes(id) ?
        <button type="button" className="on"
          onClick={() => dispatch(removeFromCart(id))}
        ><AiFillHeart /></button> 
        :
        <button type="button"
          onClick={() => dispatch(addToCart(id))}
        ><AiOutlineHeart /></button> 
      }
    </>
  )
}

export default BtnLike;