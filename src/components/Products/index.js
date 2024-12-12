import { Component } from "react";
import ProductItem from '../ProductItem'
import './index.css'

class Products extends Component {

    state = { productsList: [], isLoading: false, apiStatus: '', selectedFilter: 'HIGH_TO_LOW', categoryFilter: "ALL", showFilter: true }

    componentDidMount() {
        this.getProducts()
    }

    getProducts = async () => {
        this.setState({ isLoading: true })
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json()
        if (response.ok === true) {
            this.setState({ productsList: data, isLoading: false })
        } else {
            this.setState({ apiStatus: 'FAILURE' }, this.renderFailureView())
        }
    }

    renderFailureView = () => {
        return (
            <h1 className="error-message">Something went wrong, Please check your internet connection</h1>
        )
    }

    onChangeSelectedItem = (event) => {
        this.setState({ selectedFilter: event.target.value })
    }

    onChangecategoryFilter = (event) => {
        this.setState({ categoryFilter: event.target.value })
    }

    showHideFilters = () => {
        this.setState((prevState) => ({ showFilter: !prevState.showFilter }))
    }

    renderSuccessView = () => {
        const { productsList, isLoading, selectedFilter, categoryFilter, showFilter } = this.state
        const filteredProducts = selectedFilter === 'LOW_TO_HIGH' ?
            productsList.sort((a, b) => a.price - b.price) : productsList.sort((a, b) => b.price - a.price)
        const categoryFilteredProducts = categoryFilter !== 'ALL' ?
            filteredProducts.filter((item) => item.category === categoryFilter) : filteredProducts
        return (
            <div className="main-div">
                <hr />
                <span>
                    <span className="products-length">{categoryFilteredProducts.length} ITEMS</span>
                    <button className='show-hide-button' onClick={this.showHideFilters} > {showFilter ? 'Hide Filter' : 'Show Filter'}</button>
                    <div className="product-header-filter" >
                        <select id="selectedFilter" value={selectedFilter} onChange={this.onChangeSelectedItem} >
                            <option value="HIGH_TO_LOW">Price: HIGH to LOW</option>
                            <option value="LOW_TO_HIGH">Price: LOW to HIGH</option>
                        </select>
                    </div>
                </span>
                <hr />
                {showFilter &&
                    <div className="filters">
                        <b>Category :</b>
                        <select value={categoryFilter} id="categoryFilter" onChange={this.onChangecategoryFilter}>
                            <option value="ALL">ALL</option>
                            <option value="women's clothing">Women's clothing</option>
                            <option value="jewelery">Jewelery</option>
                            <option value="men's clothing">Men's clothing</option>
                            <option value="electronics">electronics</option>

                        </select>
                    </div>
                }
                <div className="products">
                    {isLoading === true ? <p className="loading-text">Loading your data...</p> :
                        <ul>
                            {categoryFilteredProducts.map((item) =>
                                <ProductItem product={item} key={item.id} showFilter={showFilter} />
                            )}
                        </ul>
                    }

                </div>
            </div>
        )
    }

    render() {
        const { apiStatus } = this.state
        return (
            <div>
                {apiStatus === 'FAILURE' ? this.renderFailureView() : this.renderSuccessView()}
            </div>
        )

    }
}

export default Products