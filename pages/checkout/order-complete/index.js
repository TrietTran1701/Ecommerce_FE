import { useState, useEffect } from 'react'
import Cart from 'components/Cart/OrderComplete'
import { useRouter } from 'next/router'
import Cookies from 'js-cookie'

const OrderComplete = ({ isPaid }) => {
  const router = useRouter()
  const [cartSlice, setCartSlice] = useState('')

  useEffect(() => {
    Cookies.set('isPaid', isPaid)
    const completeOrder = localStorage.getItem('completeOrder')
    setCartSlice(JSON.parse(completeOrder))

    return () => {
      setCartSlice('')
    }
  }, [])

  if (router.isFallback) {
    return <h1>Loading ...</h1>
  }

  if (!cartSlice) return <h1>Loading ...</h1>
  else {
    return <Cart cartSlice={cartSlice} />
  }
}

export async function getServerSideProps(context) {
  const query = context.query
  return {
    props: {
      isPaid: query && Object.entries(query).length ? 1 : 0,
    },
  }
}

export default OrderComplete
