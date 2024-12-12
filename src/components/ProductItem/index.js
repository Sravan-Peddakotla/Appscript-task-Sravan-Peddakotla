import { Component } from "react";
import './index.css'

class ProductItem extends Component {
    render() {
        const {product, showFilter} = this.props
        const {image, title, category, price} = product
        const stylesApply = showFilter ? 'product-item-with-filter' : 'product-item-without-filter'
        return (
            <div className={stylesApply} >
                <img className="image" src={image} alt={title} />
                <h4>{title}</h4>
                <p>{category}</p>
                <p>Rs. {price}</p>
                <p>
                    <button type="button">Sign Up</button> to place a order
                </p>
            </div>
        )
    }
}

export default ProductItem