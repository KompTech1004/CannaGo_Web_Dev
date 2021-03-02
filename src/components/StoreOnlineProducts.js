import React from 'react'
import ProductCard from '../components/ProductCard'
import img1 from '../images/product-1.png'
import img2 from '../images/product-2.png'
import img3 from '../images/product-3.png'
import img4 from '../images/product-4.png'
const StoreOnlineProducts = () => {
    
    return (
        <section className="shop-products">
            <div className="store-container scrollable" id="products">
                <div className="products-cont">
                    <ProductCard img={img1} name="Just CBD Gummies" price={24.99} />
                    <ProductCard img={img2} name="CBD Flower" price={40.00} />
                    <ProductCard img={img3} name="CBD Wax 10 ML" price={15.00} />
                    <ProductCard img={img4} name="CBD Wax" price={12.55} />
                    <ProductCard img={img1} name="Just CBD Gummies" price={24.99} />
                    <ProductCard img={img2} name="CBD Flower" price={40.00} />
                    <ProductCard img={img3} name="CBD Wax 10 ML" price={15.00} />
                    <ProductCard img={img4} name="CBD Wax" price={12.55} />
                    <ProductCard img={img1} name="Just CBD Gummies" price={24.99} />
                    <ProductCard img={img2} name="CBD Flower" price={40.00} />
                    <ProductCard img={img3} name="CBD Wax 10 ML" price={15.00} />
                    <ProductCard img={img4} name="CBD Wax" price={12.55} />
                    <ProductCard img={img1} name="Just CBD Gummies" price={24.99} />
                    <ProductCard img={img2} name="CBD Flower" price={40.00} />
                    <ProductCard img={img3} name="CBD Wax 10 ML" price={15.00} />
                    <ProductCard img={img4} name="CBD Wax" price={12.55} />
                </div>

            </div>
        </section>
    )
}
export default StoreOnlineProducts;