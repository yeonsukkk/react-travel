import { FiArrowDown } from 'react-icons/fi';
import BtnLike from "./BtnLike";

import './Product.css'

const Product = ({data, category}) => {

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
                                            <dd className="review" data-review={item.review}>
                                                <span></span>
                                                <i>&#40;{item.review}&#41;</i>
                                            </dd>
                                        </dl>
                                        <p className="like">
                                            <BtnLike id={item.id} />
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