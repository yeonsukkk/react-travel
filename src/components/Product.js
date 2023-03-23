import { useSelector, useDispatch } from "react-redux";
import { FaArrowDown } from 'react-icons/fa';
import like from '../img/icon/icon_like.png'


const Product = ({data}) => {
    let category = ['현지투어/교통','스파/찜질','뷔페/외식','테마/놀이','캠핑/레포츠','체험/축제','얼린여행']

    return(
        <div className="cnt">
            <ul>
                {
                    data.map(item => {
                        return(
                            <li key={item.id}>
                                <figure>
                                    <img src={item.img} alt={item.title} />
                                    <figcaption>
                                        <dl>
                                            <dt className="title">{item.title}</dt>
                                            <dd className="price">
                                                <p>{item.price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}원</p>
                                                <p>{item.discount}% <FaArrowDown /></p>
                                                <p>{(item.price - Math.ceil(item.price * (item.discount / 100))).toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}원</p>
                                            </dd>
                                            <dd className="category">{category[item.category]}</dd>
                                            <dd className="review" data-review={item.review}></dd>
                                        </dl>
                                        <p className="like">
                                            <button type="button"></button>
                                        </p>
                                    </figcaption>
                                </figure>    
                            </li>    
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Product;