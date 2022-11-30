import { useState } from 'react'
import { useRouter } from 'next/router'
import CustomSelect from './CustomSelect'
import styles from './styles'

const ProductCategory = ({ categoryList, query, setQuery, totalProduct }) => {
  const [isSelect, setIsSelect] = useState(false)
  const router = useRouter()
  const handleChangeCate = () => {
    router.replace({
      pathname: '/products',
      query: {
        ...query,
        page: 1,
        limit: 12,
        categoryName: '',
      },
    })
    setQuery({ ...query, page: 1, limit: 12, categoryName: '' })
  }

  return (
    <div className="product-categories-container">
      <div className="product-categories-content">
        <h5>Product Category</h5>
        <span className="selection-container">
          <span className="selection-content select-selection--single">
            {query.categoryName ? (
              <>
                <span className="selection-rendered">{`${query.categoryName} (${
                  categoryList.find((e) => e.name == query.categoryName).quantity
                })`}</span>
                <span className="selection-content-clear" onClick={handleChangeCate}>
                  x
                </span>
              </>
            ) : (
              <span className="selection-rendered">{`All categories (${totalProduct})`}</span>
            )}

            <span className="selection-content-arrow" role="presentation" onClick={() => setIsSelect(!isSelect)}>
              <b role="presentation"></b>
            </span>
          </span>
        </span>

        {isSelect && (
          <CustomSelect categoryList={categoryList} query={query} setQuery={setQuery} totalProduct={totalProduct} />
        )}
      </div>
      <style jsx>{styles}</style>
    </div>
  )
}

export default ProductCategory
