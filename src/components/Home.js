import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllProduct } from '../redux/list';
import MainBanner from './MainBanner'
import Product from './Product';

import { category } from '../api/api';

const Home = () => {
    let state = useSelector(state => state)
    let {data} = state.productData
    let dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchAllProduct())
    }, [dispatch])

    const [sort, setSort] = useState('id') // 정렬순 바꾸기

    // ↓ slice해주는 이유: 명확하게 말하면 문제는 순전히 어레이가 정지된 것이 아닙니다. 고정된 배열은 반복될 수 있습니다. 문제는 Array.sort배열을 제자리에서 정렬한다는 것입니다. 즉, 배열을 변경하려고 시도한다는 의미입니다. 그렇기 때문에 배열의 변경 가능한 복사본을 전달해야 합니다.
    let sortData = data.slice().sort((a,b) => {
        if(sort === 'discount' || sort === 'review'){ // 내림차순
            return(
                a[sort] < b[sort] ? 1 : -1
            )
        }else { // 올림차순
            return(
                (sort === 'title') ? (a[sort].toLowerCase() < b[sort].toLowerCase() ? -1 : 1) : (a[sort] < b[sort] ? -1 : 1)
            )
        }
    })

    return(
        <>
            <MainBanner />
            <div className="productList">
                <div className="topBox">
                    <h3>여행지 리스트</h3>
                    <select
                        onChange={e => setSort(e.target.value)}
                    >
                        <option value="id">등록순</option>
                        <option value="category">카테고리순</option>
                        <option value="price">가격순</option>
                        <option value="review">리뷰순</option>
                        <option value="discount">할인율순</option>
                        <option value="title">제목순</option>
                    </select>
                </div>
                <Product data={sortData} category={category} />
            </div>
        </>
    )
}

export default Home;