import React, { useContext, memo } from 'react'
import LayoutComponent from '../../components/Shared/LayoutComponent/LayoutComponent'
import FeaturedComponent from '../../components/Shared/FeaturedProduct/FeaturedProduct'
import { ProductsContext } from '../../context/products-context'
import './Shop.styles.scss'

const Shop = () => {
    const { products } = useContext(ProductsContext);
    const allProducts = products.map(product => (
        <FeaturedComponent {...product} key={product.id} />
    ))
    return (
        <LayoutComponent>
            <div className='product-list-container'>
                <h2 className='product-list-title'>Shop</h2>
                <div className='product-list'>
                    {allProducts}
                </div>
            </div>
        </LayoutComponent>
    )
}


export default memo(Shop)
