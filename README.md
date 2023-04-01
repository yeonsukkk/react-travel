# 여행 사이트
여행 상품 목록과 관심 버튼 클릭 시 여행 상품이 장바구니로 이동하게끔 구현된 사이트<br />
[사이트방문](http://ys-react-travel2.s3-website.ap-northeast-2.amazonaws.com/)
## 목차
1. [언어&#x0026;툴](#언어&툴)
2. [스토리보드](#스토리보드)
3. [구조](#구조)
4. [페이지](#페이지)
5. [기능설명](#기능설명)

<br />

### 💡언어&#x0026;툴
<img src="https://img.shields.io/badge/HTML5-E34F26?style=E34F26&logo=HTML5&logoColor=fff"/> <img src="https://img.shields.io/badge/CSS3-1572B6?style=1572B6&logo=CSS3&logoColor=fff"/> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=F7DF1E&logo=JavaScript&logoColor=333"/> <img src="https://img.shields.io/badge/Node.js-339933?style=339933&logo=Node.js&logoColor=fff"/> <img src="https://img.shields.io/badge/npm-CB3837?style=CB3837&logo=npm&logoColor=fff"/> <img src="https://img.shields.io/badge/React-61DAFB?style=61DAFB&logo=React&logoColor=fff"/> <img src="https://img.shields.io/badge/Redux-764ABC?style=764ABC&logo=Redux&logoColor=fff"/>
<br />
<br />

### 💡스토리보드
[스토리보드](https://www.figma.com/file/RqsSkB3KWHsYogsMbICpse/%EB%A6%AC%EC%95%A1%ED%8A%B8%ED%8F%AC%ED%8A%B8%ED%8F%B4%EB%A6%AC%EC%98%A41-%EC%97%AC%ED%96%89%EC%83%81%ED%92%88%EC%82%AC%EC%9D%B4%ED%8A%B8?node-id=0-1&t=07KLDKB0D2u0bcnm-0)
<img src="https://img.shields.io/badge/figma-F24E1E?style=000000&logo=figma&logoColor=fff"/>
<br />
<br />

### 💡구조
```
react-portfolio1_travel
├─ public
│  ├─ data.json
│  ├─ favicon.ico
│  ├─ index.html
│  └─ mainBanner.json
└─ src
   ├─ api
   │  └─ api.js
   ├─ App.js
   ├─ components
   │  ├─ BtnLike.js
   │  ├─ Cart.css
   │  ├─ Cart.js
   │  ├─ Footer.js
   │  ├─ Home.js
   │  ├─ MainBanner.js
   │  ├─ Navbar.js
   │  ├─ Product.css
   │  └─ Product.js
   ├─ data.json
   ├─ img
   │  ├─ bg
   │  │  ├─ bg_phone.png
   │  │  ├─ bg_phone1.png
   │  │  └─ bg_web.jpg
   │  └─ icon
   │     ├─ icon_like.png
   │     ├─ icon_review.png
   │     ├─ icon_review_after.png
   │     └─ icon_review_before.png
   ├─ index.css
   ├─ index.js
   ├─ Main.js
   ├─ media.css
   ├─ redux
   │  ├─ cart.js
   │  ├─ list.js
   │  └─ store.js
   ├─ setupTests.js
   └─ Side.js

```

### 💡페이지
  1. 홈
  2. 장바구니
<br />

### 💡기능설명
  1. 홈<br />
  *pages : src>components>Home.js*<br />
  *component : src>components>Product.js / src>components>BtnLike.js*<br />
    <img src="https://ys-react-travel2.s3.ap-northeast-2.amazonaws.com/git/home1.png" alt="홈 이미지1" width="300" style="vertical-align: top" />
    <img src="https://ys-react-travel2.s3.ap-northeast-2.amazonaws.com/git/home2.png" alt="홈 이미지2" width="150" />
    
      - 데이터
        - Redux(createAsyncThunk(), useDispatch(), useEffect())를 사용하여 데이터 가져옴<br />
          *src>redux>cart.js*
      <br /><br />
      - 레이아웃
        - 메인 비주얼 영역
          - Swiper 이용하여 가져온 데이터로 슬라이드 구현
      <br /><br />
        - 여행상품 목록
          - 옵션
            - 옵션 목록 : 등록순, 카테고리순, 가격순, 리뷰순, 할인율순, 제목순
            - 옵션에 따라 sort()를 이용하여 여행상품 목록 재정렬
          - 리스트
            - props를 이용하여 *src/components>Product.js* 로 데이터 넘겨 받음
            - 할인이 있는 경우 : 할인 계산 후 할인된 금액 출력
            - 리뷰 단위 : 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5<br />
              css를 이용해서 레이아웃을 ★로 표기함
            - 관심버튼 클릭 시<br />
              redux(useSelector(), useDispatch())<br />
              *src>redux>cart.js* 의 reducers>addToCart()에 따라 변수인 cart에 담긴 후 장바구니 페이지에 노출<br />
              클릭 시 ♡ ↔ ♥ 로 아이콘 변경<br />
              우측 상단의 카트에 담긴 개수 표기            
<br />
<br />

  2. 장바구니<br/>
    *pages : src>components>Cart.js* <br />
    *redux : src>redux>cart.js*<br />
    <img src="https://ys-react-travel2.s3.ap-northeast-2.amazonaws.com/git/cart1.png" alt="카트 이미지1" width="300" style="vertical-align: top" />
    <img src="https://ys-react-travel2.s3.ap-northeast-2.amazonaws.com/git/cart2.png" alt="카트 이미지2" width="150" />

      - 데이터
        - Redux(useDispatch(), useEffect())를 사용하여 데이터 가져옴<br />
        <br />
      - 레이아웃(관심 여행상품 목록)
        - 관심 여행상품 목록이 없을 경우<br />
          "상품을 담아주세요!" 노출
        - 관심 여행상품 목록이 있을 경우<br />
          - 삭제버튼 : removeFromCart()을 이용하여 해당 여행상품 삭제 함수 구현
          - 전체삭제버튼 : removeFromCart()을 이용하여 여행상품 전체 삭제 함수 구현
          - 삭제버튼 클릭 시 관심버튼 ♥ → ♡ 로 아이콘 변경
          
        
