import { useState, useEffect } from 'react'
import OrderManagement from 'components/OrderManagement'
import { ORDER_TYPE } from 'utils/constant'
import { useSelector } from 'react-redux'
import { getOrder } from 'utils/api'

const OrderManagementPage = () => {
  const [orderList, setOrderList] = useState([])
  const [status, setStatus] = useState(-1)
  const userSlice = useSelector((state) => state.user)

  useEffect(() => {
    const fetchData = async () => {
      const orderList = await getOrder({ userId: userSlice.id, status: status }).then(({ data }) => data.listRoom.data)

      setOrderList(orderList)
    }
    fetchData()
    return () => {
      // setOrderList([])
    }
  }, [status])

  // if (!orderList) {
  //   return <h1>Loading ...</h1>
  // }

  return <OrderManagement orderType={ORDER_TYPE.LIST} orderList={orderList} status={status} setStatus={setStatus} />
}

export default OrderManagementPage
