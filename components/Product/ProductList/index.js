import { useState } from 'react'
import ProductCategory from './ProductCategory'
import FilterPrice from './ProductCategory/FilterPrice'
import Products from './Products'
import styles from './styles'

const ProductList = ({ productListData, categoryList, status, totalStatus, totalProductStatus }) => {
  const [query, setQuery] = useState({
    page: 1,
    limit: 12,
    sort: status.sort,
    categoryName: status.categoryName,
  })

  return (
    <div className="elementor-container">
      <div className="elementor-row">
        <div className="elementor-row-left">
          <div className="elementor-column-wrap">
            <div className="elementor-widget-wrap">
              <FilterPrice
                minPrice={totalProductStatus.minPrice}
                maxPrice={totalProductStatus.maxPrice}
                query={query}
                currPrice={[status.minPrice, status.maxPrice]}
              />
              <ProductCategory
                categoryList={categoryList}
                query={query}
                setQuery={setQuery}
                totalProduct={totalProductStatus.count}
              />
            </div>
          </div>
        </div>
        <div className="elementor-row-right">
          <Products
            productListData={productListData}
            query={query}
            setQuery={setQuery}
            status={status}
            totalStatus={totalStatus}
          />
        </div>
      </div>
      <style jsx>{styles}</style>
    </div>
  )
}

export default ProductList
