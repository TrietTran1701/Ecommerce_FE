import Link from 'next/link'
import Image from 'next/image'
import styles from './styles'
import { useRouter } from 'next/router'

const Products = ({ productListData, query, setQuery, status, totalStatus }) => {
  const router = useRouter()

  const handleChangePage = (page) => {
    router.replace({
      pathname: '/products',
      query: {
        ...query,
        page,
      },
    })
    setQuery({
      ...query,
      page,
    })
  }

  const handleChangeOrder = (e) => {
    const sort = e.target.value
    router.replace({
      pathname: '/products',
      query: {
        ...query,
        page: 1,
        limit: 12,
        sort,
      },
    })
    setQuery({
      ...query,
      page: 1,
      limit: 12,
      sort,
    })
  }

  return (
    <div className="elementor-column">
      <div className="elementor-column-wrapper">
        <div className="woocommerce">
          <p className="woocommerce-result-count">{`Show ${(status.page - 1) * 12 + 1} - ${
            (status.page - 1) * 12 + status.count
          } of ${totalStatus.count} products`}</p>
          <div className="woocommerce-ordering" action="">
            <select name="orderby" className="select-order" onChange={handleChangeOrder}>
              <option value="">Default order</option>
              <option value="asc">Price order from Low to High</option>
              <option value="desc">Price order from High to Low</option>
            </select>
          </div>
          <ul className="products">
            {productListData?.map((product, idx) => (
              <li className="product" key={idx}>
                <div className="product-img">
                  <Image
                    src={product.images && product.images.length ? product.images[0] : '/no-image.png'}
                    alt={`Images of ${product.name}`}
                    width={900}
                    height={900}
                  />
                </div>
                <div className="product-detail">
                  <span className="product-category">{product.categoryName}</span>
                  <Link href={`/products/${product._id}`} passHref>
                    <a className="product-link">
                      <h2>{product.name}</h2>
                    </a>
                  </Link>
                  <span className="price">{`${product.price} $`}</span>
                </div>
              </li>
            ))}
          </ul>
          <div className="woocommerce-pagination">
            <ul>
              {[...Array(totalStatus.totalPage).keys()].map((ele, idx) => (
                <li
                  className="page-number"
                  key={idx}
                  onClick={() => {
                    handleChangePage(ele + 1)
                  }}
                >
                  <span>{ele + 1}</span>
                </li>
              ))}
              <li
                className="page-number"
                key={totalStatus.totalPage}
                onClick={() => {
                  if (status.page >= totalStatus.totalPage) return
                  handleChangePage(status.page + 1)
                }}
              >
                <span>→</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <style jsx>{styles}</style>
    </div>
  )
}

export default Products
