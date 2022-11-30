import { useState, useEffect } from 'react'
import OrderManagement from 'components/OrderManagement'
import { useSelector } from 'react-redux'
import { ORDER_TYPE } from 'utils/constant'
import { getOrderDetail } from 'utils/api'

export default function OrderDetailPage({ orderId }) {
  const [orderDetail, setOrderDetail] = useState(null)
  const userSlice = useSelector((state) => state.user)

  useEffect(() => {
    const fetchData = async () => {
      const orderData = await getOrderDetail({ userId: userSlice.id, orderId }).then(({ data }) => data)
      console.log(orderData)

      setOrderDetail(orderData)
    }
    fetchData()
    return () => {
      setOrderDetail(null)
    }
  }, [orderId, userSlice.token])

  if (!orderDetail) {
    return <h1>Loading ...</h1>
  }

  return <OrderManagement orderType={ORDER_TYPE.SINGLE} orderDetail={orderDetail} />
}

export async function getServerSideProps(context) {
  try {
    const { orderId } = context.params
    return {
      props: {
        orderId: orderId,
      },
    }
  } catch (e) {
    console.log(e)
    return {
      props: {
        orderId: null,
      },
    }
  }
}
