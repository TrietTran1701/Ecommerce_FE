import { Slider } from '@mui/material'
import { useRouter } from 'next/router'
import { useState } from 'react'
import styles from './styles'

const FilterPrice = ({ minPrice, maxPrice, query, currPrice }) => {
  const [price, setPrice] = useState(currPrice)
  const router = useRouter()

  const handleChangePrice = (event, newPrice) => {
    setPrice([...newPrice])
  }

  return (
    <div className="price-filter-container">
      <div className="price-filter-content">
        <h5>Filter by price</h5>
        <Slider
          value={price}
          onChange={handleChangePrice}
          valueLabelDisplay="auto"
          max={maxPrice}
          min={minPrice}
          onChangeCommitted={(event, newPrice) => {
            router.replace({
              pathname: '/products',
              query: {
                ...query,
                minPrice: newPrice[0],
                maxPrice: newPrice[1],
              },
            })
          }}
        />
        <div className="price-label">
          {'Price: '}
          <span>
            <span className="from" style={{ fontWeight: 700 }}>
              ${price[0]}
            </span>
            {' - '}
            <span className="to" style={{ fontWeight: 700 }}>
              ${price[1]}
            </span>
          </span>
        </div>
      </div>
      <style jsx>{styles}</style>
    </div>
  )
}

export default FilterPrice
