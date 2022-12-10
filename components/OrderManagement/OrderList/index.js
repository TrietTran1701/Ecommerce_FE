import Image from 'next/image'
import Link from 'next/link'
import { LIMIT_PRODUCT_ORDER_LIST, ORDER_STATUS } from 'utils/constant'
import styles from './styles'
import { DeliveryIcon } from 'components/Utils/Icon'

const OrderList = ({ orderList, status, setStatus }) => {
  const shippingColor = {
    5: '#E3503E',
    0: '#F3A638',
    1: '#F3A638',
    2: '#54B7D3',
    3: '#1E91CF',
    4: '#4CB64C',
    // 5: '#E3D4D4',
  }
  const shippingTitle = {
    5: 'Cancelled',
    0: 'Waiting for confirmed',
    1: 'Waiting for confirmed',
    2: 'Waiting for picking',
    3: 'Delivering',
    4: 'Complete',
  }

  return (
    <div className="wrapper">
      <div className="nav-container">
        {Object.entries(ORDER_STATUS).map(([key, value]) => {
          value = value == 1 ? 0 : value
          return (
            <div
              className={`status-container ${value == status ? 'active' : ''}`}
              key={key}
              onClick={() => {
                setStatus(value)
              }}
            >
              <p className="status">{key}</p>
            </div>
          )
        })}
      </div>
      {/* <div className="search-container">
        <div className="search-icon">
          <Image src="/search-icon.svg" width={16} height={16} alt="search icon" />
        </div>
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search by OrderID"
        />
        <div className="search-button">Search</div>
      </div> */}
      <div className="order-container">
        {orderList.map((order) => {
          return (
            <div className="card" key={order.id}>
              <div className="top">
                <div className="status">
                  <DeliveryIcon
                    width={20}
                    height={20}
                    stroke={shippingColor[order.status]}
                    fill={shippingColor[order.status]}
                  />
                  <p style={{ color: shippingColor[order.status] }}>{shippingTitle[order.status]}</p>
                  {/* <div className="column-divider"></div>
                  <p style={{ color: '#DD583B' }}>DELIVERED</p> */}
                </div>
                <div className="divider"></div>
                <div className="product-container">
                  {order.products.map((product, idx) => {
                    if (idx + 1 > LIMIT_PRODUCT_ORDER_LIST) return <div key={idx}></div>
                    return (
                      <div key={product.id} className="product">
                        <div className="info-container">
                          <div className="image">
                            <Image
                              src={product.images.length ? product.images[0] : '/images/no-image.png'}
                              width={104}
                              height={104}
                              alt="Product Image"
                            />
                          </div>
                          <div className="info">
                            <p>{product.name}</p>
                            <p>x{product.quantity}</p>
                          </div>
                        </div>
                        <div className="cost">
                          <p>{product.price} $</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
              <div className="divider"></div>
              <div className="bottom">
                <div className="total-cost">
                  <p style={{ fontWeight: 700, fontSize: 16 }}>
                    Total: <span style={{ color: '#dd583b' }}>{order.totalCost + order.deliver.fee} $</span>
                  </p>
                </div>
                <Link href={`/order-management/${order._id}`}>
                  <a>View detail</a>
                </Link>
              </div>
            </div>
          )
        })}
      </div>
      <style jsx>{styles}</style>
    </div>
  )
}

export default OrderList
