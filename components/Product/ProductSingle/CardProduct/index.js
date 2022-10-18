/* eslint-disable @next/next/no-img-element */
import styles from './styles'
import ProductModel from 'components/Product/ProductSingle/ProductModel'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { formatVNprice } from 'utils/function'
import { IMAGE_QUALITY, POPUP_STATE_CLOSE } from 'utils/constant'

const CardProduct = ({ productSingleData }) => {
  const [PopupState, setPopupState] = useState(POPUP_STATE_CLOSE)
  const [productIdx, setProductIdx] = useState(0)

  const salePrice = '100,000'
  const isSale = false

  return (
    <>
      {productSingleData.similarProducts.map((product, index) => {
        return (
          <div className="card-wrapper" key={index}>
            <div className="card">
              <div className="card-img-top">
                <div className="post-image">
                  <Image
                    src={product.images.length !== 0 ? product.images[0].storageUrl : '/images/no-image.png'}
                    alt="Hình ảnh sản phẩm"
                    width={IMAGE_QUALITY.MED}
                    height={IMAGE_QUALITY.MED}
                  />
                  <div className="visual-layer"></div>
                  <div className="icon-product">
                    <button className="btn">
                      <Image src="/images/Product/lock.png" alt="lock icon" width={20} height={20} />
                    </button>
                    <button
                      className="btn click-view"
                      onClick={() => {
                        setProductIdx(index)
                        setPopupState(1)
                      }}
                    >
                      <Image src="/images/Product/search.png" alt="search icon" width={20} height={20} />
                    </button>
                    <button className="btn">
                      <Image src="/images/Product/heart.png" alt="heart icon" width={20} height={20} />
                    </button>
                  </div>
                </div>
                <p className={isSale ? 'sale' : 'new'}>{isSale ? 'Sale' : 'New'}</p>
              </div>
              <div className="card-body">
                <p className="card-title">
                  <Link href="#">
                    <a>{product.categories[0].name}</a>
                  </Link>
                </p>
                <p className="product-title">
                  <Link href={`/products/${product.id}`}>
                    <a>{product.name}</a>
                  </Link>
                </p>
                <p className="price">
                  {isSale ? (
                    <span className="off">{formatVNprice(product.price)}đ</span>
                  ) : (
                    `${formatVNprice(product.price)}đ`
                  )}
                  {isSale ? <span>{formatVNprice(salePrice)}đ</span> : null}
                </p>
              </div>
            </div>
          </div>
        )
      })}
      {PopupState !== POPUP_STATE_CLOSE ? (
        <ProductModel setPopupState={setPopupState} productSingleData={productSingleData.similarProducts[productIdx]} />
      ) : null}
      <style jsx>{styles}</style>
    </>
  )
}

export default CardProduct
