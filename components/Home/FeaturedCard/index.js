import styles from './styles'
import Image from 'next/image'
import Link from 'next/link'

const FeaturedCard = ({ trendingProducts }) => {
  return (
    <div className="elementor-column">
      <div className="elementor-column-wrapper">
        <div className="woocommerce">
          <ul className="products">
            {trendingProducts.map((product) => (
              <li className="product-wrapper" key={product._id}>
                <div className="product">
                  <div className="product-img">
                    <Image
                      src={product.images.length ? product.images[0] : '/no-image.png'}
                      alt="product image"
                      width={900}
                      height={900}
                      objectFit="cover"
                    />
                  </div>
                  <div className="product-detail">
                    <span className="product-category">{product.categoryName}</span>
                    <Link href={`/products/${product._id}`} passHref>
                      <a className="product-link">
                        <h2>{product.name}</h2>
                      </a>
                    </Link>

                    <span className="price">{product.price} $</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <style jsx>{styles}</style>
    </div>
  )
}

export default FeaturedCard
